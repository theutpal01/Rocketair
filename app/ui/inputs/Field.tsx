"use client";
import { useState } from "react"

const Field = ({ type, name, placeholder }: { type: string, name: string, placeholder: string }) => {
	const [email, setEmail] = useState("");
	return (
		<div className='flex flex-col border-b border-gray-400 hover:border-white duration-200 ease-in-out w-full py-2 px-0.5'>
			<input className="outline-none" type={type} name={name} placeholder={placeholder} onChange={(e) => setEmail(e.target.value)} />
		</div>
	)
}

export default Field