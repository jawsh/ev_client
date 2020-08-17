import React, { useState, useEffect } from "react";
import { YearChart } from "./charts/Year";
import { YearTable } from "./tables/YearTable";
import { CountryChart } from "./charts/Country";
import { CountryTable } from "./tables/CountryTable";
import { SourcesChart } from "./charts/Sources";
import { SourcesTable } from "./tables/SourcesTable";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./Overview.css";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
    stat: {
        color: "#61dafb",
    },
}));

export const Overview = ({ visibleCharts }) => {
    const classes = useStyles();
    const [overview, setOverview] = useState({});

    const checkExpired = () => {
        const expiry = JSON.parse(localStorage.getItem("overview")).expiry;
        const now = Date.now();
        const expired = now - expiry;
        const thirtymins = 1800000;
        if (expired > thirtymins) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        if (localStorage.getItem("overview") === null || checkExpired()) {
            axios.get(`${process.env.REACT_APP_SERVER_URL}/overview/?query=overview`).then((res) => {
                res.data["expiry"] = Date.now();
                setOverview(res.data);
                localStorage.setItem("overview", JSON.stringify(res.data));
            });
        } else {
            setOverview(JSON.parse(localStorage.getItem("overview")));
        }
    }, []);

    const formatNumber = (str) => {
        if (str) {
            return str.toLocaleString();
        }
    };

    return (
        <>
            <h4>Overview</h4>
            <div className="intro">
                <p>
                    Project E.V.A (Electric Vehicle Articles) is a web application driven by a large electric vehicle
                    dataset of over 9000 documents.
                </p>
                <Tooltip title="The total number of documents in the dataset">
                    <Button className={classes.stat}>Document Count: {formatNumber(overview?.documentCount)}</Button>
                </Tooltip>
                <Tooltip title="The total number of words in all document bodies combined">
                    <Button className={classes.stat}>Word Count: {formatNumber(overview?.wordCount)}</Button>
                </Tooltip>
                <Tooltip title="The total number of times Elon was mentioned in a document body">
                    <Button className={classes.stat}>Elon Count: {formatNumber(overview?.elonCount)}</Button>
                </Tooltip>
            </div>
            {visibleCharts ? (
                <>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <h5>Articles/Year</h5>
                            <YearChart overview={overview?.yearData} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <h5>Top 10 Articles/Country</h5>
                            <CountryChart overview={overview?.countryData} />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={8}>
                            <h5>Articles/Source Category</h5>
                            <SourcesChart overview={overview?.sources} />
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid container justify="center">
                        <Grid item xs={12} m={12} md={8}>
                            <h5>Articles/Year</h5>
                            <YearTable overview={overview?.yearData} />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} m={12} md={8}>
                            <h5>Top 10 Articles/Country</h5>
                            <CountryTable overview={overview?.countryData} />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} m={12} md={8}>
                            <h5>Articles/Source Category</h5>
                            <SourcesTable overview={overview?.sources} />
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};
