import React, { useState, useEffect } from "react";
import Movies from "./components/movies/Movies";
import Header from "./components/header/Header";
import Genre from "./components/genre/Genre";
import "./App.css";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [arrayOfGenre, setArrayOfGenre] = useState([]);
	const axios = require("axios").default;

	//useEffect works as componentDidMount in class components.
	useEffect(() => {
		//Using Axios to fetch data from server API passing authorization key in headers with the request.
		axios
			.get("https://wookie.codesubmit.io/movies", {
				headers: {
					Authorization: "Bearer Wookie2021",
				},
			})
			//handling the request response if response was 202 ( accepted )
			.then((response) => {
				setMovies(response.data);
				getGenre(response.data.movies);
				// console.log(arrayOfGenre);
			})
			//handling server/request errors with catch block
			.catch((error) => {
				if (error) {
					console.error(error);
				}
			});
	}, []);

	const getGenre = (objectOfMovies) => {
		// console.log(objectOfMovies);
		if (objectOfMovies) {
			objectOfMovies.map((element, index) => {
				console.log(element);
				if (!arrayOfGenre.includes(element)) {
					arrayOfGenre.push(element.genres[0]);
				}
			});
		}
	};

	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				<Genre movies={movies.movies} genres={arrayOfGenre} />;
			</div>

			<div>{/* <Movies movies={movies.movies} /> */}</div>
		</div>
	);
};

export default App;
