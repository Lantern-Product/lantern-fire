import {
  DrawerBodyPlaceholder,
  DrawerHeader,
  DrawerStage,
} from "../shared";

export function DrawerEmpty() {
  return (
    <DrawerStage width="narrow">
      <DrawerHeader title="Panel title" />
      <DrawerBodyPlaceholder />
    </DrawerStage>
  );
}
