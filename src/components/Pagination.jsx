import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';

const MoviesPagination = ({ total, onPaginationChange, currentPage }) => (
    <Pagination
        showQuickJumper
        current={currentPage}
        onChange={onPaginationChange}
        total={total}
    />
);

MoviesPagination.defaultProps = {
    onPaginationChange: () => {
    },
};

MoviesPagination.propTypes = {
    total: PropTypes.number.isRequired,
    onPaginationChange: PropTypes.func,
    currentPage: PropTypes.number.isRequired,
};

export default MoviesPagination;
