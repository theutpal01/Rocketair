import Image from "next/image"
import PrimaryBtn from "../buttons/PrimaryBtn"
import Field from "../inputs/Field"

const Footer = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-center lg:*:w-1/2 h-full border-t border-t-white items-center text-white">
			<div className="text-center h-full text-wrap space-y-4 flex justify-center items-center py-9 lg:p-0">
				<div className="flex flex-col items-center justify-center space-y-4">
					<h2 className="text-4xl">Fuel for Thought</h2>
					<p className="max-w-96">A casual hello from the RocketAir Crew filled with insights, inspiration, and good vibes only.</p>
					<Image className="size-[32vw] lg:size-[18vw] my-[5em] lg:my-[3em]" src="/footer.svg" alt="RocketAir Footer Image" width={100} height={100} />

					<form action="" className="w-full space-y-6">
						<Field type="email" name="email" placeholder="Enter your email" />
						<PrimaryBtn theme="ghost" text="Subscribe" size="lg" />
					</form>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default Footer