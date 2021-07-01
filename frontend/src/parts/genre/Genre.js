import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Movies from "../../parts/movies/Movies";
import { uniqueGenre } from "../../helpers/genreExtractor";
const Genre = ({ movies, genreArray }) => {
	const [genres, setGenres] = useState();
	useEffect(() => {
		setGenres(genreArray);
		console.log(genres);
	}, [movies]);

	//pass element to movies component
	return (
		<div>
			{genres &&
				//implement helper function // DONE
				genres.map((element, index) => {
					return (
						<Container key={index}>
							{element}
							{/* <Movies movies={movies} /> */}
						</Container>
					);
				})}
		</div>
	);
};

export default Genre;
