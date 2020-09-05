import React from 'react';
import { IUser } from '../../redux/types';
import Image from '../../components/Image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

interface UserListItemProps {
    item: IUser;
}

const Wrapper = styled.div`
    display: flex;
    margin: 14px 0;
`;

const Body = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`;

const Title = styled.h2`
    font-size: 22px;
    margin: 0;
`;

const Link = styled.h4`
    font-size: 14px;
    margin: 0;
`;

function UserListItem(props: UserListItemProps) {
    const { item } = props;
    return (
        <Wrapper>
            <Image src={item.avatar_url} alt={`${item.id}`} width={64} height={64} />
            <Body>
                <Title>{item.login}</Title>
                <Link>{item.html_url}</Link>
            </Body>
        </Wrapper>
    )
}

UserListItem.propTypes = {
    item: PropTypes.object,
};

export default UserListItem;