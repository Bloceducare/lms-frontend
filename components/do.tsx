import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { statusColor } from "config/constants";

import { Doughnut } from "react-chartjs-2";
import { getMaxOfArray } from "utils";

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["Ended", "Active", "Completed"],
  datasets: [
    {
      backgroundColor: ["#FFB946", "#00D2A1", "#FF7CD7"],
      borderWidth: 1,
      hoverBackgroundColor: ["#FFB946", "#00D2A1", "#FF7CD7"],
    },
  ],
};

// array of data status
// 0 - Active
// 1 - Completed
// 2 - Ended
const DoughNut = ({ data: arrayData = [30, 60, 10] }) => {
  const chartData = {
    ...data,
    datasets: [{ ...data.datasets[0], data: arrayData }],
  };
  return (
    <div className="w-full p-3">
      <div>
        <ul className="flex flex-wrap mb-2">
          {chartData.labels.map((item, index) => (
            <li className="mr-2" key={index}>
              <div className="flex items-center">
                <div
                  className={`rounded-full  border-2  bg-transparent w-3 h-3 mr-2 
                 
                   border-${
                     statusColor[(index + 1) as keyof typeof statusColor]
                   }`}
                ></div>
                <span className="text-xs">{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative ">
        <Doughnut
          className=" inline-block relative"
          width={400}
          height={200}
          options={{
            maintainAspectRatio: false,
            cutout: 90,
          }}
          data={chartData}
        />
        <div className="absolute right-1/2 transform translate-x-1/2 top-1/2 -translate-y-1/2 text-6xl text-brand-green-two">
          {getMaxOfArray(arrayData)}%
        </div>
      </div>
    </div>
  );
};

export default DoughNut;
