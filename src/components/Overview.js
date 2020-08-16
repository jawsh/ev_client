import React, { useState, useEffect } from "react";
import { YearChart } from "./charts/Year";
import { CountryChart } from "./charts/Country";
import Grid from "@material-ui/core/Grid";

import "./Overview.css";

import axios from "axios";

export const Overview = ({ visibleCharts }) => {
    const [overview, setOverview] = useState({});

    useEffect(() => {
        if (localStorage.getItem("overview") === null) {
            axios.get(`${process.env.REACT_APP_SERVER_URL}/overview/?query=overview`).then((res) => {
                setOverview(res.data);
                localStorage.setItem("overview", JSON.stringify(res.data));
            });
        } else {
            setOverview(JSON.parse(localStorage.getItem("overview")));
        }
    }, []);
    return (
        <>
            <h4>Overview</h4>
            <p className="intro">
                Project E.V.A (Electric Vehicle Articles) is a web application driven by a large electric vehicle
                dataset.
            </p>
            {visibleCharts && (
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <h5>Articles/Year</h5>
                        <YearChart overview={overview?.yearData} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <h5>Articles/Country</h5>
                        <CountryChart overview={overview?.countryData} />
                    </Grid>
                </Grid>
            )}
        </>
    );
};
