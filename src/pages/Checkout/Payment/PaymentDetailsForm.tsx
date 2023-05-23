import { useState } from "react";
import AuthNavBar from "../../../components/AuthNavBar";
import InputForm from "../../../components/InputInfo";
import { Link } from "react-router-dom";
import SelectInput from "../../../components/SelectOptions";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const PaymentDetailsForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [inputData, setInputData] = useState({
    Card_Name: "",
    Card_Number: "",
    CVV: "",
  });

  const checkout = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "/",
      },
    });
    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
    console.log(inputData);
    console.log("clicked");
  };

  return (
    <div className="relative grid place-items-center row-span-1 md:col-span-2 md:border-r border-[#d8bebe] my-2 w-screen md:w-full">
      <AuthNavBar />
      <form
        onSubmit={checkout}
        className="flex flex-col p-5 gap-5 shadow-xl mt-20 md:mt-0 w-screen md:w-fit"
      >
        <h2 className="text-center font-semibold">Card Details</h2>
        <PaymentElement />

        <span className="flex items-center gap-2">
          <input type="checkbox" className="accent-secondary" />
          <p>Remember this details</p>
        </span>
        <div className="flex gap-3">
          <Link to="/checkout/">
            <button className="text-center font-semibold border border-transparent rounded-md px-10 p-1 bg-secondary hover:bg-transparent hover:border-inherit">
              Go back
            </button>
          </Link>
          <button
            type="submit"
            className="text-center font-semibold border border-transparent rounded-md px-10 p-1 bg-[green] hover:bg-transparent hover:border-inherit"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetailsForm;
