import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <Link to="/" className="footer-logo">
            <img src={require('../img/logo-footer.svg')} alt="APROCER" />
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris eu metus lobortis augue cursus sodales quis id purus.
            Morbi at risus nisl. Curabitur in odio sit amet augue scelerisque interdum.</p>
          <ul className="footer-nav">
            <li><NavLink exact to="/">Queijo do Cerrado</NavLink></li>
            <li><NavLink exact to="/aprocer">APROCER</NavLink></li>
            <li><NavLink exact to="/historias">Histórias</NavLink></li>
            <li><NavLink exact to="/noticias">Notícias</NavLink></li>
            <li><NavLink exact to="/contato">Contato</NavLink></li>
          </ul>
        </div>
        <div className="credit">
          <p>Desenvolvido por alunos de Sistemas de Informação e Publicidade e Propaganda do Unipam</p>
        </div>
      </footer>
    )
  }
}