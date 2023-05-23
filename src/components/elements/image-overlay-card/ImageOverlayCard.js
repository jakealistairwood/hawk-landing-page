import Image from "next/image";

const ImageOverlayCard = ({ cardOptions }) => {

    const { icon, reference, type } = cardOptions;

    return <div className="image-overlay-card hidden absolute lg:flex items-center gap-4 p-5 border rounded border-solid border-hawk-primary" id={`card-${type.split(" ").join("-").toLowerCase()}`}>
        <div className="card__icon rounded border border-solid border-hawk-primary p-2">
            <Image src={icon} alt="" height={24} width={24} />
        </div>
        <div className="card__content">
            <p className="text-hawk-primary">{reference}</p>
            <p className="text-hawk-primary">{type}</p>
        </div>
    </div>
}

export default ImageOverlayCard