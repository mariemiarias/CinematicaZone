import axios from 'axios';

const apiKey = 'bba42454f79c54d1f9ffd341764952bb';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey
  }
});

export default tmdb;
