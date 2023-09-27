import React from 'react';
import { Link } from 'react-router-dom';

const DCard = ({ donation }) => {
    const { id, title, image, category, category_bg, card_bg, text_color, button_bg, description, price, button_text } = donation || {};
    return (
        <div>
            <div className="relative flex w-full max-w-[46rem] flex-row rounded-xl bg-clip-border shadow-md" style={{background:card_bg}}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border">
                    <img src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <button className="mb-4 text-base font-semibold  antialiased px-3 py-2" style={{background:category_bg,color:text_color}}>
                    {category}
                    </button>
                    <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="font-semibold" style={{color:text_color}}>
                        ${price}.00
                    </p>
                   <Link to ={`/donation/${id}`}>
                     <button
                            className="btn mt-4" style={{background:button_bg,color:button_text}}
                        >
                            See Details
                         
                        </button>
                   </Link>
                      
                   
                </div>
            </div>
        </div>
    );
};

export default DCard;