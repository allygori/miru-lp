import React from "react";
import { createPortal } from "react-dom";
import Primitve from "@/app/components/basic/primitive/primitve";
import { useLayoutEffect } from "@/app/lib/hooks/use-layout-effect";

const DISPLAY_NAME = "Porta";

type PortalElement = React.ElementRef<typeof Primitve.div>;
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitve.div>;

interface PortalProps extends PrimitiveDivProps {
  container?: Element | null;
}

const Portal = React.forwardRef<PortalElement, PortalProps>(
  (props, forwardRef) => {
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = React.useState(false);

    useLayoutEffect(() => setMounted(true), []);

    const container = containerProp || (mounted && globalThis?.document?.body);

    return container
      ? createPortal(
          <Primitve.div {...portalProps} ref={forwardRef} />,
          container,
        )
      : null;
  },
);

Portal.displayName = DISPLAY_NAME;

export type { PortalProps };
export default Portal;
