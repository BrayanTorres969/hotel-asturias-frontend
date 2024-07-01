import React from "react"
import { Container } from "react-bootstrap"

const Parallax = () => {
	return (
		<div className="parallax mb-5">
			<Container className="text-center px-5 py-5 justify-content-center">
				<div className="animated-texts bounceIn">
					<h1>
						Experimente la mejor hospitalidad en <span className="hotel-color">Hotel Asturias</span>
					</h1>
					<h3>Ofrecemos los mejores servicios para todas sus necesidades.</h3>
				</div>
			</Container>
		</div>
	)
}

export default Parallax
