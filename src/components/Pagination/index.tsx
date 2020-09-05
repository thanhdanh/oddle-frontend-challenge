import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PaginationList = styled.ul`
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px; 
`;

const PaginationItem = styled.li`
    display: inline;
`;

const PaginationLink = styled.a`
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    &:hover {
        z-index: 2;
        color: #23527c;
        background-color: #eee;
        border-color: #ddd;
    }
`;

const PaginationLinkActive = styled(PaginationLink)`
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
`;


interface PaginationProps {
    totalPage: number;
    currentPage: number;
}

function Pagination(props: PaginationProps) {
    if (!props.totalPage) return <div></div>;

    const listPage = [
        <PaginationItem>
            <PaginationLink>
                Prev
            </PaginationLink>
        </PaginationItem>
    ];

    for (let i = 1; i <= props.totalPage; i++) {
        if (props.currentPage === i) {
            listPage.push(
                <PaginationItem>
                    <PaginationLinkActive>
                      {i}
                    </PaginationLinkActive>
                </PaginationItem>
            )
        } else { 
            listPage.push(
                <PaginationItem>
                    <PaginationLink>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            )
        }
    }

    listPage.push(
        <PaginationItem>
            <PaginationLink>
                Next
            </PaginationLink>
        </PaginationItem>
    )

    return (
        <nav aria-label="Page navigation">
            <PaginationList>
                {listPage}
            </PaginationList>
        </nav>
    )
}

Pagination.propTypes = {
    totalPage: PropTypes.number,
    currentPage: PropTypes.number,
};
  
export default Pagination;