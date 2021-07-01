import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Movies from "../../parts/movies/Movies";

const Genre = ({ movies, genres }) => {
	console.log("Genre Component", genres);
	return (
		<div>
			{genres &&
				genres.map((element, index) => {
					console.log("element", element);
					return (
						<Container>
							{element}
							<Movies movies={movies} />
						</Container>
					);
				})}
		</div>
	);
};

export default Genre;
