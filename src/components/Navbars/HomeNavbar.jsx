import { Link } from "@material-ui/core";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
	return (
		<Navbar expand="lg">
			<Container fluid>
				<div className="d-flex justify-content-center align-items-center">
					<Navbar.Brand
						href="/"
						onClick={(e) => e.preventDefault()}
						className="mr-2"
					>
						Shewa HRMS
					</Navbar.Brand>
				</div>
				<Nav className="ml-auto">
					<Nav.Item>
						<Link href="/login">
							<i style={{ marginRight: "10px" }}></i>
							<span className="no-icon">Log In</span>
						</Link>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Header;
