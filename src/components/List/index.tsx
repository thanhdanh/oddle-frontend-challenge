import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Ul from './Ul';

function List(props: any) {
    const ComponentToRender = props.component;
    let content = <div />;
    // If we have items, render them
    if (props.items) {
        content = props.items.map((item: any) => (
            <ComponentToRender key={`item-${item.id}`} item={item} />
        ));
    } else {
        // Otherwise render a single component
        content = <ComponentToRender />;
    }

    console.log('Content', content)

    return (
        <Wrapper>
          <Ul>{content}</Ul>
        </Wrapper>
    );
}

List.propTypes = {
    component: PropTypes.elementType.isRequired,
    items: PropTypes.array,
};
  
export default List;