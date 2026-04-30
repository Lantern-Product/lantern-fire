import fs from "fs";
import path from "path";
import { marked } from "marked";
import { Badge } from "@lantern-product/ui";
import { PageHeader } from "@/components/page-header";

type ReleaseNote = {
  version: string;
  title: string;
  date: string;
  summary: string;
  bodyHtml: string;
};

type ChangelogEntry = {
  version: string;
  html: string;
};

function parseNarratives(): ReleaseNote[] {
  const dir = path.join(process.cwd(), "src/content/releases");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      if (!match) return null;

      const frontmatter = Object.fromEntries(
        match[1].split("\n").map((line) => {
          const [key, ...rest] = line.split(":");
          return [key.trim(), rest.join(":").trim().replace(/^"|"$/g, "")];
        })
      );

      const version = file.replace(/\.md$/, "");
      const bodyHtml = marked.parse(match[2].trim(), { async: false }) as string;

      return {
        version,
        title: frontmatter.title || version,
        date: frontmatter.date || "",
        summary: frontmatter.summary || "",
        bodyHtml,
      };
    })
    .filter(Boolean) as ReleaseNote[];
}

function parseChangelog(): ChangelogEntry[] {
  const file = path.join(process.cwd(), "../../packages/ui/CHANGELOG.md");
  if (!fs.existsSync(file)) return [];

  const raw = fs.readFileSync(file, "utf-8");
  const sections = raw.split(/^## /m).slice(1);

  return sections.map((section) => {
    const [heading, ...body] = section.split("\n");
    const version = heading.trim();
    const html = marked.parse(body.join("\n").trim(), { async: false }) as string;
    return { version, html };
  });
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ReleasesPage() {
  const narratives = parseNarratives();
  const changelog = parseChangelog();

  const narrativeMap = new Map(narratives.map((n) => [n.version, n]));

  const allVersions = [
    ...new Set([
      ...narratives.map((n) => n.version),
      ...changelog.map((c) => c.version),
    ]),
  ].sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

  return (
    <>
      <PageHeader
        title="Release notes"
        description="What shipped in each version of @lantern-product/ui."
      />

      <div className="space-y-12">
        {allVersions.map((version) => {
          const narrative = narrativeMap.get(version);
          const changelogEntry = changelog.find((c) => c.version === version);

          return (
            <article key={version} className="scroll-mt-20" id={`v${version}`}>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h2 className="font-heading text-xl font-semibold tracking-tight">
                  v{version}
                  {narrative?.title ? (
                    <span className="ml-2 font-normal text-muted-foreground">
                      — {narrative.title}
                    </span>
                  ) : null}
                </h2>
                {narrative?.date ? (
                  <Badge variant="secondary">{formatDate(narrative.date)}</Badge>
                ) : null}
              </div>

              {narrative?.summary ? (
                <p className="mb-4 text-sm text-muted-foreground">
                  {narrative.summary}
                </p>
              ) : null}

              {narrative ? (
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: narrative.bodyHtml }}
                />
              ) : null}

              {changelogEntry ? (
                <details
                  className="mt-6 rounded-lg border border-border"
                  open={!narrative}
                >
                  <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
                    Technical changes
                  </summary>
                  <div
                    className="prose border-t border-border px-4 py-4"
                    dangerouslySetInnerHTML={{ __html: changelogEntry.html }}
                  />
                </details>
              ) : null}
            </article>
          );
        })}
      </div>
    </>
  );
}
