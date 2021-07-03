export default class moviesAPI {
    _apiBase = 'https://api.themoviedb.org/3/'

    _apiKey = 'api_key=398b0f687ebb83662baaa394dfe55617'

    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
      }
      return await res.json();
    }

    async getAllMovies(page = 1, query = 'return') {
      const res = await this.getResource(`search/movie?${page}&query=${query}&${this._apiKey}`);
      return res.results;
    }

    getMovie(id) {
      return this.getResource(`movie/${id}?${this._apiKey}`);
    }
}
