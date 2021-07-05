import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SinglePost from "./components/single/SinglePost";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/:id" exact>
						<SinglePost />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
