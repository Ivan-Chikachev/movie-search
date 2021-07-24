import React from 'react';
import PropTypes from 'prop-types';
import cutText from '../../functions/cutText';

const Description = ({ overview }) => (

    <div className="card__description">
        <div>{cutText(overview)}</div>
    </div>
);

Description.propTypes = {
    overview: PropTypes.string.isRequired,
};

export default Description;
