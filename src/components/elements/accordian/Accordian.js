// import styled from "styled-components"

const Accordian = ({ accordianItem, toggleAccordian }) => {
    console.log(accordianItem.isOpen)
    return <div className={`accordian ${accordianItem.isOpen ? "accordian--isOpen" : ""} flex gap-28`}>
        {accordianItem.images && <div 
            className={`accordian__image ${accordianItem.isOpen ? "" : "h-0 opacity-0 invisible"}`} 
            style={{
                backgroundImage: `url(${accordianItem.images[0].bgImage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                maxWidth: '620px',
                width: '100%',
                height: `${accordianItem.isOpen ? "784px" : "0"}`
        }}>
            
        </div>}
        <div className="accordian__content pt-7 pb-6 border-t border-solid border-hawk-mid-grey w-full">
            <button className="accordian__btn" onClick={(e) => {
                toggleAccordian(e, accordianItem.index)
            }}>
                <h4 className="pb-7">{accordianItem.label}</h4>
            </button>
            <div className={`${accordianItem.isOpen ? "block" : "hidden"}`}>
                <h3 className="text-4xl pb-5">{accordianItem.header}</h3>
                <p>{accordianItem.subheader}</p>
            </div>
        </div>
    </div>
}

export default Accordian;