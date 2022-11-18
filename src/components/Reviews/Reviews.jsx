import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Box } from 'components/Box';

const Reviews = () => {
  const [reviewData, setReview] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovieReviews(id);
      setReview(response.data);
    };
    fetchData();
  }, [id]);
  if (reviewData === null) return;
  if (reviewData.results.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <div>
      <ul>
        {reviewData.results.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <Box fontWeight="bold">Author: {author}</Box>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
