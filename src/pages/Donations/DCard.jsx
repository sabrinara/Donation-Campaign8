import React from 'react';
import { Link } from 'react-router-dom';

const DCard = ({ donation }) => {
    const { id, title, image, category, category_bg, card_bg, text_color, button_bg, description, price, button_text } = donation || {};
    return (
        <div className="card card-side bg-base-100 shadow-xl px-3" style={{background: card_bg}}>
            <figure><img src={image} /></figure>
            <div className="card-body">
                <button className="w-20" style={{ background: category_bg, color: text_color }}>
                    {category}
                </button>
                <h2 className="card-title">{title}</h2>

                <p className="" style={{ color: text_color }}>
                    ${price}.00
                </p>


                <div className="card-actions ">
                    <Link to={`/donation/${id}`}>
                        <button
                            className="btn mt-4" style={{ background: button_bg, color: button_text }}
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