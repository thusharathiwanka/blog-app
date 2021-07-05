import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
	SiFacebook,
	SiInstagram,
	SiTwitter,
	SiPinterest,
} from "react-icons/si";
import { RiSearchLine } from "react-icons/ri";

import { NavbarStyles } from "../../context/NavbarContext";
import "./Navbar.css";

const Navbar = () => {
	const [show, setShow] = useState(false);
	const { path, setPath } = useContext(NavbarStyles);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else {
				setShow(false);
			}
		});

		setPath(window.location.pathname);

		return () => {
			window.removeEventListener("scroll");
		};
	}, [setPath]);

	return (
		<header
			className={path !== "/" || show ? "pop bg-white" : ""}
			onClick={() => setPath(window.location.pathname)}
		>
			<nav className={show && "blur min-height"}>
				<div className="social-links">
					<ul>
						<li>
							<Link>
								<SiFacebook />
							</Link>
						</li>
						<li>
							<Link>
								<SiInstagram />
							</Link>
						</li>
						<li>
							<Link>
								<SiTwitter />
							</Link>
						</li>
						<li>
							<Link>
								<SiPinterest />
							</Link>
						</li>
					</ul>
				</div>
				<div className="nav-links">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/settings">Profile</Link>
						</li>
						<li>
							<Link to="/write">Write</Link>
						</li>
						<li>
							<Link>About</Link>
						</li>
						<li>
							<Link>Contact</Link>
						</li>
						<li>
							<Link>Logout</Link>
						</li>
					</ul>
				</div>
				<div className="search">
					<RiSearchLine />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
