import React from 'react'
import { Link } from 'react-router-dom';

const Noticias = () => {
  return (
    <main className="noticias-content">
      <div className="noticias-yellow-block" />
      <div className="noticias-block">
        <div>
          <p>Aliquam cursus in magna condimentum ornare. Praesent ligula dolor, tincidunt aliquet lacinia sed, commodo eget urna. Donec dapibus quis ante sed elementum. Praesent nec ultrices quam, vitae cursus ligula. Donec tristique lorem at odio rhoncus volutpat. Fusce elementum pretium purus, quis rutrum mauris semper ut. Phasellus elit massa, scelerisque eu neque ut, tincidunt pharetra augue. Aliquam facilisis ullamcorper ex vitae facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="circle-item">
            <img src={require('../img/icon-jornal.svg')} alt="Jornal" />
            <div>
              <Link to="/files/pdf-sample.pdf" target="_blank" download>
                <p>download</p>
                <p>jornal informativo</p>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p>Aliquam cursus in magna condimentum ornare. Praesent ligula dolor, tincidunt aliquet lacinia sed, commodo eget urna. Donec dapibus quis ante sed elementum. Praesent nec ultrices quam, vitae cursus ligula. Donec tristique lorem at odio rhoncus volutpat. Fusce elementum pretium purus, quis rutrum mauris semper ut. Phasellus elit massa, scelerisque eu neque ut, tincidunt pharetra augue. Aliquam facilisis ullamcorper ex vitae facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="circle-item">
            <img src={require('../img/icon-radio.svg')} alt="Radio" />
            <div>
              <Link to="/files/radio.mp4" target="_blank" download>
                <p>download</p>
                <p>jornal informativo</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Noticias
