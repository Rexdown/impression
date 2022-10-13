import React, { useState } from 'react';

import './ProductItem.scss';

import emptyStar from '../../assets/icons/emptyStar.svg';
import fillStar from '../../assets/icons/fillStar.svg';


function ProductItem( props ) {
  const product = props.product;

  return (
    <div className="ProductItem">
      <img src={product.url} alt="card img" className="ProductItem-img" />
      <div className="ProductItem__line">
        <div className="ProductItem__mark">
          <img src={product.stars >= 1 ? fillStar : emptyStar} alt="star" className="ProductItem__mark-star" />
          <img src={product.stars >= 2 ? fillStar : emptyStar} alt="star" className="ProductItem__mark-star" />
          <img src={product.stars >= 3 ? fillStar : emptyStar} alt="star" className="ProductItem__mark-star" />
          <img src={product.stars >= 4 ? fillStar : emptyStar} alt="star" className="ProductItem__mark-star" />
          <img src={product.stars === 5 ? fillStar : emptyStar} alt="star" className="ProductItem__mark-star" />
          <p className="ProductItem__mark-value">{product.mark}</p>
        </div>
        <p className="ProductItem-reviews">{`${product.reviews} отзыва`}</p>
      </div>

      <h3 className="ProductItem-title">{product.title}</h3>
      <p className="ProductItem-text">
        {product.text}
        &nbsp;
        <a href="#">еще</a>
      </p>

      <div className="ProductItem__buy">
        <button className="ProductItem__buy-btn">Купить</button>
        <div className="ProductItem__buy__prices">
          <p className="ProductItem__buy__prices-newPrice">{`${product.newPrice} ₽`}</p>
          <p className="ProductItem__buy__prices-oldPrice">{`${product.oldPrice} ₽`}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
