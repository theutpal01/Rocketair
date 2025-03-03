import Image from "next/image"
import React from "react"

const Card = ({ className, img, children }:
	{
		className: string,
		img: string,
		children: React.ReactNode
	}
) => {
	return (
		<div className={`flex flex-col min-w-96 min-h-52 justify-between ${className}`}>
			<Image alt="Partner" className="aspect-video" src={img} width={130} height={20} />
			{children}
		</div>
	)
}

export default Card;