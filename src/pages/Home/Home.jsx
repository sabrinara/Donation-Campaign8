
import { useLoaderData } from "react-router-dom";
import DonationItems from "../../components/DonationItems/DonationItems";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

const Home = () => {
    // const donations = useLoaderData();

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchData, setSearchData] = useState('');

    useEffect(() => {

        fetch('./data.json')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setFilteredData(data);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleSearch = () => {

        if (!searchData) {
            setFilteredData(data);
        } else {
            const filtered = data.filter((item) => item.category.toLowerCase().includes(searchData.toLowerCase()))

            console.log(filtered);
            setFilteredData(filtered);
        }
    };
    return (
        <div>
            <Header handleSearch={handleSearch} setSearchData={setSearchData} searchData={searchData} ></Header>
            <DonationItems donations={filteredData}></DonationItems>
        </div>
    );
};

export default Home;