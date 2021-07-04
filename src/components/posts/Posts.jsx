import React from "react";

import "./Posts.css";
import Post from "../post/Post";

const Posts = () => {
	return (
		<section className="posts-section">
			<h1>Popular Posts</h1>
			<div className="posts-container">
				<Post />
				<Post />
				<Post />
			</div>
		</section>
	);
};

export default Posts;
