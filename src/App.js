import React, { useState, useEffect  } from 'react';
import { Routes, Route, useLocation  } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductItemPage from './pages/ProductItemPage/ProductItemPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import HowItWork from './pages/HowItWork/HowItWork';
import ActivatePage from './pages/ActivatePage/ActivatePage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import QualityPage from './pages/QualityPage/QualityPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import CompanyPartyPage from './pages/CompanyPartyPage/CompanyPartyPage';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product_check" element={<ProductItemPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="how_it_work" element={<HowItWork />} />
        <Route path="activate" element={<ActivatePage />} />
        <Route path="delivery" element={<DeliveryPage />} />
        <Route path="quality" element={<QualityPage />} />
        <Route path="about_us" element={<AboutUsPage />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="company_party" element={<CompanyPartyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
