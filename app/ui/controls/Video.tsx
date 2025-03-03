export function Video(
	{ className, width, height, sources, controls, loop, autoplay, muted }:
		{
			className?: string,
			width: number,
			height: number,
			sources: { type: string, src: string, alt: string }[],
			controls?: boolean,
			loop?: boolean,
			autoplay?: boolean
			muted?: boolean
		}
) {
	return (
		<video width={width} height={height} className={`${className}`} preload="none" controls={controls} loop={loop} autoPlay={autoplay} muted={muted}>
			{sources.map((video, i) => (
				<source key={i} src={video.src} type={video.type} />
			))}
		</video>
	)
}