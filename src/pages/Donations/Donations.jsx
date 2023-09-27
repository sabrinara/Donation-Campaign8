import { useEffect, useState } from "react";
import DCard from "./DCard";

const Donations = () => {
    const [donationList, setDonationList] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow,setIsShow] = useState(false);

    useEffect(() => {
        const addedDonationsItems = JSON.parse(localStorage.getItem("donation-list"));
        if (addedDonationsItems) {
            setDonationList(addedDonationsItems);
        }
        else {
            setNoFound("No Donation Added");
        }

    }, [])
    const handleRemove = () => {
        localStorage.clear();
        setDonationList([]);
        setNoFound("No Data Found");
      };
    return (
        <div>
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    {donationList.length > 0 && (
                        <div className="m-10">
                            <button
                                onClick={handleRemove}
                                className="px-5 py-2 text-white bg-red-700 block mx-auto"
                            >
                                Deleted All Donations.
                            </button>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-5">
                        {
                            isShow ? donationList.map((donation) => (
                                <DCard key={donation.id} donation={donation}></DCard>

                            ))

                                : donationList.slice(0, 4).map((donation) => (
                                    <DCard key={donation.id} donation={donation}></DCard>
                                ))
                        }
                    </div>

                    {donationList.length > 4 && <button onClick={() => setIsShow(!isShow)} className="px-5 py-3 rounded-md  text-white bg-red-700 block mx-auto mt-6 mb-10" >
                        {isShow ? "See less" : "See more"}
                    </button>}
                </div>
            )}
        </div>
    );
};

export default Donations;