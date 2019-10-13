import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';

import './styles.scss';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      openSubMenu: false,
      menuActive: '',
      menuOptions: [
        {
          id: '1',
          name: 'Opção 1',
          subMenu: [
            'Sub Opção 1',
            'Sub Opção 2',
            'Sub Opção 3',
            'Sub Opção 4',
          ]
        }
        ,
        {
          id: '2',
          name: 'Opção 2',
          subMenu: [
            'Sub Opção 1',
            'Sub Opção 2',
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
        },
        {
          id: '4',
          name: 'Opção 4',
          subMenu: [
            'Sub Opção 1',
            'Sub Opção 2',
            'Sub Opção 3',
            'Sub Opção 4',
          ]
        }
      ]
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenuClass = this.toggleMenuClass.bind(this);
  }

  toggleMenu() {
    this.setState(({ openMenu }) => ({ openMenu: !openMenu }));
  }

  toggleMenuClass(tab) {
    if (this.state.menuActive === tab) {
      this.setState({ menuActive: '' });
    } else {
      this.setState({ menuActive: tab });
    }
  }

  render() {
    const { menuActive, menuOptions, openMenu } = this.state;

    const items = menuOptions.map((item) =>
      <div
        className="menuOptions"
        onMouseEnter={this.toggleMenuClass.bind(this, item.id)}
        onMouseLeave={this.toggleMenuClass.bind(this, null)}
      >
        <Link to="/">{item.name}</Link>
        <div className={`${menuActive === item.id ? 'arrowUp' : ''}`}></div>
        <ul className={`${menuActive === item.id ? 'subOptionsActive' : 'subOptionsInactive'}`}>
          {item.subMenu.map(element =>
            <li><Link to="/">{element}</Link></li>
          )}
        </ul>
      </div>
    );

    const itemsResponsive = menuOptions.map((item) =>
      <div>
        <p onClick={this.toggleMenuClass.bind(this, item.id)}>{item.name}</p>
        <ul className={`${menuActive === item.id ? 'subOptionsActive' : 'subOptionsInactive'}`}>
          {item.subMenu.map(element =>
            <li><Link to="/">{element}</Link></li>
          )}
        </ul>
      </div>
    );

    return (
      <header>
        <div>
          <Link to="/" className="header-logo">
            <img src={require('../../img/logo.svg')} alt="Logo" />
            <h1>Queijo do Cerrado</h1>
          </Link>
          <MediaQuery minWidth={998}>
            <nav>
              <ul>
                {items}
              </ul>
            </nav>
          </MediaQuery>


          <MediaQuery maxWidth={997}>
            <nav className={`header-nav${openMenu ? ' active' : ''}`}>
              <ul>
                {itemsResponsive}
              </ul>
            </nav>
            <button className="header-menu-button" onClick={this.toggleMenu}>
              <MenuIcon />
            </button>
          </MediaQuery>
        </div>
      </header>
    )
  }

}