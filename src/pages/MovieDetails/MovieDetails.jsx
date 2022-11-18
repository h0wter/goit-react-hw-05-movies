import { useState, useEffect, Suspense } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { Box } from 'components/Box';
import { BackLink } from './MovieDetails.styled';

const baseURL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      const movie = await getMovieDetails(id);
      setMovie(movie.data);
    };
    fetchData();
  }, [id]);

  if (movie === null) return;

  const { title, poster_path, vote_average, overview, genres } = movie;
  const genresString = genres.map(genre => genre.name).join(' ');
  return (
    <main>
      <BackLink to={backLinkRef}>Go back</BackLink>
      <Box display="flex">
        <img src={`${baseURL + poster_path}`} alt={movie.title} width="200px" />
        <Box ml={3}>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
          <Box as="p" fontWeight="bold">
            Overview
          </Box>
          <p>{overview}</p>
          <Box as="p" fontWeight="bold">
            Genres
          </Box>
          <p>{genresString}</p>
        </Box>
      </Box>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: backLinkRef }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: backLinkRef }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
