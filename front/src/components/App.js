import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Menu } from '.';
import MenuBar from './multi-menu/MenuBar';
import { Home, NotFound, Page } from '../pages';


export default () => (
	<Router>
	<MenuBar />
		{/* <Menu /> */}
		<Switch>
			<Route path="/:category/:page" component={Page} />
			<Route path="/" component={Home} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);