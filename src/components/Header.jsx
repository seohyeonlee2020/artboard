import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


export const Header = () => {
	return (<>
		<header>
			<h1 className = "art-board">Art Portfolio</h1>
			<nav className="navbar">
			      <NavLink to="/" end>All</NavLink>
			      <NavLink to="/projects">Projects</NavLink>
			      <NavLink to="/archive">Archive</NavLink>
			</nav>
		</header>
	</>)
}

export default Header;

