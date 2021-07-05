import React from "react";
import { Link } from "react-router-dom";

import headerImg from "../../assets/header-img.jpg";
import "../../components/header/Header.css";

const Header = () => {
	return (
		<div className="header-container">
			<h1>Spread the Knowledge</h1>
			<h2>with Everyone</h2>
			<Link className="cta" to="/write">
				Start Writing
			</Link>
			<div className="scroll-indicator">
				<a href="#posts">
					<div className="mouse">
						<span></span>
					</div>
					<div className="arrow">
						<span></span>
					</div>
				</a>
			</div>
			<img src={headerImg} alt="header-img" />
		</div>
	);
};

export default Header;
