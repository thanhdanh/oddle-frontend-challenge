import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Image from './../../components/Image';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import SearchBar from './SearchBar';
import UsersList from './UsersList';
import Pagination from './../../components/Pagination'

import { IState, IUser } from './../../redux/types';

import actions from './../../redux/actions';

const Wrapper = styled.div`
    padding-top: 50px;
`;

interface HomePageProps {
    users: IUser[];
    loading: boolean;
    totalUsers: number;
    dispatch: Dispatch;
    onChangeLoginName: any;
    onSubmitSearch: any;
}

const HomePage = (props: HomePageProps) => {
    const [showResult, setShowResult] = useState(false);
    const [page, setPage]= useState<number>(1);

    useEffect(() => {
        if (props.loading) {
            setShowResult(true)
        }
    }, [props.loading]);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        props.onSubmitSearch({
            page: value
        })
    }

    return (
        <Container maxWidth="md">
            <Wrapper>
                <Image src="/images/Oddle-Logo-Big.png" alt="Oddle" />
                <Typography variant="h4" component="h1" gutterBottom>
                    Seach Github Users
                </Typography>
                <SearchBar onChange={props.onChangeLoginName} onSearch={props.onSubmitSearch} />
                {showResult && <UsersList users={props.users} loading={props.loading} />}
                {showResult && !props.loading &&
                <Box display="flex" p={1}>
                    <Box  p={1} flexGrow={1}>
                        <Typography>Have {props.totalUsers} results</Typography>
                    </Box>
                    <Box p={1}>
                        <Pagination count={props.totalUsers} page={page} onChange={handleChangePage} />
                    </Box>
                </Box>}
                
            </Wrapper>
        </Container>
    )
}

function mapStateToProps(state: IState) {
    return {
        users: state.users,
        loading: state.loading,
        totalUsers: state.totalUsers
    }
};

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onChangeLoginName: (value: string) => dispatch(actions.CHANGE_LOGIN_NAME(value)),
        onSubmitSearch: (params = {}) => {
            dispatch(actions.LOAD_USERS(params));
        },
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
  
export default withConnect(HomePage);