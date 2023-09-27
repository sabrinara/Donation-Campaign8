import DonationCard from "./DonationCard";

const DonationItems = ({donations}) => {
    //   console.log(donations);
    return (
        <div className="py-10">
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-10 ">
                {
                    donations?.map(donation => <DonationCard key={donation.id} donation={donation} ></DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonationItems;