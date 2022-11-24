import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { aboutUsCards, advantages, aboutUsAccordion, personalArr } from '../../constants';

import baloons from '../../assets/imgs/baloons.png';
import confetti from '../../assets/imgs/confetti.png';
import plus from '../../assets/icons/plus.svg';
import sliderOne from '../../assets/imgs/about-slider-1.png';
import sliderTwo from '../../assets/imgs/about-slider-2.png';
import sliderThree from '../../assets/imgs/about-slider-3.png';

import 'swiper/css';
import 'swiper/css/navigation';
import './AboutUsPage.scss';

const CardItem = (item) => {
  return (
    <div className="aboutUsPage__toWhom__card">
      <img src={item.url} alt="img" className="aboutUsPage__toWhom__card-img" />
      <h4 className="aboutUsPage__toWhom__card-title">{item.title}</h4>
      <p className="aboutUsPage__toWhom__card-text">{item.text}</p>
    </div>
  )
}

const Advantage = (item) => {
  return (
    <div className="aboutUsPage__line__item">
      <img src={item.url} alt={item.title} className="aboutUsPage__line__item-icon" />
      <div className="aboutUsPage__line__item__content">
        <h3 className="aboutUsPage__line__item__content-title">{item.title}</h3>
        <p className="aboutUsPage__line__item__content-text">{item.txt}</p>
      </div>
    </div>
  );
};

const AccordionItem = (item, activeLine, setActiveLine) => {
  return (
    <div 
      className="aboutUsPage__faq__line"
      onClick={() => setActiveLine(item.id !== activeLine ? item.id : 0)}
    >
      <div className="aboutUsPage__faq__line__content">
        <p className="aboutUsPage__faq__line__content-number">{item.number}</p>
        <p className="aboutUsPage__faq__line__content-ask">{item.ask}</p>
        <img src={plus} alt="plus" className={`aboutUsPage__faq__line__content-plus${activeLine === item.id ? '-active' : ''}`} />
      </div>
      <div className={`aboutUsPage__faq__line__answer${activeLine === item.id ? '-active' : ''}`}>
        <p className={`aboutUsPage__faq__line__answer-text${activeLine === item.id ? '-active' : ''}`}>
          {item.answer}
        </p>
      </div>
    </div>
  )
}

const PersonalItem = (item) => {
  return (
    <div className="aboutUsPage__personal__item">
      <img src={item.url} alt="ava" className="aboutUsPage__personal__item-ava" />
      <p className="aboutUsPage__personal__item-name">{item.name}</p>
      <p className="aboutUsPage__personal__item-post">{item.post}</p>
    </div>
  )
}

function AboutUsPage() {
  const [activeLine, setActiveLine] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="aboutUsPage">
      <div className="aboutUsPage__about">
        <div className="aboutUsPage__about__content">
            <h2 className="aboutUsPage__about__content-title">О нас</h2>
            <p className="aboutUsPage__about__content-text">
              Мы поможем Вам удивить своих коллег, друзей или близких невероятными, 
              потрясающими воображение подарками, каждый из которых — это восторг и приключение.
            </p>
            <p className="aboutUsPage__about__content-text">
              Ваш подарок обязательно запомнится на всю жизнь и останется одним из ярчайших воспоминаний!
            </p>
            <button className="aboutUsPage__about__content-btn">Заказать подарок</button>
        </div>
        <img src={baloons} alt="baloons" className="aboutUsPage__about-baloons" />
        <img src={confetti} alt="confetti" className="aboutUsPage__about-confrtti" />
      </div>

      <div className="aboutUsPage__toWhom">
        <h3 className="aboutUsPage__toWhom-title">Кому дарим?</h3>
        <div className="aboutUsPage__toWhom-list">
          {aboutUsCards.map((item) => (
            CardItem(item)
          ))}
        </div>
      </div>

      <div className="aboutUsPage__line">
        {advantages.map((item) => (
          Advantage(item)
        ))}
      </div>

      <div className="aboutUsPage__faq">
        <h3 className="aboutUsPage__faq-title">Частые вопросы</h3>
        <div className="aboutUsPage__faq__lines">
          {aboutUsAccordion.map((item) => (
            AccordionItem(item, activeLine, setActiveLine)
          ))}
        </div>
      </div>

      <div className="aboutUsPage-line">
        <h3 className="aboutUsPage-subtitle">Команда</h3>
        <button className="aboutUsPage-btn">Связаться с нами</button>
      </div>

      <div className="aboutUsPage__personal">
        {personalArr.map((item) => (
          PersonalItem(item)
        ))}
      </div>

      <div className="aboutUsPage__end">
        <h3 className="aboutUsPage__end-title">Работаем открыто</h3>
        <p className="aboutUsPage__end-text">
          Всегда помогаем нашим клиентам с выбором и контролируем качество каждого впечатления
        </p>

        <Swiper
          className='aboutUsPage__end__slider'
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          onSlideChange={(swiper) => setSlideCount(swiper.activeIndex + 1)}
          onSwiper={(swiper) => setSlideCount(swiper.activeIndex + 1)}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <img src={sliderOne} alt="slider img" className="aboutUsPage__end__slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderTwo} alt="slider img" className="aboutUsPage__end__slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderThree} alt="slider img" className="aboutUsPage__end__slider-img" />
          </SwiperSlide>
        </Swiper>
        <div className='aboutUsPage__end__slider__prev' ref={prevRef} />
        <p className="aboutUsPage__end__slider__counter">{`${slideCount} / 3`}</p>
        <div className='aboutUsPage__end__slider__next' ref={nextRef} />
      </div>
    </div>
  );
}

export default AboutUsPage;
