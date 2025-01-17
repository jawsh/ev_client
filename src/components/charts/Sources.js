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

    sortable.sort((a, b) => {
        return a[1] - b[1];
    });

    sortable = sortable.reverse();

    sortable.forEach((s) => {
        let label;
        let char;

        if (s[0].includes("applications")) {
            labels.push("Patent Applications");
        } else if (s[0].includes("_")) {
            label = s[0].split("_");
            char = label[1]?.charAt(0).toUpperCase() + label[1]?.slice(1);
            labels.push(char);
        } else {
            labels.push(s[0]);
        }

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
