import TextCard from "../elements/text/TextCard"
import GlitterLeft from "../../../public/images/cta-glitter-left.svg"
import GlitterRight from "../../../public/images/cta-glitter-right.svg"

const CtaBlock = ({ ctaHeader, bgColor }) => {

    return <section className={`cta-block ${bgColor} py-72 relative overflow-hidden`}>
        <div className="container flex flex-col">
            <TextCard 
                heading={ctaHeader} 
                options={{
                    text_alignment: "center",
                    section_alignment: "center",
                    heading_tag: 'h2',
                    heading_classes: "text-center w-full text-white"
                }}  
            />
            <button className="bg-hawk-yellow mt-14 mx-auto btn btn-primary w-max">
                <span className="line line--one">Get Started</span>
                <span className="line line--two">Get Started</span>
            </button>
            <div className="square square--top-left"></div>
            <div className="square square--top-right"></div>
            <div className="square square--bottom-left"></div>
            <GlitterLeft className="cta-glitter cta-glitter--left" />
            <GlitterRight className="cta-glitter cta-glitter--right" />
        </div>
    </section>
}

export default CtaBlock