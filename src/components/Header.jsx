import React, { useState } from "react";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const openNewTab = () => {
    window.open('https://wa.me/6281120056699', '_blank');
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
      <div className="container px-5">
        <a className="navbar-brand fw-bold" href="#page-top">
          <img className="app-badge" src="assets/img/logo3.png" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#features">Beranda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#tentang">Tentang Kami</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#produk">Produk</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#galeri">Galeri</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3" onClick={() => setShowModal(true)}>Kontak</a>
            </li>
          </ul>
          <button className="btn1 btn1-green rounded-pill px-3 mb-2 mb-lg-0" onClick={openNewTab}>
            <span className="d-flex align-items-center">
              <i className="bi-whatsapp me-2"></i>
              <span className="small">WhatsApp Kami</span>
            </span>
          </button>
        </div>
      </div>
    </nav>
    {/* Modal Custom */}
    {showModal && (
      <div className="custom-modal">
        <div className="custom-modal-content">
          <div className="custom-modal-header">
            <h2>Informasi Kontak</h2>
            <span
              className="custom-modal-close"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
          </div>
          <div className="custom-modal-body">
            <h3>Hubungi Kami</h3>
            <hr className="custom-underline" />
            <ul className="contact-list">
              <li>
                <i className="bi bi-telephone-fill"></i>
                Telepon: (022) 87301849
              </li>
              <li>
                <i className="bi bi-whatsapp"></i>
                Admin 1 Syifa: 081120056699
              </li>
              <li>
                <i className="bi bi-whatsapp"></i>
                Admin 2 Fikar: 081933860273
              </li>
              <li>
                <i className="bi bi-whatsapp"></i>
                Admin 3: 085794858427
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                Jl. Sapta Taruna blok A3 no.5 Terusan Buah Batu Bandung
              </li>
            </ul>
            <button
              className="btn1 btn1-green custom-modal-button"
              onClick={openNewTab}
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  );
}

export default Header;
