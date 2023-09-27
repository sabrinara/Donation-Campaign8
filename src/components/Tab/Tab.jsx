

const Tab = ({ donation }) => {
    const { id, title, image
        , category, category_bg, card_bg, text_color, button_bg, description, price, button_text } = donation || {};
    console.log(image);
    return (
        <div >
            <div className="relative" >
                <img className="h-[88vh] w-full"
                    src={image} alt="" />
                      <div className="absolute bottom-0 w-full z-20 bg-black bg-opacity-20 py-10">
                <button className="mx-14 py-3 px-4  rounded-md  " style={{ background: button_bg, color: button_text }}>Donate: ${price}</button>
            </div>
            </div>
          
            <div>
                <h1 className="font-semibold text-2xl my-3 ">{title}</h1>
                <p className="">{description}</p>
            </div>
        </div>
    );
};

export default Tab;

/***
 *  
 */