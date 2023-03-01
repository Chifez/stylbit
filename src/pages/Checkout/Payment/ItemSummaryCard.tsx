const ItemSummaryCard = (props: {
	name: string;
	quantity: number;
	desc?: string;
	price: number;
}) => {
	const { name, quantity, desc, price } = props;
	return (
		<div className="border-b-2 border-secondary py-4">
			<span className="flex justify-between">
				<h2 className="uppercase text-[1.2rem] font-semibold">{name}</h2>
				<p>{quantity}x</p>
			</span>
			<span className="flex justify-between">
				<p>{desc}</p>
				<p>${price}</p>
			</span>
		</div>
	);
};

export default ItemSummaryCard;
