import { useState, useRef, useEffect } from "react";
import posterpic from "../../assets/posterpic.png";

const MainVideo = () => {
	const [isVideoPlaying, setIsVideoPlaying] = useState({
		initialized: false,
		playing: false,
	});

	const player = "videos/Fashion_video.mp4";

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

	// useEffect(() => {
	// 	VideoRef.current && (VideoRef.current.defaultMuted = true);
	// }, []);
	return (
		<div className="relative">
			<button
				className="absolute bottom-[80%] z-50 border border-[red]"
				data-state="play"
				onClick={handlePlay}
			>
				{isVideoPlaying.playing ? "pause" : "play"} video
			</button>

			<video
				loop
				// muted={true}
				playsInline
				poster={posterpic}
				width="100%"
				height="70%"
				ref={VideoRef}
			>
				<source src={player} type="video/mp4" />
				your browser does not support the video tag
			</video>
		</div>
	);
};

export default MainVideo;
