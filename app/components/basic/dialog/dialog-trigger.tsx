import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import Primitive, {
  composeEventHandlers,
} from "@/app/components/basic/primitive";
import { type ScopedProps, useDialogContext } from "./lib/context";
import useComposedRefs from "@/app/lib/hooks/use-compose-refs";
import { getState } from "./lib/utils";
import { TRIGGER_NAME } from "./lib/constants";

type DialogTriggerElement = ElementRef<typeof Primitive.button>;
type DialogTriggerProps = ComponentPropsWithoutRef<typeof Primitive.button>;
// type PrimitiveButtonProps = ComponentPropsWithoutRef<typeof Primitive.button>;

// interface DialogTriggerProps extends PrimitiveButtonProps {}

const DialogTrigger = forwardRef<DialogTriggerElement, DialogTriggerProps>(
  (props: ScopedProps<DialogTriggerProps>, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(
      forwardedRef,
      context.triggerRef,
    );

    return (
      <Primitive.button
        type="button"
        ref={composedTriggerRef}
        aria-haspopup="dialog"
        aria-expanded={context.open}
        aria-controls={context.contentId}
        data-state={getState(context.open)}
        {...triggerProps}
        onClick={composeEventHandlers(props.onClick, context.onOpenToggle)}
      />
    );
  },
);

DialogTrigger.displayName = TRIGGER_NAME;

export type { DialogTriggerProps };
export default DialogTrigger;
