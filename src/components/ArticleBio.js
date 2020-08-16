import React, { useState } from "react";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    stat: {
        color: "#61dafb",
    },
    ".MuiPaper-root": {
        backgroundColor: "red",
    },
}));

export const ArticleBio = ({ data }) => {
    const [openCompanies, setOpenCompanies] = useState(false);
    const [openPeople, setOpenPeople] = useState(false);
    const [openPlaces, setOpenPlaces] = useState(false);

    const handleClose = () => {
        setOpenCompanies(false);
        setOpenPeople(false);
        setOpenPlaces(false);
    };

    const classes = useStyles();
    return (
        <>
            <a href={data?.m_szSrcUrl} target="_">
                Article Source
            </a>
            <p>{data?.m_szYear}</p>
            <p>{data?.m_szGeo1 || "Unknown Geo"}</p>
            <p>{data?.m_szDocTitle}</p>
            <p>{data?.m_iDocBodyWordCnt} words</p>
            <p>{data?.m_szSourceType}</p>
            <Button onClick={() => setOpenCompanies(true)} className={classes.stat}>
                Companies
            </Button>
            <Button onClick={() => setOpenPeople(true)} className={classes.stat}>
                People
            </Button>
            <Button onClick={() => setOpenPlaces(true)} className={classes.stat}>
                Places
            </Button>
            <Dialog open={openPlaces} onClose={handleClose}>
                <DialogTitle style={{ backgroundColor: "#282c34", color: "white" }}>Places</DialogTitle>
                <List style={{ backgroundColor: "#282c34", color: "white" }}>
                    {data?.m_Places.map((p) => (
                        <ListItem>
                            <ListItemText primary={p} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
            <Dialog open={openCompanies} onClose={handleClose}>
                <DialogTitle style={{ backgroundColor: "#282c34", color: "white" }}>Companies</DialogTitle>
                <List style={{ backgroundColor: "#282c34", color: "white" }}>
                    {data?.m_Companies.map((p) => (
                        <ListItem>
                            <ListItemText primary={p} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
            <Dialog open={openPeople} onClose={handleClose}>
                <DialogTitle style={{ backgroundColor: "#282c34", color: "white" }}>People</DialogTitle>
                <List style={{ backgroundColor: "#282c34", color: "white" }}>
                    {data?.m_People.map((p) => (
                        <ListItem>
                            <ListItemText primary={p} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </>
    );
};
