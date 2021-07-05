import React, { useEffect, useContext } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

import "./Write.css";
import { NavbarStyles } from "../../context/NavbarContext";

const WriteForm = () => {
	const { setPath } = useContext(NavbarStyles);

	useEffect(() => {
		setPath(window.location.pathname);
	}, [setPath]);

	return (
		<div className="create-post-container">
			<img
				src="https://images.pexels.com/photos/2776479/pexels-photo-2776479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				alt="uploaded-img"
			/>
			<form className="create-post">
				<div className="post-title">
					<label htmlFor="post-img">
						<BsPlusCircleFill />
					</label>
					<input
						type="file"
						name="post-img"
						id="post-img"
						accept="image/png, image/jpeg"
					/>
					<input
						type="text"
						name="post-title"
						id="post-title"
						placeholder="Title"
					/>
				</div>
				<textarea
					name="post-content"
					id="post-content"
					placeholder="Write your story..."
					rows="auto"
				></textarea>
				<button type="submit">Publish</button>
			</form>
		</div>
	);
};

export default WriteForm;
