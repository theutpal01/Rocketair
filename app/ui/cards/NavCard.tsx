import React from 'react'

const NavCard = ({ image, heading, body, clickFn }: { image: string, heading: string, body: string, clickFn?: () => (void) }) => {
	return (
		<div className='p-6 relative group cursor-pointer'>
			<div className="relative w-full group overflow-hidden">
				<img src={image} alt="card" className="group-hover:scale-105 duration-200 ease-in object-cover w-full aspect-square" />
			</div>
			<div className="py-4">
				<h2 className="text-xl font-semibold font-primary">{heading}</h2>
			</div>
			<p className={`absolute opacity-0 -bottom-5 group-hover:opacity-100 group-hover:bottom-0 -translate-y-1/2 uppercase text-xs font-secondary  text-gray-500 mt-2 duration-300`}>{body}</p>
		</div>
	)
}

export default NavCard