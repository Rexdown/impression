import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import horseBg from '../../assets/imgs/horse-bg.png';
import play from '../../assets/icons/playVideo.svg';
import arrow from '../../assets/icons/catalog-arrow-white.svg'
import star from '../../assets/icons/fillStar.svg'

import 'swiper/css';
import 'swiper/css/navigation';

import './ProductItemPageHeader.scss';

function ProductItemPageHeader() {  
  return (
    <div className="productItemPageHeader">
      <div className="productItemPageHeader__info">
        <div className="productItemPageHeader__info__path">
          <p className="productItemPageHeader__info__path-text">Главная</p>
          <img src={arrow} alt="arrow" className="productItemPageHeader__info__path-arrow" />
          <p className="productItemPageHeader__info__path-text">Каталог</p>
          <img src={arrow} alt="arrow" className="productItemPageHeader__info__path-arrow" />
          <p className="productItemPageHeader__info__path-text">Мастер классы</p>
          <img src={arrow} alt="arrow" className="productItemPageHeader__info__path-arrow" />
          <p className="productItemPageHeader__info__path-text">Активный отдых</p>
        </div>

        <h3 className="productItemPageHeader__info-title">Прогулка на лошадях</h3>

        <div className="productItemPageHeader__info__score">
          <img src={star} alt="star" className="productItemPageHeader__info__score-star" />
          <img src={star} alt="star" className="productItemPageHeader__info__score-star" />
          <img src={star} alt="star" className="productItemPageHeader__info__score-star" />
          <img src={star} alt="star" className="productItemPageHeader__info__score-star" />
          <img src={star} alt="star" className="productItemPageHeader__info__score-star" />
          <p className="productItemPageHeader__info__score-value">4,9</p>
        </div>

        <p className="productItemPageHeader__info-reviews">382 восторженных отзыва</p>
      </div>

      <img src={play} alt="play" className="productItemPageHeader-play" />

      <Swiper
        className='productItemPageHeader__slider'
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide><img src={horseBg} alt="horseBg" className="productItemPageHeader__slider-img" /></SwiperSlide>
        <SwiperSlide><img src={horseBg} alt="horseBg" className="productItemPageHeader__slider-img" /></SwiperSlide>
        <SwiperSlide><img src={horseBg} alt="horseBg" className="productItemPageHeader__slider-img" /></SwiperSlide>
        <SwiperSlide><img src={horseBg} alt="horseBg" className="productItemPageHeader__slider-img" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductItemPageHeader;
