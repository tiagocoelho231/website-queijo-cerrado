import React from 'react'

const Noticias = () => {
  return (
    <main className="noticias-content">
      <div className="noticias-top-image"><img src={require('../img/noticias.jpg')} alt="Café com queijo" /></div>
      <div className="noticias-block">
        <div>
          <p>Aliquam cursus in magna condimentum ornare. Praesent ligula dolor, tincidunt aliquet lacinia sed, commodo eget urna. Donec dapibus quis ante sed elementum. Praesent nec ultrices quam, vitae cursus ligula. Donec tristique lorem at odio rhoncus volutpat. Fusce elementum pretium purus, quis rutrum mauris semper ut. Phasellus elit massa, scelerisque eu neque ut, tincidunt pharetra augue. Aliquam facilisis ullamcorper ex vitae facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="/files/pdf-sample.pdf" download className="circle-item">
            <img src={require('../img/icon-jornal.svg')} alt="Jornal" />
            <div>
              <strong>Download</strong> <br /> Jornal Informativo
            </div>
          </a>
        </div>
        <div>
          <p>Aliquam cursus in magna condimentum ornare. Praesent ligula dolor, tincidunt aliquet lacinia sed, commodo eget urna. Donec dapibus quis ante sed elementum. Praesent nec ultrices quam, vitae cursus ligula. Donec tristique lorem at odio rhoncus volutpat. Fusce elementum pretium purus, quis rutrum mauris semper ut. Phasellus elit massa, scelerisque eu neque ut, tincidunt pharetra augue. Aliquam facilisis ullamcorper ex vitae facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="/files/pdf-sample.pdf" download className="circle-item">
            <img src={require('../img/icon-radio.svg')} alt="Radio" />
            <div>
              <strong>Download</strong> <br /> Programa de Rádio
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Noticias
