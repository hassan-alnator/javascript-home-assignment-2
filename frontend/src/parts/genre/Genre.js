import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Movies from "../../parts/movies/Movies";

const Genre = ({ movies, genreArray }) => {
	const [genres, setGenres] = useState();
	useEffect(() => {
		setGenres(genreArray);
	}, [movies]);

	//pass element to movies component
	return (
		<div>
			{genres &&
				//implement helper function // DONE
				genres.map((onegenre, index) => {
					return (
						<Container key={index}>
							<div className="mt-4 mb-2 font-weight-bold">{onegenre}</div>
							<Movies movies={movies.data.movies} onegenre={onegenre} />
						</Container>
					);
				})}
		</div>
	);
};

export default Genre;
