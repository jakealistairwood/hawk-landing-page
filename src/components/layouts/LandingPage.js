import { useEffect, useState } from "react"
import Banner from "../elements/banner/Banner"
import Hero from "../elements/hero/Hero"
import { trustees } from "~/assets/data/trustees"
import { features } from "~/assets/data/features"
import Accordian from "../elements/accordian/Accordian"
import { v4 as uuidv4 } from "uuid";

const LandingPage = (props) => {
    console.log(props)
    const [ trusteeLogos, setTrusteeLogos ] = useState(trustees);
    const [ accordianItems, setAccordianItems ] = useState([]);

    
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
        </main>
    )
}

export default LandingPage