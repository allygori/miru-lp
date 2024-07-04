import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { ScopedProps, useDialogContext, usePortalContext } from "./lib/context";
import DialogOverlayImpl from "./dialog-overlay-impl";
import Presence from "@/app/components/basic/presence";
import Primitive from "@/app/components/basic/primitive";
import { OVERLAY_NAME } from "./lib/constants";

// export const DISPLAY_NAME = "DialogOverlay";

type DialogOverlayElement = ElementRef<typeof Primitive.div>;
type PrimitiveDivProps = ComponentPropsWithoutRef<typeof Primitive.div>;
type DialogOverlayProps = PrimitiveDivProps & {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
};

const DialogOverlay = forwardRef<DialogOverlayElement, DialogOverlayProps>(
  (props: ScopedProps<DialogOverlayProps>, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;

    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);

    return context.modal ? (
      <Presence present={forceMount || context.open}>
        <DialogOverlayImpl ref={forwardedRef} {...overlayProps} />
      </Presence>
    ) : null;
  },
);

DialogOverlay.displayName = OVERLAY_NAME;

export type { DialogOverlayProps };
export default DialogOverlay;
