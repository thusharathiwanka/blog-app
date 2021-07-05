import React, { useContext, useEffect } from "react";

import WriteForm from "../../components/write/WriteForm";
import { NavbarStyles } from "../../context/NavbarContext";

const Write = () => {
	const { setPath } = useContext(NavbarStyles);

	useEffect(() => {
		setPath(window.location.pathname);
	}, [setPath]);

	return (
		<div>
			<WriteForm />
		</div>
	);
};

export default Write;
