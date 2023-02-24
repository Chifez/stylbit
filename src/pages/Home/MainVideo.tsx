import { useState, useRef } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import posterpic from "../../assets/posterpic.png";
// import player from "videos/fashion.mp4";

const player = "videos/fashion.mp4";

const MainVideo = () => {
	const [isVideoPlaying, setIsVideoPlaying] = useState({
		initialized: false,
		playing: false,
	});

	const VideoRef = useRef<HTMLVideoElement>(null);

	const handlePlay = () => {
		setIsVideoPlaying({
			initialized: true,
			playing: !isVideoPlaying.playing,
		});
		console.log("clicked");
		if (!isVideoPlaying.playing) {
			VideoRef.current?.play();
		} else if (isVideoPlaying.initialized && isVideoPlaying.playing) {
			VideoRef.current?.pause();
		}
	};
	return (
		<div className="relative my-5">
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
			>
				<source src={player} type="video/mp4" />
				your browser does not support the video tag
			</video>
		</div>
	);
};

export default MainVideo;
