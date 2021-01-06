import React, { useEffect, useState } from "react";
import "./CommentSection.css";

const CommentSection = ({ isOpen, showCommentBox }) => {
	const [commentText, setCommentText] = useState();
	let inputContainer;

	const setText = (e) => {
		e.preventDefault();
		setCommentText(e.target.value);
	};
	const addComment = (e) => {
		e.preventDefault();
		setCommentText("");
	};

	useEffect(() => {
		if (isOpen) {
			inputContainer.style.width = "100%";
		} else {
			inputContainer.style.width = "0%";
		}
	}, [isOpen, inputContainer]);

	return (
		<div
			className="comment_input_container"
			ref={(element) => (inputContainer = element)}
		>
			<form className="comment_input_form" onSubmit={addComment}>
				<input
					type="text"
					value={commentText}
					placeholder="Add new comment"
					onChange={setText}
					className="comment_input"
				/>
				<p className="comment_arrow_sign" onClick={() => showCommentBox()}>
					&rsaquo;
				</p>
			</form>
		</div>
	);
};

export default CommentSection;
