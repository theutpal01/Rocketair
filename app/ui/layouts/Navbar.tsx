import Image from 'next/image'
import Link from 'next/link'
import PrimaryBtn from '../buttons/PrimaryBtn'

const Navbar = () => {
	return (
		<div className='flex justify-between items-center p-4 sm:p-6 md:px-8 lg:px-12 bg-transparent text-white'>
			<div className='text-xl font-bold'>
				<Link href='/'>
					<Image src='/logo.svg' alt="RocketAir Logo" width={30} height={30} />
				</Link>
			</div>
			<div className='flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12'>
				<PrimaryBtn theme='secondary' size='sm' text='Get in touch' />
				<div className='group flex justify-center items-center size-8 rotate-45 relative *:justify-between *:items-center *:flex *:absolute'>
					<div className='flex-col h-full w-auto *:bg-white *:size-2 *:rounded-full *:group-hover:bg-secondary *:duration-300 *:ease-in-out'>
						<div></div>
						<div></div>
					</div>
					<div className='w-full *:bg-white *:size-2 *:rounded-full *:group-hover:bg-secondary *:duration-300 *:ease-in-out'>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar