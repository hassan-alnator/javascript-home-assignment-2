import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

// import Button from "react-bootstrap/Button";

const Movies = ({ movies }) => {
	const [data, setData] = useState(movies);

	console.log(movies);
	// useEffect(() => {
	// 	setData(movies.movies);
	// }, [movies]);

	return (
		<div>
			<CardColumns>
				{movies &&
					movies.map((element, index) => {
						// console.log(element.poster, index);
						return (
							<Card key={index} style={{ width: "18rem" }}>
								<Card.Img variant="top" src={element.poster} />
							</Card>
						);
					})}
			</CardColumns>
		</div>
	);
};

export default Movies;
