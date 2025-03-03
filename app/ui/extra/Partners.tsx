import React from 'react'
import Card from '../controls/Card'
import { partners } from '@/app/lib/data'

const Partners = () => {
	return (
		<div className='min-h-screen bg-white p-4 sm:p-6 md:px-8 lg:px-12'>
			<div className='flex flex-col justify-around h-full mt-16'>
				<h3 className='w-full md:w-3/4 lg:w-1/2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>We partner with <br />forward-thinking enterprises and startups.</h3>

				<div className='flex space-x-12 overflow-x-scroll w-full mt-40'>
					{partners.map((partner) => (
						<Card key={partner.name} className='w-full h-auto mb-8' img={partner.img}>
							<p>{partner.content}</p>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default Partners