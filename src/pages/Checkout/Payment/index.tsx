import React from "react";
import PaymentDetailsForm from "./PaymentDetailsForm";
import CheckoutSummary from "./CheckoutSummary";

const Checkout = () => {
	return (
		<div className="bg-primary min-h-screen grid md:grid-cols-3 text-white">
			<PaymentDetailsForm />
			<CheckoutSummary />
		</div>
	);
};

export default Checkout;
