import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "./Avatar";
import "./AddPost.css";

const AddPost = () => {
  return (
    <div className="nav_right">
      <div className="plus_sign">
        <ButtonBase className="plus_sign">
          <span className="plus">+</span>
          {/* <div className="line_1"></div>
            <div className="line_2"></div> */}
          <div className="add_post"> add post</div>
        </ButtonBase>
      </div>

      <Avatar />
    </div>
  );
};

export default AddPost;
