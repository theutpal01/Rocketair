"use client";
import Image from 'next/image'
import Link from 'next/link'
import PrimaryBtn from '@/app/ui/buttons/PrimaryBtn'
import { useScroll } from '@/app/lib/customHooks';
import { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

interface Scroll {
	scrollY: number;
	scrollX: number;
	scrollDirection: string | undefined;
}

const links = [
	{
		title: "Work",
		href: "/work"
	},
	{
		title: "About",
		href: "/about"
	},
	{
		title: "Services",
		href: "/services"
	},
	{
		title: "Verticals",
		href: "/verticals"
	},
	{
		title: "Careers",
		href: "/careers"
	},
	{
		title: "Ideas",
		href: "/ideas"
	},
	{
		title: "News",
		href: "/news"
	},
	{
		title: "Contact",
		href: "/contact"
	}
]

const Navbar = () => {
	const { scrollDirection }: Scroll = useScroll();
	const [show, setShow] = useState(false);

	const styles = {
		active: "top-0",
		hidden: "-top-20"
	}

	return (
		<div className={`${show ? 'h-screen bg-black' : 'h-auto bg-transparent'} transition-all fixed z-50 w-full overflow-hidden`}>
			<div className={`${scrollDirection === "down" ? styles.active : (!show ? styles.hidden : '')} fixed z-50 w-full flex justify-between items-center h-20 duration-300 ease-in-out p-4 sm:p-6 md:px-8 lg:px-12 bg-transparent`}>
				<div className='text-xl font-bold'>
					<Link href='/'>
						<Image className='mix-blend-difference' src='/logo.svg' alt="RocketAir Logo" width={30} height={30} />
					</Link>
				</div>
				<div className='flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12'>
					<PrimaryBtn theme='secondary' size='sm'>Get in touch</PrimaryBtn>
					<div className='group flex justify-center items-center size-8 rotate-45 relative *:justify-between *:items-center *:flex *:absolute cursor-pointer' onClick={() => setShow(!show)}>
						<div className='flex-col h-full w-auto *:bg-white *:mix-blend-difference *:size-2 *:rounded-full *:group-hover:bg-secondary *:duration-300 *:ease-in-out'>
							<div></div>
							<div></div>
						</div>
						<div className='w-full *:bg-white *:mix-blend-difference *:size-2 *:rounded-full *:group-hover:bg-secondary *:duration-300 *:ease-in-out'>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div className={`flex flex-col ${show ? "h-full" : "h-0"} absolute top-20 bg-black z-50 w-full text-white`}>
				<div className={`${show ? 'w-full duration-1000' : 'w-0'} h-[1px] bg-white`}></div>
				<div className='flex w-full h-full'>
					<div className='w-2/5'>

					</div>
					<div className='w-3/5 flex flex-col *:px-8 lg:border-l overflow-auto h-full lg:border-white'>
						{links.map((link, index) => (
							<Link className="relative group border-b *:duration-300 *:ease-out border-white" key={index} href={link.href}>
								<h3 className="text-3xl py-6 group-hover:text-black">{link.title}</h3>
								<div className="absolute bg-white top-1/2 left-1/2 -translate-1/2 w-full h-0 group-hover:h-full -z-10"></div>
							</Link>
						))}
						<div className="flex justify-between items-center">
							<div className="flex space-x-6 py-6">
								<PrimaryBtn className="!min-w-0 rounded-full size-11 !p-0" theme="ghost" size="md"><FaTwitter className="size-5" /></PrimaryBtn>
								<PrimaryBtn className="!min-w-0 rounded-full size-11 !p-0" theme="ghost" size="md"><FaLinkedinIn className="size-5" /></PrimaryBtn>
								<PrimaryBtn className="!min-w-0 rounded-full size-11 !p-0" theme="ghost" size="md"><FaYoutube className="size-5" /></PrimaryBtn>
								<PrimaryBtn className="!min-w-0 rounded-full size-11 !p-0" theme="ghost" size="md"><AiFillInstagram className="size-5" /></PrimaryBtn>
							</div>
							<Link className="text-gray-500 hover:text-gray-400" href="/privacy" target="_blank">Privacy Policy</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar