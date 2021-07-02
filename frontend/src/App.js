//Search
//image-lazy-component || lazy load
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import BaseComponent from "./components/base/Base";
import Details from "./parts/details/details";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/home" exact component={BaseComponent}>
						<BaseComponent />
					</Route>
					<Route path="/" exact>
						<BaseComponent />
					</Route>
					<Route path="" exact>
						<BaseComponent />
					</Route>
					<Route path="/movie/:id" exact component={Details}>
						<Details />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
