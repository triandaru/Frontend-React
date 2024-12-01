import React from 'react';
import Header from './components/Header';
import Beranda from './components/Beranda';
import Features from './components/Features';
import KendaraanTipe from './components/KendaraanTipe';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';


import './styles/styles.css';
import './styles/seet.css';
import "./Beranda.css"; // Pastikan membuat file CSS terpisah untuk gaya modal

function App() {
  return (
    <div id="page-top">
      <Header />
      <Beranda />
      <Features />
      <KendaraanTipe />
      <Products />
      <Gallery />
      <Footer />
      {/* <ContactModal /> */}
    </div>
  );
}

export default App;
