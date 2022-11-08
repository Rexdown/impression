import React, { useState, useEffect } from 'react';
import ProductItemPageHeader from '../../components/ProductItemPageHeader/ProductItemPageHeader';

import { navArr } from '../../constants';

import arrow from '../../assets/icons/catalog-arrow.svg'
import star from '../../assets/icons/fillStar.svg'

import './ProductItemPage.scss';

const sets = [
  {
    id: 1,
    name: 'Минимальная',
    text: '(1 495₽, 1 человек, 1 час)',
  },
  {
    id: 2,
    name: 'Средняя',
    text: '(2 495₽, 2 человека, 2 часа)',
  },
  {
    id: 3,
    name: 'Максимальная',
    text: '(3 495₽, 4 человека, 2 часа)',
  },
]

function ProductItemPage() {  
  const [activeSet, setActiveSet] = useState(3);

  return (
    <div className="productItemPage">
      <ProductItemPageHeader />

      <div className="productItemPage__nav">
        {navArr.map((item) => (
          <p className="productItemPage__nav-item">{item.text}</p>
        ))}
      </div>

      <div className="productItemPage__main">
        <div className="productItemPage__main__content"></div>
        <div className="productItemPage__main__productCard">
          <h3 className="productItemPage__main__productCard-title">Прогулка на лощадях</h3>

          <div className="productItemPage__main__productCard__info">
            <div className="productItemPage__main__productCard__info-price">3 495 ₽</div>
            <div className="productItemPage__main__productCard__info__score">
              <p className="productItemPage__main__productCard__info__score-value">4,9</p>
              <img src={star} alt="star" className="productItemPage__main__productCard__info__score-star" />
              <img src={star} alt="star" className="productItemPage__main__productCard__info__score-star" />
              <img src={star} alt="star" className="productItemPage__main__productCard__info__score-star" />
              <img src={star} alt="star" className="productItemPage__main__productCard__info__score-star" />
              <img src={star} alt="star" className="productItemPage__main__productCard__info__score-star" />
            </div>
          </div>
          <div className="productItemPage__main__productCard__info">
            <div className="productItemPage__main__productCard__info-oldPrice">3 700 ₽</div>
            <p className="productItemPage__main__productCard__info-reviews">382 отзыва</p>
          </div>

          <div className="productItemPage__main__productCard__set">
            <h4 className="productItemPage__main__productCard__set-title">Комплектация</h4>
            {sets.map((item) => (
              <div
                className="productItemPage__main__productCard__set__item"
                onClick={() => setActiveSet(item.id)}
              >
                <div 
                  className={`productItemPage__main__productCard__set__item-checkbox${activeSet === item.id ? '-active' : ''}`} 
                />
                <p className="productItemPage__main__productCard__set__item-name">{item.name}</p>
                <p className="productItemPage__main__productCard__set__item-text">{item.text}</p>
              </div>
            ))}
            <div className="productItemPage__main__productCard__set__showMore">
              <p className="productItemPage__main__productCard__set__showMore-text">Показать еще</p>
              <img src={arrow} alt="arrow" className="productItemPage__main__productCard__set__showMore-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItemPage;
