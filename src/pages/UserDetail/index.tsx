import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useSWR from 'swr';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import ReactJson from 'react-json-view'
import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
import { IState, IUser, IRepo } from '../../redux/types';

import ReposList from './ReposList';
import UsersList from './../HomePage/UsersList';

import LoadingIndicator from '../../components/LoadingIndicator';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            minWidth: 275,
            paddingTop: 30
        },
        avatar: {
            
        },
    })
)

function a11yProps(index: any) {
    return {
      id: `detail-tab-${index}`,
      'aria-controls': `detail-tabpanel-${index}`,
    };
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`detail-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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

  
interface UserDetailProps {
    currentUser: IUser;
}

function UserDetail(props: UserDetailProps) {
    const classes = useStyles();
    const history = useHistory();
    const { currentUser } = props;

    if (!currentUser) {
        history.replace('/');
    }

    const [isReady, setIsReady] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);

    const { data: repos } = useSWR<IRepo[]>(currentUser ? currentUser.repos_url : null)
    const { data: followers } = useSWR<IUser[]>(currentUser? currentUser.followers_url : null)
    const { data: following } = useSWR<IUser[]>(currentUser? currentUser.following_url.replace('{/other_user}', '') : null)

    useEffect(() => {
        setIsReady(true)
    }, [])

    if (!isReady) {
        return <LoadingIndicator />;
    }

    const handleChangeTab = (value: number) => {
        setCurrentTab(value);
    };
    
    return (
        <Container maxWidth="lg">
             <Card className={classes.root} variant="outlined">
                <CardHeader
                    avatar={<Avatar src={currentUser?.avatar_url} className={classes.avatar} />}
                    action={
                        <Button aria-label="back" variant='outlined' onClick={() => history.goBack()}>
                            Back
                        </Button>
                    }
                    title={currentUser?.login}
                    subheader={currentUser?.node_id}
                />
                <AppBar position="static">
                    <Tabs value={currentTab} onChange={(e, value: number) => handleChangeTab(value)} aria-label="simple tabs example">
                        <Tab label="Information" {...a11yProps(0)} />
                        <Tab label="Repositories" {...a11yProps(1)}  />
                        <Tab label="Followers" {...a11yProps(2)}  />
                        <Tab label="Following" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={currentTab} index={0}>
                    <ReactJson src={props.currentUser} />
                </TabPanel>
                <TabPanel value={currentTab} index={1}>
                    {repos && <ReposList repos={repos} />}
                </TabPanel>
                <TabPanel value={currentTab} index={2}>
                    {followers && <UsersList users={followers} loading={!followers} />}
                </TabPanel>
                <TabPanel value={currentTab} index={3}>
                    {following && <UsersList users={following} loading={!following} />}
                </TabPanel>
             </Card>
        </Container>        
    )
}

function mapStateToProps(state: IState) {
    return {
        currentUser: state.currentUser,
    }
};

const withConnect = connect(
    mapStateToProps,
    null,
);

export default withConnect(UserDetail);