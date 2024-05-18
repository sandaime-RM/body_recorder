import React from "react";

//グラフ関連のインポート
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    Title,
    Filler
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    Title,
    Filler
);

const WeightGraph = ({weights}) => {

    const options = {
            responsive: true,
            plugins: {
                legend: {
                display: false
                },
                title: {
                display: true,
                text: "体重",
                font: {
                    size: 20,
                    weight: 'normal'
                }
                }
            }
        };
        
        const labels = weights[0];
        const data1 = weights[1];
        
        const data = {
        labels, // x軸のラベルの配列
        datasets: [
            {
                type: "line",
                label: "Dataset 1", // 凡例
                data: data1,        // データの配列(labelsと要素数同じ)
                borderColor: "#84cc16", // グラフの棒の色
                fill: true,
                backgroundColor: "#84cc1633"
            }
        ]
    };

    return (
        <div className="mb-5 mx-4 rounded-3xl shadow-lg bg-white px-5 py-4">
            <Chart options={options} data={data} />
        </div>
    )
}

export default WeightGraph