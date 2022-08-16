import React from "react";
import RoundButton from "../../components/RoundButton";
import hero1 from "../../assets/deji-akinyele-ARm28szwP0o-unsplash.jpg";
import hero2 from "../../assets/alexander-jawfox-GNd5gstTSg8-unsplash.jpg";
import { BsArrowDown } from "react-icons/bs";

const MainHero = () => {
	return (
		<div>
			<div className="relative top-5 flex justify-between items-start text-[7rem]">
				<h2 className="relative left-5">NEW</h2>
				<div className="relative flex flex-col items-end right-5">
					<span className="flex justify-center items-center">
						<a href="/">
							<RoundButton
								children="view more"
								extraclasses="px-3 py-2 w-fit text-[0.7rem] font-bold uppercase"
							/>
						</a>
						<h2>FASHION </h2>
					</span>
					<h2>COLLECTIONS</h2>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-5">
				<img src={hero1} alt="hero1" />
				<img src={hero2} alt="hero2" className="mt-[5.5rem]" />
				<div className="relative mt-[5.5rem] text-sm">
					<h2>
						The brand was originally aimed at men's fashion.In 1985 all women's
						fashion were launched;from casual to the most urban{" "}
					</h2>
					<div className="absolute bottom-0 bg-transparent fill-white border-[0.5px] border-secondary w-max p-7 rounded-full">
						<BsArrowDown />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHero;
