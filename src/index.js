import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore, nanoid } from "@reduxjs/toolkit";
import userReducer, { addComment, removeLike } from "./reducers/usersSlice";
import { postAdded } from "./reducers/usersSlice";
import {
	addPost,
	addUser,
	addLikes,
	addCommentDetails,
} from "./reducers/usersSlice";
import { Provider } from "react-redux";

const store = configureStore({
	reducer: {
		users: userReducer,
	},
});

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
