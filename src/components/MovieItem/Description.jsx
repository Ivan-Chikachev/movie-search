import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import cutText from '../../functions/cutText';
import RateMovie from './RateMovies';

const { Text } = Typography;

const Description = ({
                         date, id, overview, onChangeRateMovie,
                         guestMoviesRating,
                     }) => (

    <div>
        <Text strong>{date}</Text>
        <div>{cutText(overview)}</div>
        <RateMovie
            onChangeRateMovie={onChangeRateMovie}
            id={id}
            guestMoviesRating={guestMoviesRating}
        />
    </div>
);

Description.defaultProps = {
    onChangeRateMovie: () => {
    },
};

Description.propTypes = {
    date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    guestMoviesRating: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeRateMovie: PropTypes.func,
};

export default Description;
