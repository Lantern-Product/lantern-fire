import { Button } from "@lantern-product/ui";
import {
  BellIcon,
  HeartIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function ButtonCircular() {
  return (
    <ShowcaseFrame>
      <Button size="icon" className="rounded-full" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        aria-label="Search"
      >
        <SearchIcon />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full"
        aria-label="Notifications"
      >
        <BellIcon />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        aria-label="Like"
      >
        <HeartIcon />
      </Button>
      <Button
        variant="outline"
        size="icon-lg"
        className="rounded-full"
        aria-label="Settings"
      >
        <SettingsIcon />
      </Button>
    </ShowcaseFrame>
  );
}
