import TextCard from "../text/TextCard"
import Image from "next/image"
import HeroGlitter from "../../../../public/images/hero-glitter.svg"

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
                    <button className="bg-hawk-yellow mt-9 mb-24 btn btn-primary">Get Started</button>
                    <HeroGlitter className="hero-glitter hero-glitter--left" />
                    <HeroGlitter className="hero-glitter hero-glitter--right" />
                </div>
                <div className="relative">
                    <Image src="/images/hero.png" width={1384} height={925} />
                </div>
            </div>
        </header>
    )
}

export default Hero