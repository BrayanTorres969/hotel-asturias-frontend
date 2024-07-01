import React from "react"
import { Link } from "react-router-dom"

const Admin = () => {
	return (
		<section className="container mt-5">
			<h2>Bienvenido al panel de administración</h2>
			<hr />
			<Link to={"/existing-rooms"}>Administrar habitaciones</Link> <br />
			<Link to={"/existing-bookings"}>Gestionar reservas</Link>
		</section>
	)
}

export default Admin
