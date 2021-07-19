import React, { Component } from 'react';
import moviesAPI from '../../api/api';
import Movies from './Movies';

export default class MoviesContainer extends Component {
    moviesAPI = new moviesAPI()

    state = {
        movies: [],
        isLoad: true,
        isError: false,
        totalMovies: 0,
        currentPage: 1,
        labelSearch: 'a',
        valueRate: 0,
    }

    componentDidMount() {
        this.getMovies(this.state.currentPage, this.state.labelSearch);
        this.moviesAPI.getToken()
            .then((i) => i.guest_session_id)
            .then((i) => {
                sessionStorage.setItem('guest_session_id', i);
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.labelSearch !== this.state.labelSearch) {
            this.getMovies(this.state.currentPage, this.state.labelSearch);
            this.setState({
                movies: [],
                isLoad: true,
            });
        }
        if (prevState.currentPage !== this.state.currentPage) {
            this.getMovies(this.state.currentPage, this.state.labelSearch);
            this.setState({
                movies: [],
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

    onChange = (e) => {
        if (e.target.value) {
            this.setState({ labelSearch: e.target.value });
        }
    }

    onPaginationChange = (page) => {
        this.setState({
            currentPage: page,
        });
    };

    onChangeRateMovie = (id, value) => {
       this.moviesAPI.setRateMovie(id, value);
    }

    render() {
        return (
            <Movies
                {...this.state}
                onChangeRateMovie={this.onChangeRateMovie}
                onPaginationChange={this.onPaginationChange}
                onChange={this.onChange}
            />
        );
    }
}
