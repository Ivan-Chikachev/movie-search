import React, { Component } from 'react';
import moviesAPI from '../../api/api';
import GuestSessionMovies from './GuestSessionMovies';

export default class GuestSessionMoviesContainer extends Component {
    moviesAPI = new moviesAPI()

    state = {
        movies: [],
        isLoad: true,
        isError: false,
        totalMovies: 0,
        currentPage: 1,
        valueRate: 1,
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.moviesAPI.getGuestSessionMovies()
            .then((res) => {
                this.setState({
                    movies: res.results,
                    isLoad: false,
                    totalMovies: res.total_results,
                });
            })
            .catch(this.onError);
    }

    onError = () => {
        this.setState({
            isError: true,
            isLoad: false,
        });
    }

    render() {
        return (
            <GuestSessionMovies
                {...this.state}
                onPaginationChange={this.onPaginationChange}
                onChange={this.onChange}
            />
        );
    }
}
