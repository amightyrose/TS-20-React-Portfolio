import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route>
					<About exact path="/" />
				</Route>
				<Route>
					<Portfolio exact path="/portfolio" />
				</Route>
				<Route>
					<Contact exact path="/contact" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
