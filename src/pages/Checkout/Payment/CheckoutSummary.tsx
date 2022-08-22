import React from "react";
import ItemSummaryCard from "./ItemSummaryCard";
import SummaryTotalCard from "./SummaryTotalCard";

const CheckoutSummary = () => {
	return (
		<div className="p-2 px-2">
			<h2 className="font-semibold text-[1.2rem]">Order summary</h2>
			<div>
				<ItemSummaryCard
					name="marni"
					quantity={2}
					desc="a simple clothing item"
					price={2313.0}
				/>
				<ItemSummaryCard
					name="jaecket"
					quantity={1}
					desc="a simple jacket item"
					price={2313.0}
				/>
				<ItemSummaryCard
					name="dolce"
					quantity={3}
					desc="a simple fashion item"
					price={2313.0}
				/>
				<ItemSummaryCard
					name="marni"
					quantity={2}
					desc="a simple clothing item"
					price={2313.0}
				/>
			</div>
			<SummaryTotalCard title="subtotal" value="2123.00" />
			<SummaryTotalCard title="shipping" value="20.00" />
			<SummaryTotalCard title="tax" value="10.00" />
			<SummaryTotalCard title="total" value="2153.00" />
		</div>
	);
};

export default CheckoutSummary;
