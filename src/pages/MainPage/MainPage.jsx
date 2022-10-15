import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { forWhomCards, advantages } from '../../constants'
import './MainPage.scss';

const CardForWhom = (url, txt) => {
  return (
    <div className="forWhom__card">
      <img src={url} alt={txt} className="forWhom__card-img" />
      <p className="forWhom__card-text">{txt}</p>
    </div>
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

function MainPage() {
  return (
    <div className="mainPage">
      <Header />
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
    </div>
  );
}

export default MainPage;
