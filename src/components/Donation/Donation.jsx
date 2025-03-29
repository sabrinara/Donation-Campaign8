import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Tab from "../Tab/Tab";


const Donation = () => {
 
    const [donation, setDonation] = useState();
    const donations = useLoaderData();

    const {id} = useParams();


    useEffect(() => {
        const donationItem = donations?.find(donation => donation.id === id)
        setDonation(donationItem);
        // console.log('asvsdv',donationItem);
    }, [id, donations]);


    return (
        <div>
           <Tab donation={donation}></Tab>
        </div>
    );
};

export default Donation;