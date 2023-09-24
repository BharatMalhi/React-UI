import React from "react";
import { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products.js";
import { useAutoAnimate } from '@formkit/auto-animate/react'

// import { type } from "@testing-library/user-event/dist/type";
const Products = () => {
  const [animationParent] = useAutoAnimate()
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const filter = (type) => {
setMenuProducts(ProductsData.filter((product)=>product ===type))

}

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Featured Products </h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={()=>setMenuProducts(MenuProducts)}>All</li>
          <li onClick={()=>filter("skin care")}>Skin Care</li>
          <li onClick={()=>filter("Conditioners")}>Conditioners</li>
          <li onClick={()=>filter("Foundations")}>Foundations</li>
        </ul>

        <div className={css.list} ref={animationParent}>
          {MenuProducts.map((product,i) => (
            <div className={css.product1}>
            
              <div className="left-s">
                <div className="name">
                  <span key={i}>{product.name} </span>
                  <span key={i}>{ product.detail}</span>
                </div>
                <span key={i}> {product.price}$ </span>
                <div>Shop now</div>

                <img key={i} src={product.img} alt="product" className="img-p" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
