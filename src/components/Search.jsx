import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

const { Search } = Input;

const SearchMovie = ({ onChange }) => (
    <Search
        placeholder="input search text"
        allowClear
        onChange={debounce(onChange, 500)}
    />
);

SearchMovie.defaultProps = {
    onChange: () => {
    },
};

SearchMovie.propTypes = {
    onChange: PropTypes.func,
};

export default SearchMovie;
