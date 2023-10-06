import React from 'react'
import css from "./Testmonial.module.css";
import Hero from '../../assets/testimonialHero.png'
import {Swiper ,SwiperSlide} from 'swiper/react';
import  {TestimonialsData} from "../../data/testimonials.js"
 const Testmonial = () => {
  return (
    <div className={css.Testimonials}>
    <div className={css.wrapper}>
    <div className={css.container}>

        <span>Top Rated</span>
        <span>Seedily was say has suitable disposla 
        </span>
    </div>

    <img src={Hero} alt='heroimg'/>
    <div className={css.container}>
    <span>100k</span>
    <span>Happy Customer with Us</span>


    </div>
    </div>
    <div className={css.reviews}></div>
    <div className={css.carousal}>
    <Swiper
    spaceBetween={20}
      slidesPerView={3}
      slidesPerGroup={1}
      className={css.tCarousal}
      breakpoints={{
        856:{
          slidesPerView:3
        },
        640:{
          slidesPerView:2
        },
        0:{
          slidesPerView:1
        },
      }}

    
    
    
    
    >{
      
      TestimonialsData.map((testimonial,i)=>(
  <SwiperSlide>
    <div className={css.testimonial}>
      <img src={testimonial.image} alt=''/>
      <span>{testimonial.comment}</span>
      <hr/>
      <span>{testimonial.name}</span>
    </div>
  </SwiperSlide>
))
    }
    </Swiper>

    </div>
    </div>
  )
}
export default Testmonial;