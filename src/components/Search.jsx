import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const { Search } = Input;

const SearchMovie = ({ onSearch }) => (
        <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            onSearch={onSearch}
        />
    );
SearchMovie.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
export default SearchMovie;
