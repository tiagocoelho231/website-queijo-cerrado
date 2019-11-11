import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import { InlineSVG } from '.';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        { title: "Queijo do Cerrado", path: "/" },
        { title: "Aprocer", path: "/aprocer" },
        { title: "Histórias", path: "/historias" },
        { title: "Notícias", path: "/noticias" },
        { title: "Contato", path: "/contato" },
      ],
      openMenu: false,
      openSubMenu: false,
      menuActive: '',
      active: window.location.pathname
    };
  }

  componentDidMount() {
    this.props.fetch();
  }

  toggleMenu = () => this.setState(({ openMenu }) => ({ openMenu: !openMenu }));

  changeActiveOption(menuItem) {
    this.setState({ active: menuItem });
  }

  menuItems() {
    return this.state.pages.map(menuItem =>
      <li key={menuItem.title}
        className={`${this.state.active === menuItem.path ? 'currentOption' : ''}`}
        onClick={this.changeActiveOption.bind(this, menuItem.path)}>
        <Link
          to={menuItem.path}
        >
          {menuItem.title}
        </Link>
      </li>
    )
  }

  render() {
    const { openMenu } = this.state;

    return (
      <header className="menu">
        <div className="gradient-line"></div>
        <div className="navbar">
          <Link to="/" className="header-logo">
            <h1><InlineSVG src={require('../img/logo.svg')} alt="Logo" /></h1>
          </Link>

          <MediaQuery minWidth={998}>
            <nav className="desktop-nav">
              <ul>
                {this.menuItems()}
              </ul>
            </nav>
          </MediaQuery>


          <MediaQuery maxWidth={997}>
            <nav className={`header-nav${openMenu ? ' active' : ''}`}>
              <ul>
                {this.menuItems()}
              </ul>
            </nav>
            {/* <div className="header-search">
              <div>
                <InlineSVG src={require('../img/icon-search.svg')} alt="search" />
              </div>
              <form>
                <input type="text" placeholder="Buscar" />
              </form>
            </div> */}
            <button className="header-menu-button" onClick={this.toggleMenu}>
              <MenuIcon />
            </button>
          </MediaQuery>

          <div className="header-search">
            <div>
              <InlineSVG src={require('../img/icon-search.svg')} alt="search" />
            </div>
            <form>
              <input type="text" placeholder="Buscar" />
            </form>
          </div>
          <div className="header-social-networks">
            <a href="http://instagram.com" className="instagram-link-header"><InlineSVG src={require('../img/icon-instagram.svg')} alt="Instagram" /></a>
            <a href="http://youtube.com" className="youtube-link-header"><InlineSVG src={require('../img/icon-youtube.svg')} alt="Youtube" /></a>
          </div>
          <img src={require('../img/bandeira-minas.svg')} alt="Minas Gerais" className="bandeira-minas" />
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
