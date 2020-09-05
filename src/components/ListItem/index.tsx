import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Item from './Item';

function ListItem(props: any) {
    return (
      <Wrapper>
        <Item>{props.item}</Item>
      </Wrapper>
    );
}

ListItem.propTypes = {
    item: PropTypes.any,
};

export default ListItem;