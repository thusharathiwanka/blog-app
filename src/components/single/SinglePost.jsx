import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import "./SinglePost.css";

const SinglePost = () => {
	return (
		<div className="single-post-container">
			<img
				src="https://images.pexels.com/photos/2776479/pexels-photo-2776479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				alt="single-post-img"
			/>
			<div className="post-actions">
				<AiFillEdit className="edit-btn" />
				<AiFillDelete className="delete-btn" />
			</div>
			<h2>Lorem ipsum dolor sit amet consectetur.</h2>
			<div className="post-info">
				<p>
					<span>Published By </span>Thushara Thiwanka
				</p>
				<p>1 Hour ago</p>
			</div>
			<p className="post-content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
				atque vero rerum molestiae at tempora corporis ipsa? Ea quas, sequi
				numquam veniam repellendus omnis provident tempora neque maxime nesciunt
				facere ab dicta quidem veritatis excepturi? Ex consectetur tempora ut
				totam culpa, neque voluptatem qui maiores deserunt. Veritatis quibusdam
				consequuntur nobis.
			</p>
		</div>
	);
};

export default SinglePost;
