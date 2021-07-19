import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';

const MoviesPagination = ({ total, onPaginationChange, currentPage }) => (
    total > 20
        ? (
            <Pagination
                showQuickJumper
                current={currentPage}
                onChange={onPaginationChange}
                total={total}
            />
        )
        : null
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
