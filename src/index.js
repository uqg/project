/* eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import { fetchPokemon } from "../src/reducers/entity";
import App from "./containers/App/App.jsx";
import Pokemon from "./containers/Pokemon/Pokemon.jsx";
import NoMatch from "./containers/NoMatch/NoMatch.jsx";

import configureStore from "./store/configureStore";

const store = configureStore();
const history = createBrowserHistory();

import "babel-polyfill";
import "normalize-css";

store.dispatch(fetchPokemon(1,6));

require("./favicon.ico");

render(
	<AppContainer>
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/pokemon/:id" component={Pokemon} />
					<Route component={NoMatch} />
				</Switch>
			</Router>
		</Provider>
	</AppContainer>,
	document.getElementById("app")
);
