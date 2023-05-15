import Image from "next/image"
import { v4 as uuidv4 } from "uuid"

const Banner = ({ bannerName, sectionTitle, bannerItems }) => {
    return <div className={`banner banner-${bannerName} flex flex-col items-center py-20`}>
        <h4>{sectionTitle}</h4>
        <div className="banner-items flex w-full">
            {bannerItems.map((item, index) => {
                return <div key={uuidv4()} className="item grow py-16 flex justify-center items-center">
                    <img src={item.imageSrc} alt={item.title} />
                </div>
            })}
        </div>
    </div>
}

export default Banner