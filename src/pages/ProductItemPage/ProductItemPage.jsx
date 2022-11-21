import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Review from '../../components/Review/Review'
import BuyCard from '../../components/BuyCard/BuyCard';
import ProductFullItem from '../../components/ProductFullItem/ProductFullItem';
import ProductItemPageHeader from '../../components/ProductItemPageHeader/ProductItemPageHeader';

import { navArr, accordionArr, DeliveryItems, productReviewsList, shortReviews, fullWhorckShopsList } from '../../constants';

import arrow from '../../assets/icons/arrow-mini.svg';
import plus from '../../assets/icons/plus.svg';
import wrap from '../../assets/icons/wrap.svg';
import play from '../../assets/icons/play-white.svg'
import certificate from '../../assets/icons/certificate.png';

import 'swiper/css';
import 'swiper/css/navigation';
import './ProductItemPage.scss';

const ColumnItem = (text) => {
  return (
    <div className="productItemPage__main__content__about__column__line">
      <div className="productItemPage__main__content__about__column__line-point" />
      <p className="productItemPage__main__content__about__column__line-text">{text}</p>
    </div>
  )
}

const WraperItem = (img, title, price, text) => {
  return (
    <div className="productItemPage__main__content__packaging__item">
      <img src={img} alt="icon" className="productItemPage__main__content__packaging__item-icon" />
      <div className="productItemPage__main__content__packaging__item__content">
        <h4 className="productItemPage__main__content__packaging__item__content-title">{title}</h4>
        <p className="productItemPage__main__content__packaging__item__content-price">{price}</p>
        <p className="productItemPage__main__content__packaging__item__content-text">{text}</p>
      </div>
    </div>
  )
}

const DeliveryItem = (number, title, text) => {
  return (
    <div className="productItemPage__main__content__packaging__delivery">
      <div className="productItemPage__main__content__packaging__delivery__header">
        <div className="productItemPage__main__content__packaging__delivery__header__number">
          <p className="productItemPage__main__content__packaging__delivery__header__number-value">{number}</p>
        </div>
        <h4 className="productItemPage__main__content__packaging__delivery__header-title">{title}</h4>
      </div>
      <p className="productItemPage__main__content__packaging__delivery-text">{text}</p>
    </div>
  )
}

function ProductItemPage() {  
  const [activeAccordion, setActiveAccordion] = useState(0); 
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="productItemPage">
      <ProductItemPageHeader />

      <div className="productItemPage__nav">
        {navArr.map((item) => (
          <p className="productItemPage__nav-item">{item.text}</p>
        ))}
      </div>

      <div className="productItemPage__main">
        <div className="productItemPage__main__content">
          <div className="productItemPage__main__content__about">
            <h3 className="productItemPage__main__content__about-title">О впечатлении</h3>
            <p className="productItemPage__main__content__about-text">
              Давно мечтали покататься на лошади? Отправляйтесь в романтичную прогулку, отдохните вдали от суеты в лесах 
              Подмосковья! Общение с лошадьми - чудесный способ снять стресс и отдохнуть от городской суеты.
            </p>
            <div className="productItemPage__main__content__about__info">
              <div className="productItemPage__main__content__about__column">
                <h4 className="productItemPage__main__content__about__column-title">В подарок входит:</h4>
                {ColumnItem('Индивидуальный урок верховой езды')}
                {ColumnItem('Инструктаж по технике безопасности')}
                {ColumnItem('Конная прогулка по парку в сопровождении инструктора')}
              </div>
              <div className="productItemPage__main__content__about__column">
                <h4 className="productItemPage__main__content__about__column-title">В чем фишка этого подарка?</h4>
                {ColumnItem('Общение с животными снижает стресс')}
                {ColumnItem('Кататься можно в любое время года')}
                {ColumnItem('Прогулка на свежем воздухе по живописной местности')}
              </div>
            </div>
          </div>

          <div className="productItemPage__main__content__details">
            <h3 className="productItemPage__main__content__details-title">Подробности</h3>
            {accordionArr.map((item) => (
              <>
                <div
                  className="productItemPage__main__content__details__accordion"
                  onClick={() => setActiveAccordion(activeAccordion !== item.id ? item.id : 0)}
                >
                  <div className="productItemPage__main__content__details__accordion-textBox">
                    <p className="productItemPage__main__content__details__accordion-icon">{item.icon}</p>
                    <p className="productItemPage__main__content__details__accordion-text">{item.text}</p>
                  </div>
                  <img src={plus} alt="plus" className={`productItemPage__main__content__details__accordion-plus${activeAccordion === item.id ? '-active' : ''}`} />
                </div>
                <div className={`productItemPage__main__content__details__accordion__more${activeAccordion === item.id ? '-active' : ''}`}>
                  <ul className={`productItemPage__main__content__details__accordion__more-list${activeAccordion === item.id ? '-active' : ''}`}>
                    {item.more.map((txt) => (
                      <li>{txt}</li>
                    ))}
                  </ul>
                </div>
              </>
            ))}
          </div>

          <div className="productItemPage__main__content__packaging">
            <h3 className="productItemPage__main__content__packaging-title">Упаковка</h3>
            <p className="productItemPage__main__content__packaging-text">
              Вы можете выбрать один из двух вариантов упаковки во время оформления заказа
            </p>
            {WraperItem(
              wrap,
              'Подарочная упаковка',
              '350 ₽',
              `Сертификат выполнен на плотной бумаге и содержит в себе всю необходимую информацию о подарке 
              (название, уникальный номер и дату продажи). Упакован в стильный конверт из приятного материала.`
            )}
            {WraperItem(
              certificate,
              'Электронный сертификат',
              'Бесплатно',
              'Вы можете отправить его на e-mail получателю. Сертификат также можно распечатать и вручить лично.'
            )}
            <p className="productItemPage__main__content__packaging-textAfter">
              У нас своя курьерская служба. Это позволяет нам обеспечивать быструю 
              и своевременную доставку по Москве и ближайшей области.
            </p>
            {DeliveryItems.map((item) => (
              DeliveryItem(item.num, item.title, item.text)
            ))}
          </div>

          <div className="productItemPage__main__content__howItWork">
            <h3 className="productItemPage__main__content__howItWork-title">Как это работает?</h3>
            <div className="productItemPage__main__content__howItWork__steps">
              <div className="productItemPage__main__content__howItWork__steps__item">
                <p className="productItemPage__main__content__howItWork__steps__item-num">1</p>
                <p className="productItemPage__main__content__howItWork__steps__item-text">
                  Выбираете подарочный сертификат
                </p>
              </div>
              <img src={arrow} alt="arrow" className="productItemPage__main__content__howItWork__steps-arrow" />
              <div className="productItemPage__main__content__howItWork__steps__item">
                <p className="productItemPage__main__content__howItWork__steps__item-num">2</p>
                <p className="productItemPage__main__content__howItWork__steps__item-text">
                  Дарите сертификат получателю
                </p>
              </div>
              <img src={arrow} alt="arrow" className="productItemPage__main__content__howItWork__steps-arrow" />
              <div className="productItemPage__main__content__howItWork__steps__item">
                <p className="productItemPage__main__content__howItWork__steps__item-num">3</p>
                <p className="productItemPage__main__content__howItWork__steps__item-text">
                  Получатель активирует подарок
                </p>
              </div>
              <img src={arrow} alt="arrow" className="productItemPage__main__content__howItWork__steps-arrow" />
              <div className="productItemPage__main__content__howItWork__steps__item">
                <p className="productItemPage__main__content__howItWork__steps__item-num">4</p>
                <p className="productItemPage__main__content__howItWork__steps__item-text">
                  Яркие впечатления гарантированы
                </p>
              </div>
            </div>
            <div className="productItemPage__main__content__howItWork__btn">
              <div className="productItemPage__main__content__howItWork__btn__content">
                <img src={play} alt="Play" className="productItemPage__main__content__howItWork__btn__content-icon" />
                <p className="productItemPage__main__content__howItWork__btn__content-text">Смотреть видео</p>
              </div>
            </div>
          </div>

          <div className="productItemPage__main__content__location">
            <h3 className="productItemPage__main__content__location__title">
              <p className="productItemPage__main__content__location__title-name">Где проходит</p>
              <p className="productItemPage__main__content__location__title-count">(2)</p>
            </h3>

            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab6f77e1ba01817debd940a89ab6dff60b01f2b36df552b768f100693acb36b7b&amp;source=constructor" width="730" height="450" frameborder="0"></iframe>
          </div>
        </div>
        <BuyCard />
      </div>

      <div className="productItemPage__reviews">
        <div className="productItemPage__reviews__title">
          <p className="productItemPage__reviews__title-name">Восторженные отзывы</p>
          <div className="productItemPage__reviews__title-count">(382)</div>
        </div>
        <Swiper
          className='productItemPage__reviews__slider'
          modules={[Navigation]}
          spaceBetween={60}
          slidesPerView={2}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {productReviewsList.map((item) => 
            <SwiperSlide>
                <Review review={item} className="bigReview" />
            </SwiperSlide>
          )}
        </Swiper>
        <div className='productItemPage__reviews__slider__prev' ref={prevRef} />
        <div className='productItemPage__reviews__slider__next' ref={nextRef} />

        <h3 className="productItemPage__reviews-subtitle">Если кратко:</h3>
        <div className="productItemPage__reviews__shortReviews">
          {shortReviews.map((item) => (
            <p className="productItemPage__reviews__shortReviews-item">{item}</p>
          ))}
        </div>
      </div>

      <div className="productItemPage__sets">
        <h2 className="productItemPage__sets-title">Этот подарок входит в наборы</h2>
        <div className="productItemPage__sets-list">
          <ProductFullItem product={fullWhorckShopsList[0]} className="ProductFullItem-big" />
          <ProductFullItem product={fullWhorckShopsList[2]} className="ProductFullItem-big" />
        </div>
      </div>
    </div>
  );
}

export default ProductItemPage;
