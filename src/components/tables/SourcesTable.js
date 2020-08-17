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

export const SourcesTable = ({ overview }) => {
    const classes = useStyles();
    let labels = [];
    let values = [];

    var sortable = [];
    for (var source in overview) {
        sortable.push([source, overview[source]]);
    }

    sortable.sort((a, b) => {
        return a[1] - b[1];
    });

    sortable = sortable.reverse();

    sortable.forEach((s) => {
        let label;
        let char;

        if (s[0].includes("applications")) {
            labels.push("Patent Applications");
        } else if (s[0].includes("_")) {
            label = s[0].split("_");
            char = label[1]?.charAt(0).toUpperCase() + label[1]?.slice(1);
            labels.push(char);
        } else {
            labels.push(s[0]);
        }

        values.push(s[1]);
    });

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.title}>Source</TableCell>
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
