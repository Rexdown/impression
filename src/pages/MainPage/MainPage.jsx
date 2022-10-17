import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ProductListSlider from '../../components/ProductListSlider/ProductListSlider';
import Review from '../../components/Review/Review';
import { forWhomCards, advantages, presentsCards, workshopsCards, productsWorkshopsList, productsSetsList, reviewsList, mainAboutadvantages } from '../../constants'

import mainBg from '../../assets/imgs/main-bg.png'
import play from '../../assets/icons/play-white.svg'
import arrow from '../../assets/icons/arrow.svg'

import './MainPage.scss';


const CardForWhom = (url, txt) => {
  return (
    <Link className="forWhom__card" to="/products">
      <img src={url} alt={txt} className="forWhom__card-img" />
      <p className="forWhom__card-text">{txt}</p>
    </Link>
  );
};

const Advantage = (url, title, txt) => {
  return (
    <div className="advantages__item">
      <img src={url} alt={title} className="advantages__item-icon" />
      <div className="advantages__item__content">
        <h3 className="advantages__item__content-title">{title}</h3>
        <p className="advantages__item__content-text">{txt}</p>
      </div>
    </div>
  );
};

const PresentCard = (url, txt, count) => {
  return (
    <Link className="presents__card" to="/products">
      <img src={url} alt={txt} className="presents__card-img" />
      <p className="presents__card-text">{txt}</p>
      <p className="presents__card-count">{count}</p>
    </Link>
  );
};

const AdvantageAbout = (url, title, txt) => {
  return (
    <div className="mainAbout__item">
      <img src={url} alt={title} className="mainAbout__item-icon" />
      <div className="mainAbout__item__content">
        <h3 className="mainAbout__item__content-title">{title}</h3>
        <p className="mainAbout__item__content-text">{txt}</p>
      </div>
    </div>
  );
};

function MainPage() {
  return (
    <div className="mainPage">
      <div className="mainPage__hello container">
        <div className="mainPage__hello__content">
          <h2 className="mainPage__hello__content-title">
            Подарки впечатления
          </h2>
          <p className="mainPage__hello__content-text">
            Дарите яркие эмоции и отличное настроение
          </p>
          <button className="mainPage__hello__content-btn">
            Как это работает?
          </button>
        </div>
      </div>

      <div className="forWhom container">
        <h2 className="forWhom-title">Кому дарим?</h2>
        <div className="forWhom__box">
          {forWhomCards.map((item) => CardForWhom(item.url, item.txt))}
        </div>
      </div>

      <div className="advantages container">
        <div className="advantages__box">
          {advantages.map((item) => Advantage(item.url, item.title, item.txt))}
        </div>
      </div>

      <div className="presents container">
        <h2 className="presents-title">Что дарим?</h2>
        <div className="presents__box">
          {presentsCards.map((item) => PresentCard(item.url, item.txt, item.count))}
        </div>
      </div>

      <div className="presents container">
        <h2 className="presents-title">Подборка мастер-классов</h2>
        <div className="presents__box">
          {workshopsCards.map((item) => PresentCard(item.url, item.txt, item.count))}
        </div>
      </div>

      <div className="mainProdutList container">
        <h2 className="mainProdutList-title">Лучшее из раздела “Мастер-класс”</h2>
        <ProductListSlider productsList={productsWorkshopsList} />
      </div>

      <div className="mainProdutList container">
        <h2 className="mainProdutList-title">Лучшее из раздела “Наборы”</h2>
        <ProductListSlider productsList={productsSetsList} />
      </div>

      <div className="mainReviews container">
        <h2 className="mainReviews-title">Восторженные отзывы</h2>
        <div className="mainReviews__box">
          {reviewsList.map((review) => <Review review={review} />)}
        </div>
      </div>

      <div className="mainAbout">
        <div className="mainAbout__box container">
          <h2 className="mainAbout-title">
            Мы поможем вам сделать отличный подарок
          </h2>
          <div className="mainAbout__itemsList">
            {mainAboutadvantages.map((item) => AdvantageAbout(item.url, item.title, item.txt))}
          </div>
        </div>
        <img src={mainBg} alt="Bg img" className="mainAbout-img" />
      </div>

      <div className="howItWorks container">
        <div className="howItWorks__header">
          <div className="howItWorks__header-title">Как это работает?</div>
          <div className="howItWorks__header__btn">
            <div className="howItWorks__header__btn__content">
              <img src={play} alt="Play" className="howItWorks__header__btn__content-icon" />
              <p className="howItWorks__header__btn__content-text">Смотреть видео</p>
            </div>
          </div>
        </div>

        <div className="howItWorks__steps">
          <div className="howItWorks__steps__item">
            <p className="howItWorks__steps__item-number">1</p>
            <div className="howItWorks__steps__item__description">
              <p className="howItWorks__steps__item__description-text">
                Выбираете подарочный сертификат
              </p>
            </div>
          </div>
          <img src={arrow} alt="Arrow" className="howItWorks__step-arrow" />
          <div className="howItWorks__steps__item">
            <p className="howItWorks__steps__item-number">2</p>
            <div className="howItWorks__steps__item__description">
              <p className="howItWorks__steps__item__description-text">
                Дарите сертификат получателю
              </p>
            </div>
          </div>
          <img src={arrow} alt="Arrow" className="howItWorks__step-arrow" />
          <div className="howItWorks__steps__item">
            <p className="howItWorks__steps__item-number">3</p>
            <div className="howItWorks__steps__item__description">
              <p className="howItWorks__steps__item__description-text">
                Получатель активирует подарок
              </p>
            </div>
          </div>
          <img src={arrow} alt="Arrow" className="howItWorks__step-arrow" />
          <div className="howItWorks__steps__item">
            <p className="howItWorks__steps__item-number">4</p>
            <div className="howItWorks__steps__item__description">
              <p className="howItWorks__steps__item__description-text">
                Яркие впечатления гарантированы
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
