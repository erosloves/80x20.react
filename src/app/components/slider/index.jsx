import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = ({ slides }) => {
  return (
    <Swiper
      style={{
        maxWidth: "500px",
        height: "500px",
      }}
      modules={[Pagination, Navigation]}
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
    >
      {slides.map((el, i) => {
        return (
          <SwiperSlide>
            <img
              src={el.src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
