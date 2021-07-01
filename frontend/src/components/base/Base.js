import React, { useState, useEffect } from "react";
import moviesServices from "../../services/moviesServices";
import Genre from "../../parts/genre/Genre";
import Header from "../header/Header";
import { uniqueGenre } from "../../helpers/genreExtractor";

const BaseComponent = () => {
	const [movies, setMovies] = useState([]);
	const [genreArray, setGenreArray] = useState();

	useEffect(() => {
		moviesServices
			.getMovies()
			.then((response) => {
				// console.log("response", response.data.movies);
				setMovies(response);
				// console.log(response);
				// console.log(uniqueGenre(response.data));
				setGenreArray(uniqueGenre(response.data));
				// console.log("movies ", movies.data);
				// movies && console.log("hi", movies);
			})
			.catch((error) => {
				throw error;
			});
	}, [movies]);

	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				{movies ? (
					<Genre movies={movies} genreArray={genreArray} />
				) : (
					<div> No movies yet </div>
				)}
			</div>
		</div>
	);
};

export default BaseComponent;
