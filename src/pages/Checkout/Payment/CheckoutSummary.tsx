import React from "react";
import ItemSummaryCard from "./ItemSummaryCard";
import SummaryTotalCard from "./SummaryTotalCard";
import { useAppSelector } from "../../../app/hooks";
import { getTotal } from "../../../utils/GetTotal";

const CheckoutSummary = () => {
	const cartSummary = useAppSelector((state) => state?.cartReducer.cart);
	const cartTotal = getTotal(cartSummary).totalPrice;

	const summaryData = [
		{ title: "subtotal", value: cartTotal },
		{ title: "shipping", value: 20.0 },
		{ title: "tax", value: 10.0 },
		{ title: "total", value: cartTotal + 20 + 10 },
	];
	return (
		<div className="my-3 px-2">
			<h2 className="font-semibold text-[1.2rem]">Order summary</h2>
			<div className="max-h-[75vh] overflow-y-scroll">
				{cartSummary?.map((cartSum) => (
					<ItemSummaryCard
						key={cartSum.id}
						name={cartSum.name}
						quantity={cartSum.quantity}
						desc={cartSum.desc}
						price={cartSum.newprice}
					/>
				))}
			</div>
			<div className="border-t-2 border-secondary pt-4">
				{summaryData.map((item, idx) => (
					<SummaryTotalCard title={item.title} value={item.value} key={idx} />
				))}
			</div>
		</div>
	);
};

export default CheckoutSummary;
