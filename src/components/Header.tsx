import React from "react";
import { Link } from "react-router-dom";
import RoundButton from "./RoundButton";

const Header = () => {
	return (
		<div className="flex justify-between items-center text-white p-5">
			<a href="/">Faloni</a>
			<div className="flex items-center">
				<a href="/" className="flex mx-2">
					cart <RoundButton children="3" />{" "}
				</a>
				<a href="/" className="mx-2">
					Menu
				</a>
			</div>
		</div>
	);
};

export default Header;
