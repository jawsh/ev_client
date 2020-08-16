import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "1rem",
        width: "80%",
        backgroundColor: "e2e2e2",
        color: "white",
    },
    appBar: {
        backgroundColor: "#61DAFB",
    },
    icon: {
        color: "white",
    },
}));

export function Summary({ data, articleId, setArticleId }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                    <IconButton
                        color="primary"
                        aria-label="next article"
                        onClick={() => (articleId === 0 ? setArticleId(0) : setArticleId(articleId - 1))}
                    >
                        <NavigateBefore className={classes.icon} />
                    </IconButton>
                    <Tab label="Info" {...a11yProps(1)} />
                    <Tab label="Summary" {...a11yProps(2)} />
                    <Tab label="Body" {...a11yProps(3)} />
                    <IconButton color="primary" aria-label="next article" onClick={() => setArticleId(articleId + 1)}>
                        <NavigateNext className={classes.icon} />
                    </IconButton>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={1}>
                <Box>
                    <p>{data?.m_szGeo1 || "Unknown Geo"}</p>
                    <p>{data?.m_szDocTitle}</p>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                {data?.m_szDocSumamry}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {data?.m_szDocBody}
            </TabPanel>
        </div>
    );
}

// export const Summary = ({ data, articleId, setArticleId }) => {
// const articleChange = (e) => {
//     if (!e.target.value) {
//         setArticleId(0);
//     } else if (e.target.value >= 0 && e.target.value <= 9211) {
//         setArticleId(e.target.value);
//     }
// };
//     return (
//         <>
//             <div className="topnav">
//                 <button
//                     className="button"
//                     onClick={() => (articleId === 0 ? setArticleId(0) : setArticleId(articleId - 1))}
//                 >
//                     prev
//                 </button>

//                 <input onChange={articleChange} value={articleId} type="number"></input>
//                 <button className="button" onClick={() => setArticleId(articleId + 1)}>
//                     next
//                 </button>
//             </div>
//             <code>{data?.m_szDocTitle}</code>
//             <code>
//                 {data?.m_szGeo1 || "Unknown Geo"} - {data?.m_szYear}
//             </code>
//             <code>
//                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                 <a href={data?.m_szSrcUrl} target="_">
//                     {data?.m_szSrcUrl}
//                 </a>
//             </code>
//         </>
//     );
// };
