import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { InlineSVG } from '.';

const pages = [
  { title: "Queijo do Cerrado", path: "/" },
  { title: "Aprocer", path: "/aprocer" },
  { title: "Histórias", path: "/historias" },
  { title: "Notícias", path: "/noticias" },
  { title: "Contato", path: "/contato" }
];

export default class Menu extends Component {
  state = { openMenu: false };

  menuItemClick = () => {
    if (window.innerWidth <= 997)
      this.toggleMenu();
  }

  toggleMenu = () => this.setState(({ openMenu }) => ({ openMenu: !openMenu }));

  render() {
    const { openMenu } = this.state;

    return (
      <header className="menu">
        <div className="gradient-line"></div>
        <div className="navbar">
          <NavLink to="/" className="header-logo">
            <h1><InlineSVG src={require('../img/logo.svg')} alt="Logo" /></h1>
          </NavLink>

          <nav className={`header-nav${openMenu ? ' active' : ''}`}>
            <MediaQuery maxWidth={997}>
              <button className="header-menu-close-button" onClick={this.toggleMenu}>
                <InlineSVG src={require('../img/close.svg')} />
              </button>
            </MediaQuery>
            <ul>
              {pages.map(({ title, path }) =>
                <li key={title}>
                  <NavLink exact to={path} onClick={this.menuItemClick}>
                    {title}
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
          <MediaQuery maxWidth={997}>
            <button className="header-menu-button" onClick={this.toggleMenu}>
              <InlineSVG src={require('../img/menu.svg')} />
            </button>
          </MediaQuery>

          <MediaQuery minWidth={998}>
            <div className="header-social-networks">
              <a href="https://instagram.com/aprocer_?igshid=1ou19mw18ppqs" className="instagram-link-header"><InlineSVG src={require('../img/icon-instagram.svg')} alt="Instagram" /></a>
              <a href="https://www.youtube.com/channel/UCTlHuzUp2ZlET-omBxgb0Xg?view_as=subscriber" className="youtube-link-header"><InlineSVG src={require('../img/icon-youtube.svg')} alt="Youtube" /></a>
              <img src={require('../img/bandeira-minas.svg')} alt="Minas Gerais" className="bandeira-minas" />
            </div>
          </MediaQuery>
        </div>
      </header>
    )
  }
}
