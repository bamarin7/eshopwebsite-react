import React from 'react';
import './product.css';

function Product({ id, title, image, price, rating }) {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <img src={image} alt=''/>
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
          </div>
          <br/>
          <button>Add to Basket</button>
        </div>
      </div>
    </div>
  )
}

export default Product

// ⭐⭐⭐⭐ 16,350 ratings