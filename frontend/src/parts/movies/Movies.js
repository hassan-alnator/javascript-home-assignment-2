import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Details from "../details/details";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//REACT ROUTER!!
const Movies = ({ movies, onegenre }) => {
	function handleClick(event) {
		// const params = useParams();
		event.preventDefault();
		console.log("clicked me");
	}
	return (
		<div>
			<Row xs={1} md={4}>
				{movies &&
					movies.map((element, index) => {
						// Condition to render on filter for genres
						{
							if (element.genres.includes(onegenre)) {
								return (
									<Col key={index} xs={true}>
										<Card
											className="mb-4 mr-2"
											style={{ width: "10rem" }}
											onClick={handleClick}
										>
											<Link to="/movie/:id">
												{/* <LazyLoadImage> */}
												<Card.Img className="lazyload" src={element.poster} />
												{/* </LazyLoadImage> */}
											</Link>
										</Card>
									</Col>
								);
							}
						}
					})}
			</Row>
		</div>
	);
};

export default Movies;
