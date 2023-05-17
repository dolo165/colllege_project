
import React, { useContext, useState } from 'react';
import { ContextBox } from '../../App';
import "./Busket.css"
import {Link} from 'react-router-dom'
import React from 'react';

  const Busket = box.map((item, index) => {
    return (
      <div>
        <h1>Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the cart items and render each row */}
            {/* Replace `cartItems` with your actual cart items array */}
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h3>Total: ${calculateTotal()}</h3>
          <button>Checkout</button>
        </div>
      </div>
    );
  }
  )  
export default Busket;
