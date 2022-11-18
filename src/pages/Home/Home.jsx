import { useState, useEffect } from 'react';
import { getMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      setMovies(movies.data.results);
    };
    fetchData();
  }, []);
  return (
    <main>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
