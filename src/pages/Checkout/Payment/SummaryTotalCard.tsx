import React from "react";

const SummaryTotalCard = (props: {
	title: string;
	value: number;
	key: number;
}) => {
	return (
		<div className="flex justify-between" key={props.key}>
			<h3>{props.title}</h3>
			<h4>${props.value}</h4>
		</div>
	);
};

export default SummaryTotalCard;
