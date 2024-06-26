"use client";

import { useEffect, useState } from "react";

type Props = {
  height?: string | number | undefined;
};

const HeroOne = ({ height = 50 }: Props) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <section
      className={`bg-[#f1efff] min-h-screen min-w-full`}
      style={{ padding: scroll ? "0px" : `${height}px 0px` }}
    >
      <div className="flex flex-row items-center justify-between">
        <div>Text HERE 1</div>
        <div>Text HERE 2</div>
      </div>
    </section>
  );
};

export default HeroOne;
