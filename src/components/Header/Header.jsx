
// import Navbar from "../Navbar/Navbar";

const Header = () => {

    return (
        <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/myPZxYg/cover.png)' }}>
            <div className="hero-overlay bg-opacity-80 bg-slate-100 ">
               {/* <Navbar></Navbar> */}
            </div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="text-3xl font-extrabold text-black">I Grow By Helping People In Need</h1>
                    <div>
                        <div className="flex my-4 justify-center">
                            <input
                                type="text"
                                id="coupon-input"
                                placeholder="Search Now"
                                className="px-4 py-2 bg-transparent 
                                border rounded-tl-lg 
                                rounded-bl-lg"
                            />

                            <button
                                id="apply-btn"
                                className="text-white font-bold bg-[#FF444A] px-4 py-2 rounded-tr-lg rounded-br-lg"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       
    );
};

export default Header;