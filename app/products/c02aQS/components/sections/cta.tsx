"use client";

import * as ActionSheet from "@allygory/action-sheet";
import clsx from "clsx";
import { useState } from "react";

type Props = {
  className?: string;
};

const CTA = ({ className = "" }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});

  const toggleOpen = (state: boolean) => {
    setIsOpen(state);
  };

  return (
    <section className={className}>
      <ActionSheet.Root
        open={isOpen}
        onOpenChange={(v) => toggleOpen(v)}
        threshold={250}
        onConfirm={(d) => setData(d)}
      >
        <ActionSheet.Trigger asChild>
          <button
            role="button"
            className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-center border bg-[#ee4d2d] py-3.5 text-base font-medium text-white"
          >
            Beli Sekarang
          </button>
        </ActionSheet.Trigger>
        <ActionSheet.Portal forceMount={true}>
          <ActionSheet.Overlay className="allygory-state-closed:px allygory-state-closed:-mx fixed inset-0 z-10 bg-black opacity-0 transition-opacity delay-0 duration-700 ease-in-out allygory-state-closed:h-1 allygory-state-closed:w-1 allygory-state-closed:border-0 allygory-state-open:opacity-80" />

          <ActionSheet.Content
            defaultOpen={false}
            className={clsx(
              "z-20",
              "fixed inset-x-4",
              "h-[400px] w-full rounded-t-2xl p-6 shadow-lg md:w-full",
              "bottom-0 left-0",
              "bg-white text-gray-800",
              "allygory-state-open:animate-action-sheet-slide-in-bottom",
              // "allygory-state-closed:animate-action-sheet-hide",
              "allygory-state-closed:animate-action-sheet-swipe-out-y",
              "allygory-swipe-direction-down:allygory-swipe-end:animate-action-sheet-swipe-out-y",
              "allygory-swipe-direction-down:translate-y-allygory-action-sheet-swipe-move-y",
              "allygory-swipe-cancel:translate-y-0",
              "allygory-swipe-cancel:duration-500",
              "allygory-swipe-cancel:ease-[ease]",
            )}
          >
            Content
            <p>Testas dasdjasd asdjasd asdjsad asdjas dasjdasd</p>
            <ActionSheet.Close
              className={clsx(
                "absolute right-3.5 top-3.5 inline-flex items-center justify-center rounded-full p-1",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
              )}
            >
              x
            </ActionSheet.Close>
            <ActionSheet.Confirm
              className={clsx(
                "absolute bottom-0 left-0 flex w-full flex-row items-center justify-center bg-green-500 py-3.5 text-white",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
              )}
            >
              Confirm
            </ActionSheet.Confirm>
          </ActionSheet.Content>
        </ActionSheet.Portal>
      </ActionSheet.Root>
    </section>
  );
};

export default CTA;
