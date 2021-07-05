import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Write from "./components/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/settings" exact>
						<Settings />
					</Route>
					<Route path="/write" exact>
						<Write />
					</Route>
					<Route path="/auth/login" exact>
						<Login />
					</Route>
					<Route path="/posts/:id" exact>
						<Blog />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
