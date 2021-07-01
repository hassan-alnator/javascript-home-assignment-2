import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Movies = ({ movies }) => {
	return (
		<div>
			<Row xs={true}>
				{movies &&
					movies.map((element, index) => {
						return (
							<Col xs={true}>
								<Card key={index} style={{ width: "10rem" }}>
									<Card.Img src={element.poster} />
								</Card>
							</Col>
						);
					})}
			</Row>
		</div>
	);
};

export default Movies;
