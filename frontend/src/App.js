import React, { useState, useEffect } from "react";
// import Movies from "./components/movies/Movies";
import Header from "./components/header/Header";
import Genre from "./components/genre/Genre";
import "./App.css";
import moviesServices from "./services/moviesServices";

const App = () => {
	const [movies, setMovies] = useState([]);
	// const [arrayOfGenre, setArrayOfGenre] = useState([]);
	// const axios = require("axios").default;

	//useEffect works as componentDidMount in class components.
	//!! Clean App.js
	//Axios get movies.
	//Search
	//image-lazy-component || lazy load

	useEffect(() => {
		moviesServices
			.getMovies()
			.then((response) => {
				setMovies(response);
				console.log(movies);
			})
			.catch((error) => {
				throw error;
			});
	}, []);
	// useEffect(() => {
	// 	//Using Axios to fetch data from server API passing authorization key in headers with the request.
	// 	axios
	// 		.get("https://wookie.codesubmit.io/movies", {
	// 			headers: {
	// 				Authorization: "Bearer Wookie2021",
	// 			},
	// 		})
	// 		//handling the request response if response was 202 ( accepted )
	// 		.then((response) => {
	// 			setMovies(response.data);
	// 			// getGenre(response.data.movies);
	// 			// console.log(arrayOfGenre);
	// 		})
	// 		//handling server/request errors with catch block
	// 		.catch((error) => {
	// 			if (error) {
	// 				console.error(error);
	// 			}
	// 		});
	// }, []);

	// var filteringGenres = (oneObject) => {
	// 	console.log(oneObject);
	// 	if (oneObject.genres) {
	// 		return oneObject.genres[0];
	// 	}
	// 	return false;
	// };
	// //use React state
	// const getGenre = (objectOfMovies) => {
	// 	if (objectOfMovies) {
	// 		var x = objectOfMovies.filter(filteringGenres);
	// 		console.log("objectOfMovies", x);
	// 		setArrayOfGenre();
	// 	}
	// };

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
