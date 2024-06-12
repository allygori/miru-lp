"use client";

import { useEffect, useState } from "react";
import BackgroundImage from "@/public/assets/img/hero/id-11134210-7r98z-lw296t3p73fybe.webp";

type Props = {
  height?: string | number | undefined;
};

const HeroTwo = ({ height = 50 }: Props) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <section
      className={`bg-[#edeae7] min-h-screen min-w-full}`}
      style={{
        padding: scroll ? "0px" : `${height}px 0px`,
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex flex-row items-center justify-between">
        {/* <div>Text HERE 1</div> */}
        {/* <div>Text HERE 2</div> */}
      </div>
    </section>
  );
};

export default HeroTwo;
