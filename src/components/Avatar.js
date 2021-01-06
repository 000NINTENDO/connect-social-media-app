import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import ProfilePhoto from "../assets/photos/back.jpg";
import "./Avatar.css";

const Avatar = () => {
	return (
		<div className="avatar_container">
			<ButtonBase>
				<div className="avatar_img_container">
					<img src={ProfilePhoto} className="avatar_img" alt="user" />
				</div>
			</ButtonBase>

			{/* <div className="users_menu">
        <span className="users_menu_arrow" >&rang;</span>
      </div> */}
		</div>
	);
};

export default Avatar;
