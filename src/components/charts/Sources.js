import React from "react";
import { Bar } from "react-chartjs-2";
import CircularProgress from "@material-ui/core/CircularProgress";

export const SourcesChart = ({ overview }) => {
    let labels = [];
    let values = [];

    if (overview) {
        for (const [key, value] of Object.entries(overview)) {
            labels.push(key);
            values.push(value);
        }
    }

    const sourcesData = {
        labels: labels,
        datasets: [
            {
                label: "Article Count",
                backgroundColor: [
                    "#e74c3c",
                    "#3498db",
                    "#f1c40f",
                    "#2ecc71",
                    "#9b59b6",
                    "#34495e",
                    "#7f8c8d",
                    "#ecf0f1",
                    "#e67e22",
                    "#1abc9c",
                ],
                borderColor: "white",
                data: values,
            },
        ],
    };

    return <>{labels.length > 0 ? <Bar data={sourcesData} /> : <CircularProgress />}</>;
};
