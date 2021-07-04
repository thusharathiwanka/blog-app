import React from "react";

import "./Home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

const Home = () => {
	return (
		<div>
			<section className="header">
				<Header />
			</section>
			<section className="posts" id="posts">
				<Posts />
			</section>
		</div>
	);
};

export default Home;
