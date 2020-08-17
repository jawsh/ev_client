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
    title: {
        backgroundColor: "#282c34",
        color: "white",
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
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
                <DialogTitle className={classes.title}>Places</DialogTitle>
                <List className={classes.title}>
                    {data?.m_Places.map((p) => (
                        <ListItem>
                            <ListItemText primary={p} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
            <Dialog open={openCompanies} onClose={handleClose}>
                <DialogTitle className={classes.title}>Companies</DialogTitle>
                <List className={classes.title}>
                    {data?.m_Companies.map((p) => (
                        <ListItem>
                            <ListItemText primary={p} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
            <Dialog open={openPeople} onClose={handleClose}>
                <DialogTitle className={classes.title}>People</DialogTitle>
                <List className={classes.title}>
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
