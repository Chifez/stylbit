import React from "react";

const SummaryTotalCard = (props: { title: string; value: number }) => {
	return (
		<div className="flex justify-between">
			<h3>{props.title}</h3>
			<h4>${props.value}</h4>
		</div>
	);
};

export default SummaryTotalCard;
