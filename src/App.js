import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch></Switch>
			</div>
		</Router>
	);
}

export default App;
