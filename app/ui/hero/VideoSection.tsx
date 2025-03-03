"use client";
import { useState } from 'react';
import { Video } from '@/app/ui/controls/Video';
import { heroVids } from '@/app/lib/data';

const VideoSection = () => {
	const [play, setPlay] = useState(false);
	const [showClose, setShowClose] = useState(false);
	return (
		<>
			<div className="w-full h-auto relative">
				<Video width={1280} height={720} className="w-screen aspect-video" sources={heroVids} loop={true} autoplay={true} muted={true} />
				<div onClick={() => setPlay(true)} className="absolute bg-black/30 z-10 h-full w-full aspect-video top-0 left-0 flex group justify-center items-center">
					<div className={`group-hover:size-32 duration-500 ease-in-out rounded-full opacity-0 size-0 group-hover:opacity-100 flex justify-center items-center cursor-pointer bg-zinc-900 text-white active:scale-80`}>
						<p className="rotate-90 group-hover:rotate-0 duration-500 ease-in-out">Play</p>
					</div>
				</div>
			</div>
			{play && <div className='fixed top-0 left-0 z-20 flex justify-center items-center w-screen h-screen bg-black'>
				<div className='relative w-screen h-auto max-h-screen aspect-video'>
					<iframe width={1280} height={720} onPlay={() => setShowClose(true)} className='aspect-video w-screen h-full' src="https://player.vimeo.com/video/739677535?h=5a8ef33a1a&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&autopause=0" allowFullScreen title='RocketAir Design Reel' />
					{showClose && <div className={`fixed left-1/2 -translate-x-1/2 top-3/4 -translate-y-1/2 size-32 z-20 duration-500 ease-in-out rounded-full flex justify-center items-end pb-32 cursor-pointer bg-gray-400/40 text-black active:scale-80`}>
						<p className="rotate-90 group-hover:rotate-0 duration-500 ease-in-out z-20">X</p>
					</div>}
				</div>
			</div>}
		</>
	)
}

export default VideoSection