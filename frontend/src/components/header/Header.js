import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
	return (
		<Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" bg="dark">
			<Container>
				<Navbar.Brand href="#">Wookiee</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
