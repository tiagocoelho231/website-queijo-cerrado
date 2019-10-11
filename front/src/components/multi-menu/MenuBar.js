import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles.scss'

export default class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      openSubMenu: false,
      menuActive: false,
      menuOptions: [
        {
          id: '1',
          name: 'Opção 1',
          subMenu: [
            'Sub Opção 1',
            'Sub Opção 2',
            'Sub Opção 3',
          ]
        },
        {
          id: '2',
          name: 'Opção 2',
          subMenu: [
            'Sub Opção 1',
            'Sub Opção 2',
            'Sub Opção 3',
          ]
        },
        {
          id: '3',
          name: 'Opção 3',
          subMenu: [
            'Sub Opção 1',
            'Sub Opção 2',
            'Sub Opção 3',
          ]
        }
      ]
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenuClass = this.toggleMenuClass.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }

  toggleMenu() {
    this.setState(({ openMenu }) => ({ openMenu: !openMenu }));
  }

  toggleMenuClass(tab) {
    // this.state = { menuActive: tab };
    this.setState({ menuActive: tab });
  }

  openMenu(id) {
    console.log("teste");
  }

  render() {
    const { menuActive, menuOptions } = this.state;

    const items = menuOptions.map((item) =>
      <div
        onMouseEnter={this.toggleMenuClass.bind(this, item.id)}
        onMouseLeave={this.toggleMenuClass.bind(this, null)}
      >
        <li key={item.id}>
          <div className="menuOptions">

            <Link to="/">{item.name}</Link>
            <div className={`${menuActive === item.id ? 'triangle' : ''}`}></div>

            <ul className={`${menuActive === item.id ? 'subOptionsActive' : 'subOptionsInactive'}`}>

              {item.subMenu.map(element =>
                <li>{element}</li>
              )}
            </ul>

          </div>
        </li>
      </div>
    );

    return (
      <header>
        <div>
          <Link to="/" className="header-logo">
            <img src={require('../../img/logo.svg')} alt="Logo" />
            <h1>Queijo do Cerrado</h1>
          </Link>
          <nav>
            <ul>
              {/* <li onClick={this.toggleMenu} className={`header-nav${openMenu ? ' active' : ''}`}><Link to="/">Opção 1</Link></li> */}
              {items}
            </ul>
          </nav>
        </div>
      </header>
    )
  }

}