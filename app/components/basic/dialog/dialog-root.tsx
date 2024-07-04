import { useCallback, useRef, ReactNode, FC } from "react";
import { type ScopedProps, DialogProvider } from "./lib/context";
import { type DialogContentElement } from "./lib/types";
import useControllableState from "@/app/lib/hooks/use-controllable-state";
import useId from "@/app/lib/hooks/use-id";
import { DIALOG_NAME } from "./lib/constants";

// const DISPLAY_NAME = "DialogRoot";

interface DialogProps {
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
  onOpenChange?(open: boolean): void;
}

const DialogRoot: FC<DialogProps> = (props: ScopedProps<DialogProps>) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true,
  } = props;

  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<DialogContentElement>(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  console.log(`Dialog Root => __scopeDialog: ${__scopeDialog}`);

  return (
    <DialogProvider
      scope={__scopeDialog}
      triggerRef={triggerRef}
      contentRef={contentRef}
      contentId={useId()}
      titleId={useId()}
      descriptionId={useId()}
      open={open}
      onOpenChange={setOpen}
      onOpenToggle={useCallback(
        () => setOpen((prevOpen) => !prevOpen),
        [setOpen],
      )}
      modal={modal}
    >
      {children}
    </DialogProvider>
  );
};

DialogRoot.displayName = DIALOG_NAME;

export type { DialogProps };
export default DialogRoot;
