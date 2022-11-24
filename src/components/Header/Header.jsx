import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import logo from '../../assets/imgs/logo.svg'
import catalogIcon from '../../assets/icons/catalog_icon.svg'
import catalogArrow from '../../assets/icons/catalog-arrow.svg'
import search from '../../assets/icons/search.svg'
import shoppingCart from '../../assets/icons/shopping-cart.svg'

import { catalogForWhom, catalogOpenSpace, catalogTheme, catalogType, catalogOccasion } from '../../constants'

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
          <Link to="/" className="header__box__left-logo"><img src={logo} alt="logo" /></Link>
          <div 
            className="header__box__left__catalog" 
            onClick={() => setActiveCatalog(!activeCatalog)}
          >
            <img src={catalogIcon} alt="Catalog Icon" className="header__box__left__catalog-icon" />
            <p className="header__box__left__catalog-text">Каталог товаров</p>
            <img 
              src={catalogArrow} 
              alt="Catalog Arrow" 
              className={`header__box__left__catalog-arrow ${activeCatalog ? 'header__box__left__catalog-arrow-active' : ''}`} 
            />
          </div>
        </div>

        <ul className="header__box__nav">
          <Link to="about_us" className="header__box__nav-item">О нас</Link>
          <Link to="how_it_work" className="header__box__nav-item">Как это работает</Link>
          <Link to="delivery" className="header__box__nav-item">Доставка</Link>
          <li className="header__box__nav-item">Отзывы</li>
          <Link to="quality" className="header__box__nav-item">Служба качества</Link>
          <Link to="contacts" className="header__box__nav-item">Контакты</Link>
        </ul>

        <div className="header__box__right">
          <Link to="activate" className="header__box__right-btn">Активация Сертификата</Link>
          <img src={search} alt="search" className="header__box__right-icon" />
          <Link to="cart" className="header__box__right-icon">
            <img src={shoppingCart} alt="Shopping Cart" className="header__box__right-icon" />
          </Link>
        </div>
      </div>

      <div className={`catalog ${activeCatalog ? 'catalog-active' : ''} container`}>
        <div className={`catalog__column ${activeCatalog ? 'catalog__column-active' : ''}`}>
          <h2 className={`catalog__column-title ${activeCatalog ? 'catalog__column-title-active' : ''}`}>Для кого</h2>
          {catalogForWhom.map((item) => 
            <p className={`catalog__column-option ${activeCatalog ? 'catalog__column-option-active' : ''}`}>{item}</p>
          )}
          <h2 className={`catalog__column-title ${activeCatalog ? 'catalog__column-title-active' : ''} secondTitle`}>На открытом воздухе</h2>
          {catalogOpenSpace.map((item) => 
            <p className={`catalog__column-option ${activeCatalog ? 'catalog__column-option-active' : ''}`}>{item}</p>
          )}
        </div>
        <div className={`catalog__column ${activeCatalog ? 'catalog__column-active' : ''}`}>
          <h2 className={`catalog__column-title ${activeCatalog ? 'catalog__column-title-active' : ''}`}>Тематика</h2>
          {catalogTheme.map((item) => 
            <p className={`catalog__column-option ${activeCatalog ? 'catalog__column-option-active' : ''}`}>{item}</p>
          )}
        </div>
        <div className={`catalog__column ${activeCatalog ? 'catalog__column-active' : ''}`}>
          <h2 className={`catalog__column-title ${activeCatalog ? 'catalog__column-title-active' : ''}`}>Тип</h2>
          {catalogType.map((item) => 
            <p className={`catalog__column-option ${activeCatalog ? 'catalog__column-option-active' : ''}`}>{item}</p>
          )}
          <h2 className={`catalog__column-title ${activeCatalog ? 'catalog__column-title-active' : ''} secondTitle`}>Повод</h2>
          {catalogOccasion.map((item) => 
            <p className={`catalog__column-option ${activeCatalog ? 'catalog__column-option-active' : ''}`}>{item}</p>
          )}
        </div>
        <div className={`catalog__lastColumn ${activeCatalog ? 'catalog__lastColumn-active' : ''}`}>
            <Link 
              to='company_party' 
              className="catalog__lastColumn-generalOption"
              onClick={() => setActiveCatalog(!activeCatalog)}
            >
              Корпоративные
            </Link>
            <Link 
              to='products' 
              className="catalog__lastColumn-generalOption"
              onClick={() => setActiveCatalog(!activeCatalog)}
            >
              Все наборы
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
