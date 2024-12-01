import React, { useState } from 'react';


function ContactModal() {
  const [showModal, setShowModal] = useState(false);

  // Fungsi untuk membuka tab baru
  const openNewTab = () => {
    window.open('https://wa.me/081120056699', '_blank');
  };

  return (
    <>
      {/* Tombol untuk membuka modal */}
      <Button variant="success" onClick={() => setShowModal(true)}>
        Hubungi Kami
      </Button>

      {/* Modal Dialog */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-gradient-primary-to-secondary p-4">
          <Modal.Title className="font-alt text-white">Informasi Kontak</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0 p-4">
          <div className="contact-section">
            <h2 className="contact-title">Hubungi Kami</h2>
            <hr className="contact-underline" />
            <ul className="contact-list">
              <li>
                <i className="bi bi-telephone-fill"></i>
                <span>Telepon: (022) 87301849</span>
              </li>
              <li>
                <i className="bi bi-whatsapp me-2"></i>
                <span>Admin 1 Syifa: 081120056699</span>
              </li>
              <li>
                <i className="bi bi-whatsapp me-2"></i>
                <span>Admin 2 Fikar: 081933860273</span>
              </li>
              <li>
                <i className="bi bi-whatsapp me-2"></i>
                <span>Admin 3: 085794858427</span>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <span>Jl. Sapta Taruna blok A3 no.5 Terusan Buah Batu Bandung</span>
              </li>
            </ul>
            <Button variant="success" onClick={openNewTab} className="rounded-pill px-3 mb-2 mb-lg-0">
              Hubungi Kami
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactModal;
