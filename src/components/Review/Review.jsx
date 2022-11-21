import React, { useState } from 'react';

import './Review.scss';

import emptyStar from '../../assets/icons/emptyStar.svg';
import fillStar from '../../assets/icons/fillStar.svg';


function Review( props ) {
  const review = props.review;
  const className = props?.className || ''

  return (
    <div className={`Review ${className}`}>
      <img src={review.url} alt="horse" className="Review-img" />
      <h3 className="Review-title">{review.title}</h3>
      <div className="Review__mark">
        <img src={review.stars >= 1 ? fillStar : emptyStar} alt="star" className="Review__mark-star" />
        <img src={review.stars >= 2 ? fillStar : emptyStar} alt="star" className="Review__mark-star" />
        <img src={review.stars >= 3 ? fillStar : emptyStar} alt="star" className="Review__mark-star" />
        <img src={review.stars >= 4 ? fillStar : emptyStar} alt="star" className="Review__mark-star" />
        <img src={review.stars >= 5 ? fillStar : emptyStar} alt="star" className="Review__mark-star" />
      </div>
      <div className="Review__dignities">
        {review.dignities.map((item) => <p className='Review__dignities-item'>{item}</p>)}
      </div>
      <div className="Review__content">
        <div className="Review__content__author">
          <p className="Review__content__author-name">{review.name}</p>
          <p className="Review__content__author-data">{review.data}</p>
        </div>
        <p className="Review__content__text">{review.text}</p>
      </div>
    </div>
  );
}

export default Review;
