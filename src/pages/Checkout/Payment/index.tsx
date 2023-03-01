import { useEffect, useState } from "react";
import PaymentDetailsForm from "./PaymentDetailsForm";
import CheckoutSummary from "./CheckoutSummary";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { getPublicKey, getSecretKey } from "../../../features/api/stripe.api";
import Loader from "../../../components/Loader";
import { ThreeDots } from "react-loader-spinner";

const Checkout = () => {
	const [clientSecret, setClientSecret] = useState<string>("");
	const [stripePromise, setStripePromise] = useState<Stripe | null>(null);

	useEffect(() => {
		getPublicKey(setStripePromise);
		getSecretKey(setClientSecret);
	}, []);

	return (
		<div className="bg-primary min-h-screen grid md:grid-cols-3 text-white">
			{!stripePromise && !clientSecret && (
				<Loader
					children={
						<ThreeDots height="50" width="50" radius="9" color="white" />
					}
					baseStyle={"grid col-span-2 h-full w-screen bg-primary"}
					textStyle={"text-xl font-bold text-white"}
				/>
			)}
			{stripePromise && clientSecret && (
				<>
					<Elements stripe={stripePromise} options={{ clientSecret }}>
						<PaymentDetailsForm />
					</Elements>
					<CheckoutSummary />
				</>
			)}
		</div>
	);
};
export default Checkout;
