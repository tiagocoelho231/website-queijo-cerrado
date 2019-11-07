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
  }

  componentDidMount() {
    this.props.fetch();
  }

  toggleMenu = () => this.setState(({ openMenu }) => ({ openMenu: !openMenu }));

  render() {
    const { openMenu } = this.state;
    const { pages } = this.props;
    const currentPath = window.location.pathname;
    return (
      <header className="menu">
        <div className="gradient-line"></div>
        <div className="navbar">
          <Link to="/" className="header-logo">
            <InlineSVG src={require('../img/logo.svg')} alt="Logo" />
            <h1><span className="brown-font">APRO</span><span className="orange-font">CER</span></h1>
          </Link>

          <MediaQuery minWidth={998}>
            <nav>
              <ul>
                <li className={`${currentPath === "/" ? 'currentOption' : ''}`}>
                  <Link to="/">QUEIJO DO CERRADO</Link>
                </li>
                <li className={`${currentPath === "/aprocer" ? 'currentOption' : ''}`}>
                  <Link to="/aprocer">APROCER</Link>
                </li>
                <li className={`${currentPath === "/noticias"? 'currentOption' : ''}`}>
                  <Link to="/noticias">NOTÍCIAS</Link>
                </li>
                <li className={`${currentPath === "/contato"? 'currentOption' : ''}`}>
                  <Link to="/contato">CONTATO</Link>
                </li>
                <li className="header-search">
                  <div>
                    <InlineSVG src={require('../img/icon-search.svg')} alt="search" />
                  </div>
                  <form>
                    <input type="text" placeholder="Buscar" />
                  </form>
                </li>
              </ul>
            </nav>
          </MediaQuery>


          <MediaQuery maxWidth={997}>
            <nav className={`header-nav${openMenu ? ' active' : ''}`}>
              <ul>
                <li className="menuOption">
                  <Link to="/noticias">Notícias</Link>
                </li>
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
