import React, { useState } from "react";


function Beranda() {
  const [showModal, setShowModal] = useState(false);
  const openNewTab = () => {
    window.open('https://wa.me/6281120056699', '_blank');
  };
  return (
    <>
      <section>
        <div className="container-gradien px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <h1 className="display-4 lh-1 mb-3">
                  GPS Tracker Bandung Solusi Untuk Memantau Seluruh Kendaraan Anda
                </h1>
                <p className="lead fw-normal text-muted mb-5">
                  Pastikan Kendaraan Anda Dilengkapi Sistem Pengaman
                </p>
                <div className="d-flex flex-column flex-lg-row align-items-center">
                  {/* Tombol untuk membuka modal */}
                  <button
                    className="btn1 btn1-orange"
                    onClick={() => setShowModal(true)}
                  >
                    Hubungi Kami
                  </button>
                  <a
                    href="https://wa.me/6281120056699"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn1 btn1-green"
                  >
                    Beli Sekarang
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="masthead-device-mockup">
                <div className="image-section">
                  <img
                    src="assets/img/gpsimg3.png"
                    alt="GPS Tracker"
                    className="main-image"
                  />
                  <div className="car-icons"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Beranda;
