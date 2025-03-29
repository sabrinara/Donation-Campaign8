
// import Navbar from "../Navbar/Navbar";

const Header = ({ searchData, handleSearch, setSearchData }) => {


    return (
        <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co.com/RXGBLb3/donate-sign-charity-campaign-53876-127165.jpg)' }}>
            <div className="hero-overlay bg-opacity-80 bg-slate-100 ">
                {/* <Navbar></Navbar> */}
            </div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="text-3xl font-extrabold text-black">I Grow By Helping People In Need</h1>
                    <div className="flex my-4 justify-center ">
                        <div className="border rounded-md">
                          <form action="">
                          <input
                                value={searchData}
                                onChange={(e) => setSearchData(e.target.value)}
                                type="search"
                                id="search"
                                placeholder="Search Now"
                                className="px-4 py-2 bg-transparent 
                                 text-black"
                            />

                            <button  onClick={handleSearch} type="button"
                                className="text-white font-bold bg-[#FF444A] px-4 py-2  rounded-none"
                            > Search
                            </button>
                          </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Header;