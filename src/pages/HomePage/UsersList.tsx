import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

import LoadingIndicator from '../../components/LoadingIndicator';

interface UserListProps {
    loading: boolean;
    error?: boolean;
    users?: IUser[];
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
  

function UsersList({ loading, error, users }: UserListProps) {
    const classes = useStyles();
    
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
        return (
            <List className={classes.root}>
                <Grid container spacing={3}>
                    {users && users.length && users.map(
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
                                        <Button variant="outlined" size="small" onClick={() => { alert('clicked') }}>View</Button>
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

UsersList.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    users: PropTypes.array,
};

export default UsersList;
