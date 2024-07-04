import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { RemoveScroll } from "react-remove-scroll";
import Slot from "@/app/components/basic/slot";
import Primitive from "@/app/components/basic/primitive";
import { ScopedProps, useDialogContext } from "./lib/context";
import { getState } from "./lib/utils";
// import { DISPLAY_NAME } from "./dialog-overlay";
import { OVERLAY_NAME } from "./lib/constants";

// const DISPLAY_NAME = "DialogOverlay";

type DialogOverlayImplElement = ElementRef<typeof Primitive.div>;
type DialogOverlayImplProps = ComponentPropsWithoutRef<typeof Primitive.div>;
// type PrimitiveDivProps = ComponentPropsWithoutRef<typeof Primitive.div>;

// interface DialogOverlayImplProps extends PrimitiveDivProps {}

const DialogOverlayImpl = forwardRef<
  DialogOverlayImplElement,
  DialogOverlayImplProps
>((props: ScopedProps<DialogOverlayImplProps>, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = useDialogContext(OVERLAY_NAME, __scopeDialog);

  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    <RemoveScroll as={Slot} allowPinchZoom shards={[context.contentRef]}>
      <Primitive.div
        data-state={getState(context.open)}
        {...overlayProps}
        ref={forwardedRef}
        // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
        style={{ pointerEvents: "auto", ...overlayProps.style }}
      />
    </RemoveScroll>
  );
});

DialogOverlayImpl.displayName = OVERLAY_NAME;

export type { DialogOverlayImplElement, DialogOverlayImplProps };
export default DialogOverlayImpl;
