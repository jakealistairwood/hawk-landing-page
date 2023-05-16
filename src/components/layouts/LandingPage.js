import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Banner from "../elements/banner/Banner"
import Hero from "../elements/hero/Hero"
import { trustees } from "~/assets/data/trustees"
import { features } from "~/assets/data/features"
import Accordian from "../elements/accordian/Accordian"
import CtaBlock from "../cta-block/CtaBlock"
import { v4 as uuidv4 } from "uuid";
import SplitType from "split-type"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const LandingPage = (props) => {

    console.log(props)
    const [ trusteeLogos, setTrusteeLogos ] = useState(trustees);
    const [ accordianItems, setAccordianItems ] = useState([]);

    const missionRef = useRef(null);
    const textRef = useRef(null);

    
    const toggleAccordian = (e, accordianIndex) => {
        setAccordianItems(accordianItems.map(feature => {
            if(feature.index == accordianIndex) {
                if(feature.isOpen) {
                    return {
                        ...feature,
                    }
                } else {
                    return {
                        ...feature,
                        isOpen: true
                    }
                }
            } else {
                return {
                    ...feature,
                    isOpen: false
                }
            }
        }))
    }

    useEffect(() => {
        console.log("initial render");
        setAccordianItems([...features].map((feature, index) => {
            console.log(index);
            if(index === 0) {
                return {
                    ...feature,
                    index: index,
                    isOpen: true
                }
            } else {
                return {
                    ...feature,
                    index: index,
                    isOpen: false
                }
            }
        }))
        console.log("toggled accordian caused rerender")
    }, [])

    useEffect(() => {
        const missionContainer = missionRef.current;
        const textToAnimate = textRef.current;

        let splitText = new SplitType(textToAnimate, { types: "chars, words"} );
        console.log(splitText);

        let chars = gsap.utils.toArray('.char');
        console.log(chars);

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: missionContainer,
                start: "top 50%",
                end: "bottom 50%",
                scrub: 1,
            }
        })

        chars.forEach(char => {
            tl.from(char, {
                opacity: 0.2,
            })
        })

    }, []);

    return (
        <main>
            <Hero />
            <Banner bannerName={"trustees"} sectionTitle={"Trusted by global organisations"} bannerItems={trusteeLogos} />
            <section className="accordians pb-44">
                <div className="container">
                    {accordianItems.map(item => {
                        return <Accordian key={uuidv4()} accordianItem={item} toggleAccordian={toggleAccordian} />
                    })}
                </div>
            </section>
            <section className="company-mission pb-44" ref={missionRef}>
                <div className="container w-[1060px]">
                    <h5 className="text-h3 mb-9">Our mission</h5>
                    <h2 className="company-mission__statement text-6xl mb-12" ref={textRef}>
                        We're empowering the world's most important organizations to transform Public Safety, protect civil liberties & ensure personal freedom.
                    </h2>
                    <a className="flex items-center gap-2" href="#">
                        <span className="text-h4">Learn more</span>
                        <Image src={"/images/right-arrow.svg"} height={40} width={40} />
                    </a>
                </div>
            </section>
            <CtaBlock ctaHeader={"Achieve breakthrough moments."} bgColor={"bg-hawk-sage-green"} />
        </main>
    )
}

export default LandingPage