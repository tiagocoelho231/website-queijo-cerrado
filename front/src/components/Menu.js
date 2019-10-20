import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';
import { InlineSVG } from '.';
import axios from '../lib/axios';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false, openSubMenu: false, menuActive: '', menuOptions: [] };
    this.categories = [];
  }

  componentDidMount() {
    axios.get('/categories')
      .then(({ data }) => this.categories = data)
      .catch(({ error }) => console.log(error));

    axios.get('/pages')
      .then(({ data }) => {
        let menuOptions = data.reduce((obj, page) => {
          if (obj[page.category])
            return { ...obj, [page.category]: [...obj[page.category], page] };
          return { ...obj, [page.category]: [page] };
        }, {});
        menuOptions = Object.entries(menuOptions).reduce((array, [k, v]) => {
          const category = this.categories.find(category => category._id === k);
          return [...array, { ...category, subMenu: v }];
        }, []);
        this.setState({ menuOptions })
      })
      .catch(({ error }) => console.log('error', error));
  }


  toggleMenu = () => this.setState(({ openMenu }) => ({ openMenu: !openMenu }));

  toggleMenuClass = tab => this.setState(({ menuActive }) => ({ menuActive: menuActive === tab ? '' : tab }));

  renderDesktopMenuOptions = () => {
    const { menuActive, menuOptions } = this.state;
    return menuOptions.map(({ url, subMenu, name }, key) => (
      <div key={key} className="menuOptions" onMouseEnter={() => this.toggleMenuClass(name)} onMouseLeave={() => this.toggleMenuClass(null)} >
        <button>{name}</button>
        <div className="arrowUp-space"></div>
        <div className={menuActive === name ? 'arrowUp' : ''}></div>
        <ul className={menuActive === name ? 'subOptionsActive' : 'subOptionsInactive'}>
          {subMenu.map(page => <li key={page}><Link to={`/${url}/${page.url}`}>{page.title}</Link></li>)}
        </ul>
      </div>
    ));
  };

  renderMobileMenuOptions = () => {
    const { menuActive, menuOptions } = this.state;
    return menuOptions.map(({ id, name, subMenu }, key) =>
      <div key={key}>
        <p onClick={() => this.toggleMenuClass(id)}>{name}</p>
        <ul className={menuActive === id ? 'subOptionsActive' : 'subOptionsInactive'}>
          {subMenu.map((element, key) => <li key={key}><Link onClick={() => { this.toggleMenu(); this.toggleMenuClass('') }} to={`/${element.url}`}>{element.name}</Link></li>)}
        </ul>
      </div>
    );
  };

  render() {
    const { openMenu, menuOptions } = this.state;
    return (
      <header className="menu">
        <div>
          <Link to="/" className="header-logo">
            <InlineSVG src={require('../img/logo.svg')} alt="Logo" />
            <h1>Queijo Raiz do Cerrado</h1>
          </Link>
          {menuOptions.length > 0 && (
            <>
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
            </>
          )}
        </div>
      </header>
    )
  }

}