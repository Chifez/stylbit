import { loadStripe, Stripe } from "@stripe/stripe-js";
import axios from "axios";

const keyApi = axios.create({
  baseURL: "https://stylbit-sever-git-master-chifez.vercel.app:400/",
});

export const getPublicKey = async (setStripePromise: (e: any) => void) => {
  const publicKey = await keyApi.get("/config");
  const { publishablekey } = publicKey.data;
  return setStripePromise(await loadStripe(publishablekey));
};

export const getSecretKey = async (setClientSecret: (e: any) => void) => {
  await keyApi.post("/payment", {}).then((res) => {
    const { clientSecret } = res.data;
    return setClientSecret(clientSecret);
  });
};
