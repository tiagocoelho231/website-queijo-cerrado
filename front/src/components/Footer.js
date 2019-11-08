import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { InlineSVG } from '.';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <Link to="/" className="footer-logo">
            <InlineSVG src={require('../img/logo.svg')} alt="Logo" />
            <h1><span style={{ color: "#fff" }}>APRO</span><span className="orange-font">CER</span></h1>
            <p>Assossiação dos Produtores de Queijo Minas Artesanal do Cerrado</p>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris eu metus lobortis augue cursus sodales quis id purus.
            Morbi at risus nisl. Curabitur in odio sit amet augue scelerisque interdum.</p>
            <ul>
              <li><Link to = "/">Queijo do Cerrado</Link></li>
              <li><Link to = "/aprocer">Aprocer</Link></li>
              <li><Link to = "/historia">História</Link></li>
              <li><Link to = "/noticias">Notícias</Link></li>
              <li><Link to = "/contato">Contato</Link></li>
            </ul>
        </div>
        <div className="credit">
          <p>Desenvolvido pelos alunos de Sistemas de Informação e Publicidade e Propaganda do Unipam</p>
        </div>
      </footer>
    )
  }
}