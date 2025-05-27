import React from "react";
import './Header.css';

const Header = () => {
	return (
		<header>
			<h1>Art Portfolio</h1>
			<nav>
				<ul>
					<li><a href="/">Personal</a></li>
					<li><a href="/projects">Project</a></li>
					<li><a href="/archive">Before 2020</a></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;
