import React from "react";
import { useState } from "react";
import css from "./Header.module.css";
import Logo from "../assets/logo.png";
import { CgShoppingBag, } from "react-icons/cg";
import{ImMenu} from "react-icons/im"
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openHandler= () =>{
    if (!showMenu) {
      setShowMenu(true);
     
    } else {
      setShowMenu(false);
  
    }
  }
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Amazon</span>
      </div>

      <div className={css.right}>
      <div className={css.bar}  >
        <ImMenu  onClick={() => openHandler()} />
      </div>
          <ul className={css.menu}>
            <li>Collection </li>
            <li> Brands</li>
            <li>New</li>
            <li>Select</li>
            <li>ENG</li>
          </ul>

        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
