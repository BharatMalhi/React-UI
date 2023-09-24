import React from 'react'
import css from "./Testmonial.module.css";
import Hero from '../../assets/testimonialHero.png'
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
    <div clas ></div>
    </div>
  )
}
export default Testmonial;