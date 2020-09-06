import React from 'react';
import { IUser } from '../../redux/types';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import actions from './../../redux/actions';

import LoadingIndicator from '../../components/LoadingIndicator';

interface UserListProps {
    loading: boolean;
    error?: boolean;
    users?: IUser[];
    setCurrentViewuser: any;
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      minHeight: 400
    },
    item: {
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
}));
  

function UsersList({ loading, error, users, setCurrentViewuser }: UserListProps) {
    const classes = useStyles();
    const history = useHistory();

    if (loading) {
        return <List className={classes.root}>
            <LoadingIndicator />
        </List>
    }

    if (!!error) {
        const ErrorComponent = () => (
          <ListItem className={classes.root}>
              Something went wrong, please try again!
          </ListItem>
        );
        return <List component={ErrorComponent} />;
    }

    if (users) {
        if (!users.length) {
            return (
                <h3>No result</h3>
            )
        }

        return (
            <List className={classes.root}>
                <Grid container spacing={3}>
                    {users.map(
                        user => 
                        (
                            <Grid item xs={12} sm={6} key={`${user.id}-${user.login}`}>
                                <ListItem className={classes.item}>
                                    <ListItemAvatar>
                                        <Avatar alt={user.login} src={user.avatar_url} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={user.login} 
                                    />
                                    <ListItemSecondaryAction>
                                        <Button variant="outlined" size="small" onClick={() => { 
                                            setCurrentViewuser(user);
                                            history.push(`/user/${user.login}`) 
                                        }}>View</Button>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </Grid>
                        )
                    )}
                </Grid>
            </List>
        );
    }
    return null;
}

const withConnect = connect(
    null,
    (dispatch: Dispatch) => ({
        setCurrentViewuser: (user: IUser) => {
            dispatch(actions.SET_CURRENT_USER(user))
        }
    }),
);

export default withConnect(UsersList);
