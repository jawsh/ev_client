import React, { useEffect, useState } from "react";
import { BiGramChart } from "./charts/Bigram";
import { TriGramChart } from "./charts/Trigram";
import { Summary } from "./Summary";
import Grid from "@material-ui/core/Grid";

import "./Article.css";

import axios from "axios";

export const Article = ({ visibleCharts }) => {
    const [data, setData] = useState();
    const [articleId, setArticleId] = useState(0);

    useEffect(() => {
        if (articleId >= 0) {
            axios.get(`${process.env.REACT_APP_SERVER_URL}/article/?query=${articleId}`).then((res) => {
                setData(res.data);
            });
        }
    }, [articleId]);

    return (
        <>
            <h4>Article Viewer</h4>
            <div className="summary">
                <Summary data={data} articleId={articleId} setArticleId={setArticleId} />
            </div>
            {visibleCharts && (
                <>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <BiGramChart data={data} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TriGramChart data={data} />
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};
