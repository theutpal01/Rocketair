import PrimaryBtn from "../buttons/PrimaryBtn"

const Promote = () => {
	return (
		<div className="text-white mt-40 p-4 sm:p-6 md:px-8 lg:px-12">
			<div className="w-full md:w-3/4 lg:w-1/2 mb-40">
			<h3 className="text-2xl sm:text-4xl">RocketAir is a design and strategy company with an adaptive approach to problem solving.</h3>
			</div>
			<div className="flex items-center">
				<h3 className="text-2xl sm:text-4xl w-max mr-6">We call it</h3>
				<div className="grow h-[1px] bg-gray-500"></div>
			</div>
			<div className="flex flex-col justify-center *:leading-tight *:font-secondary *:text-[25vw] md:*:text-[22vw] lg:*:text-[23.5vw] py-12">
				<div>
					<h3 className="tracking-tight leading-[20vw]">ORBITAL</h3>
				</div>
				<div className="flex flex-col md:flex-row md:items-center justify-between">
					<h3 className="tracking-tight leading-[20vw]">DESIGN</h3>
					<PrimaryBtn className="font-medium w-fit self-center" theme='ghost' size='lg' children='Get to know us' />
				</div>
			</div>
		</div>
	)
}

export default Promote