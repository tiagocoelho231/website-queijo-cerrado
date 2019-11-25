import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Aprocer, Contato, Historias, Home, NotFound, Noticias } from './pages';
import { ScrollToTop } from './components';

export default () => (
	<Router>
		<ScrollToTop>
			<Menu />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/aprocer" component={Aprocer} />
				<Route path="/contato" component={Contato} />
				<Route path="/historias" component={Historias} />
				<Route path="/noticias" component={Noticias} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</ScrollToTop>
	</Router>
);