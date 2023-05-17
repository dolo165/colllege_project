import React from 'react';
import { Link } from 'react-router-dom'
import {ContextBox} from '../App'
import { useEffect,useState, useContext } from "react";

const Basket = (props) => {
    const [box, setBox] = useContext(ContextBox)
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [product, setProducts] = useState([])
  
    
const allProducts = box.map((item, index) => {
    return (
      <div className="bucketItem" key={index}>
        <div className="tick">
          <button>
            <img src={tick} alt="" />
          </button>
        </div>
        <div className="bucketPhoto">
          <img className='busket-img' src={product.photo1} alt="" />
        </div>
        <div className="aboutProduct">
          <div className="productName">
            {product.name}
          </div>
          <div className="productInfo">
            <div className="productPrice">
              {product.price} dollar
            </div>
            <div className="productCounter">
              <button className='decrease'>-</button>
              <input className='count' type="text" value={1} />
              <button className='increase'>+</button>
            </div>
            <div className="productPrice">
              {product.price}
            </div>
          </div>
        </div>
      </div>
    )

  })

  React.useEffect(() => {
    let itemsCount = 0;
    let totalPrice = 0;
    for (let i = 0; i < box.length; i++) {
      itemsCount += 1;
      console.log(box[i].price)
      totalPrice += Number(box[i].price);
    }
    setTotalItems(itemsCount);
    setTotalPrice(totalPrice);
  }, [box]);

  return (
    <>
      <div className="cart-info">
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice} $</p>
      </div>
      {allProducts}
    </>
  );
  }

export default Basket;