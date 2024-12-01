import React from 'react';

function Features() {
  return (
    <section id="features">
      <div className="container px-5">
        <h1 className="text-center text-black font-alt mb-4">Atur Semua Aktivitas Kendaraan</h1>
        <div className="feature-list">
          <div className="feature-item">
            <img src="assets/img/map-location-dot-solid.svg" alt="Lokasi" className="feature-icon" />
            <p>Lokasi Terkini Realtime</p>
          </div>
          <div className="feature-item">
            <img src="assets/img/car-solid.svg" alt="Matikan Mesin" className="feature-icon" />
            <p>Matikan Mesin Kendaraan Jarak Jauh</p>
          </div>
          <div className="feature-item">
            <img src="assets/img/head-side-cough-solid.svg" alt="Percakapan" className="feature-icon" />
            <p>Dengar percakapan dalam Kabin</p>
          </div>
          <div className="feature-item">
            <img src="assets/img/file-invoice-solid.svg" alt="Report" className="feature-icon" />
            <p>Report Kendaraan Lengkap</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
