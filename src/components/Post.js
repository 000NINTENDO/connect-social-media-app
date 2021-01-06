import React from "react";
import Avatar from "./Avatar";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostImage from "../assets/photos/back-img-3.jpg";
import "./Post.css";

const Post = () => {
	return (
		<div className="post_container">
			<PostHeader />
			<div className="post_image_container">
				<img className="post_img" src={PostImage} alt="" />
			</div>
			<PostFooter />
		</div>
	);
};

export default Post;
