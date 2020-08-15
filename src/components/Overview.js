import React, { useState, useEffect } from "react";
import { YearChart } from "./charts/Year";
import { CountryChart } from "./charts/Country";
import Grid from "@material-ui/core/Grid";

import "./Overview.css";

import axios from "axios";

export const Overview = ({ visibleCharts }) => {
    const [overview, setOverview] = useState({});

    useEffect(() => {
        axios.get(`http://${window.ENV.serverUrl}/overview/?query=overview`).then((res) => {
            console.log(res);
            setOverview(res.data);
        });
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
                        {overview?.years && <YearChart overview={overview?.years} />}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        {overview?.countries && <CountryChart overview={overview?.countries} />}
                    </Grid>
                </Grid>
            )}
        </>
    );
};
