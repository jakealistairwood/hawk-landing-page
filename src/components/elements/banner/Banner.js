import Image from "next/image"
import { v4 as uuidv4 } from "uuid"
import { motion } from "framer-motion"
import { useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

const Banner = ({ bannerName, sectionTitle, bannerItems }) => {

    const controls = useAnimation();

    const itemsRef = useRef(null);
    const isInView = useInView(itemsRef, { once: true });

    useEffect(() => {
        if(isInView) {
            controls.start("animate");
        }
    }, [isInView]);


    const staggerItems = {
        hidden: { y: "80px", opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.10,
                ease: "easeInOut",
                duration: 1
            }
        }
        // animate: {
        //     x: [0, -1900],
        //     transition: {
        //         x: {
        //             repeat: Infinity,
        //             repeatType: "loop",
        //             duration: 5
        //         }
        //     }
        // }
    }
    
    return <div className={`banner banner-${bannerName} flex flex-col items-center py-20`}>
        <h4>{sectionTitle}</h4>
        <div className="container">
            <motion.div ref={itemsRef} variants={staggerItems} animate={controls} initial="hidden" className="banner-items grid gap-5
             grid-cols-2 md:grid-cols-3 place-items-center lg:flex flex-wrap justify-between items-center w-full">
                {bannerItems.map((item, index) => {
                    return <motion.div key={uuidv4()} variants={staggerItems} className="item py-16">
                        <img src={item.imageSrc} alt={item.title} />
                    </motion.div>
                })}
            </motion.div>
        </div>
    </div>
}

export default Banner