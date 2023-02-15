const ItemSummaryCard = (props: {
	name: string;
	quantity: number;
	desc?: string;
	price: number;
}) => {
	return (
		<div className="border-b-2 border-secondary py-4">
			<span className="flex justify-between">
				<h2 className="uppercase text-[1.2rem] font-semibold">{props.name}</h2>
				<p>{props.quantity}x</p>
			</span>
			<span className="flex justify-between">
				<p>{props.desc}</p>
				<p>${props.price}</p>
			</span>
		</div>
	);
};

export default ItemSummaryCard;
