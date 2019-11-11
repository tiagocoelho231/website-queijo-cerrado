import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Aprocer, /*Article, Articles,*/ Contato, Historias, Home, NotFound, Noticias/*, Page*/ } from './pages';

export default () => (
	<Router>
		<Menu />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/aprocer" component={Aprocer} />
			<Route path="/contato" component={Contato} />
			<Route path="/historias" component={Historias} />
			<Route path="/noticias" component={Noticias} />
			{/* <Route path="/noticias" component={Articles} />
			<Route path="/noticias/:article" component={Article} />
			<Route path="/:category/:page" component={Page} /> */}
			<Route component={NotFound} />
		</Switch>
		<Footer />
	</Router>
);