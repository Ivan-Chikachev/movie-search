import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';

const Rating = ({ voteAverage }) => {
    const color = voteAverage < 3 ? '#E90000'
        : voteAverage >= 3 && voteAverage < 5 ? '#E97E00'
            : voteAverage >= 5 && voteAverage < 7 ? '#E9D100'
                : '#66E900';

    const percent = (100 * voteAverage) / 10;

    return (
            <Progress
                type="circle" percent={percent}
                strokeColor={color}
                format={() => voteAverage}
                width={40}
            />
    );
};

Rating.propTypes = {
    voteAverage: PropTypes.number.isRequired,
};

export default Rating;
