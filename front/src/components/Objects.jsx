// client/src/components/Objects.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Navigation, Pagination, EffectCards, Autoplay } from 'swiper/modules';

import './objects.css'; // скопируем css с нужными правками

const object = {
  title: 'Жилой комплекс  "Новая Александрия"',
  description: 'Современный многоквартирный дом в Адлере. 10 этажей, подземный паркинг, видеонаблюдение, зелёный двор.',
  photos: [
    '/images/slider2-1.jpg',
    '/images/slider2-2.jpg',
    '/images/slider2-3.jpg',
    '/images/slider2-4.jpg',

    '/images/slider2-1.jpg',
    '/images/slider2-6.jpg',
    '/images/slider2-7.jpg',
    '/images/slider2-8.jpg',
  ]
};

export default function Objects() {
  return (
    <div className="services-container">
      <div className="service-block">
        <h2>{object.title}</h2>

        <Swiper
          modules={[Navigation, Pagination, EffectCards, Autoplay]}
          navigation
          pagination={{ clickable: true, type: 'fraction' }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="cards"
          grabCursor
          className="service-swiper"
        >
          {object.photos.map((url, idx) => (
            <SwiperSlide key={idx}>
              <img src={url} alt={`Фото ${idx + 1}`} className="service-image" />
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="service-description">{object.description}</p>
      </div>
    </div>
  );
}
