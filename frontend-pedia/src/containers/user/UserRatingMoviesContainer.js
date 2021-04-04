import SmallSlider from "../../components/slider/SmallSlider";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { listRatingMovies, countRatingMovies } from "../../modules/ratingMovies";

const UserRatingMoviesContainer = () => {
  const dispatch = useDispatch();
  const { userId, movies, count, error, loading } = useSelector(
    ({ user, ratingMovies, loading }) => ({
      userId: user.user.userId,
      movies: ratingMovies.movies,
      count: ratingMovies.count,
      error: ratingMovies.error,
      loading: loading["ratingMovies/LIST_RATING_MOVIES"],
    })
  );
  useEffect(() => {
    dispatch(listRatingMovies(userId));
    dispatch(countRatingMovies(userId));
  }, [dispatch, userId]);

  movies && movies.forEach((movie) => {
      movie.isRating = "평가함";
    });

  return (
    <>
      <h3 style={{ display: "inline-block" }}>평가</h3>&nbsp;&nbsp;{count}
      <SmallSlider movies={movies} error={error} loading={loading} />
    </>
  );
};

export default withRouter(UserRatingMoviesContainer);
