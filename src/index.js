import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore, nanoid } from "@reduxjs/toolkit";
import userReducer from "./reducers/usersSlice";
import postsReducer from "./reducers/postsSlice";
import { initialPosts } from "./reducers/postsSlice";
import { Provider } from "react-redux";

const store = configureStore({
	reducer: {
		users: userReducer,
		posts: postsReducer,
	},
});

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
