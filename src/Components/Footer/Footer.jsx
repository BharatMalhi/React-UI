import React from 'react'
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png"
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon


} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr/>
      <div className={css.cFooter}>
      <div className={css.logo}>
        <img src={Logo} alt=''/>
        <span>Amazon</span>
      </div>
      <div className={css.block}>
      <div className={css.details}>
        <span>Contact Us</span>
        <span className={css.pngLine}>
          <LocationMarkerIcon className={css.icon}/>
          <span>111 north avenue Orlande, FL 32001</span>
        </span>

        <span className={css.pngLine}>
          <PhoneIcon className={css.icon}/>
          <a href='tel:352-306-4415'>352-30604415</a>
          
        </span>

        <span className={css.pngLine}>
          <InboxIcon className={css.icon}/>
          <a href='mailto:support@amazon.com'>support@amazon.com</a>
        </span>
      </div>

      </div>
      <div className={css.block}>
      <div className={css.details}>
        <span>Account</span>
        <span className={css.pngLine}>
          <LoginIcon className={css.icon}/>
          <span>Sign In</span>
        </span>

        
      </div>

      </div>

      <div className={css.Right}>
        <span>Copyright @2023 by Amazon, Inc.</span>
        <span>All Rights reserved</span>
      </div>
      </div>
    </div>
  )
}

export default Footer