import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import cutText from '../../functions/cutText';
import RateMovie from './RateMovies';
import Rating from '../../Rating';

const { Text } = Typography;

const Description = ({
 date, id, overview, voteAverage, valueRate, onChangeRateMovie,
}) => (

    <div>
        <Text strong>{date}</Text>
        <div>{cutText(overview)}</div>
        <RateMovie
            onChangeRateMovie={onChangeRateMovie}
            id={id}
            valueRate={valueRate}
        />
        <Rating voteAverage={voteAverage} />
    </div>
);

Description.propTypes = {
    date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
};

export default Description;
