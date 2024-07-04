import {
  Fragment,
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type ASProps = {
  children?: ReactNode;
  className?: string;
  mouseEnable?: boolean;
  touchEnable?: boolean;
  onClose?: Function;
};

export interface ASRef {
  open(): void;
  close(): void;
}

const ActionSheet = forwardRef<ASRef | undefined, ASProps>(
  (
    {
      children,
      className = "action-sheet",
      mouseEnable = true,
      touchEnable = true,
      onClose,
    },
    ref,
  ): JSX.Element => {
    const sheetRef = useRef<HTMLDivElement>(null);

    return (
      <Fragment>
        <div></div>
        <div ref={sheetRef}>{children}</div>
      </Fragment>
    );
  },
);

// https://github.com/mohit23x/actionsheet-react/blob/master/src/index.tsx

ActionSheet.displayName = "Actionsheet";

export default ActionSheet;
