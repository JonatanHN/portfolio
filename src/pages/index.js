import * as React from "react"
import { Link } from "gatsby"
import * as AllStyles from "../css/all.css"

const IndexPage = () => {
  return (
		<>
			<main>
				<head>
					<title>Inicio</title>
				</head>
				<div>
					<h1>Hi, soy jonatan hernandez</h1>
					<br />
					<Link to="/about">Ir a about me</Link>
				</div>
			</main>
		</>
	);
}

export default IndexPage
