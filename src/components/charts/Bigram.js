import React from "react";
import { HorizontalBar } from "react-chartjs-2";

export const BiGramChart = ({ data }) => {
    let bicount = data?.m_BiCnt;
    let bigrams = data?.m_BiGrams;

    if (bicount?.length > 10 && bigrams?.length > 10) {
        bicount.length = 10;
        bigrams.length = 10;
    }

    const bigramChart = {
        labels: data?.m_BiGrams,
        datasets: [
            {
                label: "Bigram Count",
                backgroundColor: "#61dafb",
                borderColor: "white",
                data: data?.m_BiCnt,
            },
        ],
    };

    return <>{data?.m_BiCnt.length > 0 ? <HorizontalBar data={bigramChart} /> : <code>No Bigram Data Found!</code>}</>;
};
