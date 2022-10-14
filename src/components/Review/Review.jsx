import React, { useState } from 'react';

import './Review.scss';

import horseReview from '../../assets/imgs/horseReview.png';
import emptyStar from '../../assets/icons/emptyStar.svg';
import fillStar from '../../assets/icons/fillStar.svg';


function Review( props ) {
  const review = props.review;

  const dignities = ['Отличный инструктор', 'Доступность']

  return (
    <div className="Review">
      <img src={horseReview} alt="horse" className="Review-img" />
      <h3 className="Review-title">Прогулка на лошадях</h3>
      <div className="Review__mark">
        <img src={fillStar} alt="star" className="Review__mark-star" />
        <img src={fillStar} alt="star" className="Review__mark-star" />
        <img src={fillStar} alt="star" className="Review__mark-star" />
        <img src={emptyStar} alt="star" className="Review__mark-star" />
        <img src={emptyStar} alt="star" className="Review__mark-star" />
      </div>
      <div className="Review__dignities">
        {dignities.map((item) => <p className='Review__dignities-item'>{item}</p>)}
      </div>
      <div className="Review__content">
        <div className="Review__content__author">
          <p className="Review__content__author-name">Лена</p>
          <p className="Review__content__author-data">15 марта 2022</p>
        </div>
        <p className="Review__content__text">
          С детства обожаю лошадей! Поэтому очень обрадовалась сертификату на прогулку...
        </p>
      </div>
    </div>
  );
}

export default Review;
