import TextCard from "../text/TextCard"
import Image from "next/image"

const Hero = () => {
    return (
        <header className="hero">
            <div className="container pt-32 flex flex-col items-center hero-wrapper">
                <TextCard
                    heading={"One platform powering better information."} 
                    content={"Hawk empowers Public Safety agencies to make mission-critical decisions in real-time."}
                    options={{
                        text_alignment: "center",
                        section_alignment: "items-center",
                        heading_tag: 'h1'
                    }}
                    />
                <button className="bg-hawk-yellow mt-9 mb-24 btn btn-primary">Get Started</button>
                <Image src="/images/hero.png" width={1384} height={925} />
            </div>
        </header>
    )
}

export default Hero