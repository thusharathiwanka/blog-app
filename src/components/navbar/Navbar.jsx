import React from "react";
import { Link } from "react-router-dom";
import {
	SiFacebook,
	SiInstagram,
	SiTwitter,
	SiPinterest,
} from "react-icons/si";
import { RiSearchLine } from "react-icons/ri";

import "./Navbar.css";

const Navbar = () => {
	return (
		<header>
			<nav>
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
							<Link>Home</Link>
						</li>
						<li>
							<Link>Write</Link>
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
