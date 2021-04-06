import React, { useEffect, useState, useCallback } from 'react';
import qs from 'qs';
import MovieList from '../../components/movies/MovieList';
import { withRouter } from 'react-router';
import * as moviesApi from '../../lib/api/movies';

const SearchMovieListContainer = ({ location }) => {
  const [loading, setLoading] = useState(null);
  const [page, setPage] = useState(0);
  const [movies, setMovies] = useState(null);
  const { keyword } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const getSearchMovies = async (newPage) => {
    try {
      setLoading(true);
      const response = await moviesApi.listSearchMovies({ keyword, page: newPage });
      if (movies) {
        setMovies([...movies, ...response.data]);
      }
      else {
        setMovies(response.data);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSearchMovies(page);
  }, []);

  const _infiniteScroll = useCallback(() => {
    console.log('scroll');
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;
    
    if(scrollTop + clientHeight === scrollHeight) {
      console.log('fetchMore');
      if(movies){
        setPage(page + 1);
        setMovies(movies.concat(getSearchMovies(page+1)));
      }
    }
  }, [page, movies]);

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => window.removeEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);

  return (
    <>
      <MovieList movies={movies} headerTitle="영화 검색 결과" />
      {loading && <img src="/images/Rolling-50px.svg" style={{marginLeft: "50%"}}/>}
      <button style={{color: "white", backgroundColor: "white"}}>무한스크롤</button>
    </>
  );
};

export default withRouter(SearchMovieListContainer);
