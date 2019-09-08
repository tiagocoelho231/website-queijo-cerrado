import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import MenuIcon from '@material-ui/icons/Menu';

export default class HeaderHome extends Component {
	constructor(props) {
		super(props);
		this.state = { openMenu: false };
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState(({ openMenu }) => ({ openMenu: !openMenu }));
	}

	render() {
		const { openMenu } = this.state;
		return (
			<header className="header-home">
				<div>
					<Link to="/" className="header-logo">
						<img src="" alt="Queijo do Cerrado" />
					</Link>
					<nav className={`header-nav${openMenu ? ' active' : ''}`}>
						<ul>
							<li className="header-search">
								<form>
									<input type="text" placeholder="Buscar" />
								</form>
							</li>
							<li>
								<Link to="/">Opção 1</Link>
							</li>
							<li>
								<Link to="/">Opção 2</Link>
							</li>
							<li>
								<Link to="/">Opção 3</Link>
							</li>
						</ul>
					</nav>
					<MediaQuery maxWidth={997}>
						<button className="header-menu-button" onClick={this.toggleMenu}>
							<MenuIcon />
						</button>
					</MediaQuery>
				</div>
			</header>
		);
	}
}
