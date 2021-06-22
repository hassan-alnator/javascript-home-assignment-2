import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

const Movies = ({ movies }) => {
	const [data, setData] = useState([]);
	// console.log(movies);
	useEffect(() => {
		setData(movies.movies);
	}, [movies]);

	return (
		<div>
			{data ? (
				<div> hello </div>
			) : (
				data.map(() => {
					<Card style={{ width: "20rem" }}>
						<Card.Img variant="top" src={movies.movies[0].poster} />
					</Card>;
				})
			)}
		</div>
	);
};

export default Movies;
