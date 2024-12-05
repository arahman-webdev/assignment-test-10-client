import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { Fade, Zoom  } from "react-awesome-reveal";

const Slider = () => {
  // Array with image URLs and text for each slide
  const slides = [
    {
      img: "https://i.ibb.co/NWfT592/brain.jpg",
      title: "Braining The Game",
      description: "Dive into a world of endless adventure and creativity.",
    },
    {
      img: "https://i.ibb.co/thmVMyf/car-racing.jpg",
      title: "Car Racing",
      description: "Race through thrilling tracks, push limits, feel the adrenaline, and conquer speed challenges in the ultimate car racing experience.",
    },
    {
      img: "https://i.ibb.co.com/WFSk3nx/dragon.jpg",
      title: "Braining The Game",
      description: "Challenge yourself and unlock your gaming potential.",
    },
  ];

  return (
    <Swiper
      className="z-0"
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect="fade"
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
  {/* Background Image */}
  <div
    className="w-full h-[850px] bg-cover bg-center rounded-lg transition-transform duration-700 transform hover:scale-105"
    style={{ backgroundImage: `url(${slide.img})` }}
  ></div>

  {/* Overlay with Animated Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#000] bg-opacity-65 rounded-lg">
    {/* Fade Animation for Title */}
    <Fade triggerOnce>
      <h2 className="text-[140px] font-bold mb-4 font-Roboto text-white uppercase">
        {slide.title}
      </h2>
    </Fade>

    {/* Zoom Animation for Description */}
    <Zoom triggerOnce>
      <p className="text-lg text-white">{slide.description}</p>
    </Zoom>
  </div>
</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;



