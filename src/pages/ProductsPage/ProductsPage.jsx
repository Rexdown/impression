import React, { useState, useEffect } from 'react';

import Review from '../../components/Review/Review';
import ProductFullItem from '../../components/ProductFullItem/ProductFullItem';

import { forWhomNav, themeNav, stocksNav, fullWhorckShopsList, reviewsList, productAboutAdvantages } from '../../constants'

import snowboardBg from '../../assets/imgs/snowboard_about.png'
import arrow from '../../assets/icons/sort-arrow.svg'
import './ProductsPage.scss';

const alsoTabs = [
  {
    id: 1,
    text: 'Топ-10',
  },
  {
    id: 2,
    text: 'Новые',
  },
  {
    id: 3,
    text: 'Просмотренные',
  },
]

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
  const [activeAlsoTab, setActiveAlsoTab] = useState(1);

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

      <div className="productsPage__about">
        <div className="productsPage__about__box container">
          <h2 className="productsPage__about-title">
            Мы поможем вам сделать отличный подарок
          </h2>
          <p className="productsPage__about-text">
            Ваш подарок может стать исполнением долгожданной мечты или неожиданным приключением. 
            И он обязательно запомнится, потому что мы отвечаем за организацию программ и полноту впечатлений.
          </p>
          <div className="productsPage__about__itemsList">
            {productAboutAdvantages.map((item) => (
              <div className="productsPage__about__item">
                <img src={item.url} alt='icon' className="productsPage__about__item-icon" />
                <div className="productsPage__about__item__content">
                  <p className="productsPage__about__item__content-text">{item.txt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={snowboardBg} alt="Bg img" className="productsPage__about-img" />
      </div>

      <div className="productsPage__also container">
        <div className="productsPage__also__header">
          <h2 className="productsPage__also__header-title">
            Смотрите также
          </h2>
          <div className="productsPage__also__header__nav">
            {alsoTabs.map((item) => (
              <p 
                className={`productsPage__also__header__nav-item${item.id === activeAlsoTab ? '-active' : ''}`}
                onClick={() => setActiveAlsoTab(item.id)}
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>

        <div className="productsPage__productList productsPage__productList-also">
          {fullWhorckShopsList.slice(7, 10).map((item) => 
            <ProductFullItem product={item} activeCardComplectation={activeCardComplectation} changeActiveComplectation={changeActiveComplectation} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
