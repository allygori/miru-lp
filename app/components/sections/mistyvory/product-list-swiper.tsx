import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import ProductOne from "@/app/components/cards/product-one";

const ProductListSwiper2 = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={0}
      slidesPerView={5.65}
      loop={true}
      navigation={true}
      grabCursor={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => {
        return (
          <SwiperSlide key={idx} className="px-1.5">
            <ProductOne />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductListSwiper2;
