import React, { useState, useEffect } from 'react';

import packaging from '../../assets/imgs/packaging.png';
import question from '../../assets/icons/question.svg';
import arrow from '../../assets/icons/catalog-arrow.svg';
import star from '../../assets/icons/fillStar.svg';

import './BuyCard.scss';

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

const packagingArr = [
  {
    id: 1,
    name: 'Электронный сертификат',
    text: '(бесплатно)',
  },
  {
    id: 2,
    name: 'Подарочная упаковка',
    text: '(450₽)',
  },
]

function BuyCard() {  
  const [activeSet, setActiveSet] = useState(3);
  const [activePackaging, setActivePackaging] = useState(1);

  return (
    <div className="buyCard">
        <h3 className="buyCard-title">Прогулка на лощадях</h3>

        <div className="buyCard__info">
        <div className="buyCard__info-price">3 495 ₽</div>
        <div className="buyCard__info__score">
            <p className="buyCard__info__score-value">4,9</p>
            <img src={star} alt="star" className="buyCard__info__score-star" />
            <img src={star} alt="star" className="buyCard__info__score-star" />
            <img src={star} alt="star" className="buyCard__info__score-star" />
            <img src={star} alt="star" className="buyCard__info__score-star" />
            <img src={star} alt="star" className="buyCard__info__score-star" />
        </div>
        </div>
        <div className="buyCard__info">
        <div className="buyCard__info-oldPrice">3 700 ₽</div>
        <p className="buyCard__info-reviews">382 отзыва</p>
        </div>

        <div className="buyCard__set">
            <h4 className="buyCard__set-title">Комплектация</h4>
            {sets.map((item) => (
                <div
                className="buyCard__set__item"
                onClick={() => setActiveSet(item.id)}
                >
                    <div 
                        className={`buyCard__set__item-checkbox${activeSet === item.id ? '-active' : ''}`} 
                    />
                    <p className="buyCard__set__item-name">{item.name}</p>
                    <p className="buyCard__set__item-text">{item.text}</p>
                </div>
            ))}
            <div className="buyCard__set__showMore">
                <p className="buyCard__set__showMore-text">Показать еще</p>
                <img src={arrow} alt="arrow" className="buyCard__set__showMore-arrow" />
            </div>
        </div>

        <div className="buyCard__packaging">
            <div className="buyCard__packaging__header">
                <h4 className="buyCard__packaging__header-title">Упаковка</h4>
                <img src={question} alt="question" className="buyCard__packaging__header-question" />
                <img src={packaging} alt='packaging' className="buyCard__packaging__header-hint" />
            </div>
            {packagingArr.map((item) => (
                <div
                className="buyCard__set__item"
                onClick={() => setActivePackaging(item.id)}
                >
                <div 
                    className={`buyCard__set__item-checkbox${activePackaging === item.id ? '-active' : ''}`} 
                />
                <p className="buyCard__set__item-name">{item.name}</p>
                <p className="buyCard__set__item-text">{item.text}</p>
                </div>
            ))}
        </div>

        <button className="buyCard-button">Купить</button>

        <a href="#" className="buyCard-moreInfo">Подробнее о доставке</a>
    </div>
  );
}

export default BuyCard;
