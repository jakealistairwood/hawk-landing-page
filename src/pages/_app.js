import React from "react";
import "tailwindcss/tailwind.css";
import "~/assets/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
