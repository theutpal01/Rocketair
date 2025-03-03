import Image from "next/image"
import PrimaryBtn from "../buttons/PrimaryBtn"
import Field from "../inputs/Field"
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link"

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

const Footer = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-center *:w-full lg:*:w-1/2 h-full border-t border-t-white items-center text-white">
			<div className="text-center h-full text-wrap space-y-4 flex justify-center items-center py-9 lg:p-0">
				<div className="flex flex-col items-center justify-center space-y-4">
					<h2 className="text-4xl">Fuel for Thought</h2>
					<p className="max-w-96">A casual hello from the RocketAir Crew filled with insights, inspiration, and good vibes only.</p>
					<Image className="size-[32vw] lg:size-[18vw] my-[5em] lg:my-[3em]" src="/footer.svg" alt="RocketAir Footer Image" width={100} height={100} />

					<form action="" className="w-full space-y-6 flex flex-col items-center">
						<Field type="email" name="email" placeholder="Enter your email" />
						<PrimaryBtn theme="ghost" children="Subscribe" size="lg" />
					</form>
				</div>
			</div>
			<div className="flex flex-col *:px-8 lg:border-l lg:border-white">
				{links.map((link, index) => (
					<Link className="border-b border-white hover:bg-white hover:text-black duration-200 ease-in" key={index} href={link.href}>
						<h3 className="text-3xl py-6">{link.title}</h3>
					</Link>
				))}
				<div className="flex justify-between items-center">
					<div className="flex space-x-6 py-6">
						<PrimaryBtn className="!min-w-0 rounded-full size-11 !p-0" theme="ghost" children={<FaTwitter className="size-5" />} size="md" />
						<PrimaryBtn className="!min-w-0 rounded-full size-11 !p-0" theme="ghost" children={<FaLinkedinIn className="size-5" />} size="md" />
						<PrimaryBtn className="!min-w-0 rounded-full size-11 !p-0" theme="ghost" children={<FaYoutube className="size-5" />} size="md" />
						<PrimaryBtn className="!min-w-0 rounded-full size-11 !p-0" theme="ghost" children={<AiFillInstagram className="size-5" />} size="md" />
					</div>
					<Link className="text-gray-500 hover:text-gray-400" href="/privacy" target="_blank">Privacy Policy</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer