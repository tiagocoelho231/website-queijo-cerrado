import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import { Contato, Home, NotFound, Page } from './pages';


export default () => (
	<Router>
		<Menu />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/contato" component={Contato} />
			<Route path="/:category/:page" component={Page} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);