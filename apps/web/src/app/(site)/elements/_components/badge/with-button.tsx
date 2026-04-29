import { Badge } from "@lantern-product/ui";
import { XIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function BadgeWithButton() {
  const tags = ["Engineering", "Design", "Product", "Marketing"];
  return (
    <ShowcaseFrame>
      {tags.map((t) => (
        <Badge key={t} variant="secondary" className="pr-0.5">
          {t}
          <button
            type="button"
            aria-label={`Remove ${t}`}
            className="ml-1 inline-flex size-4 items-center justify-center rounded-full text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
          >
            <XIcon className="size-3" />
          </button>
        </Badge>
      ))}
    </ShowcaseFrame>
  );
}
