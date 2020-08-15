import React from "react";
import { Bar } from "react-chartjs-2";

export const TriGramChart = ({ data }) => {
    let tricount = data?.m_TriCnt;
    let trigrams = data?.m_TriGrams;

    if (tricount && trigrams) {
        tricount.length = 10;
        trigrams.length = 10;
    }

    const trigramChart = {
        labels: data?.m_TriGrams,
        datasets: [
            {
                label: "Trigram Count",
                backgroundColor: "#61dafb",
                borderColor: "white",
                data: data?.m_TriCnt,
            },
        ],
    };

    return <>{data?.m_TriCnt.length > 0 ? <Bar data={trigramChart} /> : <code>No Trigram Data Found!</code>}</>;
};
