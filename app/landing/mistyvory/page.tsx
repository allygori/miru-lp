"use client";

import { useContext } from "react";

import Container from "@/app/components/general/container";
import HeroTwo from "@/app/components/sections/hero/hero-two";
import SectionCoworkingSpace from "@/app/components/sections/home/coworking-space";
import SectionProductList from "@/app/components/sections/mistyvory/product-list";
// import SectionProductListCarousel from "@/app/components/sections/mistyvory/product-list-carousel";
import SectionProductListSwiper from "@/app/components/sections/mistyvory/product-list-swiper";
import SectionBenefits from "@/app/components/sections/mistyvory/benefits";
import LandingLayoutContext, {
  LandingLayoutInterface,
} from "@/app/_context/landing-layout";

const LandingPage = () => {
  const setting = useContext<LandingLayoutInterface>(LandingLayoutContext);

  return (
    <>
      <HeroTwo height={setting?.nav?.height} />
      {/* <Container className="w-10/12 mx-auto h-full my-2">
        <SectionProductListCarousel />
      </Container> */}
      <Container className="w-10/12 mx-auto h-full my-2">
        <SectionProductListSwiper />
      </Container>
      <Container className="w-10/12 mx-auto h-full my-2">
        <SectionBenefits />
      </Container>

      {/* <Container className="w-10/12 flex flex-wrap items-center justify-between mx-auto h-full my-2">
        <SectionProductList />
      </Container> */}
      <SectionCoworkingSpace />
      <Container className="w-10/12 flex flex-wrap items-center justify-between mx-auto h-full">
        Landing Page
      </Container>
    </>
  );
};

export default LandingPage;
