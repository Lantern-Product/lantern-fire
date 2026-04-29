import { Avatar, AvatarFallback } from "@lantern-product/ui";
import { PageStage } from "../shared";

export function MediaObjectWithCircularImage() {
  const items = [
    {
      initials: "WC",
      name: "Wade Cooper",
      quote:
        "Switching to Lantern Fire shaved weeks off our redesign. The composition primitives are the missing layer between shadcn/ui and a real product.",
    },
    {
      initials: "AM",
      name: "Arlene Mccoy",
      quote:
        "The headings and shells alone gave our team a shared visual language we'd been missing for two years.",
    },
  ];
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-2xl space-y-6">
        {items.map((item) => (
          <div key={item.name} className="flex items-start gap-4">
            <Avatar className="size-14">
              <AvatarFallback className="text-base">
                {item.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-2 text-xs font-semibold text-muted-foreground">
                &mdash; {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageStage>
  );
}
