import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const InputStyled = styled.input`
    display: ${(props: any) => props.display || "block"};
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    &:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    }
`;

const FormItem = (props: any) => {
    return (
        <InputStyled {...props} />
    )
}

FormItem.propTypes = {
    display: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func,
};

export default FormItem;