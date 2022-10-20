import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import emptyStar from '../../assets/icons/emptyStar.svg';
import fillStar from '../../assets/icons/fillStar.svg';
import arrow from '../../assets/icons/catalog-arrow.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ProductFullItem.scss';


function ProductFullItem( props ) {
  const [selectOption, setSelectOption] = useState('Максимальная (4 человека, 2 часа)');
  const options = ['Минимальная (1 человек, 1 час)', 'Средняя (2 человека, 2 часа)', 'Максимальная (4 человека, 2 часа)'];
  const product = props.product;

  return (
    <div className={`ProductFullItem ${product.isSet ? 'ProductFullItem-set' : ''}`}>
      <img src={product.url} alt="card img" className="ProductFullItem-img" />
      <div className="ProductFullItem__line">
        <div className="ProductFullItem__mark">
          <img src={product.stars >= 1 ? fillStar : emptyStar} alt="star" className="ProductFullItem__mark-star" />
          <img src={product.stars >= 2 ? fillStar : emptyStar} alt="star" className="ProductFullItem__mark-star" />
          <img src={product.stars >= 3 ? fillStar : emptyStar} alt="star" className="ProductFullItem__mark-star" />
          <img src={product.stars >= 4 ? fillStar : emptyStar} alt="star" className="ProductFullItem__mark-star" />
          <img src={product.stars === 5 ? fillStar : emptyStar} alt="star" className="ProductFullItem__mark-star" />
          <p className="ProductFullItem__mark-value">{product.mark}</p>
        </div>
        <p className="ProductFullItem-reviews">{`${product.reviews} отзыва`}</p>
      </div>

      <div className="ProductFullItem__tegs">
        {product.tegs.map((item) => (
          <div className="ProductFullItem__tegs__item">
            <img src={item.url} alt={item.text} className="ProductFullItem__tegs__item-icon" />
            <p className="ProductFullItem__tegs__item-text">{item.text}</p>
          </div>
        ))}
      </div>

      <h3 className="ProductFullItem-title">{product.title}</h3>
      <p className="ProductFullItem-text">
        {product.text}
        &nbsp;
        <a href="#">еще</a>
      </p>

      <div className="ProductFullItem__buy">
        <button className="ProductFullItem__buy-btn">Купить</button>
        <div className="ProductFullItem__buy__prices">
          <p className="ProductFullItem__buy__prices-newPrice">{`${product.newPrice} ₽`}</p>
          <p className="ProductFullItem__buy__prices-oldPrice">{`${product.oldPrice} ₽`}</p>
        </div>
      </div>

      {product.isSet 
        ? <div className="ProductFullItem__content">
            <h4 className="ProductFullItem__content-title">В набор входят:</h4>
            <Swiper
                modules={[Navigation,Scrollbar, A11y]}
                spaceBetween={25}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {product.mimiImgs.map((item) => 
                  <SwiperSlide className="ProductFullItem__content__slide">
                    <img src={item.url} alt="mini" />
                    <div className="ProductFullItem__content__slide__hint">
                      <p className="ProductFullItem__content__slide__hint-text">{item.title}</p>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
          </div>
        : <div 
            className={`ProductFullItem__complectation 
              ${props.activeCardComplectation === product.id 
                ? 'ProductFullItem__complectation-active' 
                : ''}`
              }
              onClick={() => props.changeActiveComplectation(product.id)}
            >
            <h4 className="ProductFullItem__complectation-title">Комплектация</h4>
            <p className="ProductFullItem__complectation-text">{selectOption}</p>
            <img 
              src={arrow} 
              alt="arrow" 
              className={`ProductFullItem__complectation-arrow 
                ${props.activeCardComplectation === product.id 
                ? 'ProductFullItem__complectation-arrow-active' 
                : ''}`
              } 
            />
            
            <div 
              className={`ProductFullItem__complectation__select 
                ${props.activeCardComplectation === product.id 
                  ? 'ProductFullItem__complectation__select-active' 
                  : ''}`
              }
            >
              {options.map((option) => (
                <p className="ProductFullItem__complectation__select-option"
                  onClick={() => setSelectOption(option)}
                >
                  {option}
                </p>
              ))}
            </div>
          </div>
      }
    </div>
  );
}

export default ProductFullItem;
