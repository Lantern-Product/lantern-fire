import {
  DrawerBodyPlaceholder,
  DrawerHeader,
  DrawerStage,
} from "../shared";

export function DrawerWithBackgroundOverlay() {
  return (
    <DrawerStage overlay>
      <DrawerHeader title="Panel title" />
      <DrawerBodyPlaceholder />
    </DrawerStage>
  );
}
