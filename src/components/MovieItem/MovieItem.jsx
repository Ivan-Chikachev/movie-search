import React from 'react';
import { Card } from 'antd';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import defaultImage from '../../access/defaultImage.jpg';
import Description from './Description';
import Title from '../Title';

const { Meta } = Card;

const MovieItem = ({
                       id, poster_path, title, release_date, overview, vote_average, onChangeRateMovie,
                       guestMoviesRating,
                   }) => {
    const date = release_date
        ? format(new Date(release_date), 'MMMM d, yyyy')
        : null;
    const src = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : defaultImage;

    return (
        <Card>

            <Meta
                title={<Title title={title} voteAverage={vote_average} />}
                avatar={
                    <img src={src} alt="" width={180} height={290} />
                }
                description={(
                    <Description
                        id={id}
                        onChangeRateMovie={onChangeRateMovie}
                        overview={overview}
                        date={date}
                        guestMoviesRating={guestMoviesRating}
                    />
                )}
            />

        </Card>

    );
};

MovieItem.defaultProps = {
    poster_path: '',
    onChangeRateMovie: () => {
    },

};

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    onChangeRateMovie: PropTypes.func,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    guestMoviesRating: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieItem;
