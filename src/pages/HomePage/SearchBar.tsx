import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

interface SearchBarProps {
    onChange: any;
    onSearch: any;
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}))

function SearchBar(props: SearchBarProps) {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root} onSubmit={(e: React.ChangeEvent<unknown>) => {
            e.preventDefault()
            props.onSearch()
        }}>
            <InputBase
                className={classes.input}
                placeholder="Search users by login name"
                inputProps={{ 'aria-label': 'search git users' }}
                onChange={(e) => props.onChange(e.target.value)}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar;