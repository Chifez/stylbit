import React from "react";

const RoundButton = (props: { extraclasses?: any; children: any }) => {
	return <div className={props.extraclasses}>{props.children}</div>;
};
export default RoundButton;
