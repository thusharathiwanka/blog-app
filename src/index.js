import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavBarContext from "./context/NavbarContext";

ReactDOM.render(
	<NavBarContext>
		<App />
	</NavBarContext>,
	document.getElementById("root")
);
