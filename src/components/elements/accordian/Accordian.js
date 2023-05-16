// import styled from "styled-components"
import { motion } from "framer-motion";

const variants = {
    closed: {
        y: -500,
        opacity: 0
    },
    open: {
        height: "784px",
        opacity: 1,
        transition: {
            duration: 0.3
        }
    }
}

const accordianContentVariants = {
    open: {
        opacity: 1
    }
}

const Accordian = ({ accordianItem, toggleAccordian }) => {

    const { isOpen, images, index, label, header, subheader } = accordianItem;

    return <div className={`accordian ${isOpen ? "accordian--isOpen" : ""} flex gap-28 static`}>
        {accordianItem.images && <motion.div animate={isOpen ? "open" : "closed"} initial="inital" variants={variants}
            className={`accordian__image absolute`} 
            style={{
                backgroundImage: `url(${images[0].bgImage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                maxWidth: '620px',
                width: '100%',
                // height: `${isOpen ? "784px" : "0"}`,
                top: "0",
                overflow: "hidden",
                border: "1px solid transparent",
        }}>
            
        </motion.div>}
        <div className="accordian__content pt-7 pb-6 border-t border-solid border-hawk-mid-grey w-full">
            <button className="accordian__btn" onClick={(e) => {
                toggleAccordian(e, index)
            }}>
                <h4 className="pb-7">{label}</h4>
            </button>
            <motion.div animate={isOpen ? "open" : "closed"} variants={accordianContentVariants} className={`${isOpen ? "block" : "hidden"}`}>
                <h3 className="text-4xl pb-5">{header}</h3>
                <p>{subheader}</p>
            </motion.div>
        </div>
    </div>
}

export default Accordian;