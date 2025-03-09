"use client";
import React, { useEffect, useState } from 'react';
import { Video } from '@/app/ui/controls/Video';
import { heroVids } from '@/app/lib/data';
import { isMobile } from 'react-device-detect';
import { CgClose } from 'react-icons/cg';

const VideoSection = () => {
	const [play, setPlay] = useState(false);

	useEffect(() => {
		const parent = document.getElementById("follow");
		const elem = document.getElementById("circle");

		if (!parent || !elem) return;

		const handlePointerMove = (e: MouseEvent) => {
			const { clientX, clientY } = e;

			const rect = parent.getBoundingClientRect();
			const x = clientX - rect.left;
			const y = clientY - rect.top;

			// console.log("Cursor Position:", x, y);

			elem.style.left = `${x}px`;
			elem.style.top = `${y}px`;
		};

		if (!isMobile) {
			parent.addEventListener("mousemove", handlePointerMove);

			return () => {
				parent.removeEventListener("mousemove", handlePointerMove);
			};
		}
	}, []);

	useEffect(() => {
		const video = document.getElementById("follow") as HTMLDivElement;

		const handlePlay = () => {
			if (!play) {  // pause
				setPlay(true);
				console.log("Play");
			} else {
				console.log("Pause");
				setPlay(false);
			}
		}

		video.addEventListener("click", handlePlay);

		return () => {
			video.removeEventListener("click", handlePlay);
		}
	}, [play]);

	return (
		<>
			<div id='follow' className="w-full h-auto relative group overflow-hidden cursor-none">
				{!play ?
					<Video width={1280} height={720} className="w-screen aspect-video" sources={heroVids} loop={true} autoplay={true} muted={true} />
					:
					<iframe allow='autoplay' width={1280} height={720} className='aspect-video w-screen h-full pointer-events-none'
						src="https://player.vimeo.com/video/739677535?h=5a8ef33a1a&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&autopause=0"
						allowFullScreen title='RocketAir Design Reel' />
				}
				<div id='circle' className={`flex opacity-40 md:opacity-0 duration-75 absolute justify-center items-center size-16 sm:size-36 text-white bg-gray-900 left-1/2 top-1/2 -translate-1/2 rounded-full pointer-events-none group-hover:opacity-80 group-active:scale-90 group-active:bg-gray-800 transition-transform`}>
					{play ? <CgClose className='size-6' /> : <p>Play</p>}
				</div>
			</div>
		</>
	);
}

export default VideoSection;
