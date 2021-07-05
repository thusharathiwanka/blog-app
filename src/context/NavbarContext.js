import React, { createContext, useState } from "react";

import App from "../App";

export const NavbarStyles = createContext({});

const NavBarContext = () => {
	const [path, setPath] = useState("/");

	return (
		<NavbarStyles.Provider value={{ path, setPath }}>
			<App />
		</NavbarStyles.Provider>
	);
};

export default NavBarContext;
