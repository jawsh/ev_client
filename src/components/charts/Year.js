import React from "react";
import { Line } from "react-chartjs-2";
import CircularProgress from "@material-ui/core/CircularProgress";

export const YearChart = ({ overview }) => {
    let labels = [];
    let values = [];

    if (overview) {
        for (const [key, value] of Object.entries(overview)) {
            labels.push(key);
            values.push(value);
        }
    }

    const yearData = {
        labels: labels,
        datasets: [
            {
                label: "Articles per Year",
                backgroundColor: "#61dafb",
                borderColor: "white",
                data: values,
            },
        ],
    };

    return <>{labels.length > 0 ? <Line data={yearData} /> : <CircularProgress />}</>;
};
