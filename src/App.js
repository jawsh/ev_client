import React, { useState } from "react";
import { Overview } from "./components/Overview";
import { Article } from "./components/Article";
import { Navbar } from "./components/Navbar";
import { Router } from "@reach/router";
import "./App.css";

function App() {
    const [visibleCharts, setVisibleCharts] = useState(true);
    return (
        <>
            <Navbar visibleCharts={visibleCharts} setVisibleCharts={setVisibleCharts} />
            <header className="App">
                <h1>Project EVA</h1>
                <Router>
                    <Overview path="/" visibleCharts={visibleCharts} />
                    <Article path="eva" visibleCharts={visibleCharts} />
                </Router>
            </header>
        </>
    );
}

export default App;
