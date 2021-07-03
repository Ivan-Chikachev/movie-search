import React, { Component } from 'react';
import { Row } from 'antd';
import MovieItem from './MovieItem';
import moviesAPI from '../api/api';

export default class Movies extends Component {
    moviesAPI = new moviesAPI()

    state = {
      movies: [],
    }

    componentDidMount() {
      this.getMovies();
    }

    getMovies() {
      this.moviesAPI.getAllMovies()
        .then((items) => {
          this.setState({
            movies: items,
          });
        });
    }

    render() {
      const { movies } = this.state;
      return (
            <Row
                justify="center"
                wrap
            >
                {movies.map((i) => <MovieItem key={i.id} {...i} />)}
            </Row>
      );
    }
}
