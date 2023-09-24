import React from 'react'
import css from "./Hero.module.css"
import {FaShippingFast} from "react-icons/fa"
import {BiRightArrowAlt} from "react-icons/bi"


import HeroImg from "../../assets/hero.png"
const Hero = () => {
  return (
<div className={ css.container}>
{/* left side */}
<div className={css.h_sides}>
<span className={css.text1}>skin protection cream </span>
    

    <div className={css.text2}>
        <span>Trendy Collection</span>
        <span>Seedit say has suitable disposal and boy 
        Exercise joy man childern rejected  </span>
    </div>
</div>

{/* middle side hero image */}
<div className={css.wrapper}>
    <div className={css.blueCircle}></div>
    <img src={HeroImg} alt=''width={600} />
    <div className={css.cart2}>
<FaShippingFast/>
<div className={css.signup}>
<span> Best Signup Offers</span>
<div>
<BiRightArrowAlt/>
</div>
</div>

    </div>
</div>
{/* Right Side */}
<div className={css.h_sides}>
<div className={css.traffic}>
    <span>1.5m</span>
    <span>Monthly Traffic</span>

</div>
<div className={css.customer}>
    <span>100k</span>
    <span>Happy Customer</span>
</div>


</div>
    </div>
  )
}

export default Hero