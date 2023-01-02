const MainVideo = () => {
	const player = "videos/Fashion_video.mp4";
	return (
		<div>
			<video controls width="100%" height="70%">
				<source src={player} type="video/mp4" />
			</video>
		</div>
	);
};

export default MainVideo;
