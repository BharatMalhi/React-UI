import React from "react";
import css from "./Hero.module.css";
import { BsBagCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";

import HeroImg from "../../assets/hero.png";
const Hero = () => {
  const transition = {
    duration: 3,
    type: "spring",
    damping: 5,
    stiffness: 200,
  };
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream </span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedit say has suitable disposal and boy Exercise joy man childern
            rejected{" "}
          </span>
        </div>
      </div>

      {/* middle side hero image */}
      <div className={css.wrapper}>
        {/* biluCircle with Motion-Framer */}
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>
        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={HeroImg}
          alt=""
          width={600}
        />
        <motion.div
          transition={transition}
          initial={{right: "4%" }}
          whileInView={{right: "2%" }}
          className={css.cart2}
        >
          <faShippingFast />
          <div className={css.signup}>
            <span> Best Signup Offers</span>

            <BsBagCheckFill />
          </div>
        </motion.div>
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
  );
};

export default Hero;
