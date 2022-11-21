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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
