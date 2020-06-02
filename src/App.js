import React, { Component } from "react";
import Decrement from "./Decrement";
import "./App.css";

class App extends Component {
	render() {
		return (
			<>
				<Decrement start={10} />
				<Decrement start={20} />
				<Decrement start={30} />
				<Decrement start={40} />
				<Decrement start={50} />
			</>
		);
	}
}

export default App;
