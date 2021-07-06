import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import cutText from '../../functions/cutText';
import RateMovies from './RateMovies';

const { Text } = Typography;

const Description = ({ date, overview }) => (
    <div>
        <Text strong>{date}</Text>
        <div>{cutText(overview)}</div>
        <RateMovies />
    </div>
);

Description.propTypes = {
    date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
};

export default Description;
