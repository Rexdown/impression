import React, { useState, useEffect } from 'react';
import BuyCard from '../../components/BuyCard/BuyCard';
import ProductItemPageHeader from '../../components/ProductItemPageHeader/ProductItemPageHeader';

import { navArr } from '../../constants';

import packaging from '../../assets/imgs/packaging.png';
import question from '../../assets/icons/question.svg';
import arrow from '../../assets/icons/catalog-arrow.svg';
import star from '../../assets/icons/fillStar.svg';

import './ProductItemPage.scss';

function ProductItemPage() {  
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
          
        </div>
        <BuyCard />
      </div>
    </div>
  );
}

export default ProductItemPage;
