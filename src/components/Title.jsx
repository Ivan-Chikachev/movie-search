import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const Title = ({ voteAverage, title }) => (
        <div style={{ display: 'flex', justifyContent: 'spaceBetween', alignItems: 'center' }}>
            <span style={{ width: '200px', whiteSpace: 'normal' }}>{title}</span>
            <Rating voteAverage={voteAverage} />
        </div>

    );

Title.propTypes = {
    title: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
};

export default Title;
