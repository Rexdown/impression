/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { contacts } from '../../constants'
import logo from '../../assets/imgs/logo2.svg'
import yandex from '../../assets/imgs/yandex.svg'
import google from '../../assets/imgs/google.svg'
import vk from '../../assets/icons/vk.svg';
import youTube from '../../assets/icons/youTube.svg';
import fillStar from '../../assets/icons/fillStar.svg';
import halfStar from '../../assets/icons/halfStar.svg';

import './Footer.scss';

const ContactItem = (url, title, txt) => {
  return (
    <div className="footerContact">
      <div className="footerContact__header">
        <img src={url} alt={title} className="footerContact__header-icon" />
        <h3 className="footerContact__header-title">{title}</h3>
      </div>
      <p className="footerContact-text">{txt}</p>
    </div>
  );
};

function Footer() {
  return (
    <div className="footer container">
      <div className="footer__contacts">
        {contacts.map((item) => ContactItem(item.url, item.title, item.txt))}
      </div>
      <div className="footer__main">
        <div className="footer__main__copyright">
          <img src={logo} alt="logo" className="footer__main__copyright-logo" />
          <p className="footer__main__copyright-text">©2022 ИП Лазовская А.В.</p>
        </div>

        <div className="footer__rating">
          <div className="footer__rating__item">
            <img src={yandex} alt="yandex" className="footer__rating__item-logo" />
            <div className="footer__rating__item__stars">
              <img src={fillStar} alt="star" className="footer__rating__item__stars-star" />
              <img src={fillStar} alt="star" className="footer__rating__item__stars-star" />
              <img src={fillStar} alt="star" className="footer__rating__item__stars-star" />
              <img src={fillStar} alt="star" className="footer__rating__item__stars-star" />
              <img src={halfStar} alt="star" className="footer__rating__item__stars-star" />
              <p className="footer__rating__item__stars-mark">4,7</p>
            </div>
          </div>
          <div className="footer__rating__item">
            <img src={google} alt="google" className="footer__rating__item-logo" />
            <div className="footer__rating__item__stars">
              <img src={fillStar} alt="star" className="footer__rating__item__stars-star" />
              <img src={fillStar} alt="star" className="footer__rating__item__stars-star" />
              <img src={fillStar} alt="star" className="footer__rating__item__stars-star" />
              <img src={fillStar} alt="star" className="footer__rating__item__stars-star" />
              <img src={halfStar} alt="star" className="footer__rating__item__stars-star" />
              <p className="footer__rating__item__stars-mark">4,7</p>
            </div>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__links__social">
            <a href="#" className="footer__links__social-iconVk"><img src={vk} alt="vk"/></a>
            <a href='#' className="footer__links__social-iconTube"><img src={youTube} alt="youTube"/></a>
          </div>
          <a href='#' className="footer__links-item firstFooterLink">Подписатсья на рассылку</a>
          <a href='#' className="footer__links-item">Пользовательское соглашение</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
