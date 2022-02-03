import React from "react";
import { Container } from "react-bootstrap";

import Navbar from "components/Navbars/HomeNavbar";
import Footer from "components/Footer/Footer";

function Home() {
	return (
		<>
			<div className="wrapper">
				<Navbar />
				<div className="content">
					<Container fluid>Home Page</Container>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Home;
