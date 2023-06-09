import React from "react";
import LinkGroup from "~/components/elements/links/LinkGroup";
import { motion, whileInView } from "framer-motion";

const fadeElementsInUp = {
	initial: {
		y: 20,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			duration: 0.5,
		},
	},
};

export function TextCard({
	subheading = "",
	heading = "",
	content = "",
	links = [],
	useMotion,
	animateInView,
	customButton,
	options: {
		max_width = "",
		text_alignment = "",
		has_mobile_text_alignment = false,
		mobile_text_alignment = "",
		section_alignment = "",
		subheading_tag = "h6",
		subheading_font_size = "default",
		subheading_classes = "",
		heading_tag = "",
		heading_font_size = "default",
		heading_classes = "",
		heading_max_width = "",
		content_max_width = "",
		content_classes = "",
		custom_y_spacing = "",
		mobile_section_alignment = "",
	} = {},
}) {
	const HeadingTag = heading_tag || "h2";
	const headingFontSize = heading_font_size === "default" ? HeadingTag : heading_font_size;

	const SubheadingTag = subheading_tag || "h6";
	const subheadingFontSize = subheading_font_size === "default" ? SubheadingTag : subheading_font_size;

	const ySpacings = {
		h1: "space-y-6",
		h2: "space-y-5",
		h3: "space-y-3",
	};

	const ySpacing = custom_y_spacing || ySpacings[headingFontSize] || "space-y-2";

	const flexItemAlignment = text_alignment === "center" ? "items-center" : "items-start";

	let sectionAlignmentClasses = "items-start";
	if (section_alignment === "center") {
		sectionAlignmentClasses = "md:items-center";
	} else if (section_alignment === "right") {
		sectionAlignmentClasses = "items-end";
	}

	const { buttonText, classNames } = customButton;

	return (
		<div className={`flex w-full flex-col ${mobile_section_alignment} ${sectionAlignmentClasses}`}>
			{useMotion ? (
				<motion.div
					variants={fadeElementsInUp}
					initial="initial"
					whileInView={animateInView ? "animate" : null}
					animate={!animateInView && "animate"}
					className={`text-card flex flex-col ${flexItemAlignment} ${ySpacing} text-${
						has_mobile_text_alignment ? mobile_text_alignment : text_alignment
					} md:text-${text_alignment} md:${max_width}`}
				>
					{heading && (
						<motion.h1
							variants={fadeElementsInUp}
							// initial="initial"
							// whileInView={animateInView ? "animate" : null}
							// animate={!animateInView && "animate"}
							className={`w-full text-${headingFontSize} ${heading_classes || ""} md:${heading_max_width}`}
							dangerouslySetInnerHTML={{
								__html: heading,
							}}
						></motion.h1>
					)}
					{content && (
						<motion.div
							variants={fadeElementsInUp}
							// initial="initial"
							// whileInView={animateInView ? "animate" : null}
							// animate={!animateInView && "animate"}
							className={`prose w-full ${content_classes || ""} md:${content_max_width || ""}`}
							dangerouslySetInnerHTML={{ __html: content }}
						></motion.div>
					)}
					{customButton && <motion.button className={classNames}>
						<span className="line line--one">{buttonText}</span>
						<span className="line line--two">{buttonText}</span>
					</motion.button>}
					{links?.length > 0 && links[0]?.link?.link?.url?.length > 0 && <LinkGroup links={links} className={headingFontSize === "h1" ? "md:pt-4" : "pt-2"} />}
				</motion.div>
			) : (
				<div
					className={`text-card flex flex-col ${flexItemAlignment} ${ySpacing} text-${
						has_mobile_text_alignment ? mobile_text_alignment : text_alignment
					} md:text-${text_alignment} md:${max_width}`}
				>
					{subheading && (
						<SubheadingTag className={`text-${subheadingFontSize} w-full ${subheading_classes || ""}`} dangerouslySetInnerHTML={{ __html: subheading }} />
					)}
					{heading && (
						<HeadingTag
							className={`w-full text-${headingFontSize} ${heading_classes || ""} md:${heading_max_width}`}
							dangerouslySetInnerHTML={{ __html: heading }}
						/>
					)}
					{content && <div className={`prose w-full ${content_classes || ""} md:${content_max_width || ""}`} dangerouslySetInnerHTML={{ __html: content }} />}
					{links?.length > 0 && links[0]?.link?.link?.url?.length > 0 && <LinkGroup links={links} className={headingFontSize === "h1" ? "md:pt-4" : "pt-2"} />}
				</div>
			)}
		</div>
	);
}

export default TextCard;
