import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        color: "white",
        fontStyle: "italic",
    },
    cell: {
        color: "white",
    },
}));

export const YearTable = ({ overview }) => {
    const classes = useStyles();
    let labels = [];
    let values = [];

    if (overview) {
        for (const [key, value] of Object.entries(overview)) {
            labels.push(key);
            values.push(value);
        }
        labels.reverse();
        values.reverse();
        labels.length = 10;
        values.length = 10;
    }

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.title}>Year</TableCell>
                        {labels.map((label) => (
                            <TableCell key={label} className={classes.cell}>
                                {label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={classes.title}>Articles</TableCell>
                        {values.map((value) => (
                            <TableCell component="th" scope="row" key={value} className={classes.cell}>
                                {value}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
