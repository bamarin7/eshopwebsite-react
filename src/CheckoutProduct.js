import React from 'react';
import './ChckoutProduct.css';

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img src="https://m.media-amazon.com/images/I/812a7X9nSBL._SX466_PIbundle-12,TopRight,0,0_AA466SH20_.jpg" alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">Filler</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct__rating">
          ⭐⭐⭐
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct