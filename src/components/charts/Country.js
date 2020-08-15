import React from "react";
import { Pie } from "react-chartjs-2";

export const CountryChart = ({ overview }) => {
    let labels = [];
    let values = [];

    var sortable = [];
    for (var vehicle in overview) {
        sortable.push([vehicle, overview[vehicle]]);
    }

    sortable.sort(function (a, b) {
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
                label: "Article Count",
                // backgroundColor: "#d35400",
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

    return <>{labels.length > 0 ? <Pie data={countryData} /> : <code>No Year Data Found!</code>}</>;
};
