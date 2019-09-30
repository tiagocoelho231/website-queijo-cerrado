import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HeaderHome } from '.';
import { Home } from '../pages';

export default () => (
	<Router>
		<HeaderHome />
		<Switch>
			<Route path="/" component={Home} />
		</Switch>
	</Router>
);
