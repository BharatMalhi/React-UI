// import { Navigation, Pagination } from "swiper/modules";
import React from "react";
// import Slider1 from 'react-touch-drag-slider'

 import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation, Pagination } from 'swiper/modules';
// import required modules

import { SliderProducts } from "../../data/products.js";
import "swiper/css";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import "./Slider.css";
//  import 'swiper/swiper-bundle.min.css'
//  import 'swiper/swiper.min.css/Navigation'

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        // pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        navigation={true}
        spaceBetween={50}
        slidesPerView={3}
        slidesPerGroup={1}
      
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}</span>
              <div>Shop now</div>

              <img src={slide.img} alt="product" className="img-p" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

{/* slider2 */}
{/* 
<Slider1
      onSlideComplete={(i) => {
        console.log('finished dragging, current slide is', i)
      }}
      onSlideStart={(i) => {
        console.log('started dragging on slide', i)
      }}
      activeIndex={0}
      threshHold={100}
      transition={0.5}
      scaleOnDrag={true}
    >
      {SliderProducts.map((sli ,i) => (
        <img src={sli}  alt='' />
      ))}
    </Slider1> */}
    </div>
  );
};
export default Slider;
