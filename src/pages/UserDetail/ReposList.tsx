import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { IRepo } from './../../redux/types'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

interface ReposListProps {
    repos: IRepo[]
}

function ReposList(props: ReposListProps) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="repository list table">
                <TableHead>
                    <TableRow>
                        <TableCell>Index (#)</TableCell>
                        <TableCell align="left">Repo Name</TableCell>
                        <TableCell align="left">Desciption</TableCell>
                        <TableCell align="left">Type</TableCell>
                        <TableCell align="left">Created At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.repos.map((row, index) => (
                    <TableRow key={row.id}>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell scope="row">
                            {row.description}
                        </TableCell>
                        <TableCell scope="row">
                            {!!row.private ? 'Private' : 'Public'}
                        </TableCell>
                        <TableCell scope="row">
                            {row.created_at}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ReposList;