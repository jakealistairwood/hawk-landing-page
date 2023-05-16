import Image from "next/image"
import React, { useContext } from "react"
import { GlobalContext } from "~/utils/context"
import { v4 as uuidv4 } from "uuid"

export default function Header() {
	// eslint-disable-next-line no-unused-vars
	const [context] = useContext(GlobalContext);


	// Links from wordpress menu
	let navLinks = [
		{
			label: "Solutions",
			hasChildren: true,
			href: ""
		},
		{
			label: "Platform",
			hasChildren: true,
			href: ""
		},
		{
			label: "Resources",
			hasChildren: true,
			href: ""
		},
		{
			label: "Company",
			hasChildren: true,
			href: ""
		}
	]

	return <header className="navbar py-7">
		<div className="container flex justify-between items-center">
			<div className="navbar__logo">
				<Image src="/images/logo.svg" height={25} width={125} alt="hawk logo" />
			</div>
			<nav className="navbar__nav-links">
				<ul className="flex items-center gap-5">
					{navLinks.map(link => {
						return <li key={uuidv4()} className="navbar__nav-link flex items-center gap-2">
							{link.hasChildren ? (
								<>
									<span>{link.label}</span>
									<Image src="/images/caret-down.svg" width={16} height={16} alt="drowdown indicator" />
								</>
							) : ( <a href="">

								<span>{link.label}</span>
							</a>)}
						</li>
					})}
				</ul>
			</nav>
			<div className="navbar__ctas flex items-center gap-5">
				<a href="#">Login</a>
				<a className="btn navbar__btn py-2 px-5 border border-solid border-[#AFB9B4]" href="#">Request a demo</a>
			</div>
		</div>
	</header>;
}
