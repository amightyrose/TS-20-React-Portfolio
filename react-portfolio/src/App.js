import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<About />
				</Route>
				<Route exact path="/portfolio">
					{/* <Portfolio /> */}
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
