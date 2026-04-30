import { PageHeader } from "@/components/page-header";

function Showcase({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="rounded-xl border border-border bg-card p-6 ring-1 ring-foreground/5">
        {children}
      </div>
      <p className="mt-2 font-mono text-[10px] text-muted-foreground">{label}</p>
    </div>
  );
}

export default function TypographyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Foundation"
        title="Typography"
        description="Typographic conventions for headings, paragraphs, lists, blockquotes, and inline text. Body copy renders in DM Sans; headings use Poppins via the font-heading utility."
      />

      <section className="mb-12">
        <h2 className="mb-4 font-heading text-lg font-semibold">Prose specimen</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          The <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-sm">.prose</code>{" "}
          class applies consistent rhythm to a block of rendered markdown — useful for long-form
          documentation or content surfaces.
        </p>
        <article className="prose rounded-xl border border-border bg-card p-8 ring-1 ring-foreground/5">
          <h1>The Fellowship of the Ring</h1>
          <p>
            When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his
            eleventy-first birthday with a party of special magnificence, there was much talk and
            excitement in Hobbiton.
          </p>

          <h2>A Long-expected Party</h2>
          <p>
            Bilbo was very rich and very peculiar, and had been the wonder of the Shire for sixty
            years, ever since his remarkable disappearance and unexpected return. The riches he
            had brought back from his travels had now become a local legend.
          </p>

          <blockquote>
            All that is gold does not glitter, not all those who wander are lost; the old that is
            strong does not wither, deep roots are not reached by the frost.
          </blockquote>

          <h3>The Shadow of the Past</h3>
          <p>
            The Nine Companions chosen to bear the Ring south on its long road were drawn from
            every free people of Middle-earth:
          </p>

          <ul>
            <li>Frodo Baggins, the Ring-bearer</li>
            <li>Samwise Gamgee, his loyal friend</li>
            <li>Meriadoc Brandybuck and Peregrin Took, of the Shire</li>
            <li>Gandalf the Grey, a wizard</li>
            <li>Aragorn son of Arathorn, heir of Isildur</li>
            <li>Boromir of Gondor</li>
            <li>Legolas of the Woodland Realm</li>
            <li>Gimli son of Glóin</li>
          </ul>

          <h4>Riddles in the Dark</h4>
          <p>
            The Three Elven Rings were hidden from Sauron and never used while he held the One.
            Their bearers preserved beauty and memory in the lands they kept:
          </p>

          <table>
            <thead>
              <tr>
                <th>Ring</th>
                <th>Bearer</th>
                <th>Stone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Narya</td>
                <td>Gandalf</td>
                <td>Ruby</td>
              </tr>
              <tr>
                <td>Nenya</td>
                <td>Galadriel</td>
                <td>Adamant</td>
              </tr>
              <tr>
                <td>Vilya</td>
                <td>Elrond</td>
                <td>Sapphire</td>
              </tr>
            </tbody>
          </table>

          <p>
            And the One Ring, forged in secret by Sauron in the fires of Mount Doom, bore the
            inscription: <code>Ash nazg durbatulûk, ash nazg gimbatul</code>.
          </p>
        </article>
      </section>

      <section className="mb-12">
        <h2 className="mb-1 font-heading text-lg font-semibold">Elements</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Standalone Tailwind utility patterns for individual headings, paragraphs, and inline
          text outside of a <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-sm">.prose</code>{" "}
          container.
        </p>

        <div className="space-y-6">
          <Showcase label='<h1 className="font-heading scroll-m-20 text-4xl font-semibold tracking-tight text-balance">'>
            <h1 className="font-heading scroll-m-20 text-4xl font-semibold tracking-tight text-balance">
              The Fellowship of the Ring
            </h1>
          </Showcase>

          <Showcase label='<h2 className="font-heading scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight first:mt-0">'>
            <h2 className="font-heading scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              A Long-expected Party
            </h2>
          </Showcase>

          <Showcase label='<h3 className="font-heading scroll-m-20 text-2xl font-semibold tracking-tight">'>
            <h3 className="font-heading scroll-m-20 text-2xl font-semibold tracking-tight">
              The Shadow of the Past
            </h3>
          </Showcase>

          <Showcase label='<h4 className="font-heading scroll-m-20 text-xl font-semibold tracking-tight">'>
            <h4 className="font-heading scroll-m-20 text-xl font-semibold tracking-tight">
              Riddles in the Dark
            </h4>
          </Showcase>

          <Showcase label='<p className="leading-7 [&:not(:first-child)]:mt-6">'>
            <p className="leading-7">
              In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled
              with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with
              nothing in it to sit down on or to eat: it was a hobbit-hole, and that means
              comfort.
            </p>
          </Showcase>

          <Showcase label='<blockquote className="mt-6 border-l-2 border-primary/40 pl-6 italic text-muted-foreground">'>
            <blockquote className="border-l-2 border-primary/40 pl-6 italic text-muted-foreground">
              Not all those who wander are lost.
            </blockquote>
          </Showcase>

          <Showcase label='<table className="w-full text-sm">  ·  <thead>  ·  <tbody>'>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground pb-2 border-b border-border">
                      Ring
                    </th>
                    <th className="text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground pb-2 border-b border-border">
                      Bearer
                    </th>
                    <th className="text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground pb-2 border-b border-border">
                      Stone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 border-b border-border">Narya</td>
                    <td className="py-2 pr-4 border-b border-border">Gandalf</td>
                    <td className="py-2 pr-4 border-b border-border">Ruby</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 border-b border-border">Nenya</td>
                    <td className="py-2 pr-4 border-b border-border">Galadriel</td>
                    <td className="py-2 pr-4 border-b border-border">Adamant</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Vilya</td>
                    <td className="py-2 pr-4">Elrond</td>
                    <td className="py-2 pr-4">Sapphire</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Showcase>

          <Showcase label='<ul className="my-6 ml-6 list-disc [&>li]:mt-2">'>
            <ul className="ml-6 list-disc [&>li]:mt-2 text-sm">
              <li>Frodo Baggins, the Ring-bearer</li>
              <li>Samwise Gamgee, his loyal friend</li>
              <li>Meriadoc Brandybuck and Peregrin Took, of the Shire</li>
              <li>Gandalf the Grey, a wizard</li>
              <li>Aragorn son of Arathorn, heir of Isildur</li>
            </ul>
          </Showcase>

          <Showcase label='<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">'>
            <p className="text-sm">
              The Ring whispered:{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                {`<Ring bearer="Frodo" />`}
              </code>
            </p>
          </Showcase>

          <Showcase label='<p className="text-xl text-muted-foreground">  /* Lead */'>
            <p className="text-xl text-muted-foreground">
              Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their
              halls of stone.
            </p>
          </Showcase>

          <Showcase label='<div className="text-lg font-semibold">  /* Large */'>
            <div className="text-lg font-semibold">One Ring to rule them all</div>
          </Showcase>

          <Showcase label='<small className="text-sm font-medium leading-none">  /* Small */'>
            <small className="text-sm font-medium leading-none">Concerning Hobbits</small>
          </Showcase>

          <Showcase label='<p className="text-sm text-muted-foreground">  /* Muted */'>
            <p className="text-sm text-muted-foreground">
              There and back again, a Hobbit&apos;s tale.
            </p>
          </Showcase>
        </div>
      </section>
    </>
  );
}
