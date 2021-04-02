import { createReducer, createSetValueAction, setValueReducer } from '../../common/createReducer';

export const types = {
  // 영화 인피니트 스크롤
  REQUEST_ADD_MOVIELIST: 'search/REQUEST_ADD_MOVIELIST',
  REQUEST_ADD_COUNTRYMOVIELIST: 'search/REQUEST_ADD_COUNTRYMOVIELIST',
  REQUEST_ADD_GANREMOVIELIST: 'search/REQUEST_ADD_GANREMOVIELIST',
  ADD_MOVIELIST: 'search/ADD_MOVIELIST',
  SET_INFINITE: 'search/SET_INFINITE',
  SET_END: 'search/SET_END',

  REQUEST_MOVIELIST: 'search/REQUEST_MOVIELIST',
  SET_MOVIELIST: 'search/SET_MOVIELIST',
  SET_LOADING: 'search/SET_LOADING',
  SET_VALUE: 'search/SET_VALUE',
  TRY_SET_TEXT: 'search/TRY_SET_TEXT',

  // 장르 영화
  REQUEST_GANREMOVIELIST: 'search/REQUEST_GANREMOVIELIST',
  // 국가 영화
  REQUEST_COUNTRYMOVIELIST: 'search/REQUEST_COUNTRYMOVIELIST',
  // 감독 영화
  REQUEST_DIRECTORMOVIELIST: 'search/REQUEST_DIRECTORMOVIELIST',
  // 배우 영화
  REQUEST_CASTMOVIELIST: 'search/REQUEST_CASTMOVIELIST',
};

export const actions = {
  requestMovieList: () => ({ type: types.REQUEST_MOVIELIST }),
  setMovieList: data => ({ type: types.SET_MOVIELIST, data }),
  setLoading: isLoading => ({
    type: types.SET_LOADING,
    isLoading,
  }),
  setValue: createSetValueAction(types.SET_VALUE),
  trySetText: text => ({
    type: types.TRY_SET_TEXT,
    text,
  }),
  // 영화 인피니트 스크롤
  requestAddMovieList: (pageNum, userNo) => ({ type: types.REQUEST_ADD_MOVIELIST, pageNum, userNo }),
  requestAddCountryMovieList: (country, pageNum, userNo) => ({ type: types.REQUEST_ADD_COUNTRYMOVIELIST, country, pageNum, userNo }),
  requestAddGanreMovieList: (ganre, pageNum, userNo) => ({ type: types.REQUEST_ADD_GANREMOVIELIST, ganre, pageNum, userNo }),
  addMovieList: data => ({ type: types.ADD_MOVIELIST, data }),
  setInfinite: isInfinite => ({
    type: types.SET_INFINITE,
    isInfinite,
  }),
  setEnd: infiniteEnd => ({
    type: types.SET_END,
    infiniteEnd,
  }),
  // 장르 영화
  requestGanreMovieList: (ganre, pageNum, userNo) => ({ type: types.REQUEST_GANREMOVIELIST, ganre, pageNum, userNo }),
  // 국가 영화
  requestCountryMovieList: (country, pageNum, userNo) => ({ type: types.REQUEST_COUNTRYMOVIELIST, country, pageNum, userNo }),
  // 감독 영화
  requestDirectorMovieList: (director, userNo) => ({ type: types.REQUEST_DIRECTORMOVIELIST, director, userNo }),
  // 배우 영화
  requestCastMovieList: (cast, userNo) => ({ type: types.REQUEST_CASTMOVIELIST, cast, userNo }),
}

const INITIAL_STATE = { 
  text: '', 
  movieLists: [], 
  isLoading: false, 
  error: '', 
  isInfinite: false,
  infiniteEnd: false,
};
const reducer = createReducer(INITIAL_STATE, {
  // 영화 인피니트 스크롤
  [types.ADD_MOVIELIST]: (state, action) => {
    state.movieLists = state.movieLists.concat(action.data)
  },
  [types.SET_INFINITE]: (state, action) => (state.isInfinite = action.isInfinite),
  [types.SET_END]: (state, action) => (state.infiniteEnd = action.infiniteEnd),

  [types.SET_MOVIELIST]: (state, action) => {
    state.movieLists = action.data
  },
  [types.SET_LOADING]: (state, action) => (state.isLoading = action.isLoading),
  [types.SET_VALUE]: setValueReducer,
});
export default reducer;