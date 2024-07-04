import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import Primitive from "@/app/components/basic/primitive";
import { ScopedProps, useDialogContext } from "./lib/context";

const DISPLAY_NAME = "DialogTitle";

type DialogTitleElement = ElementRef<typeof Primitive.h2>;
type DialogTitleProps = ComponentPropsWithoutRef<typeof Primitive.h2>;
// type PrimitiveHeading2Props = ComponentPropsWithoutRef<typeof Primitive.h2>;
// interface DialogTitleProps extends PrimitiveHeading2Props {}

const DialogTitle = forwardRef<DialogTitleElement, DialogTitleProps>(
  (props: ScopedProps<DialogTitleProps>, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(DISPLAY_NAME, __scopeDialog);
    return (
      <Primitive.h2 id={context.titleId} {...titleProps} ref={forwardedRef} />
    );
  },
);

DialogTitle.displayName = DISPLAY_NAME;

export type { DialogTitleProps };
export default DialogTitle;
