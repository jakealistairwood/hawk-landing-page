import TextCard from "../text/TextCard"
import Image from "next/image"
import HeroGlitter from "../../../../public/images/hero-glitter.svg"
import ImageOverlayCard from "../image-overlay-card/ImageOverlayCard"

const Hero = () => {
    return (
        <header className="hero">
            <div className="container pt-32">
                <div className="hero-wrapper flex flex-col items-center relative w-4/5 mx-auto">
                    <TextCard
                        heading={"One platform powering better information."} 
                        content={"Hawk empowers Public Safety agencies to make mission-critical decisions in real-time."}
                        options={{
                            text_alignment: "center",
                            section_alignment: "center",
                            heading_tag: 'h1'
                        }}
                        />
                    <button className="bg-hawk-yellow mt-9 mb-24 btn btn-primary">
                        <span className="line line--one">Get Started</span>
                        <span className="line line--two">Get Started</span>
                    </button>
                    <HeroGlitter className="hero-glitter hero-glitter--left" />
                    <HeroGlitter className="hero-glitter hero-glitter--right" />
                </div>
                <div className="relative">
                    <Image src="/images/hero.png" width={1384} height={925} />
                    <div className="hero-image-decor hero-image-decor--top-right"></div>
                    <div className="hero-image-decor hero-image-decor--bottom-left"></div>
                    <ImageOverlayCard cardOptions={{
                        icon: "/images/headset.svg",
                        reference: "2022-0006432...",
                        type: "CAD Incident"
                    }} />
                    <ImageOverlayCard cardOptions={{
                        icon: "/images/vehicle.svg",
                        reference: "64577F1: Ford F-150...",
                        type: "Vehicle"
                    }} />
                    <ImageOverlayCard cardOptions={{
                        icon: "/images/cctv.svg",
                        reference: "18th & A PTZ Antioch...",
                        type: "Public CCTV"
                    }} />
                </div>
            </div>
        </header>
    )
}

export default Hero