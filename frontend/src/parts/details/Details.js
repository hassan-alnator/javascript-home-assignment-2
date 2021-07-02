import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { useParams, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Details = ({}) => {
	let location = useLocation();
	let { id } = useParams();
	const [oneMovie, setOneMovie] = useState(location.state);
	const [cast, setCast] = useState(oneMovie.cast);

	console.log(id);
	console.log("oneMovie", oneMovie);
	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				<Container fluid="md">
					<Row className="mt-5">
						<Col>
							<Card>
								<Card.Img variant="top" src={oneMovie.poster} />
							</Card>
						</Col>
						<Col>
							<Row className="mt-4">Title: {oneMovie.title}</Row>
							<Row className="mt-3">
								{oneMovie.released_on} | {oneMovie.length} |
								{oneMovie.director.map((element, index) => {
									return (
										<div key={index} className="mr-1">
											{element}
										</div>
									);
								})}
							</Row>
							<Row className="mt-1">
								{cast.map((element, index) => {
									return (
										<div key={index} className="mr-1">
											{element}
										</div>
									);
								})}
							</Row>
							<Row className="mt-4"> Description: {oneMovie.overview} </Row>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};
export default Details;
