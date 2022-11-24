import React, { useState } from 'react';

import ok from '../../assets/icons/ok.svg';
import arrow from '../../assets/icons/arrow.svg'
import manager from '../../assets/imgs/manager.png'
import play from '../../assets/icons/play-white.svg'

import holidayOne from '../../assets/imgs/holiday-1.png';
import holidayTwo from '../../assets/imgs/holiday-2.png';
import holidayThree from '../../assets/imgs/holiday-3.png';
import holidayFour from '../../assets/imgs/holiday-4.png';

import organizationOne from '../../assets/imgs/organization-1.png';
import organizationTwo from '../../assets/imgs/organization-2.png';
import organizationThree from '../../assets/imgs/organization-3.png';
import organizationFour from '../../assets/imgs/organization-4.png';

import phone from '../../assets/icons/manager-phone.svg'
import email from '../../assets/icons/manager-email.svg'
import vk from '../../assets/icons/manager-vk.svg'
import whatsapp from '../../assets/icons/manager-whatsapp.svg'
import telegram from '../../assets/icons/manager-telegram.svg'

import { advantages } from '../../constants'

import './CompanyPartyPage.scss';

const Advantage = (item) => {
  return (
    <div className="companyPartyPage__line__item">
      <img src={item.url} alt={item.title} className="companyPartyPage__line__item-icon" />
      <div className="companyPartyPage__line__item__content">
        <h3 className="companyPartyPage__line__item__content-title">{item.title}</h3>
        <p className="companyPartyPage__line__item__content-text">{item.txt}</p>
      </div>
    </div>
  );
};

function CompanyPartyPage() {
  const [activeApproval, setActiveApproval] = useState(false);

  return (
    <div className="companyPartyPage">
      <h2 className="companyPartyPage-title">Подарки корпоративным клиентам</h2>
      <p className="companyPartyPage-text">
        Ищете оригинальный способ поздравить коллег или корпоративных клиентов? Подарите им незабываемые эмоции!
        Каждый набор формируется индивидуально, согласно размерам бюджета и вашим пожеланиям.
      </p>
      <button className="companyPartyPage-btn">Заказать подарок</button>

      <h2 className="companyPartyPage-subtitle">Подарки сотрудникам к празднику</h2>
      <div className="companyPartyPage__holidays">
        <div className="companyPartyPage__holidays__item">
          <img src={holidayOne} alt="img" className="companyPartyPage__holidays__item-img" />
          <h4 className="companyPartyPage__holidays__item-title">Новый год</h4>
        </div>
        <div className="companyPartyPage__holidays__item">
          <img src={holidayTwo} alt="img" className="companyPartyPage__holidays__item-img" />
          <h4 className="companyPartyPage__holidays__item-title">23 февраля</h4>
        </div>
        <div className="companyPartyPage__holidays__item">
          <img src={holidayThree} alt="img" className="companyPartyPage__holidays__item-img" />
          <h4 className="companyPartyPage__holidays__item-title">8 марта</h4>
        </div>
        <div className="companyPartyPage__holidays__item">
          <img src={holidayFour} alt="img" className="companyPartyPage__holidays__item-img" />
          <h4 className="companyPartyPage__holidays__item-title">День рождения</h4>
        </div>
      </div>

      <div className="companyPartyPage__line">
        {advantages.map((item) => (
          Advantage(item)
        ))}
      </div>

      <h2 className="companyPartyPage-subtitle">Организация корпоративных мероприятий</h2>
      <p className="companyPartyPage-text">
        Организовываем корпоративные мероприятия на любое количество гостей в соответствии с вашими пожеланиями.
      </p>

      <div className="companyPartyPage__organization">
        <div className="companyPartyPage__organization__item">
          <img src={organizationOne} alt="img" className="companyPartyPage__organization__item-img" />
          <h4 className="companyPartyPage__organization__item-title">Отдых на понтонном катере</h4>
          <button className="companyPartyPage__organization__item-btn">Посмотреть отзыв</button>
        </div>
        <div className="companyPartyPage__organization__item">
          <img src={organizationTwo} alt="img" className="companyPartyPage__organization__item-img" />
          <h4 className="companyPartyPage__organization__item-title">Сафари на военной технике</h4>
          <button className="companyPartyPage__organization__item-btn">Посмотреть отзыв</button>
        </div>
        <div className="companyPartyPage__organization__item">
          <img src={organizationThree} alt="img" className="companyPartyPage__organization__item-img" />
          <h4 className="companyPartyPage__organization__item-title">Пейнтбол для коллектива</h4>
          <button className="companyPartyPage__organization__item-btn">Посмотреть отзыв</button>
        </div>
        <div className="companyPartyPage__organization__item">
          <img src={organizationFour} alt="img" className="companyPartyPage__organization__item-img" />
          <h4 className="companyPartyPage__organization__item-title">Картинг для сотрудников</h4>
          <button className="companyPartyPage__organization__item-btn">Посмотреть отзыв</button>
        </div>
      </div>

      <div className="companyPartyPage__contacts">
        <div className="companyPartyPage__contacts__gift">
          <h4 className="companyPartyPage__contacts__gift-title">Заказать подарок</h4>
          <p className="companyPartyPage__contacts__gift-text">
            Оставьте свои контакты и наш специалист поможет вам с подбором и заказом подарка
          </p>
          <form class="companyPartyPage__contacts__gift__form">
            <div class="companyPartyPage__contacts__gift__form-item">
              <input type="text" class="companyPartyPage__contacts__gift__form-input" required />
              <label class="companyPartyPage__contacts__gift__form-label">Имя</label>
            </div>
          </form>
          <form class="companyPartyPage__contacts__gift__form">
            <div class="companyPartyPage__contacts__gift__form-item">
              <input type="text" class="companyPartyPage__contacts__gift__form-input" required />
              <label class="companyPartyPage__contacts__gift__form-label">Номер телефона</label>
            </div>
          </form>
          <form class="companyPartyPage__contacts__gift__form">
            <div class="companyPartyPage__contacts__gift__form-item">
              <input type="text" class="companyPartyPage__contacts__gift__form-input" required />
              <label class="companyPartyPage__contacts__gift__form-label">Ваш комментарий</label>
            </div>
          </form>
          <button className="companyPartyPage__contacts__gift-btn">Заказать звонок</button>
          <div className="companyPartyPage__contacts__gift__approval">
            <div 
              className={`companyPartyPage__contacts__gift__approval-checkbox${activeApproval ? '-active' : ''}`}
              onClick={() => setActiveApproval(!activeApproval)}
            >
              <img src={ok} alt="ok" className="companyPartyPage__contacts__gift__approval-ok" />
            </div>
            <p className="companyPartyPage__contacts__gift__approval-text">
              Я даю согласие на обработку
            </p>
            <a href='#' className="companyPartyPage__contacts__gift__approval-text-red">
              персональных данных 
            </a>
          </div>
        </div>

        <div className="companyPartyPage__contacts__manager">
          <h4 className="companyPartyPage__contacts__manager-title">Или свяжитесь с нами </h4>
          <p className="companyPartyPage__contacts__manager-text">Ваш личный менеджер:</p>
          <div className="companyPartyPage__contacts__manager__block">
            <img src={manager} alt="Manager" className="companyPartyPage__contacts__manager__block-photo" />
            <div className="companyPartyPage__contacts__manager__block__content">
              <p className="companyPartyPage__contacts__manager__block__content-name">Александра</p>
              <div className="companyPartyPage__contacts__manager__block__content__social">
                <img src={phone} alt="icon" className="companyPartyPage__contacts__manager__block__content__social-icon" />
                <p className="companyPartyPage__contacts__manager__block__content__social-text">+7 (977) 193-69-90</p>
              </div>
              <div className="companyPartyPage__contacts__manager__block__content__social">
                <img src={email} alt="icon" className="companyPartyPage__contacts__manager__block__content__social-icon" />
                <p className="companyPartyPage__contacts__manager__block__content__social-text">sale@vpechatlenie.ru</p>
              </div>
              <div className="companyPartyPage__contacts__manager__block__content__social">
                <img src={vk} alt="icon" className="companyPartyPage__contacts__manager__block__content__social-icon" />
                <p className="companyPartyPage__contacts__manager__block__content__social-text">VKONTAKTE</p>
              </div>
              <div className="companyPartyPage__contacts__manager__block__content__social">
                <img src={whatsapp} alt="icon" className="companyPartyPage__contacts__manager__block__content__social-icon" />
                <p className="companyPartyPage__contacts__manager__block__content__social-text">WhatsApp</p>
              </div>
              <div className="companyPartyPage__contacts__manager__block__content__social">
                <img src={telegram} alt="icon" className="companyPartyPage__contacts__manager__block__content__social-icon" />
                <p className="companyPartyPage__contacts__manager__block__content__social-text last-social-item">Telegram</p>
              </div>
              <p className="companyPartyPage__contacts__manager__block__content-days">пн-пт</p>
              <p className="companyPartyPage__contacts__manager__block__content-time">09:00 - 18:00</p>
              <p className="companyPartyPage__contacts__manager__block__content-days">сб-вс</p>
              <p className="companyPartyPage__contacts__manager__block__content-time">10:00 - 15:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="howItWorks container">
        <div className="howItWorks__header">
          <div className="howItWorks__header-title">Как это работает?</div>
          <div className="howItWorks__header__btn">
            <div className="howItWorks__header__btn__content">
              <img src={play} alt="Play" className="howItWorks__header__btn__content-icon" />
              <p className="howItWorks__header__btn__content-text">Смотреть видео</p>
            </div>
          </div>
        </div>

        <div className="howItWorks__steps">
          <div className="howItWorks__steps__item">
            <p className="howItWorks__steps__item-number">1</p>
            <div className="howItWorks__steps__item__description">
              <p className="howItWorks__steps__item__description-text">
                Выбираете подарочный сертификат
              </p>
            </div>
          </div>
          <img src={arrow} alt="Arrow" className="howItWorks__step-arrow" />
          <div className="howItWorks__steps__item">
            <p className="howItWorks__steps__item-number">2</p>
            <div className="howItWorks__steps__item__description">
              <p className="howItWorks__steps__item__description-text">
                Дарите сертификат получателю
              </p>
            </div>
          </div>
          <img src={arrow} alt="Arrow" className="howItWorks__step-arrow" />
          <div className="howItWorks__steps__item">
            <p className="howItWorks__steps__item-number">3</p>
            <div className="howItWorks__steps__item__description">
              <p className="howItWorks__steps__item__description-text">
                Получатель активирует подарок
              </p>
            </div>
          </div>
          <img src={arrow} alt="Arrow" className="howItWorks__step-arrow" />
          <div className="howItWorks__steps__item">
            <p className="howItWorks__steps__item-number">4</p>
            <div className="howItWorks__steps__item__description">
              <p className="howItWorks__steps__item__description-text">
                Яркие впечатления гарантированы
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPartyPage;
