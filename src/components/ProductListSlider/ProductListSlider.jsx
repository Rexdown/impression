import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import ProductItem from '../ProductItem/ProdutItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ProductListSlider.scss';


function ProductListSlider( props ) {
  return (
    <div className="ProductListSlider">
      <div className="mainProdutList__slider">
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {props.productsList.map((product) => <SwiperSlide><ProductItem product={product} /></SwiperSlide>)}
          </Swiper>
        </div>
    </div>
  );
}

export default ProductListSlider;
