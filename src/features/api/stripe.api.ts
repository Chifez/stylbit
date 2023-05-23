import { loadStripe, Stripe } from "@stripe/stripe-js";
import axios from "axios";

const keyApi = axios.create({
  baseURL: "https://stylbit-sever-git-master-chifez.vercel.app/",
});

export const getPublicKey = async (
  setStripePromise: (e: Stripe | null) => void
) => {
  const publicKey = await keyApi.get("/config");
  const { publishablekey } = publicKey.data;
  return setStripePromise(await loadStripe(publishablekey));
};

export const getSecretKey = async (setClientSecret: (e: string) => void) => {
  await keyApi.post("/payment", {}).then((res) => {
    const { clientSecret } = res.data;
    return setClientSecret(clientSecret);
  });
};
