import { ElementRef, RefObject } from "react";
import { type Scope, createContextScope } from "@/app/lib/hooks/use-context";
import { type DialogContentElement } from "./types";
// import DismissableLayer from "@/app/components/basic/dismissable-layer";
import { DIALOG_NAME, PORTAL_NAME } from "./constants";

// const ROOT_CONTEXT_NAME = "Dialog";
// const PORTAL_CONTEXT_NAME = "DialogPortal";

type ScopedProps<P> = P & { __scopeDialog?: Scope };
// type DialogContentElement = ElementRef<typeof DismissableLayer>;

/******************************************************
 * Root Dialog Provider
 ******************************************************/
type DialogContextValue = {
  triggerRef: RefObject<HTMLButtonElement>;
  contentRef: RefObject<DialogContentElement>;
  contentId: string;
  titleId: string;
  descriptionId: string;
  open: boolean;
  onOpenChange(open: boolean): void;
  onOpenToggle(): void;
  modal: boolean;
};

const [createDialogContext, createDialogScope] =
  createContextScope(DIALOG_NAME);
const [DialogProvider, useDialogContext] =
  createDialogContext<DialogContextValue>(DIALOG_NAME);

/******************************************************
 * Portal Dialog Provider
 ******************************************************/
type PortalContextValue = { forceMount?: true };

const [PortalProvider, usePortalContext] =
  createDialogContext<PortalContextValue>(PORTAL_NAME, {
    forceMount: undefined,
  });

export type { ScopedProps };
export {
  DialogProvider,
  PortalProvider,
  createDialogScope,
  useDialogContext,
  usePortalContext,
};
