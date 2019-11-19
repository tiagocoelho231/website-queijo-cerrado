import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
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
      openMenu: false
    };
  }

  componentDidMount() {
    this.props.fetch();
  }

  toggleMenu = () => this.setState(({ openMenu }) => ({ openMenu: !openMenu }));

  render() {
    const { openMenu } = this.state;
    const isActive = (path, match, location) => !!(match || path === location.pathname);

    return (
      <header className="menu">
        <div className="gradient-line"></div>
        <div className="navbar">
          <NavLink to="/" className="header-logo">
            <h1><InlineSVG src={require('../img/logo.svg')} alt="Logo" /></h1>
          </NavLink>

          <nav className={`header-nav${openMenu ? ' active' : ''}`}>
            <ul>
              {this.state.pages.map(({ title, path }) =>
                <li key={title}>
                  <NavLink exact to={path} isActive={isActive.bind(this, path)}
                  >
                    {title}
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
          <MediaQuery maxWidth={997}>
            <button className="header-menu-button" onClick={this.toggleMenu}>
              <MenuIcon />
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

const mapStateToProps = ({ pages: { data: pages } }) => ({ pages });

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch.pages.fetch()
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
