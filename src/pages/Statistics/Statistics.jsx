import PieChartData from "./PieChartData";

const Statistics = () => {
    return (
        <div className="mx-auto w-[50%]">
            <PieChartData></PieChartData>
            <div className="text-center">
                <p>Total Donation: <span className="inline-block w-[50px]  h-[3px] border-b-8 border-[#00C49F] mr-6"></span>Your Donation: <span className="inline-block w-[50px]  h-[3px] border-b-8 border-[#FF8042]"></span></p>
            </div>
        </div>
    );
};

export default Statistics;