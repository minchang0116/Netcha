import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { listNetChaRankingMovies } from "../../modules/netchaRankingMovies";
import MovieRanking from "../../components/movies/MovieRanking";

const MovieRankingContainer = ({title}) => {
  const dispatch = useDispatch();
  const { user, movies, error, loading } = useSelector(({ user, netchaRankingMovies, loading }) => ({
    user: user.user,
    movies: netchaRankingMovies.movies,
    error: netchaRankingMovies.error,
    loading: loading["netchaRankingMovies/NETCHA_RANKING_MOVIES"],
  }));
  useEffect(() => {
    dispatch(listNetChaRankingMovies());
  }, [dispatch]);

  return (
    <MovieRanking user={user} title={title} loading={loading} error={error} movies={movies} />
  );
};

export default withRouter(MovieRankingContainer);
