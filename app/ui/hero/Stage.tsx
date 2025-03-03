import { FaArrowDown } from "react-icons/fa6";

const Stage = () => {
	return (
		<div className="flex flex-col justify-between w-full p-4 text-5xl md:text-7xl font-normal lg:text-8xl sm:p-6 md:px-8 lg:px-12 *:pb-[1vw] *:overflow-hidden text-white h-[70vh]">
			<div className="flex flex-wrap md:flex-col">
				<div className="items-start block leading-normal md:leading-none md:flex md:w-full">
					<h1 className="tracking-tighter mr-3 md:mr-0">Digital</h1>
				</div>
				<div className="justify-between items-center flex md:w-full">
					<div className="mr-4 grow flex items-center">
						<h1 className="tracking-tighter leading-normal">experiences</h1>
						<div className="hidden md:block h-[1px] w-full bg-white ml-4 mt-3.5"></div>
					</div>
					<div><h1 className="tracking-tighter leading-normal">that</h1></div>
				</div>
				<div className="flex justify-end"><h1 className="tracking-tighter">Win by Design<span className="tracking-normal uppercase text-xs inline-block -translate-y-6 md:-translate-y-12
			">TM</span></h1></div>
			</div>
			<div className="flex justify-end font-semibold">
				<div className="text-[10px] flex space-x-2">
					<p>CHECK OUT THE HYPE</p>
					<FaArrowDown className="animate-bounce size-3" />
				</div>
			</div>
		</div>
	)
}

export default Stage