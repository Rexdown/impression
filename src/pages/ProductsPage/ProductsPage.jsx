import React, { useState, useEffect } from 'react';

import Review from '../../components/Review/Review';

import { forWhomNav, themeNav, stocksNav, fullWhorckShopsList, reviewsList } from '../../constants'
import arrow from '../../assets/icons/sort-arrow.svg'

import './ProductsPage.scss';
import ProductFullItem from '../../components/ProductFullItem/ProductFullItem';

const NavItem = (url, text) => {
  return (
    <div className="productsPage__header__navBox__item">
      <div className="productsPage__header__navBox__item__content">
        <img src={url} alt={text} className="productsPage__header__navBox__item__content-icon" />
        <p className="productsPage__header__navBox__item__content-text">{text}</p>
      </div>
    </div>
  );
};

function ProductsPage() {  
  const [activeCardComplectation, setActiveCardComplectation] = useState(0);

  const changeActiveComplectation = (id) => {
    if (activeCardComplectation !== id) {
      setActiveCardComplectation(id)
    } else {
      setActiveCardComplectation(0)
    }
  }

  return (
    <div className="productsPage">
      <div className="productsPage__header container">
        <div className="productsPage__header__sortBox">
          <div className="productsPage__header__sortBox__item">
            <div className="productsPage__header__sortBox__item__content">
              <p className="productsPage__header__sortBox__item__content-text">Цена</p>
              <img src={arrow} alt="arrow" className="productsPage__header__sortBox__item__content-icon" />
            </div>
          </div>
          <div className="productsPage__header__sortBox__item">
            <div className="productsPage__header__sortBox__item__content">
              <p className="productsPage__header__sortBox__item__content-text">Сортировка</p>
              <img src={arrow} alt="arrow" className="productsPage__header__sortBox__item__content-icon" />
            </div>
          </div>
        </div>
        <div className="productsPage__header__navBox">
          {forWhomNav.map((item) => NavItem(item.url, item.text))}
        </div>
        <div className="productsPage__header__navBox">
          {themeNav.map((item) => NavItem(item.url, item.text))}
        </div>
        <div className="productsPage__header__navBox">
          {stocksNav.map((item) => NavItem(item.url, item.text))}
        </div>
      </div>

      <div className="productsPage__hellow">
        <div className="productsPage__hellow__content container">
          <h2 className="productsPage__hellow__content-title">Мастер-класс</h2>
          <ul className="productsPage__hellow__content__list">
            <li className="productsPage__hellow__content__list-item">
            Экстремальные, спортивные, творческие мастер-классы на любой вкус;
            </li>
            <li className="productsPage__hellow__content__list-item">
            Высокое качество услуг, большое количество площадок с удобным расположением;
            </li>
            <li className="productsPage__hellow__content__list-item">
            Стильная упаковка и быстрая доставка вашего подарка.
            </li>
          </ul>
        </div>
      </div>

      <div className="productsPage__productList container">
        {fullWhorckShopsList.map((item) => 
          <ProductFullItem product={item} activeCardComplectation={activeCardComplectation} changeActiveComplectation={changeActiveComplectation} />
        )}
      </div>

      <div className="productsPage__reviews container">
        <h2 className="productsPage__reviews-title">Восторженные отзывы</h2>
        <div className="productsPage__reviews__box">
          {reviewsList.map((review) => <Review review={review} />)}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
