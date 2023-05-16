import React, { useContext } from "react";
import Image from "next/image";
import { footerLinks } from "~/assets/data/footer-links";
export default function Footer() {

	footerLinks.map(menu => {
		menu.categories.map(category => {
			console.log(category)
		})
	})

	return <footer className="footer pt-24 pb-14">
		<div className="container">
			<div className="footer__logo mb-20">
				<Image src="/images/logo.svg" height={25} width={125} alt="hawk logo" />
			</div>
			<section className="footer__nav grid grid-cols-4 gap-y-20 pb-24">
				{footerLinks.map(menu => {
					return <nav className="footer__nav-menu">
						{menu.categories.map(category => {
							return <>
								{category.href 
									? <a className="flex items-center gap-2 mb-4" href={category.href}>
										<span className="font-medium">{category.label}</span>
										<Image src={"/images/right-arrow.svg"} height={24} width={24} />
									  </a> 
									: <h5 className="font-medium font-f37bolton mb-4">{category.label}</h5>}
								{category.children && <ul className="flex flex-col gap-4">
									{category.children.map(child => {
										return <li>
											<a className="flex items-center gap-4" href={child.href}>
												{child.icon && <img src={child.icon} alt={child.label} />}
												<span className="text-hawk-dark-grey font-normal">{child.label}</span>
											</a>
										</li>
									})}
								</ul>}
							</>
						})}
					</nav>
				})}
			</section>
		</div>
		<section className="footer__copyright border-t border-solid border-hawk-mid-grey pt-14">
			<div className="container flex justify-between items-center">
				<small className="text-xs text-[#828282]">© 2022 Hawk. All rights reserved</small>
				<Image src={"/images/aws.svg"} width={60} height={60} alt="AWS certification badge" />
			</div>
		</section>
	</footer>
}
