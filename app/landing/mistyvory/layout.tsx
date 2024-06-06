"use client";

import { useContext } from "react";
import LandingLayoutContext, {
  LandingLayoutInterface,
} from "@/app/_context/landing-layout";
import HeaderTwo from "@/app/components/layouts/headers/header-two";
import Container from "@/app/components/general/container";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const setting = useContext<LandingLayoutInterface>(LandingLayoutContext);

  return (
    <>
      <HeaderTwo height={setting?.nav?.height} />
      <main>{children}</main>
      <footer>
        <Container className="w-11/12 flex flex-wrap items-center justify-between mx-auto h-full">
          Footer
        </Container>
      </footer>
    </>
  );
};

export default LandingLayout;
