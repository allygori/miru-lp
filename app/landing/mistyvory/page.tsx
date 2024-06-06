"use client";

import { useContext } from "react";

import Container from "@/app/components/general/container";
import HeroTwo from "@/app/components/sections/hero/hero-two";
import SectionCoworkingSpace from "@/app/components/sections/home/coworking-space";
import LandingLayoutContext, {
  LandingLayoutInterface,
} from "@/app/_context/landing-layout";

const LandingPage = () => {
  const setting = useContext<LandingLayoutInterface>(LandingLayoutContext);

  return (
    <>
      <HeroTwo height={setting?.nav?.height} />
      <SectionCoworkingSpace />
      <Container className="w-11/12 flex flex-wrap items-center justify-between mx-auto h-full">
        Landing Page
      </Container>
    </>
  );
};

export default LandingPage;
