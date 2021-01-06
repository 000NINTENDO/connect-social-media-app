import React from "react";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <AddPost /> */}
			<PostsList />
		</div>
	);
}

export default App;
