import React from "react";
import { Link } from "@reach/router";
import { HideCharts } from "./charts/HideCharts";
import "./Navbar.css";

export const Navbar = ({ visibleCharts, setVisibleCharts }) => {
    return (
        <>
            <div className="nav">
                <Link to="/">Overview</Link>
                <Link to="eva">Article Viewer</Link>
                <HideCharts visibleCharts={visibleCharts} setVisibleCharts={setVisibleCharts} />
            </div>
        </>
    );
};
