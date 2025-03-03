"use client";
import { useState, useEffect } from "react";

export function useScroll() {
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [bodyOffset, setBodyOffset] = useState({ top: 0, left: 0 });

	const [scrollY, setScrollY] = useState(bodyOffset.top);
	const [scrollX, setScrollX] = useState(bodyOffset.left);
	const [scrollDirection, setScrollDirection] = useState<string | undefined>("down");

	useEffect(() => {
		if (typeof document !== "undefined") {

			const listener = (e: Event) => {
				setBodyOffset(document.body.getBoundingClientRect());
				setScrollY(-bodyOffset.top);
				setScrollX(bodyOffset.left);
				setScrollDirection((lastScrollTop > -bodyOffset.top) ? "down" : "up");
				setLastScrollTop(-bodyOffset.top);
			};

			
			window.addEventListener("scroll", listener);
			return () => {
				window.removeEventListener("scroll", listener);
			};
		}
	});

	return {
		scrollY,
		scrollX,
		scrollDirection
	};
}