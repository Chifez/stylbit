import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, animate } from "framer-motion";
import { MdClose } from "react-icons/md";
const CartModal = (props: { isOpen: boolean; toggle: () => void }) => {
	const { isOpen, toggle } = props;
	const navigate = useNavigate();
	const PrevPage = () => {
		toggle();
		navigate(-1);
	};
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
		<AnimatePresence mode="wait">
			{isOpen && (
				<motion.div
					onClick={toggle}
					className="fixed top-0 flex items-center justify-center w-screen h-screen z-100 bg-black/[0.7]"
				>
					<motion.div
						variants={scaleIn}
						initial="hidden"
						animate="animate"
						exit="exit"
						onClick={(e) => e.stopPropagation()}
						className="w-[60vw] h-[60vh] relative bg-white text-black flex flex-col items-center justify-center gap-2 rounded-md"
					>
						<MdClose
							className="absolute top-2 right-2 w-7 h-7 cursor-pointer"
							onClick={toggle}
						/>
						<p>item has been added to cart</p>
						<div
							onClick={PrevPage}
							className="hover font-Hmid border w-fit uppercase py-1 px-2 rounded-sm cursor-pointer"
						>
							continue shopping
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
export default CartModal;
