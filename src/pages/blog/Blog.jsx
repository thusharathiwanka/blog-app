import React, { useEffect, useContext } from "react";
import SinglePost from "../../components/single/SinglePost";

import "./Blog.css";
import { NavbarStyles } from "../../context/NavbarContext";

const Blog = () => {
	const { setPath } = useContext(NavbarStyles);

	useEffect(() => {
		setPath(window.location.pathname);
	}, [setPath]);

	return <SinglePost />;
};

export default Blog;
