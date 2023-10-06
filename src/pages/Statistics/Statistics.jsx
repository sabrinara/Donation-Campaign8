import PieChartData from "./PieChartData";

const Statistics = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <PieChartData></PieChartData>
                <p className="mb-4">
                    Total Donation: <span className="inline-block w-[50px] h-[3px] border-b-8 mr-3 border-[#00C49F] md:mr-6 lg:mr-10"></span>
                    Your Donation: <span className="inline-block w-[50px] h-[3px] border-b-8 border-[#FF8042]"></span>
                </p>
               
            </div>
        </div>
    );
};

export default Statistics;
