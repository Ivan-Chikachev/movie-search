import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import Error from '../Error';
import Loader from '../Loader';
import NotFound from '../NotFound';
import SearchMovie from '../Search';
import MovieItem from '../MovieItem/MovieItem';
import MoviesPagination from '../Pagination';

const Movies = ({
                    isLoad, movies, isError, currentPage,
                    totalMovies, onPaginationChange,
                    onChange,
                }) => {
    const hasData = !movies.length && !isLoad && !isError;

    const errorMessage = isError && !movies.length ? <Error /> : null;
    const loader = isLoad ? <Loader /> : null;
    const notFound = hasData ? <NotFound /> : null;

    return (
        <div>
            <Row justify="center">
                <Col span={20}>
                    <SearchMovie onChange={onChange} />
                </Col>
            </Row>
            <Row justify="center">
                <Col span={2}>
                    {loader}
                </Col>
            </Row>
            <Row justify="center">
                <Col span={18}>
                    {notFound}
                </Col>
            </Row>
            <Row justify="center">
                <Col span={10}>
                    {errorMessage}
                </Col>
            </Row>
            <Row justify="center">
                {movies.map((i) => (
                    <Col span={10} key={i.id}>
                        <MovieItem {...i} />
                    </Col>
                ))}
            </Row>
            <Row justify="center">
                <MoviesPagination
                    onPaginationChange={onPaginationChange}
                    currentPage={currentPage}
                    total={totalMovies}
                />
            </Row>
        </div>
    );
};

Movies.defaulProps = {
    onPaginationChange: () => {
    },
    onChange: () => {
    },
};
Movies.propTypes = {
    isLoad: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    isError: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalMovies: PropTypes.number.isRequired,
    onPaginationChange: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Movies;