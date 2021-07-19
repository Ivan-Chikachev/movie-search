import React from 'react';
import { Rate } from 'antd';
import PropTypes from 'prop-types';

const RateMovie = ({ id, valueRate, onChangeRateMovie }) => {
    const onChange = (value) => {
        onChangeRateMovie(id, value);
    };
    return (
        <Rate count={10} value={valueRate} onChange={onChange} />
    );
};

RateMovie.defaultProps = {
    onChangeRateMovie: () => {
    },
};

RateMovie.propTypes = {
    id: PropTypes.number.isRequired,
    valueRate: PropTypes.number.isRequired,
    onChangeRateMovie: PropTypes.func,

};

export default RateMovie;
