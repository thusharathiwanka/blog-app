import React from "react";
import { Link } from "react-router-dom";

import "./Post.css";

const Post = () => {
	return (
		<div className="card-container">
			<img
				src="https://images.pexels.com/photos/2776479/pexels-photo-2776479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				alt="post-img"
			/>

			<div className="card-text-container">
				<h4>Nature</h4>
				<h2>Lorem ipsum dolor sit amet consectetur.</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid eum
					odit nobis eius iste consequatur corporis culpa atque, quo eveniet?
				</p>
				<Link>Read more</Link>
			</div>
		</div>
	);
};

export default Post;
