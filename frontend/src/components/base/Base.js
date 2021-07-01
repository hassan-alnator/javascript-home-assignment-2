import React, { useState, useEffect } from "react";
import moviesServices from "../../services/moviesServices";
import Header from "../header/Header";

const BaseComponent = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		moviesServices
			.getMovies()
			.then((response) => {
				console.log("response", response);
				setMovies(response);
				movies && console.log("hi", movies);
			})
			.catch((error) => {
				throw error;
			});
	}, []);

	return (
		<div>
			<div>
				<Header />
			</div>
			<div>Hello Base Component</div>
		</div>
	);
};

export default BaseComponent;
