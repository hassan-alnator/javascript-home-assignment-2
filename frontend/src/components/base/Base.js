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
				setMovies(response);
				setGenreArray(uniqueGenre(response.data));
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
