import React, { useState, useEffect } from 'react';
import BuyCard from '../../components/BuyCard/BuyCard';
import ProductItemPageHeader from '../../components/ProductItemPageHeader/ProductItemPageHeader';

import { navArr, accordionArr } from '../../constants';

import packaging from '../../assets/imgs/packaging.png';
import question from '../../assets/icons/question.svg';
import arrow from '../../assets/icons/catalog-arrow.svg';
import star from '../../assets/icons/fillStar.svg';
import plus from '../../assets/icons/plus.svg';

import './ProductItemPage.scss';

const ColumnItem = (text) => {
  return (
    <div className="productItemPage__main__content__about__column__line">
      <div className="productItemPage__main__content__about__column__line-point" />
      <p className="productItemPage__main__content__about__column__line-text">{text}</p>
    </div>
  )
}

function ProductItemPage() {  
  const [activeAccordion, setActiveAccordion] = useState(0); 

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
          </div>
        </div>
        <BuyCard />
      </div>
    </div>
  );
}

export default ProductItemPage;
