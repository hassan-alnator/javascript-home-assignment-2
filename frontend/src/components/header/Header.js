import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Header = () => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<Navbar sticky="top" expand="lg" variant="dark" bg="dark">
			<Container>
				<Link to="/home">
					<Navbar.Brand>Wookiee</Navbar.Brand>
				</Link>
				<Form className="d-flex">
					<Button className="mr-2" variant="outline-success">
						Search
					</Button>

					<FormControl
						type="search"
						placeholder="Search"
						className="mr-2"
						aria-label="Search"
						onChange={(event) => {
							console.log(event.target.value);
							setSearchTerm(event.target.value);
						}}
					/>
				</Form>
			</Container>
		</Navbar>
	);
};

export default Header;
