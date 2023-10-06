import { useEffect, useState } from "react";

import { PieChart, Pie, Cell} from 'recharts';

const PieChartData = () => {
    const [dataId, setDataId] = useState([]);
    useEffect(() => {
        const getItems = JSON.parse(localStorage.getItem("donation-list"));
        
        if (getItems) {
            setDataId(getItems)
        }
    }, [])


    const total = (dataId.length * 100) / 12;
    const totalLength = 100 - total;
    console.log(total);
    const data = [
        { name: "Group A", value: total },
        { name: "Group B", value: totalLength },
    ];

    const COLORS = ["#FF8042", "#00C49F"];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };
    console.log(dataId.length);
    return (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      );
};

export default PieChartData;