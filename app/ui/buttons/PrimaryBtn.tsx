import React from "react"

const PrimaryBtn = ({ className, children, theme = "primary", size = "md" }: { className?: string, children: string | React.ReactNode, theme: "primary" | "secondary" | "ghost", size: "sm" | "md" | "lg" }) => {

	const themes = {
		primary: "bg-primary text-black hover:text-white",
		secondary: "bg-secondary text-black hover:text-white",
		ghost: "bg-tranparent text-white hover:text-black"
	}

	const sizes = {
		sm: "text-sm",
		md: "text-base py-1",
		lg: "text-lg py-2"
	}


	return (
			<button className={`${className} ${themes[theme]} group relative overflow-hidden flex justify-center items-center cursor-pointer text-black px-4 border-2 border-white rounded-full min-w-32 ${sizes[size]} duration-300 ease-in-out`} type="button">
				<div className={`h-0 w-full absolute top-1/2 left-1/2 -translate-1/2 group-hover:h-full duration-300 ease-out ${theme === "ghost" ? 'bg-white' : 'bg-black'}`}></div>
				<div className="z-10">{children}</div>
			</button>

	)
}

export default PrimaryBtn