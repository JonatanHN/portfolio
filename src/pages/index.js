import * as React from "react"
import { Link } from "gatsby"
import * as AllStyles from "../css/all.css"

const IndexPage = () => {
  return (
		<>
			<head>
				<title>
					Inicio
				</title>
				<link rel="shortcut icon" href="../images/logo.svg" type="image/x-icon" />
			</head>
			<main>
				<div>
					<h1>Hi, Soy Jonatan Hernandez</h1>
					<br />
					<Link to="/about">Ir a about me</Link>
				</div>
			</main>
		</>
	);
}

export default IndexPage
