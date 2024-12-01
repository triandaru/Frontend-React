import React from 'react';

function Footer() {
  return (
    <footer className="bg-black py-5" id="tentang">
      <div className="container px-5">
        <div className="row">
          <div className="text-white-50 col-lg-4 col-md-6 mb-4">
            <img className="app-badge" src="assets/img/logo3.png" alt="Logo" />
            <p>
              STARGPS memberikan solusi pelacakan untuk memantau seluruh aset anda, memastikan semua kendaraan anda berjalan
              lancar terkendali, berpengalaman lebih dari 12 tahun sebagai penyedia GPS mobil tracker platform terbaik di
              Indonesia.
            </p>
          </div>
          <div className="text-white-50 col-lg-2 col-md-6 mb-4">
            <h5 className="footer-heading">Navigation</h5>
            <ul>
              <li>
                <a href="#features">Beranda</a>
              </li>
              <li>
                <a href="#">Tentang Kami</a>
              </li>
              <li>
                <a href="#produk">Produk</a>
              </li>
              <li>
                <a href="#galeri">Galeri</a>
              </li>
              <li>
                <a href="#artikel">Artikel</a>
              </li>
            </ul>
          </div>
          <div className="text-white-50 col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-links">
              <li>
                <i className="bi-telephone-fill"></i>
                Telepon: (022) 87301849
              </li>
              <li>
                <i className="bi-whatsapp me-2"></i>
                Admin 1 Syifa: 081120056699
              </li>
              <li>
                <i className="bi-whatsapp me-2"></i>
                Admin 2 Fikar: 081933860273
              </li>
              <li>
                <i className="bi-whatsapp me-2"></i>
                Admin 3: 085794858427
              </li>
            </ul>
          </div>
          <div className="text-white-50 col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Work Hours</h5>
            <ul>
              <li>Senin - Sabtu</li>
              <li>09:00 - 17:00 WIB</li>
              <li>Jl. Sapta Taruna blok A3 no.5 Terusan Buah Batu Bandung<br />(Kujangsari, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40287)</li>
            </ul>
          </div>
        </div>
        <hr class="footer-divider" />
                <div class="text-white-50 small text-center">
                    Copyright © 2024. StarGPS
                    
                    <br /> Developer: <a href="https://github.com/triandaru" target="_blank">Triandaru Anugrah</a>
                </div>
      </div>
    </footer>
  );
}

export default Footer;
