"use client";

import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import { CSSProperties, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

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

// const images: TImage[] = [
//   { name: "Main", src: ImgMain },
//   { name: "Sage Green", src: ImgColorSageGreen },
//   { name: "Navy Blue", src: ImgColorNavyBlue },
//   { name: "Beige", src: ImgColorBeige },
//   { name: "Black", src: ImgColorBlack },
//   { name: "Army Green", src: ImgColorArmyGreen },
//   { name: "Dusty Pink", src: ImgColorDustyPink },
//   { name: "Misty Grey", src: ImgColorMistyGrey },
//   { name: "Mocca", src: ImgColorMocca },
//   { name: "ImgColorLylac", src: ImgColorLylac },
// ];

const images: TImage[] = [{ name: "Main", value: "main-01", src: ImgMain }];

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
  sizes: [
    { name: "S", value: "s" },
    { name: "M", value: "m" },
    { name: "L", value: "l" },
    { name: "XL", value: "xl" },
  ],
  colors: colors,
};

const breakpoints = {
  0: {
    slidesPerView: 3.8,
    spaceBetween: 0,
  },
  375: {
    slidesPerView: 4.6,
    spaceBetween: 0,
  },
  425: {
    slidesPerView: 5,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 7,
    spaceBetween: 0,
  },
  1024: {
    slidesPerView: 6.5,
    spaceBetween: 0,
  },
};

const Images = ({ className = "" }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as CSSProperties
        }
        loop={true}
        navigation={false}
        centeredSlides={false}
        grabCursor={true}
        autoHeight={false}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{
          type: "fraction",
        }}
        modules={[FreeMode, Pagination, Thumbs]}
        className="mySwiper2"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {(images.concat(colors) || []).map((image, idx) => {
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
        <p className="mb-0.5 text-xs">
          <small>Terdapat 8 variasi warna</small>
        </p>
      </div>

      {/* thumbs */}
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper}
        loop={true}
        freeMode={false}
        watchSlidesProgress={true}
        breakpoints={breakpoints}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {colors.slice(1).map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="mx-auto aspect-square h-20 w-20">
                <Image src={image.src} alt={image.name} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Images;
