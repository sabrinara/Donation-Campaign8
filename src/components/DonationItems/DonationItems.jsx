import DonationCard from "./DonationCard";

const DonationItems = ({donations}) => {

    return (
        <div className="py-10">
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12 ">
                {
                    donations?.map(donation => <DonationCard key={donation.id} donation={donation} ></DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonationItems;