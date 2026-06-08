import {
  DrawerBodyPlaceholder,
  DrawerHeader,
  DrawerStage,
} from "../shared";

export function DrawerWideEmpty() {
  return (
    <DrawerStage width="wide">
      <DrawerHeader title="Panel title" />
      <DrawerBodyPlaceholder />
    </DrawerStage>
  );
}
