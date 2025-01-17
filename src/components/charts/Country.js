import React from "react";
import { Pie } from "react-chartjs-2";
import CircularProgress from "@material-ui/core/CircularProgress";

export const CountryChart = ({ overview }) => {
    let labels = [];
    let values = [];

    var sortable = [];
    for (var country in overview) {
        sortable.push([country, overview[country]]);
    }

    sortable.sort((a, b) => {
        return a[1] - b[1];
    });

    sortable = sortable.reverse();

    sortable.length = 10;

    sortable.forEach((s) => {
        labels.push(s[0]);
        values.push(s[1]);
    });

    const countryData = {
        labels: labels,
        datasets: [
            {
                label: "Articles per Country",
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

    return <>{labels.length > 0 ? <Pie data={countryData} /> : <CircularProgress />}</>;
};
