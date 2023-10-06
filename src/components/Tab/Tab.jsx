import swal from "sweetalert";

const Tab = ({ donation }) => {

    const { id, title, image, category, category_bg, card_bg, text_color, button_bg, description, price, button_text } = donation || {};


    const handleDonation = () => {
        const addedDonationsArray = [];
        const addedDonationsItems = JSON.parse(localStorage.getItem("donation-list"));

        if (!addedDonationsItems) {
            addedDonationsArray.push(donation);
            localStorage.setItem("donation-list", JSON.stringify(addedDonationsArray));
            swal("Good job!", "Products added successfully!", "success");
        }

        else {
            const isExits = addedDonationsItems.find(donation => donation.id === id);

            if (!isExits) {
                addedDonationsArray.push(...addedDonationsItems, donation);
                localStorage.setItem("donation-list", JSON.stringify(addedDonationsArray));
                swal("Thank You!", "Your Donation Received!", "success");

            } else {
                swal("Sorry!", "Already Donation Done !", "error");
            }
        }
    }

    return (
        <div >
            <div className="relative" >
                <img className="h-[88vh] w-full"
                    src={image} alt="" />
                <div className="absolute bottom-0 w-full z-20 bg-black bg-opacity-20 py-10">
                    <button onClick={handleDonation} className="mx-14 py-3 px-4  rounded-md  " style={{ background: button_bg, color: button_text }}>Donate: ${price}
                    </button>
                </div>
            </div>

            <div className="my-5 md:my-10">
                <h1 className="font-semibold text-2xl my-3">{title}</h1>
                <p className="text-sm md:text-base">{description}</p>
            </div>

        </div>
    );
};

export default Tab;

/***
 *  
 */