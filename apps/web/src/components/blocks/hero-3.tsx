"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@lantern-fire/ui";

type HeroLink = {
  label: string;
  href: string;
};

type Hero3Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  links?: HeroLink[];
};

const defaultLinks: HeroLink[] = [
  { label: "Browse components", href: "/components" },
  { label: "View tokens", href: "/tokens" },
  { label: "Explore elements", href: "/elements" },
];

export function Hero3({
  eyebrow = "Lantern Fire",
  title = (
    <>
      A design system
      <br />
      for Lantern products
    </>
  ),
  ctaLabel = "Get started",
  ctaHref = "/components",
  links = defaultLinks,
}: Hero3Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const uniformMouseRef = useRef<THREE.Vector2 | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      parent.clientWidth / parent.clientHeight,
      0.1,
      100,
    );
    camera.position.z = 10;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
    } catch {
      return;
    }
    renderer.setSize(parent.clientWidth, parent.clientHeight);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));

    const computeMeshSize = () => {
      const fov = camera.fov * (Math.PI / 180);
      const meshHeight = camera.position.z * Math.tan(fov / 2) * 2;
      const meshWidth = meshHeight * camera.aspect;
      return { meshWidth, meshHeight };
    };

    const vertexShader = `
      varying vec2 vUv;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;
        vUv = uv;
      }
    `;

    // Warm Lantern Fire palette: amber/coral primary (oklch ~30 hue) with subtle
    // teal cool-shift from the secondary token. Base + modulator factors tuned to
    // match --primary oklch(0.68 0.21 30) without sampling at runtime so the
    // shader stays GPU-resident.
    const fragmentShader = `
      varying vec2 vUv;
      uniform vec2 uViewportRes;
      uniform float uTime;
      uniform float uRedFactor;
      uniform float uGreenFactor;
      uniform float uBlueFactor;
      uniform vec3 uBaseColor;
      uniform vec2 uMouse;

      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

      float snoise(vec3 v){
        const vec2  C = vec2(1.0/6.0, 1.0/3.0);
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
          i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 1.0/7.0;
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      vec2 coverUvs(vec2 imageRes, vec2 containerRes, vec2 vUv) {
        float imageAspectX = imageRes.x/imageRes.y;
        float imageAspectY = imageRes.y/imageRes.x;

        float containerAspectX = containerRes.x/containerRes.y;
        float containerAspectY = containerRes.y/containerRes.x;

        vec2 ratio = vec2(
          min(containerAspectX / imageAspectX, 1.0),
          min(containerAspectY / imageAspectY, 1.0)
        );

        vec2 newUvs = vec2(
          vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
          vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
        );

        return newUvs;
      }

      void main() {
        vec2 squareUvs = coverUvs(vec2(1.0), uViewportRes, vUv);

        vec2 mouseInfluence = squareUvs - uMouse;
        float mouseDistance = length(mouseInfluence);
        float mouseEffect = smoothstep(0.8, 0.0, mouseDistance) * 0.3;

        float noise1 = snoise(vec3(squareUvs * 2.0 + mouseInfluence * 0.1, uTime * 0.1));
        float noise2 = snoise(vec3(squareUvs * 3.0 - mouseInfluence * 0.15, uTime * 0.08));
        float noise3 = snoise(vec3(squareUvs * 1.5 + mouseInfluence * 0.05, uTime * 0.12));

        float combinedNoise = noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2;

        float waves = sin(combinedNoise * 8.0 + uTime * 0.5 + mouseEffect * 5.0) * 0.5 + 0.5;
        float radialGradient = length(squareUvs - 0.5) * 2.0;

        vec3 finalColor = vec3(
          uBaseColor.r + waves * uRedFactor   * (1.0 - radialGradient * 0.3) + mouseEffect * 0.25,
          uBaseColor.g + waves * uGreenFactor + sin(squareUvs.x * 3.14)      * 0.18 + mouseEffect * 0.15,
          uBaseColor.b + waves * uBlueFactor  + cos(squareUvs.y * 3.14)      * 0.12 + mouseEffect * 0.05
        );

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const mouseUniform = new THREE.Vector2(0.5, 0.5);
    uniformMouseRef.current = mouseUniform;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uViewportRes: {
          value: new THREE.Vector2(parent.clientWidth, parent.clientHeight),
        },
        uBaseColor: { value: new THREE.Vector3(0.42, 0.18, 0.12) },
        uRedFactor: { value: 0.85 },
        uGreenFactor: { value: 0.4 },
        uBlueFactor: { value: 0.18 },
        uMouse: { value: mouseUniform },
      },
    });

    const geometry = new THREE.PlaneGeometry(1, 1);
    const mesh = new THREE.Mesh(geometry, material);
    const initialSize = computeMeshSize();
    mesh.scale.set(initialSize.meshWidth, initialSize.meshHeight, 1);
    scene.add(mesh);

    const timer = new THREE.Timer();

    let animationId: number;
    const animate = () => {
      timer.update();
      material.uniforms.uTime.value = timer.getElapsed();
      material.uniforms.uMouse.value.x = mouseRef.current.x;
      material.uniforms.uMouse.value.y = mouseRef.current.y;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const newWidth = parent.clientWidth;
      const newHeight = parent.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));

      const { meshWidth, meshHeight } = computeMeshSize();
      mesh.scale.set(meshWidth, meshHeight, 1);
      material.uniforms.uViewportRes.value.set(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(parent);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      uniformMouseRef.current = null;
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height;
    mouseRef.current = { x, y };
  };

  return (
    <section
      className="relative w-full min-h-[88vh] overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-[88vh] flex-col overflow-hidden bg-foreground/30 p-[4vmax]">
        <div className="relative w-full flex-1 overflow-hidden">
          <div className="flex justify-between p-[4vmax] text-[max(1rem,1.15vmax)] text-background/95">
            <div className="font-mono uppercase tracking-[0.18em] text-xs leading-tight sm:text-[max(0.78rem,0.95vmax)]">
              {eyebrow}
              <br />
              <span className="opacity-70">Design system</span>
            </div>
            <Button asChild size="sm" variant="secondary" className="h-9 rounded-full px-4">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>

          <div
            className="absolute bottom-0 right-0 hidden h-12 w-12 md:block"
            style={{
              background:
                "radial-gradient(circle at top left, transparent 48px, var(--background) 48px)",
              transform: "translateZ(0)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-12 w-12"
            style={{
              background:
                "radial-gradient(circle at bottom right, transparent 48px, var(--background) 48px)",
              transform: "translateZ(0)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-12 w-12"
            style={{
              background:
                "radial-gradient(circle at bottom left, transparent 48px, var(--background) 48px)",
              transform: "translateZ(0)",
            }}
          />
        </div>

        <div
          className="absolute bottom-[4vmax] left-[4vmax] block h-12 w-12 md:hidden"
          style={{
            background:
              "radial-gradient(circle at top right, transparent 48px, var(--background) 48px)",
            transform: "translateZ(0)",
          }}
        />

        <div className="flex flex-col items-start md:flex-row">
          <h1 className="relative pb-[4vmax] pl-[4vmax] pr-[4vmax] font-heading text-[clamp(2.25rem,7vw,6.5rem)] font-semibold leading-[1.05] tracking-tight text-background/95">
            {title}
            <div
              className="absolute bottom-0 right-0 hidden h-12 w-12 md:block"
              style={{
                background:
                  "radial-gradient(circle at top left, transparent 48px, var(--background) 48px)",
                transform: "translateZ(0)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 hidden h-12 w-12 md:block"
              style={{
                background:
                  "radial-gradient(circle at top right, transparent 48px, var(--background) 48px)",
                transform: "translateZ(0)",
              }}
            />
          </h1>

          <div className="relative flex h-full flex-1 items-end justify-end self-end rounded-tl-[3vmax] bg-background pl-[4vmax] pt-[4vmax] text-[max(0.85rem,1.0vmax)] font-light">
            <ul className="flex flex-col items-end gap-[max(0.6rem,0.7vmax)] opacity-70 transition-opacity duration-300 hover:opacity-100">
              {links.map((link, i) => (
                <motion.li
                  key={link.href + link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group relative flex items-center gap-[max(0.5rem,0.7vmax)] pb-[max(0.1rem,0.2vmax)] text-foreground"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 origin-left bg-foreground transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="h-[max(0.95rem,1.3vmax)] w-[max(0.95rem,1.3vmax)]" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div
              className="absolute bottom-0 left-0 block h-12 w-12 md:hidden"
              style={{
                background:
                  "radial-gradient(circle at top left, transparent 48px, var(--background) 48px)",
                transform: "translateX(-100%) translateZ(0)",
              }}
            />
            <div
              className="absolute right-0 top-0 block h-12 w-12 md:hidden"
              style={{
                background:
                  "radial-gradient(circle at top left, transparent 48px, var(--background) 48px)",
                transform: "translateY(-100%) translateZ(0)",
              }}
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 left-0 top-0">
          <div className="absolute bottom-0 left-0 h-[4vmax] w-full bg-background" />
          <div className="absolute left-0 top-0 h-[4vmax] w-full bg-background" />
          <div className="absolute bottom-0 left-0 h-full w-[4vmax] bg-background" />
          <div className="absolute bottom-0 right-0 h-full w-[4vmax] bg-background" />
        </div>
      </div>
    </section>
  );
}
