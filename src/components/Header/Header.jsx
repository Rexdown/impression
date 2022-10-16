import React, { useState, useEffect } from 'react';
import './Header.scss';

import logo from '../../assets/imgs/logo.svg'
import catalogIcon from '../../assets/icons/catalog_icon.svg'
import catalogArrow from '../../assets/icons/catalog-arrow.svg'
import search from '../../assets/icons/search.svg'
import shoppingCart from '../../assets/icons/shopping-cart.svg'

function Header() {
  const [activeCatalog, setActiveCatalog] = useState(false);
  const html = document.getElementsByTagName('html')[0];

  useEffect(() => {
    html.style.overflow = activeCatalog ? 'hidden' : 'auto';
    html.style.paddingRight = activeCatalog ? '17px' : '0';
  }, [activeCatalog])
  
  return (
    <div className="header">
      <div className={`header__box container`}>
        <div className="header__box__left">
          <img src={logo} alt="logo" className="header__box__left-logo" />
          <div 
            className="header__box__left__catalog" 
            onClick={() => setActiveCatalog(!activeCatalog)}
          >
            <img src={catalogIcon} alt="Catalog Icon" className="header__box__left__catalog-icon" />
            <p className="header__box__left__catalog-text">Каталог товаров</p>
            <img src={catalogArrow} alt="Catalog Arrow" className="header__box__left__catalog-arrow" />
          </div>
        </div>

        <ul className="header__box__nav">
          <li className="header__box__nav-item">О нас</li>
          <li className="header__box__nav-item">Как это работает</li>
          <li className="header__box__nav-item">Доставка</li>
          <li className="header__box__nav-item">Отзывы</li>
          <li className="header__box__nav-item">Служба качества</li>
          <li className="header__box__nav-item">Контакты</li>
        </ul>

        <div className="header__box__right">
          <button className="header__box__right-btn">Активация Сертификата</button>
          <img src={search} alt="search" className="header__box__right-icon" />
          <img src={shoppingCart} alt="Shopping Cart" className="header__box__right-icon" />
        </div>
      </div>

      <div className={`catalog ${activeCatalog ? 'catalog-active' : ''}`} />
    </div>
  );
}

export default Header;
