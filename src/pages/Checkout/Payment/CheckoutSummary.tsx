import React from "react";
import ItemSummaryCard from "./ItemSummaryCard";
import SummaryTotalCard from "./SummaryTotalCard";
import { useAppSelector } from "../../../app/hooks";
import { getTotal } from "../../../utils/GetTotal";

const CheckoutSummary = () => {
	const cart_summary = useAppSelector((state) => state?.cartReducer.cart);
	const cart_total = getTotal(cart_summary).totalPrice;

	const summaryData = [
		{ title: "subtotal", value: cart_total },
		{ title: "shipping", value: 20.0 },
		{ title: "tax", value: 10.0 },
		{ title: "total", value: cart_total + 20 + 10 },
	];
	return (
		<div className="my-3 px-2">
			<h2 className="font-semibold text-[1.2rem]">Order summary</h2>
			<div className="max-h-[75vh] overflow-y-scroll">
				{cart_summary?.map((cart_sum) => (
					<ItemSummaryCard
						key={cart_sum.id}
						name={cart_sum.name}
						quantity={cart_sum.quantity}
						desc={cart_sum.desc}
						price={cart_sum.newprice}
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
