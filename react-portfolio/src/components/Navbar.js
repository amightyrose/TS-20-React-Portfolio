import { Link } from "react-router-dom";


const Navbar = () => {

	return (
		<header className="navbar navbar-expand-sm navbar-dark bg-dark flex-shrink-0">

			<Link to="/" className="navbar-brand">Tim Rose</Link>

			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<nav className="collapse navbar-collapse" id="navbarNav">

				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">About Me</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/portfolio">Portfolio</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/contact">Contact</Link>
					</li>
				</ul>

			</nav>

		</header>
	)
}

export default Navbar;
