import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import cutText from '../../functions/cutText';
import RateMovie from './RateMovies';
import Rating from '../../Rating';

const { Text } = Typography;

const Description = ({
                         date, id, overview, voteAverage, onChangeRateMovie,
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
        <Rating voteAverage={voteAverage} />
    </div>
);
Description.defaultProps = {
    onChangeRateMovie: () => {
    },
};

Description.propTypes = {
    voteAverage: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    guestMoviesRating: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeRateMovie: PropTypes.func,
};

export default Description;
