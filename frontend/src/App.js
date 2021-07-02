//Search
//image-lazy-component || lazy load
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseComponent from "./components/base/Base";
import Details from "./parts/details/Details";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/home" exact component={BaseComponent}>
						<BaseComponent />
					</Route>
					<Route path="/" exact component={BaseComponent}>
						<BaseComponent />
					</Route>
					<Route path="/movie/:id" exact component={Details}>
						<Details />
					</Route>
					<Route path="/:id" children={<Details />} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
