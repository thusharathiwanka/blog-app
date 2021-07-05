import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Write from "./pages/write/Write";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/write" exact>
						<Write />
					</Route>
					<Route path="/:id" exact>
						<Blog />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
