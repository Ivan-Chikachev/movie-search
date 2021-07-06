import React from 'react';
import { Card } from 'antd';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import defaultImage from '../../access/defaultImage.jpg';
import Description from './Description';

const { Meta } = Card;

const MovieItem = ({
                       poster_path, title, release_date, overview,
}) => {
    const date = release_date
        ? format(new Date(release_date), 'MMMM d, yyyy')
        : null;
    const src = poster_path
        ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`
        : defaultImage;

    return (
        <Card>
            <Meta
                title={title}
                avatar={
                    <img src={src} alt="" width={200} height={320} />
                }
                description={(
                    <Description
                        overview={overview}
                        date={date}
                    />
                  )}
            />
        </Card>

    );
};

MovieItem.defaultProps = {
    poster_path: '',
};

MovieItem.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
};

export default MovieItem;
