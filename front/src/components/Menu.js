import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';

const menuOptions = [
  {
    id: '1',
    name: 'Sobre',
    subMenu: [
      { name: 'Contato', url: 'contato' },
    ],
  },
  {
    id: '2',
    name: 'Opção 2',
    subMenu: [
      { name: 'Sub Opção 1', url: 'Sub-Opção-1' },
      { name: 'Sub Opção 2', url: 'Sub-Opção-2' },
      { name: 'Sub Opção 3', url: 'Sub-Opção-3' },
    ],
  },
  {
    id: '3',
    name: 'Opção 3',
    subMenu: [
      { name: 'Sub Opção 1', url: 'Sub-Opção-1' },
      { name: 'Sub Opção 2', url: 'Sub-Opção-2' },
      { name: 'Sub Opção 3', url: 'Sub-Opção-3' },
      { name: 'Sub Opção 4', url: 'Sub-Opção-4' }
    ],
  },
  {
    id: '4',
    name: 'Opção 4',
    subMenu: [
      { name: 'Sub Opção 1', url: 'Sub-Opção-1' },
      { name: 'Sub Opção 2', url: 'Sub-Opção-2' },
    ],
  },
]

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false, openSubMenu: false, menuActive: '' };
  }

  toggleMenu = () => this.setState(({ openMenu }) => ({ openMenu: !openMenu }));

  toggleMenuClass = tab => this.setState(({ menuActive }) => ({ menuActive: menuActive === tab ? '' : tab }));

  renderDesktopMenuOptions = () => {
    const { menuActive } = this.state;
    return menuOptions.map(({ id, name, subMenu }, key) =>
      <div key={key} className="menuOptions" onMouseEnter={() => this.toggleMenuClass(id)} onMouseLeave={() => this.toggleMenuClass(null)} >
        <Link to="/">{name}</Link>
        <div className="arrowUp-space"></div>
        <div className={menuActive === id ? 'arrowUp' : ''}></div>
        <ul className={menuActive === id ? 'subOptionsActive' : 'subOptionsInactive'}>
          {subMenu.map((element, key) => <li key={key}><Link to={`/${element.url}`}>{element.name}</Link></li>)}
        </ul>
      </div>
    );
  };

  renderMobileMenuOptions = () => {
    const { menuActive } = this.state;
    return menuOptions.map(({ id, name, subMenu }, key) =>
      <div key={key}>
        <p onClick={() => this.toggleMenuClass(id)}>{name}</p>
        <ul className={menuActive === id ? 'subOptionsActive' : 'subOptionsInactive'}>
          {subMenu.map((element, key) => <li key={key}><Link onClick={() => { this.toggleMenu(); this.toggleMenuClass('')}} to={`/${element.url}`}>{element.name}</Link></li>)}
        </ul>
      </div>
    );
  };

  render() {
    const { openMenu } = this.state;
    return (
      <header className="menu-home">
        <div>
          <Link to="/" className="header-logo">
            <img src={require('../img/logo.svg')} alt="Logo" />
            <h1>Queijo do Cerrado</h1>
          </Link>
          <MediaQuery minWidth={998}>
            <nav>
              <ul>
                {this.renderDesktopMenuOptions()}
              </ul>
            </nav>
          </MediaQuery>


          <MediaQuery maxWidth={997}>
            <nav className={`header-nav${openMenu ? ' active' : ''}`}>
              <ul>
                {this.renderMobileMenuOptions()}
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