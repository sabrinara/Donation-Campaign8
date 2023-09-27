import { Link } from "react-router-dom";


const DonationCard = ({ donation }) => {
    const { id, title, image
        , category, category_bg, card_bg, text_color, button_bg, description, price
    } = donation || {};

    return (
        <div>
            <Link to={`/donation/${id}`}>
                <div className="card h-[20rem] boarder rounded-lg shadow-2xl " style={{ background: card_bg }}>
                    <div className="w-full">
                        <img src={image} alt="" />
                    </div>
                    <div className="card-body items-left text-left ">
                        <div className="card-actions">
                            <button className=" rounded px-2 py-1 text-sm font-semibold" style={{ background: category_bg, color: text_color }} >{category}</button>
                        </div>
                        <h2 className="card-title text-[18px] font-bold" style={{ color: text_color }}>{title}</h2>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default DonationCard;