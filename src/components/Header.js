import React from "react";
import "./Header.css";
import AddPost from "./AddPost";

const Header = () => {
	return (
		<>
			<div className="header">
				<div>
					<h2 className="header_title">Connect</h2>
					<p className="header_para">
						Find Poples, Friends , celebrities and more
					</p>
				</div>
				<AddPost />
			</div>
		</>
	);
};

export default Header;
