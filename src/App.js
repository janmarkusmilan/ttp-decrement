import React, { Component } from "react";
import Decrement from "./Decrement";
import "./App.css";

class App extends Component {
	render() {
		return (
			<>
				<Decrement start={20} />
				<Decrement start={40} />
				<Decrement start={60} />
				<Decrement start={80} />
				<Decrement start={100} />
			</>
		);
	}
}

export default App;
