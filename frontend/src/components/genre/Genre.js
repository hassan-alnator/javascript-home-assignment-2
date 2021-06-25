import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Genre = ({ movies }) => {
	console.log("Genre Component", movies);
	return (
		<div>
			<Container>
				Genre 1
				<Row md={5}>
					{movies &&
						movies.map((element, index) => {
							// console.log(element.poster, index);
							return (
								<Col key={index}>
									<Image variant="top" src={element.poster} />
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
