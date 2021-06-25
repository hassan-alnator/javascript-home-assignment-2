import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Img from "react-bootstrap/Img";

const Genre = ({ movies }) => {
	console.log("Genre Component", movies);
	return (
		<div>
			<Container>
				Genre 1
				<Row>
					{movies &&
						movies.map((element, index) => {
							// console.log(element.poster, index);
							return (
								<Col key={index} style={{ width: "18rem" }}>
									<img variant="top" src={element.poster} />
								</Col>
							);
						})}
				</Row>
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
