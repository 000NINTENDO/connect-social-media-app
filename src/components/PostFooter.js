import React, { useEffect, useState } from "react";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ButtonBase from "@material-ui/core/ButtonBase";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CommentSection from "./CommentSection";
import "./Post.css";
import "./PostFooter.css";

const PostFooter = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLike, setIsLike] = useState(false);
	const [likes, setLikes] = useState(0);
	let comment_like_container;

	const showCommentBox = () => {
		setIsOpen(!isOpen);
		// console.log(isOpen);
	};

	const handleLike = () => {
		setIsLike(!isLike);
		console.log(isLike);
	};

	useEffect(() => {
		if (isOpen) {
			comment_like_container.style.opacity = 0;
		} else {
			comment_like_container.style.opacity = 1;
		}
		// window.addEventListener("click", (e) => {
		// 	e.stopPropagation();
		// 	if (
		// 		!e.target.matches(".comment_input") ||
		// 		!e.target.matches(".edit_button")
		// 	) {
		// 		setIsOpen(false);
		// 	}
		// 	console.log(e.target.classList);
		// 	console.log("isopen", isOpen);
		// });
	}, [isOpen]);

	const likeButton = isLike ? (
		<FavoriteIcon onClick={handleLike} />
	) : (
		<FavoriteBorderSharpIcon onClick={handleLike} />
	);

	return (
		<div className="post_footer_container">
			<div className="post_like_comment_section">
				<div className="like_button post_buttons_hover">{likeButton}</div>
				<div className="comment_button post_buttons_hover">
					<ButtonBase>
						<ChatBubbleOutlineRoundedIcon />
					</ButtonBase>
				</div>
				<div className="edit_button ">
					<ButtonBase>
						<EditOutlinedIcon onClick={showCommentBox} />
					</ButtonBase>
				</div>
			</div>
			<div
				className="post_likes_comments"
				ref={(element) => (comment_like_container = element)}
			>
				<div className="post-details_likes-comments">
					<p className="post_likes">
						<span>24</span> likes
					</p>
					<p className="post_comments">view all 78 comments</p>
				</div>
				<ButtonBase className="post_button_goto">Goto Post</ButtonBase>
			</div>
			<CommentSection
				isOpen={Boolean(isOpen)}
				showCommentBox={showCommentBox}
			/>
		</div>
	);
};

export default PostFooter;
