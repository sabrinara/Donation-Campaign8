
import { useLoaderData } from "react-router-dom";
import DonationItems from "../../components/DonationItems/DonationItems";
import Header from "../../components/Header/Header";



const Home = () => {
    const donations = useLoaderData();
    return (
        <div>
            <Header></Header>
            <DonationItems donations = {donations}></DonationItems>
        </div>
    );
};

export default Home;