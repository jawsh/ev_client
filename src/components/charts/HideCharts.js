import React from "react";
import "../Navbar.css";

export const HideCharts = ({ visibleCharts, setVisibleCharts }) => {
    return (
        <>
            <button className="hide" href="" onClick={() => setVisibleCharts(!visibleCharts)}>
                Show/Hide Charts
                <span role="img" aria-label="bar-chart">
                    📊
                </span>
            </button>
        </>
    );
};
