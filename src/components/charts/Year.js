import React from "react";
import { Line } from "react-chartjs-2";

export const YearChart = ({ overview }) => {
    let labels = [];
    let values = [];
    for (const [key, value] of Object.entries(overview)) {
        labels.push(key);
        values.push(value);
    }

    const yearData = {
        labels: labels,
        datasets: [
            {
                label: "Article Count",
                backgroundColor: "#61dafb",
                borderColor: "white",
                data: values,
            },
        ],
    };

    return <>{labels.length > 0 ? <Line data={yearData} /> : <code>No Year Data Found!</code>}</>;
};
