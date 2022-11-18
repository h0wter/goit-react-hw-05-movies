import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

const baseURL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [castData, setCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovieCast(id);
      setCast(response.data);
    };
    fetchData();
  }, [id]);

  if (castData === null) return;

  return (
    <div>
      <ul>
        {castData.cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            {profile_path && (
              <img src={`${baseURL + profile_path}`} alt={name} width="100px" />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
