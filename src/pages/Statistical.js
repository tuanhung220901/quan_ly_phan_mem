import PieChart from "../chart/PieChart";
import ColumnChart from "../chart/ColumnChart";
import LineChart from "../chart/LineChart";

const Statistical = () =>{
    return (
        <div>
            <div className="w-full flex justify-around">
                    <div className="w-[40%]">
                        <PieChart/>
                    </div>
                    <div className="w-[40%]">
                        <ColumnChart/>
                    </div>
            </div>
            <div className="w-full flex justify-around">
                    <div className="w-[40%]">
                        <LineChart/>
                    </div>
                    <div className="w-[40%]">
                        <ColumnChart/>
                    </div>
            </div>
        </div>
    )
}
export default Statistical;