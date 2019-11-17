import React from 'react';

export default () => {
  return (
    <main className="home-content">
      <img src={require('../img/banner.jpg')} alt="" className="home-banner" />
      <section className="queijo-minas">
        <img src={require('../img/IMG_8471.jpg')} />
        <div className="text-block">
          <h1>Queijo Minas Artesanal do Cerrado</h1>
          <p className="banner-text">Muito mais que um produto, o Queijo Minas Artesanal do Cerrado é tradição. Entenda a história desse patrimônio que, apreciado por suas características únicas, ultrapassa gerações.</p>
        </div>
      </section>
    </main>
  );
};
