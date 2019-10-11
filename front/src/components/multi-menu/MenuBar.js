import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles.scss'

export default class MenuBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      menuOptions: [
        { id: '1', name: 'Opção 1' },
        { id: '2', name: 'Opção 2' },
        { id: '3', name: 'Opção 3' },
      ]
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(({ openMenu }) => ({ openMenu: !openMenu }));
    console.log(this.state.menuOptions);
  }

  render() {
    const { openMenu, menuOptions } = this.state;

    const items = this.state.menuOptions.map((item) =>
      <li key={item.id}><Link to="/">{item.name}</Link></li>
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