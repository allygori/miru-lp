"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarTwo from "@/app/components/layouts/navbars/navbar-two";
import Container from "@/app/components/general/container";
import ImageLogo from "@/public/assets/img/logo/miruora.svg";

type Props = {
  height?: string | number | undefined;
};

const HeaderTwo = ({ height }: Props) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <header
      className={`w-full fixed z-20 top-0 start-0 dark:bg-gray-900 dark:border-gray-70 ${
        scroll
          ? `bg-white border-b border-gray-200 animate-fade-in-down`
          : "bg-transparent py-4"
      }`}
      style={{ height }}
    >
      {/* max-w-screen-xl */}
      <Container className="w-11/12 flex flex-wrap items-center justify-between mx-auto h-full">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={ImageLogo} alt="Miruora Logo" width={32} height={32} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Miruora
          </span>
        </Link>
        <NavbarTwo />
      </Container>
    </header>
  );
};

export default HeaderTwo;
