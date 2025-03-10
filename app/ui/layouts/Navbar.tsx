"use client";
import Image from 'next/image'
import Link from 'next/link'
import PrimaryBtn from '@/app/ui/buttons/PrimaryBtn'
import { useScroll } from '@/app/lib/customHooks';
import { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import NavCard from '../cards/NavCard';

interface Scroll {
	scrollY: number;
	scrollX: number;
	scrollDirection: string | undefined;
}

const links = [
	{
		title: "Work",
		href: "/work",
		style: "duration-[150ms] ease-out"
	},
	{
		title: "About",
		href: "/about",
		style: "duration-[250ms] ease-in-out"
	},
	{
		title: "Services",
		href: "/services",
		style: "duration-[300ms] ease-in-out"
	},
	{
		title: "Verticals",
		href: "/verticals",
		style: "duration-[350ms] ease-in-out"
	},
	{
		title: "Careers",
		href: "/careers",
		style: "duration-[400ms] ease-in-out"
	},
	{
		title: "Ideas",
		href: "/ideas",
		style: "duration-[450] ease-in-out"
	},
	{
		title: "News",
		href: "/news",
		style: "duration-[500ms] ease-in-out"
	},
	{
		title: "Contact",
		href: "/contact",
		style: "duration-[550ms] ease-in-out"
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
				<div className='relative overflow-hidden w-full font-bold'>
					<Link href='/' className='flex space-x-3 text-white font-normal tracking-widest'>
						<Image className='mix-blend-difference' src='/logo.svg' alt="RocketAir Logo" width={30} height={30} />
						<h1 className={`absolute left-12 -translate-y-1/2 ${show ? 'top-1/2' : 'top-20'} duration-300 top-0 text-2xl lg:text-4xl`}>RocketAir</h1>
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
				<div className={`${show ? 'w-full' : 'w-0'} duration-1000 h-[1px] bg-white`}></div>
				<div className='flex w-full h-full'>
					<div className={`w-2/5 max-h-[90vh] relative ${show ? 'top-0' : 'top-full'} duration-500`}>
						<div className='flex flex-col w-full py-6 *:px-8 h-full absolute overflow-y-auto'>
							<NavCard image="/navcards/1.jpg" heading="NewLimit" body="envisioning a limitless brand for a not-too-distant future" clickFn={() => { }} />
							<NavCard image="/navcards/2.jpg" heading="NewLimit" body="envisioning a limitless brand for a not-too-distant future" clickFn={() => { }} />
							<NavCard image="/navcards/3.jpg" heading="NewLimit" body="envisioning a limitless brand for a not-too-distant future" clickFn={() => { }} />
						</div>
					</div>
					<div className='w-3/5 flex flex-col lg:border-l max-h-[90vh] lg:border-white'>
						<div className='flex flex-col *:px-8 h-full overflow-y-auto'>
							{links.map((link, index) => (
								<Link className="relative group duration-300 *:ease-out border-white" key={index} href={link.href}>
									<h3 className="text-3xl py-6 group-hover:text-black">{link.title}</h3>
									<div className={`absolute bg-white top-1/2 left-1/2 -translate-1/2 w-full h-0 duration-300 group-hover:h-full -z-10`}></div>
									<div className={`absolute left-0 ${link.style} bg-white h-[1px] ${show ? 'w-full' : 'w-0'}`}></div>
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
		</div>
	)
}

export default Navbar