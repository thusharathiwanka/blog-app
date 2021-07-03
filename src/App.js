import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Home />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
