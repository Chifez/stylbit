import PreviewPage from "./PreviewPage";
// import { products } from "../../Data/itemData";
// import { product } from "../../Data/Types";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { DocumentData } from "firebase/firestore";
import useProdFetchId from "../../hooks/useProdFetchId";
import Loader from "../../components/Loader";
import { ThreeDots } from "react-loader-spinner";
import CartModal from "../../components/CartModal";
import useModal from "../../hooks/useModal";
import { motion, AnimatePresence } from "framer-motion";

const Preview = () => {
	const { id } = useParams();
	const { fetchedProducts: products, isLoading } = useProdFetchId("id", id);
	const { isOpen, toggle } = useModal();

	const scaleIn = {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.2,
			},
		},
		exit: {
			scale: 0,
			opacity: 0,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<>
			<div className="px-4 bg-primary text-secondary">
				<Layout>
					<>
						{isLoading && (
							<Loader
								children={
									<ThreeDots height="50" width="50" radius="9" color="white" />
								}
								baseStyle={"h-[27rem] w-full bg-primary"}
								textStyle={"text-xl font-bold text-white"}
							/>
						)}
						<AnimatePresence mode="wait">
							{!isLoading && (
								<motion.div
									variants={scaleIn}
									initial="hidden"
									animate="animate"
									exit="exit"
								>
									{products
										?.filter(
											(preview: DocumentData[] | any) => preview.id === id
										)
										.map((products: DocumentData | any) => (
											<PreviewPage
												products={products}
												key={products.id}
												toggle={toggle}
											/>
										))}
								</motion.div>
							)}
						</AnimatePresence>
					</>
				</Layout>
			</div>
			<CartModal isOpen={isOpen} toggle={toggle} />
		</>
	);
};

export default Preview;
