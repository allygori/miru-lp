/* eslint-disable react/no-unescaped-entities */
"use client";

import { useContext } from "react";
import Image from "next/image";
import HeaderTwo from "@/app/components/layouts/headers/header-two";
import Container from "@/app/components/general/container";
import HeroOne from "@/app/components/sections/hero/hero-one";
import SectionCoworkingSpace from "@/app/components/sections/home/coworking-space";
import {
  GlobalLayoutInterface,
  GlobalLayoutContext,
} from "@/app/_context/global-layout";

export default function Home() {
  const setting = useContext<GlobalLayoutInterface>(GlobalLayoutContext);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <HeaderTwo height={setting?.nav?.height} />
      <HeroOne height={setting?.nav?.height} />

      <SectionCoworkingSpace />

      <Container
        className="max-w-screen-xl my-4"
        classObject={{ padding: "px-2" }}
      >
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
        <p>
          Enim occaecat elit consequat laborum voluptate non in Lorem officia.
          Laborum ex deserunt proident pariatur ullamco ullamco pariatur fugiat.
          Ullamco quis non amet nisi sunt nisi culpa veniam officia velit est
          enim aliquip. Fugiat eu ipsum occaecat culpa sint cillum irure
          consequat aliqua. Minim cillum aliquip consectetur non. Ex aliqua
          magna quis Lorem do occaecat adipisicing aute reprehenderit ut velit
          velit veniam in.
        </p>
      </Container>
    </div>
  );
}
