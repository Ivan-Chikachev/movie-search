import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import Error from '../Error';
import Loader from '../Loader';
import NotFound from '../NotFound';
import MovieItem from '../MovieItem/MovieItem';
import MoviesPagination from '../Pagination';

const GuestSessionMovies = ({
                    isLoad, movies, isError, currentPage,
                    totalMovies, onPaginationChange,
                    onChange, valueRate,
                }) => {
    const hasData = !movies.length && !isLoad && !isError;

    const errorMessage = isError && !movies.length ? <Error /> : null;
    const loader = isLoad ? <Loader /> : null;
    const notFound = hasData ? <NotFound /> : null;

    return (
        <div>
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
                        <MovieItem {...i} valueRate={valueRate} />
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

export default GuestSessionMovies;
