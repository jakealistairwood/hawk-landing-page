import React, { useState } from "react";
import Seo from "~/components/global/Seo";
import Header from "~/components/global/Header";
import Footer from "~/components/global/Footer";
import WpHotkey from "~/components/elements/WpHotkey";
import { GlobalContext } from "~/utils/context";
import LandingPage from "../layouts/LandingPage";

export function Layout({ data, children }) {
	const [context, setContext] = useState(data);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const { page } = data;

	return (
		<GlobalContext.Provider value={[context, setContext]}>
			<PasswordProtect password={page?.post_password}>
				<Seo page={data?.page} />
				<Header mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />
				{/* <main>{children}</main> */}
				<LandingPage mobileNavOpen={mobileNavOpen} />
				<Footer />
				<WpHotkey id={page?.ID} />
			</PasswordProtect>
		</GlobalContext.Provider>
	);
}

export function PasswordProtect({ password, children }) {
	const [allowed, setAllowed] = useState(!password);
	if (allowed) return children;
	return (
		<div className="p-12">
			<input
				onChange={(e) => {
					if (e.target.value === password) {
						setAllowed(true);
					}
				}}
				className="border border-black"
				type="text"
				preview_placeholder="Enter password"
			/>
		</div>
	);
}
