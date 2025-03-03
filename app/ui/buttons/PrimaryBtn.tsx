import React from "react"

const PrimaryBtn = ({ className, children, theme = "primary", size = "md" }: { className?: string, children: string | React.ReactNode, theme: "primary" | "secondary" | "ghost", size: "sm" | "md" | "lg" }) => {

	const themes = {
		primary: "bg-primary text-black hover:bg-transparent hover:text-white",
		secondary: "bg-secondary text-black hover:bg-transparent hover:text-white",
		ghost: "bg-tranparent text-white hover:bg-white hover:text-black"
	}

	const sizes = {
		sm: "text-sm",
		md: "text-base py-1",
		lg: "text-lg py-2"
	}


	return (
		<button className={`${className} ${themes[theme]} flex justify-center items-center cursor-pointer text-black px-4 border border-white rounded-full min-w-32 ${sizes[size]} duration-300 ease-in-out`} type="button">{children}</button>
	)
}

export default PrimaryBtn