import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Slider from "../../slider";
import { actions } from "../../../state";

export default function KeywordBased2({loading, idx, keyword, user}) {
  const movieLists = useSelector(state => state.home.keywordMovieLists2);
  const isLoading = useSelector(state => state.home.isKeywordLoading2);
  const dispatch = useDispatch();
  useEffect(() =>{
    if (movieLists.length === 0) {
      dispatch(actions.requestKeywordMovieList2(keyword, 0, user.seq));
    }
  }, [dispatch, user, movieLists, keyword])
  
  return (
    <div className="home__container" id={idx}>
        {isLoading && <Slider title={`${keyword} 영화`} idx={idx}>
          {loading.map((movie, idx) => (
              <Slider.Item movie={movie} key={movie.no} idx={idx}>
              </Slider.Item>
          ))}
        </Slider>}
        {!isLoading && <Slider title={`${keyword} 영화`} idx={idx}>
          {movieLists.map((movie, idx) => (
              <Slider.Item movie={movie} key={movie.no} idx={idx} >
              </Slider.Item>
          ))}
        </Slider>}
    </div>
  )
}