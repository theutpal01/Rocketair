"use client";
import { useState } from "react";
import { Video } from "../controls/Video"
import Stage from "./Stage"


const Hero = () => {
	const [play, setPlay] = useState(false);
	const vids = [
		{
			type: 'video/mp4',
			src: 'https://cdn.prod.website-files.com/6205ecdcec584c56193d6121/6306565a2fc10d28a0829211_RocketAir_Design_Reel_2022_Thumbnail_1920_2-transcode.mp4',
			alt: "RocketAir Design Reel 2022"
		},
		{
			type: 'video/webm',
			src: 'https://cdn.prod.website-files.com/6205ecdcec584c56193d6121/6306565a2fc10d28a0829211_RocketAir_Design_Reel_2022_Thumbnail_1920_2-transcode.webm',
			alt: "RocketAir Design Reel 2022"
		}
	];

	return (
		<div className="pt-20">
			<Stage />
			<div className="w-full h-auto relative">
				<Video width={1280} height={720} className="w-screen aspect-video" sources={vids} loop={true} autoplay={true} />
				<div onClick={() => setPlay(true)} className="absolute bg-black/30 z-10 h-full w-full aspect-video top-0 left-0 flex group justify-center items-center">
					<div className={`group-hover:size-32 duration-500 ease-in-out rounded-full opacity-0 size-0 group-hover:opacity-100 flex justify-center items-center cursor-pointer bg-zinc-900 text-white active:scale-80`}>
						<p className="rotate-90 group-hover:rotate-0 duration-500 ease-in-out">Play</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero