import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand" hrefLang="https://henok.us" to="/">
					LearnTok Admin
				</NavLink>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mobileMenu"
					aria-controls="mobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileMenu">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link"
								}
								to="/cruds/users"
							>
								View Users
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link"
								}
								to="/cruds/courses"
							>
								View Courses
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
