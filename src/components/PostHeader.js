import React from "react";
import UserAvatar from "../assets/photos/back.jpg";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import Post from "./Post";
import "./PostHeader.css";

const PostHeader = () => {
	return (
		<div className="user_detaiis">
			<div className="post_content_left">
				<div className="post_avatar_container">
					<img className="post_avatar_img" src={UserAvatar} alt="user image" />
				</div>
				<div className="details">
					<p className="user_name">Niten solanki</p>
				</div>
			</div>
			<MoreVertOutlinedIcon className="post_options" />
		</div>
	);
};

export default PostHeader;
