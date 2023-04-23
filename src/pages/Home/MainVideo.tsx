import { useState, useRef, useEffect } from "react";
import { motion,useAnimation} from "framer-motion";
import { zoomIn } from "../../utils/animations/videoZoom";
import { useInView } from "react-intersection-observer";

import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import posterpic from "../../assets/posterpic.png";
// import player from "videos/fashion.mp4";

const player =
	"https://firebasestorage.googleapis.com/v0/b/faloni.appspot.com/o/video%2Ffashion.mp4?alt=media&token=37c509ba-7e8a-4b86-b75a-e74a64dc924f";

const MainVideo = () => {
	const [isVideoPlaying, setIsVideoPlaying] = useState({
		initialized: true,
		playing: true,
	});

	const VideoRef = useRef<HTMLVideoElement>(null);
	const [ref,Inview] = useInView();
	const control = useAnimation()

	const handlePlay = () => {
		setIsVideoPlaying({
			initialized: !isVideoPlaying.initialized,
			playing: !isVideoPlaying.playing,
		});
		console.log("clicked");
		if (!isVideoPlaying.playing) {
			VideoRef.current?.play();
		} else if (isVideoPlaying.playing) {
			VideoRef.current?.pause();
		}
	};
useEffect(()=>{
	if (Inview){
		control.start("animate")
	}
},[control,Inview])
	return (
		<motion.div ref={ref} variants={zoomIn} initial="initial" animate={control} className="relative my-5">
			<button
				className="absolute flex items-center justify-center top-[70%] md:top-[80%] left-[5%] bg-white text-black font-Hmid  text-sm md:text-lg uppercase rounded-3xl px-4 py-1 z-50"
				data-state="play"
				onClick={handlePlay}
			>
				<span className="flex items-center justify-center">
					{isVideoPlaying.playing ? (
						<div className="flex items-center justify-center">
							<BsFillPauseFill className="w-5 h-5 md:w-6 md:h-6" />
							<p className="pt-1 md:pt-0">pause video</p>
						</div>
					) : (
						<div className="flex items-center justify-center">
							<BsFillPlayFill className="w-5 h-5 md:w-6 md:h-6" />
							<p className="pt-1 md:pt-0"> play video</p>
						</div>
					)}
				</span>
			</button>

			<video
				loop
				muted={true}
				playsInline
				poster={posterpic}
				width="100%"
				height="60%"
				ref={VideoRef}
				autoPlay
			>
				<source src={player} type="video/mp4" />
				your browser does not support the video tag
			</video>
		</motion.div>
	);
};

export default MainVideo;
