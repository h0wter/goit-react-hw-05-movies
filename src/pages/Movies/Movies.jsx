import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getMoviesByName } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    const fetchData = async () => {
      const movies = await getMoviesByName(query);
      setMovies(movies.data.results);
    };

    fetchData();
  }, [query]);

  return (
    <main>
      <form
        onSubmit={e => {
          e.preventDefault();
          setSearchParams({ query: e.target.input.value });
          e.target.input.value = '';
        }}
      >
        <input type="text" name="input" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
