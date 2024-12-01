import React from 'react';

function Products() {
  const products = [
    { src: 'assets/img/sg01.jpg', alt: 'STARGPS - SG01' },
    { src: 'assets/img/sg02.jpg', alt: 'STARGPS - SG02' },
    { src: 'assets/img/sg03.jpg', alt: 'STARGPS - SG03' },
    { src: 'assets/img/SG04.png', alt: 'STARGPS - SG04' },
    { src: 'assets/img/sgc01.jpg', alt: 'STARGPS - SGC01' },
    { src: 'assets/img/sgc02.jpg', alt: 'STARGPS - SGC02' },
  ];

  return (
    <section id="produk">
      <div className="container">
        <h1 className="text-center text-black font-alt mb-4">Produk GPS Tracker Bandung</h1>
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.src} alt={product.alt} className="product-image" />
              <button className="product-button">Detail Produk</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
