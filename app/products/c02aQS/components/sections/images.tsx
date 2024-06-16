"use client";

import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import styles from "./images.module.css";

import { CSSProperties, useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";

// images
import ImgMain from "@/public/assets/img/products/rNnrD6/hMHB3egnjEoHfPnhMAVTCr8TQm2bVcRMyofvskDakGzg.webp";
import ImgColorSageGreen from "@/public/assets/img/products/rNnrD6/hMAZLvtMCEywfXshMK83UFvMsxG4DDSMaSI0hJZMUMg.webp";
import ImgColorNavyBlue from "@/public/assets/img/products/rNnrD6/hMHBy28zs3uwL0YhMK8DpXonTXXG9dRzG3Bw1YXH1NnQ.webp";
import ImgColorBeige from "@/public/assets/img/products/rNnrD6/h9PdaFlzFF8dCmqh9PtKu7IfyEpCkRJG1Mpbj30zXWw.webp";
import ImgColorBlack from "@/public/assets/img/products/rNnrD6/hMHBy28zs3uwL0YhMK8OvpzHVhKC6kT6yjG0ga9YqiMA.webp";
import ImgColorArmyGreen from "@/public/assets/img/products/rNnrD6/hMAwtJzi9fHx0hNhMK87XA7uHYQ4KJQk3KA5IPiA6w.webp";
import ImgColorDustyPink from "@/public/assets/img/products/rNnrD6/hMHB3MY0hnAsJhqnhMK8k9lvFsHP0LPTZmIJkOZGntuiA.webp";
import ImgColorMistyGrey from "@/public/assets/img/products/rNnrD6/hMHBBcKz2HFHLi1hMK8SiDww9CyhpTGCHXp1JPMkXPQ.webp";
import ImgColorMocca from "@/public/assets/img/products/rNnrD6/h9PdaFlzFF8dCmqh9PtRIsdWnCaQdQCpQihNbpQw.webp";
import ImgColorLylac from "@/public/assets/img/products/rNnrD6/h9Pd3o9rFDyqxuh9PtS8WBPYFEgWHRgOt0iDStytDuQ.webp";

type Props = {
  className?: string | undefined;
};

type TImage = {
  name: string;
  value: string;
  src: StaticImageData;
};

const mainImages: TImage[] = [{ name: "Main", value: "main-01", src: ImgMain }];

const colors: TImage[] = [
  { name: "Sage Green", value: "sage-green", src: ImgColorSageGreen },
  { name: "Navy Blue", value: "navy-blue", src: ImgColorNavyBlue },
  { name: "Beige", value: "beige", src: ImgColorBeige },
  { name: "Black", value: "black", src: ImgColorBlack },
  { name: "Army Green", value: "army-green", src: ImgColorArmyGreen },
  { name: "Dusty Pink", value: "dusty-pink", src: ImgColorDustyPink },
  { name: "Misty Grey", value: "misty-grey", src: ImgColorMistyGrey },
  { name: "Mocca", value: "mocca", src: ImgColorMocca },
  { name: "Lylac", value: "lylac", src: ImgColorLylac },
];

const variant = {
  colors: colors,
  sizes: [
    { name: "S", value: "s" },
    { name: "M", value: "m" },
    { name: "L", value: "l" },
    { name: "XL", value: "xl" },
  ],
};

// const breakpoints = {
//   0: {
//     slidesPerView: 3.8,
//     spaceBetween: 0,
//   },
//   375: {
//     slidesPerView: 4.6,
//     spaceBetween: 0,
//   },
//   425: {
//     slidesPerView: 5,
//     spaceBetween: 0,
//   },
//   768: {
//     slidesPerView: 7,
//     spaceBetween: 0,
//   },
//   1024: {
//     slidesPerView: 6.5,
//     spaceBetween: 0,
//   },
// };

const Images = ({ className = "" }: Props) => {
  const mainSwiperRef = useRef<SwiperRef>(null);
  const thumbsSwiperRef = useRef<SwiperRef>(null);
  const [mainRealIndex, setMainRealIndex] = useState<number>(0);
  const [mainPreviousRealIndex, setMainPreviousRealIndex] = useState<number>(0);

  const mainImagesTotal = mainImages.length;
  // const firstVariantTotal = variant.colors.length;

  const chooseVariantColor = (image: TImage, index: number) => {
    mainSwiperRef.current?.swiper.slideToLoop(
      mainImagesTotal + index,
      500,
      false,
    );
  };

  const onMainActiveIndexChange = (realIndex: number) => {
    if (realIndex !== mainRealIndex) {
      setMainPreviousRealIndex(mainRealIndex);
      setMainRealIndex(realIndex);

      // slide next
      if (mainRealIndex > realIndex) {
        thumbsSwiperRef.current?.swiper.slideTo(realIndex - mainImagesTotal);
      }
      // prev
      else {
        thumbsSwiperRef.current?.swiper.slideTo(realIndex - mainImagesTotal);
      }
    }
  };

  return (
    <section className={className}>
      <Swiper
        ref={mainSwiperRef}
        modules={[FreeMode, Pagination, Thumbs]}
        loop={true}
        navigation={false}
        centeredSlides={false}
        grabCursor={true}
        autoHeight={false}
        spaceBetween={0}
        // thumbs={{ swiper: thumbsSwiper }}
        pagination={{
          type: "fraction",
          renderFraction(currentClass, totalClass) {
            return `
              <div class="bg-white/75 text-center text-xs text-gray-800 px-1 py-0.5 border border-gray-300 rounded-md inline-flex opacity-90">
                <span class="${currentClass}"></span> / <span class="${totalClass}"></span>
              </div>
            `;
          },
        }}
        className={`${styles["swiper-ovveride"]}`}
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as CSSProperties
        }
        onSlideChange={(swiper) => onMainActiveIndexChange(swiper.realIndex)}
      >
        {(mainImages.concat(colors) || []).map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="mx-auto aspect-square w-full">
                <Image src={image.src} alt={image.name} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* variants:name */}
      <div>
        <p className="mb-0.5 px-0.5 text-xs">
          {variant.colors[mainRealIndex - mainImagesTotal]?.value ? (
            <small>
              {variant.colors[mainRealIndex - mainImagesTotal].name}
            </small>
          ) : (
            <small>Terdapat 9 variasi warna</small>
          )}
        </p>
      </div>

      {/* thumbs */}
      <Swiper
        ref={thumbsSwiperRef}
        modules={[FreeMode, Thumbs]}
        loop={false}
        freeMode={false}
        // watchSlidesProgress={true}
        // breakpoints={breakpoints}
        slidesPerView={"auto"}
        spaceBetween={0}
      >
        {colors.slice(0).map((image, idx) => {
          return (
            <SwiperSlide
              key={idx}
              className={`${styles["swiper-slide-ovveride"]} px-[0.175rem]`}
            >
              <div
                className={`aspect-square h-16 w-16 overflow-hidden md:h-20 md:w-20 ${idx === mainRealIndex - mainImagesTotal ? "border border-[#ee4d2d]" : ""}`}
                onClick={() => chooseVariantColor(image, idx)}
              >
                <Image src={image.src} alt={image.name} className="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Images;
