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
			hasChildren: false,
			href: ""
		}
	]

	return <header class="bg-white">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
	  <div class="flex lg:flex-1">
		<a href="#" class="-m-1.5 p-1.5">
		  <span class="sr-only">Hawk</span>
		  <Image src="/images/logo.svg" height={25} width={125} alt="hawk logo" />
		</a>
	  </div>
	  <div class="flex lg:hidden">
		<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
		  <span class="sr-only">Open main menu</span>
		  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
		  </svg>
		</button>
	  </div>
	  <div class="hidden lg:flex lg:gap-x-12">
		<ul class="relative flex items-center gap-5">
			{navLinks.map(link => {
				return <li key={uuidv4()}>
					{link.hasChildren ? (
						<button className="flex items-center gap-2" aria-expanded="false">
							<span>{link.label}</span>
							<Image src="/images/caret-down.svg" width={16} height={16} alt="drowdown indicator" />
						</button>
					) : (
						<a href={link.href} className="leading-6 text-gray-900">
							<span>{link.label}</span>
						</a>
					)}
				</li>
			})}
	  	</ul>
		</div>
	  <div class="hidden lg:flex lg:flex-1 lg:gap-5 lg:items-center lg:justify-end">
		<a href="#" class="leading-6 text-gray-900">Log in</a>
		<a className="btn navbar__btn py-2 px-5 border border-solid border-[#AFB9B4]" href="#">Request a demo</a>
	  </div>
	</nav>
  </header>;
}