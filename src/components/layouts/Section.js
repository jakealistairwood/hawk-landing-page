import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ComponentRenderer } from "~/components/layouts/ComponentRenderer";

const getComponentSpacingClasses = (inner_spacing = "default") => {
	switch (inner_spacing) {
		case "none":
			return "";
		case "small":
			return "space-y-8";
		case "medium":
			return "space-y-10 md:space-y-24";
		case "large":
			return "space-y-12 md:space-y-28";
		case "xlarge":
			return "space-y-14 md:space-y-32";
		case "xxlarge":
			return "space-y-16 md:space-y-40";
		default:
			return "";
	}
};

const getSectionColors = (background = "") => {
	switch (background) {
		case "black":
			return "bg-black text-white";
		case "white":
			return "bg-white text-black";
		default:
			return `bg-${background}`;
	}
};

const getSectionPadding = ({ padding_top, padding_bottom }) => {
	/* @tailwind-unpurge
		pt-0 pb-0
		pt-16 pb-16
		pt-24 pb-24
		pt-32 pb-32
		pt-40 pb-40
	*/
	const sizes = {
		none: 0,
		small: 16,
		medium: 24,
		large: 32,
		xlarge: 40,
	};

	return `pt-${sizes[padding_top]} pb-${sizes[padding_bottom]}`;
};

export function Section(props) {
	const {
		components = [],
		id = "",
		classnames = "",
		inner_spacing = "",
		has_container = true,
		overflow = false,
		background,
		padding_top = "medium",
		padding_bottom = "medium",
		is_rounded = false,
		rounded_options = {},
	} = props;

	const [outerClasses, setOuterClasses] = useState([classnames]);
	const [innerClasses, setInnerClasses] = useState([]);

	// Set section outer classes
	useEffect(() => {
		setOuterClasses([classnames]); // Reset classes
		setOuterClasses((current) => [...current, overflow ? "overflow-hidden" : "overflow-visible"]); // Set overflow
		setOuterClasses((current) => [...current, getSectionColors(background?.background_color)]); // Set outer background
		setOuterClasses((current) => [...current, getSectionPadding({ padding_top, padding_bottom })]); // Set padding
		if (is_rounded) {
			setOuterClasses((current) => [...current, is_rounded && has_container ? "container" : ""]); // Add container to outer element if is rounded section and has_container set to true
		}
	}, [overflow, background, padding_top, padding_bottom, is_rounded, has_container, classnames]);

	// Set section inner classes
	useEffect(() => {
		setInnerClasses(""); // Reset classes
		setInnerClasses((current) => [...current, (!is_rounded && has_container) || (is_rounded && rounded_options?.has_inner_container) ? "container" : ""]); // Set if using container or not
		setInnerClasses((current) => [...current, getComponentSpacingClasses(inner_spacing)]); // Set inner spacing

		if (is_rounded) {
			setInnerClasses((current) => [...current, "sm:rounded-2xl"]); // Set it to be rounded
			setInnerClasses((current) => [...current, getSectionColors(rounded_options?.inner_background_color)]); // Set inner background color options
			setInnerClasses((current) => [
				...current,
				getSectionPadding({ padding_top: rounded_options?.inner_padding_top, padding_bottom: rounded_options?.inner_padding_bottom }),
			]); // Set inner padding
		}
	}, [has_container, inner_spacing, is_rounded, rounded_options]);

	return (
		<motion.section id={id} className={outerClasses.join(" ")}>
			<div className={innerClasses.join(" ")}>
				<ComponentRenderer components={components} />
			</div>
		</motion.section>
	);
}

export default Section;
