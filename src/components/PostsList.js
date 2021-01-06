import React from "react";
import { useSelector } from "react-redux";
import "./PostsList.css";
import Post from "./Post";

const PostsList = () => {
	// const posts = useSelector((state) => state.posts);
	// console.log(posts);

	// let postsList = posts.map((post) => {
	// 	return (
	// 		<section className="post_container" key={post.id}>
	// 			<h3 className="post_title">{post.title}</h3>
	// 			<p className="post_content">{post.content}</p>
	// 		</section>
	// 	);
	// });
	return (
		<>
			<div className="list_container">
				<Post />
			</div>
		</>
	);
};

export default PostsList;
