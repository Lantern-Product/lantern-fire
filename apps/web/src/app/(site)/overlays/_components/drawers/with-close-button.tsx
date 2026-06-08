import {
  DrawerBodyPlaceholder,
  DrawerHeader,
  DrawerStage,
} from "../shared";

export function DrawerWithCloseButton() {
  return (
    <DrawerStage close="outside">
      <DrawerHeader title="Panel title" showClose={false} />
      <DrawerBodyPlaceholder />
    </DrawerStage>
  );
}
