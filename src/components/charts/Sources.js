import React from "react";
import { Bar } from "react-chartjs-2";
import CircularProgress from "@material-ui/core/CircularProgress";

export const SourcesChart = ({ overview }) => {
    let labels = [];
    let values = [];

    var sortable = [];
    for (var source in overview) {
        sortable.push([source, overview[source]]);
    }

    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });

    sortable = sortable.reverse();

    sortable.forEach((s) => {
        labels.push(s[0]);
        values.push(s[1]);
    });

    const sourcesData = {
        labels: labels,
        datasets: [
            {
                label: "Article Source Categories",
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
