import React from "react";

const MainVideo = () => {
	const player = "../../assets/Fashion_video.mp4";
	return (
		<div>
			<video>
				<source src={player} />
			</video>
		</div>
	);
};

export default MainVideo;
