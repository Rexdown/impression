import React, { useState } from 'react';
import './Header.scss';

import logo from '../../assets/imgs/logo.svg'
import catalogIcon from '../../assets/icons/catalog_icon.svg'
import catalogArrow from '../../assets/icons/catalog-arrow.svg'
import search from '../../assets/icons/search.svg'
import shoppingCart from '../../assets/icons/shopping-cart.svg'

function Header() {
  const [activeCatalog, setActiveCatalog] = useState(false);

  return (
    <>
      <div className="header container">
        <div className="header__left">
          <img src={logo} alt="logo" className="header__left-logo" />
          <div 
            className="header__left__catalog" 
            onClick={() => setActiveCatalog(!activeCatalog)}
          >
            <img src={catalogIcon} alt="Catalog Icon" className="header__left__catalog-icon" />
            <p className="header__left__catalog-text">Каталог товаров</p>
            <img src={catalogArrow} alt="Catalog Arrow" className="header__left__catalog-arrow" />
          </div>
        </div>

        <ul className="header__nav">
          <li className="header__nav-item">О нас</li>
          <li className="header__nav-item">Как это работает</li>
          <li className="header__nav-item">Доставка</li>
          <li className="header__nav-item">Отзывы</li>
          <li className="header__nav-item">Служба качества</li>
          <li className="header__nav-item">Контакты</li>
        </ul>

        <div className="header__right">
          <button className="header__right-btn">Активация Сертификата</button>
          <img src={search} alt="search" className="header__right-icon" />
          <img src={shoppingCart} alt="Shopping Cart" className="header__right-icon" />
        </div>
      </div>

      <div className={`Catalog ${activeCatalog ? 'Catalog-active' : ''}`} />
    </>
  );
}

export default Header;
