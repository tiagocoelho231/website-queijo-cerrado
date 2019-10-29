import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import { InlineSVG } from '.';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false, openSubMenu: false, menuActive: '' };
    this.categories = [];
  }

  componentDidMount() {
    this.props.fetch();
  }

  toggleMenu = () => this.setState(({ openMenu }) => ({ openMenu: !openMenu }));

  toggleMenuClass = tab => this.setState(({ menuActive }) => ({ menuActive: menuActive === tab ? '' : tab }));

  renderDesktopMenuOptions = () => {
    const { menuActive } = this.state;
    const { pages } = this.props;
    return pages.map(({ url, subMenu, name }, key) => (
      <li key={key} className="menuOptions" onMouseEnter={() => this.toggleMenuClass(name)} onMouseLeave={() => this.toggleMenuClass(null)} >
        <button>{name}</button>
        <ul className={`subOptions${menuActive === name ? ' active' : ''}`}>
          {subMenu.map(page => <li key={page}><Link to={`/${url}/${page.url}`}>{page.title}</Link></li >)}
        </ul>
      </li>
    ));
  };

  renderMobileMenuOptions = () => {
    const { menuActive } = this.state;
    const { pages } = this.props;
    return pages.map(({ id, name, subMenu }, key) =>
      <li key={key}>
        <p onClick={() => this.toggleMenuClass(id)}>{name}</p>
        <ul className={menuActive === id ? 'subOptionsActive' : 'subOptionsInactive'}>
          {subMenu.map((element, key) => <li key={key}><Link onClick={() => { this.toggleMenu(); this.toggleMenuClass('') }} to={`/${element.url}`}>{element.name}</Link></li>)}
        </ul>
      </li>
    );
  };

  render() {
    const { openMenu } = this.state;
    const { pages } = this.props;
    return (
      <header className="menu">
        <div>
          <Link to="/" className="header-logo">
            <InlineSVG src={require('../img/logo.svg')} alt="Logo" />
            <h1>Queijo Raiz do Cerrado</h1>
          </Link>
          <MediaQuery minWidth={998}>
            <nav>
              <ul>
                {pages.length > 0 && this.renderDesktopMenuOptions()}
                <li className="menuOptions">
                  <Link to="/noticias">Notícias</Link>
                </li>
              </ul>
            </nav>
          </MediaQuery>


          <MediaQuery maxWidth={997}>
            <nav className={`header-nav${openMenu ? ' active' : ''}`}>
              <ul>
                {pages.length > 0 && this.renderMobileMenuOptions()}
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

const mapStateToProps = ({ pages: { data: pages } }) => ({ pages })

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch.pages.fetch()
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
