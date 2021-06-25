import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Movies from "../movies/Movies";

const Genre = ({ movies }) => {
	console.log("Genre Component", movies);
	return (
		<div>
			<Container>
				Genre 1
				<Movies movies={movies} />
			</Container>
			{/* <ListGroup horizontal>
				<ListGroup.Item>This</ListGroup.Item>
				<ListGroup.Item>ListGroup</ListGroup.Item>
				<ListGroup.Item>renders</ListGroup.Item>
				<ListGroup.Item>horizontally!</ListGroup.Item>
			</ListGroup> */}
		</div>
	);
};

export default Genre;
