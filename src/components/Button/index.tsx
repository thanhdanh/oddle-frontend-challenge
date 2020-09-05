import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { DefaultStyledButton ,RedStyledButton, GreenStyledButton, 
    BlueStyledButton, WarningStyledButton } from './styledButton';
import A from './A';
import { StyledComponent } from 'styled-components';

function buttonFactory(Button: StyledComponent<"button", any, any>, props: any) {
    return (
        <Button onClick={props.onClick}>
            {Children.toArray(props.children)}
        </Button>
    )
}

function Button(props: any) {
    const { type } = props;
    let button = buttonFactory(DefaultStyledButton, props) 

    switch (type) {
        case 'success':
            button = buttonFactory(GreenStyledButton, props);
            break;
        case 'red':
            button = buttonFactory(RedStyledButton, props);
            break;
        case 'blue':
            button = buttonFactory(BlueStyledButton, props);
            break;
        case 'warning':
            button = buttonFactory(WarningStyledButton, props);
            break;
        default: 
            button = buttonFactory(DefaultStyledButton, props);
        break;
    }

    if (props.href) {
        button = (
            <A href={props.href} onClick={props.onClick}>
              {Children.toArray(props.children)}
            </A>
        );
    }
    
    return button;
}

Button.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['success', 'blue', 'warning', 'default', 'red'])
}

export default Button;
