import React from 'react';

function Gallery() {
  const galleryImages = Array.from({ length: 20 }, (_, index) => ({
    src: `assets/img/${index + 1}.jpeg`,
    alt: `Image ${index + 1}`,
  }));

  return (
    <section id="galeri">
      <div className="container">
        <h1 className="text-center text-black font-alt mb-4">Berikut Galeri Kami</h1>
        <div className="galeri-grid">
          {galleryImages.map((image, index) => (
            <div className="galeri-card" key={index}>
              <img src={image.src} alt={image.alt} className="galeri-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
