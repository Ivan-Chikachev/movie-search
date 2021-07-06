import React, { Component } from 'react';
import { Col, Row } from 'antd';
import MovieItem from './MovieItem';
import moviesAPI from '../api/api';
import SearchMovie from './Search';
import Loader from './Loader';
import NotFound from './NotFound';
import Error from './Error';
import MoviesPagination from './Pagination';

export default class Movies extends Component {
    moviesAPI = new moviesAPI()

    state = {
        movies: [],
        isLoad: true,
        isError: false,
        totalMovies: null,
        currentPage: 1,
        labelSearch: 'a',
    }

    componentDidMount() {
        this.getMovies(this.state.currentPage, this.state.labelSearch);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.labelSearch !== this.state.labelSearch) {
            this.getMovies(this.state.currentPage, this.state.labelSearch);
            this.setState({
                isLoad: true,
            });
        }
        if (prevState.currentPage !== this.state.currentPage) {
            this.getMovies(this.state.currentPage, this.state.labelSearch);
            this.setState({
                isLoad: true,
            });
        }
    }

    onError = () => {
        this.setState({
            isError: true,
            isLoad: false,
        });
    }

    getMovies(page, value) {
        this.moviesAPI.getAllMovies(page, value)
            .then((res) => {
                this.setState({
                    movies: res.results,
                    isLoad: false,
                    totalMovies: res.total_results,
                });
            }).catch(this.onError);
    }

    onSearch = (value) => {
        this.setState({ labelSearch: value });
    }

    onPaginationChange = (page) => {
        this.setState({
            currentPage: page,
        });
    };

    render() {
        const {
            isLoad, movies, isError, currentPage, totalMovies,
        } = this.state;
        const hasData = !movies.length && !isLoad && !isError;

        const errorMessage = isError && !movies.length ? <Error /> : null;
        const loader = isLoad ? <Loader /> : null;
        const notFound = hasData ? <NotFound /> : null;

        return (
            <div>
                <Row justify="center">
                    <Col span={20}>
                        <SearchMovie onSearch={this.onSearch} />
                    </Col>
                </Row>
                <Row justify="center" gutter={[32, 32]}>
                    <Col span={2}>
                        {loader}
                    </Col>
                </Row>
                <Row justify="center" gutter={[16, 8]}>
                    <Col span={18}>
                        {notFound}
                    </Col>
                </Row>
                <Row justify="center" gutter={[16, 0]}>
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
                        onPaginationChange={this.onPaginationChange}
                        currentPage={currentPage}
                        total={totalMovies}
                    />
                </Row>
            </div>
        );
    }
}
