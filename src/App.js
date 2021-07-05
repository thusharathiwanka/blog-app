import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Write from "./components/write/Write";
import Settings from "./pages/settings/Settings";
import UserForm from "./pages/userForm/UserForm";

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
						<UserForm title="Login" />
					</Route>
					<Route path="/auth/register" exact>
						<UserForm title="Register" />
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
