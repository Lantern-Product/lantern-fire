"use client";

import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { motion } from "motion/react";
import {
  PaletteIcon,
  BlocksIcon,
  PackageIcon,
  SparklesIcon,
  TypeIcon,
  Code2Icon,
} from "lucide-react";
import { Button } from "@lantern-product/ui";
import { version as uiVersion } from "@lantern-product/ui/package.json";
import AuroraBlur from "../react-bits/aurora-blur";

// Hero brand palette. These are intentionally hard-coded in this component
// (not promoted to global tokens) — they're a hero-local atmosphere, not part
// of the design system. AuroraBlur takes 4 aurora layers + 2 sky layers; we
// map the 5 brand colors across them, reusing coral once on a low-intensity
// 4th layer so we don't waste the slot.
//
// `brown` anchors the top of the canvas via AuroraBlur's `topColor` prop, and
// also doubles as the bottom-sky color in dark mode (replacing `cream`, which
// is light-mode only). It approximates Lantern's darkest brown token
// (light-mode --foreground `oklch(0.22 0.05 65)` and dark-mode --background
// `oklch(0.18 0.03 55)`) in sRGB so the upper "atmosphere" reads as deep
// brand brown instead of pure black.
const HERO_PALETTE = {
  cream: "#f5e69a",
  teal: "#2f5560",
  coral: "#d97766",
  dusty: "#c98a7a",
  sage: "#a8b890",
  brown: "#2a1a0a",
} as const;

// Coral as RGB-0..1 — kept in sync with HERO_PALETTE.coral so the glow bar
// shader, the particles, and AuroraBlur all agree on what "brand warm" looks
// like.
const CORAL_RGB = "vec3(0.851, 0.467, 0.4)";

const glowVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const glowFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float centerDist = abs(vUv.x - 0.5) * 2.0;

    float coreGlow = exp(-centerDist * 180.0) * 2.5;
    float midGlow = exp(-centerDist * 66.0) * 1.2;
    float outerGlow = exp(-centerDist * 6.0) * 0.5;
    float glow = coreGlow + midGlow + outerGlow;

    float pulse = sin(uTime * 1.5) * 0.08 + 0.92;
    glow *= pulse;

    float scanLine = sin(vUv.y * 60.0 + uTime * 2.0) * 0.02 + 0.98;
    glow *= scanLine;

    vec3 glowColor = ${CORAL_RGB};

    float edgeDist = abs(vUv.y - 0.5) * 2.0;
    float vertFade = 1.0 - smoothstep(0.2, 0.95, edgeDist);
    glow *= vertFade;

    vec3 colorOut = glowColor * glow;
    float alpha = max(max(colorOut.r, colorOut.g), colorOut.b);
    vec3 normalizedColor = colorOut / max(alpha, 0.001);
    alpha = smoothstep(0.0, 1.0, alpha);

    gl_FragColor = vec4(normalizedColor, alpha);
  }
`;

const backgroundGlowFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float centerDist = abs(vUv.x - 0.5) * 2.0;

    float wideGlow = exp(-centerDist * 3.0) * 0.8;
    float softGlow = exp(-centerDist * 1.0) * 0.4;
    float glow = wideGlow + softGlow;

    float pulse = sin(uTime * 1.2) * 0.1 + 0.9;
    glow *= pulse;

    vec3 glowColor = ${CORAL_RGB};

    float edgeDistY = abs(vUv.y - 0.5) * 2.0;
    float vertFade = 1.0 - smoothstep(0.0, 1.0, edgeDistY);
    glow *= vertFade;

    float edgeDistX = abs(vUv.x - 0.5) * 2.0;
    float horizFade = 1.0 - smoothstep(0.4, 0.9, edgeDistX);
    glow *= horizFade;

    vec3 colorOut = glowColor * glow;
    float alpha = max(max(colorOut.r, colorOut.g), colorOut.b);
    vec3 normalizedColor = colorOut / max(alpha, 0.001);
    alpha = smoothstep(0.0, 1.0, alpha) * 0.6;

    gl_FragColor = vec4(normalizedColor, alpha);
  }
`;

function ResizeHandler(): null {
  const state = useThree();
  const glRef = useRef(state.gl);
  const cameraRef = useRef(state.camera);

  useEffect(
    function syncRefs() {
      glRef.current = state.gl;
      cameraRef.current = state.camera;
    },
    [state.gl, state.camera],
  );

  useEffect(
    function handleResize() {
      const canvas = state.gl.domElement;
      const parent = canvas.parentElement;
      if (!parent) return;

      const parentEl = parent;

      function updateSize() {
        const currentGl = glRef.current;
        const currentCamera = cameraRef.current;
        if (!currentGl || !currentCamera) return;

        const width = parentEl.clientWidth;
        const height = parentEl.clientHeight;
        if (width > 0 && height > 0) {
          currentGl.setSize(width, height);
          if (currentCamera instanceof THREE.PerspectiveCamera) {
            currentCamera.aspect = width / height;
            currentCamera.updateProjectionMatrix();
          }
        }
      }

      updateSize();

      const observer = new ResizeObserver(updateSize);
      observer.observe(parent);

      const interval = setInterval(updateSize, 500);
      setTimeout(updateSize, 100);
      setTimeout(updateSize, 300);
      setTimeout(updateSize, 1000);

      return function cleanup() {
        observer.disconnect();
        clearInterval(interval);
      };
    },
    [state.gl],
  );

  return null;
}

function ResponsiveGlowBar() {
  const { viewport } = useThree();

  const baseViewportWidth = 7.5;
  const scaleX = Math.min(viewport.width / baseViewportWidth, 1);

  return (
    <group scale={[scaleX, 1, 1]}>
      <GlowBar />
    </group>
  );
}

function GlowBar() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const bgMaterialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  const bgUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    if (bgMaterialRef.current) {
      bgMaterialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <group position={[0, 0, 2]}>
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[4.0, 2.2]} />
        <shaderMaterial
          ref={bgMaterialRef}
          vertexShader={glowVertexShader}
          fragmentShader={backgroundGlowFragmentShader}
          uniforms={bgUniforms}
          transparent
          depthWrite={false}
        />
      </mesh>

      <mesh>
        <planeGeometry args={[0.7, 1.4]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={glowVertexShader}
          fragmentShader={glowFragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </mesh>
      <GlowParticles />
    </group>
  );
}

function GlowParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 40;
  const fadeDistance = 1.0;

  const velocitiesRef = useRef<Float32Array>(
    new Float32Array(particleCount * 3),
  );
  const lifetimesRef = useRef<Float32Array>(new Float32Array(particleCount));

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const y = (i / particleCount - 0.5) * 1.2;
      positions[i * 3] = 0;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = (((i * 0.618) % 1.0) - 0.5) * 0.1;
    }

    return positions;
  }, [particleCount]);

  useEffect(() => {
    const velocities = velocitiesRef.current;
    const lifetimes = lifetimesRef.current;

    for (let i = 0; i < particleCount; i++) {
      const direction = i % 2 === 0 ? 1 : -1;
      velocities[i * 3] = direction * (((i * 0.382) % 1.0) * 0.012 + 0.004);
      velocities[i * 3 + 1] = (((i * 0.786) % 1.0) - 0.4) * 0.006;
      velocities[i * 3 + 2] = (((i * 0.214) % 1.0) - 0.5) * 0.003;

      lifetimes[i] = (i * 0.123) % 1.0;
    }
  }, [particleCount]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const opacities = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      opacities[i] = 1.0;
    }
    geo.setAttribute("aOpacity", new THREE.BufferAttribute(opacities, 1));
    return geo;
  }, [positions, particleCount]);

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(HERO_PALETTE.coral) },
        uFadeDistance: { value: fadeDistance },
      },
      vertexShader: `
        attribute float aOpacity;
        varying float vOpacity;
        varying float vDistance;

        void main() {
          vOpacity = aOpacity;
          vDistance = abs(position.x);

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 7.0 * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uFadeDistance;
        varying float vOpacity;
        varying float vDistance;

        void main() {
          float fade = 1.0 - smoothstep(0.0, uFadeDistance, vDistance);

          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          float alpha = 1.0 - smoothstep(0.3, 0.5, dist);

          float finalAlpha = alpha * fade * vOpacity * 1.5;
          gl_FragColor = vec4(uColor * 1.3, finalAlpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, [fadeDistance]);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const positionAttr = particlesRef.current.geometry.attributes.position;
    const opacityAttr = particlesRef.current.geometry.attributes.aOpacity;
    const posArray = positionAttr.array as Float32Array;
    const opacityArray = opacityAttr.array as Float32Array;
    const velocities = velocitiesRef.current;
    const lifetimes = lifetimesRef.current;

    for (let i = 0; i < particleCount; i++) {
      const currentLifetime = lifetimes[i] + 0.012;
      const newLifetime = currentLifetime > 1 ? 0 : currentLifetime;
      lifetimes[i] = newLifetime;

      if (currentLifetime > 1) {
        posArray[i * 3] = 0;
        posArray[i * 3 + 1] =
          (((i + state.clock.elapsedTime * 10) % particleCount) /
            particleCount -
            0.5) *
          1.2;
        posArray[i * 3 + 2] =
          (((i * 0.618 + state.clock.elapsedTime) % 1.0) - 0.5) * 0.1;

        const direction = i % 2 === 0 ? 1 : -1;
        velocities[i * 3] =
          direction *
          ((((i + state.clock.elapsedTime) * 0.382) % 1.0) * 0.012 + 0.004);
        velocities[i * 3 + 1] =
          ((((i + state.clock.elapsedTime) * 0.786) % 1.0) - 0.4) * 0.006;
      }

      posArray[i * 3] += velocities[i * 3];
      posArray[i * 3 + 1] +=
        velocities[i * 3 + 1] +
        Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.0008;
      posArray[i * 3 + 2] += velocities[i * 3 + 2];

      const dist = Math.abs(posArray[i * 3]);
      opacityArray[i] = Math.max(0, 1.0 - dist / fadeDistance);
    }

    positionAttr.needsUpdate = true;
    opacityAttr.needsUpdate = true;
  });

  return (
    <points ref={particlesRef} geometry={geometry} material={shaderMaterial} />
  );
}

// Floating design-system primitives that ornament the area around the glow
// bar. Replaces the original hero-13 dev-tool icons (Terminal/Cloud/etc) with
// icons that mirror the four feature cards further down the marketing page
// (palette, blocks, package, sparkles) plus a couple of typography-leaning
// extras so both sides of the glow have something happening.
function FloatingIcons() {
  const icons = [
    {
      Icon: PaletteIcon,
      x: "10%",
      xMob: "6%",
      y: "20%",
      delay: 0,
    },
    {
      Icon: BlocksIcon,
      x: "22%",
      xMob: "14%",
      y: "55%",
      delay: 0.3,
    },
    {
      Icon: TypeIcon,
      x: "32%",
      xMob: "24%",
      y: "30%",
      delay: 0.5,
    },
    {
      Icon: SparklesIcon,
      x: "68%",
      xMob: "60%",
      y: "25%",
      delay: 0.2,
    },
    {
      Icon: Code2Icon,
      x: "78%",
      xMob: "72%",
      y: "55%",
      delay: 0.4,
    },
    {
      Icon: PackageIcon,
      x: "88%",
      xMob: "82%",
      y: "35%",
      delay: 0.6,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute left-(--x-mob) sm:left-(--x-desk) rounded-2xl border border-white/20 bg-white/15 p-3 shadow-lg backdrop-blur-md sm:p-4 dark:border-white/10 dark:bg-white/10"
          style={
            {
              top: item.y,
              "--x-mob": item.xMob,
              "--x-desk": item.x,
            } as React.CSSProperties
          }
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon className="h-5 w-5 text-white drop-shadow-sm sm:h-6 sm:w-6" />
        </motion.div>
      ))}
    </div>
  );
}

export function Hero13() {
  // Source of truth for theme is the `.dark` class on `<html>` (watched via
  // MutationObserver below), not `useTheme().resolvedTheme`. next-themes
  // updates `resolvedTheme` as soon as `setTheme()` is called, but applies
  // the `.dark` class via its own provider-level useEffect. Child effects
  // fire before parent effects, so reading `resolvedTheme` from this child
  // sees the new value before the DOM class has been updated — i.e. it's
  // inverted from what's actually rendered for one frame on every toggle.
  // We also resolve the dark-mode `--background` token once at runtime by
  // probing through a `<div class="dark">` so the top brown literally
  // matches the dark-mode background token rather than a hardcoded
  // approximation.
  const [isDark, setIsDark] = useState(false);
  const [tokenDarkBrown, setTokenDarkBrown] = useState<string>(
    HERO_PALETTE.brown,
  );
  const [tokenCurrentBg, setTokenCurrentBg] = useState<string>(
    HERO_PALETTE.cream,
  );

  useEffect(() => {
    if (typeof document === "undefined") return;

    const readIsDark = () =>
      document.documentElement.classList.contains("dark");

    // Run any CSS color expression through a canvas pixel readback so we get
    // sRGB regardless of whether the browser serialises the value as
    // oklch/lab/rgb. Returns `null` on failure so callers can keep the
    // previous fallback.
    const resolveCssColorToHex = (cssValue: string): string | null => {
      if (!cssValue) return null;
      const span = document.createElement("span");
      span.style.color = cssValue;
      span.style.position = "absolute";
      span.style.visibility = "hidden";
      document.body.appendChild(span);
      const computedColor = getComputedStyle(span).color;
      span.remove();

      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      try {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 1, 1);
        ctx.fillStyle = computedColor;
        ctx.fillRect(0, 0, 1, 1);
        const d = ctx.getImageData(0, 0, 1, 1).data;
        return (
          "#" +
          [d[0], d[1], d[2]]
            .map((c) => c.toString(16).padStart(2, "0"))
            .join("")
        );
      } catch {
        return null;
      }
    };

    // One-shot: probe `--background` under a `.dark` ancestor so we always
    // have the dark-mode brown for the top anchor regardless of which theme
    // is currently active.
    const probeDiv = document.createElement("div");
    probeDiv.className = "dark";
    probeDiv.style.position = "absolute";
    probeDiv.style.visibility = "hidden";
    document.body.appendChild(probeDiv);
    const darkCssVal = getComputedStyle(probeDiv)
      .getPropertyValue("--background")
      .trim();
    probeDiv.remove();
    const darkHex = resolveCssColorToHex(darkCssVal);
    if (darkHex) setTokenDarkBrown(darkHex);

    // Live: read `--background` from the actual `<html>` so the bottom
    // anchor follows the current theme. Re-evaluated whenever the class
    // list changes (i.e. on every theme toggle).
    const refreshCurrentBg = () => {
      const cssVal = getComputedStyle(document.documentElement)
        .getPropertyValue("--background")
        .trim();
      const hex = resolveCssColorToHex(cssVal);
      if (hex) setTokenCurrentBg(hex);
    };

    setIsDark(readIsDark());
    refreshCurrentBg();

    const observer = new MutationObserver(() => {
      setIsDark(readIsDark());
      refreshCurrentBg();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <AuroraBlur
          width="100%"
          height="100%"
          speed={1.2}
          noiseScale={3.5}
          movementX={-1.5}
          movementY={-2.5}
          verticalFade={0.85}
          bloomIntensity={1.8}
          brightness={0.9}
          saturation={1.05}
          topColor={tokenDarkBrown}
          bottomColor={tokenCurrentBg}
          skyLayers={[
            {
              color: isDark ? tokenDarkBrown : HERO_PALETTE.cream,
              blend: 0.55,
            },
            { color: HERO_PALETTE.teal, blend: 0.55 },
          ]}
          layers={[
            { color: HERO_PALETTE.coral, speed: 0.37, intensity: 0.55 },
            { color: HERO_PALETTE.dusty, speed: 0.2, intensity: 0.4 },
            { color: HERO_PALETTE.sage, speed: 0.15, intensity: 0.45 },
            { color: HERO_PALETTE.coral, speed: 0.07, intensity: 0.18 },
          ]}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-b from-transparent to-background" />

      <div className="relative z-20 mx-auto w-full max-w-[1400px] py-20 md:py-28">
        <div className="relative flex w-full flex-col items-center justify-start">
          <div className="pointer-events-auto relative z-30 mb-12 max-w-3xl px-4 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-white/85 drop-shadow-sm"
            >
              Lantern Fire · Design system
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-heading mb-6 text-4xl font-semibold tracking-tight text-white drop-shadow-md sm:text-6xl md:text-7xl"
            >
              A design system for Lantern products.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg"
            >
              Components, design guidelines, and tooling for Lantern&apos;s
              design system — packaged as @lantern-product/ui.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button asChild size="lg" variant="primary" className="rounded-full">
                <Link href="/components">Browse components</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
              >
                <Link href="/tokens">View tokens</Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 font-mono text-xs text-white/70 drop-shadow-sm"
            >
              v{uiVersion} · @lantern-product/ui on npm
            </motion.p>
          </div>

          <div className="relative mx-auto -mt-20 h-[360px] w-full max-w-5xl sm:-mt-32 sm:h-[460px]">
            <div className="pointer-events-none absolute inset-0 z-20">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ResizeHandler />
                <Suspense fallback={null}>
                  <ResponsiveGlowBar />
                </Suspense>
              </Canvas>
            </div>

            <div className="pointer-events-none absolute inset-0 z-10">
              <FloatingIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
