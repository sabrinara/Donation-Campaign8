import DonationCard from "./DonationCard";

const DonationItems = ({donations}) => {

    return (

  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-12 mx-auto">
                {
                    donations?.map(donation => <DonationCard key={donation.id} donation={donation} ></DonationCard>)
                }
            </div>
        
    );
};

export default DonationItems;