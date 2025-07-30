// client/src/components/Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Slider.css";

const slides = [
  {
    image: "/images/slider1-1.jpg",
    title: "Комфорт и качество",
    subtitle: "Целью управляющей компании «Элит проспект» является создание комфортных условий собственникам и их гостям вверенных нам объектов недвижимости!",
  },
  {
    image: "/images/slider1-2.jpg",
    title: "Современные технологии",
    subtitle: " Мы внедряем и поддерживаем оптимальне условия взаимодействия между собственником иуправляющей компанией.",
  },
  {
    image: "/images/slider1-3.jpg",
    title: "Надёжность и прозрачность",
    subtitle: "Обеспечивая содержание общего имущества, инженерных систем и оборудования в надлежащем состоянии — Мы хотим что бы ваше прибывание было комфортным и безопасным.",
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000 }}
      loop
      className="main-slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="overlay">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
