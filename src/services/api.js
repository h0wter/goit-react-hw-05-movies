import axios from 'axios';

const API_KEY = 'e900ddd99edc3affd146f1905e638fd1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesByName = async query => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}&page=1`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieCast = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
