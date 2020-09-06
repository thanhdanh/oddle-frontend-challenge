import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '@material-ui/lab/Pagination';

import { PER_PAGE } from '../../utils/constants';

interface PaginationProps {
    count: number;
    page: number;
    onChange: any;
}

function PaginationCustom(props: PaginationProps) {
    return (
        <div>
            {props.count > PER_PAGE && <Pagination count={Math.ceil(props.count / PER_PAGE)} page={props.page} onChange={props.onChange} />}
        </div>
    )
}

PaginationCustom.propTypes = {
    count: PropTypes.number,
    page: PropTypes.number,
    onChange: PropTypes.func,
};
  
export default PaginationCustom;