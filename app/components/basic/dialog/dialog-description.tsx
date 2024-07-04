import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import Primitive from "@/app/components/basic/primitive";
import { ScopedProps, useDialogContext } from "./lib/context";

const DISPLAY_NAME = "DialogDescription";

type DialogDescriptionElement = ElementRef<typeof Primitive.p>;
// type PrimitiveParagraphProps = ComponentPropsWithoutRef<typeof Primitive.p>;
type DialogDescriptionProps = ComponentPropsWithoutRef<typeof Primitive.p>;
// interface DialogDescriptionProps extends PrimitiveParagraphProps {}

const DialogDescription = forwardRef<
  DialogDescriptionElement,
  DialogDescriptionProps
>((props: ScopedProps<DialogDescriptionProps>, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = useDialogContext(DISPLAY_NAME, __scopeDialog);
  return (
    <Primitive.p
      id={context.descriptionId}
      {...descriptionProps}
      ref={forwardedRef}
    />
  );
});

DialogDescription.displayName = DISPLAY_NAME;

export type { DialogDescriptionProps };
export default DialogDescription;
