"use client";
import Image from 'next/image'
import Link from 'next/link'
import PrimaryBtn from '@/app/ui/buttons/PrimaryBtn'
import { useScroll } from '@/app/lib/customHooks';

interface Scroll {
	scrollY: number;
	scrollX: number;
	scrollDirection: string | undefined;
}

const Navbar = () => {
	const { scrollY, scrollX, scrollDirection }: Scroll = useScroll();

	const styles = {
		active: "top-0",
		hidden: "-top-20"
	}

	return (
		<div className={`${scrollDirection === "down" ? styles.active : styles.hidden} fixed w-full flex justify-between items-center h-20 duration-300 ease-in-out p-4 sm:p-6 md:px-8 lg:px-12 bg-transparent text-white`}>
			<div className='text-xl font-bold'>
				<Link href='/'>
					<Image src='/logo.svg' alt="RocketAir Logo" width={30} height={30} />
				</Link>
			</div>
			<div className='flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12'>
				<PrimaryBtn theme='secondary' size='sm' children='Get in touch' />
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