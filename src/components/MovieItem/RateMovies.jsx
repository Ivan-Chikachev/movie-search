import React from 'react';
import { Rate } from 'antd';

const RateMovie = ({ id, valueRate, onChangeRateMovie }) => {
    const onChange = (value) => {
        onChangeRateMovie(id, value);
    };
    return (
        <Rate count={10} value={valueRate} onChange={onChange} />
    );
};

export default RateMovie;
