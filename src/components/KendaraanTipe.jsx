import React from 'react';

function KendaraanTipe() {
  return (
    <section className="vehicle-types">
            <h1 className="text-center text-black font-alt mb-4">Cocok Untuk Semua Jenis Kendaraan</h1>
            <div className="container px-5">
                <div className="vehicle-grid">
                    <div className="vehicle-item">
                        <img src="assets/img/sepeda-motor.png" alt="Sepeda Motor" />
                    </div>
                    <div className="vehicle-item">
                        <img src="assets/img/kendaraan-pribadi.jpg" alt="Kendaraan Pribadi" />
                    </div>
                    <div className="vehicle-item">
                        <img src="assets/img/operasional-bisnis.jpg" alt="Kendaraan Operasional Bisnis" />
                    </div>
                    <div className="vehicle-item">
                        <img src="assets/img/truck.jpg" alt="Kendaraan Truck" />
                    </div>
                    <div className="vehicle-item">
                        <img src="assets/img/bus.jpg" alt="Armada Bus" />
                    </div>
                    <div className="vehicle-item">
                        <img src="assets/img/alat-berat.jpg" alt="Alat Berat" />
                    </div>
                    
                </div>
            </div>
        </section>
  );
}

export default KendaraanTipe;
