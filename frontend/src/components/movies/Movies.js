import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Movies = ({ movies }) => {
	console.log(movies);

	return (
		<div>
			<Row xs={2} md={6} className="g-2">
				{movies &&
					movies.map((element, index) => {
						// console.log(element.poster, index);
						return (
							<Col>
								<Card
									className="mb-3 ml-3"
									key={index}
									style={{ width: "10rem" }}
								>
									<Card.Img src={element.poster} />
								</Card>
							</Col>
						);
					})}
			</Row>
			{/* <CardColumns>
				{movies &&
					movies.map((element, index) => {
						// console.log(element.poster, index);
						return (
							<Card key={index} style={{ width: "18rem" }}>
								<Card.Img variant="top" src={element.poster} />
							</Card>
						);
					})}
			</CardColumns> */}

			{/* <CardColumns>
				{movies &&
					movies.map((element, index) => {
						// console.log(element.poster, index);
						return (
							<Card key={index} style={{ width: "18rem" }}>
								<Card.Img variant="top" src={element.poster} />
							</Card>
						);
					})}
			</CardColumns> */}
		</div>
	);
};

export default Movies;
