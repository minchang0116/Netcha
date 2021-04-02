import { all, call, put, takeLeading } from 'redux-saga/effects';
import { actions, types } from './index';
import { 
  callApiMovieList,
  callApiNewMovieList,
  callApiPopularMovieList,
  callApiContentMovieList,
  callApiRankMovieList,
  callApiGanreMovieList,
  callApiCountryMovieList,
} from '../../common/api';

export function* contentData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.setValue('error', ''));
  try {
    const data = yield call(callApiContentMovieList, action.pageNum, action.userNo);
    if (data !== undefined) {
      yield put(actions.setMovieList(data));
    }
  } catch(error) {
    yield put(actions.setValue('error', error));
  }
  yield put(actions.setLoading(false));
} 

export function* filterCountryData(action) {
  yield put(actions.setLoading(true));
  try {
    const data = yield call(callApiCountryMovieList, action.country, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setIsFilter(true));
      yield put(actions.setMovieList(data));
    }
  } catch(error) {
  }
  yield put(actions.setLoading(false));
} 

export function* filterGanreData(action) {
  yield put(actions.setLoading(true));
  try {
    const data = yield call(callApiGanreMovieList, action.ganre, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setIsFilter(true));
      yield put(actions.setMovieList(data));
    }
  } catch(error) {
  }
  yield put(actions.setLoading(false));
} 

export function* newData(action) {
  yield put(actions.setNewLoading(true));
  yield put(actions.setValue('error', ''));
  try {
    const data = yield call(callApiNewMovieList, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setNewMovieList(data));
    }
  } catch(error) {
    yield put(actions.setValue('error', error));
  }
  yield put(actions.setNewLoading(false));
} 

export function* popularData(action) {
  yield put(actions.setPopularLoading(true));
  yield put(actions.setValue('error', ''));
  try {
    const data = yield call(callApiPopularMovieList, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setPopularMovieList(data));
    }
  } catch(error) {
    yield put(actions.setValue('error', error));
  }
  yield put(actions.setPopularLoading(false));
} 

export function* rankData(action) {
  yield put(actions.setRankLoading(true));
  yield put(actions.setValue('error', ''));
  try {
    const data = yield call(callApiRankMovieList, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setRankMovieList(data));
    }
  } catch(error) {
    yield put(actions.setValue('error', error));
  }
  yield put(actions.setRankLoading(false));
} 

export function* ganreData(action) {
  yield put(actions.setGanreLoading(true));
  yield put(actions.setValue('error', ''));
  try {
    const data = yield call(callApiGanreMovieList, action.ganre, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setGanreMovieList(data));
    }
  } catch(error) {
    yield put(actions.setValue('error', error));
  }
  yield put(actions.setGanreLoading(false));
} 

export function* ganreData2(action) {
  yield put(actions.setGanreLoading2(true));
  try {
    const data = yield call(callApiGanreMovieList, action.ganre, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setGanreMovieList2(data));
    }
  } catch(error) {
  }
  yield put(actions.setGanreLoading2(false));
} 

export function* ganreData3(action) {
  yield put(actions.setGanreLoading3(true));
  try {
    const data = yield call(callApiGanreMovieList, action.ganre, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setGanreMovieList3(data));
    }
  } catch(error) {
  }
  yield put(actions.setGanreLoading3(false));
} 

export function* countryData(action) {
  yield put(actions.setCountryLoading(true));
  try {
    const data = yield call(callApiCountryMovieList, action.country, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setCountryMovieList(data));
    }
  } catch(error) {
  }
  yield put(actions.setCountryLoading(false));
} 

export function* countryData2(action) {
  yield put(actions.setCountryLoading2(true));
  try {
    const data = yield call(callApiCountryMovieList, action.country, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setCountryMovieList2(data));
    }
  } catch(error) {
  }
  yield put(actions.setCountryLoading2(false));
} 

export function* countryData3(action) {
  yield put(actions.setCountryLoading3(true));
  try {
    const data = yield call(callApiCountryMovieList, action.country, action.pageNum);
    if (data !== undefined) {
      yield put(actions.setCountryMovieList3(data));
    }
    } catch(error) {
  }
  yield put(actions.setCountryLoading3(false));
} 

export function* addData(action) {
  yield put(actions.setInfinite(true));
  yield put(actions.setValue('error', ''));
  try {
    const data = yield call(callApiContentMovieList, action.pageNum, action.userNo);
    if (data !== undefined) {
      yield put(actions.addMovieList(data));
    }
  } catch(error) {
    yield put(actions.setValue('error', error));
  }
  yield put(actions.setInfinite(false));
}

export function* addCountryData(action) {
  yield put(actions.setInfinite(true));
  try {
    const data = yield call(callApiCountryMovieList, action.country, action.pageNum);
    if (data !== undefined) {
      yield put(actions.addMovieList(data));
    }
  } catch(error) {
  }
  yield put(actions.setInfinite(false));
}

export function* addGanreData(action) {
  yield put(actions.setInfinite(true));
  try {
    const data = yield call(callApiGanreMovieList, action.ganre, action.pageNum);
    if (data !== undefined) {
      yield put(actions.addMovieList(data));
    }
  } catch(error) {
    console.log("??")
  }
  yield put(actions.setInfinite(false));
}

export default function* () {
  yield all([
    takeLeading(types.REQUEST_MOVIELIST, contentData),
    takeLeading(types.REQUEST_NEWMOVIELIST, newData),
    takeLeading(types.REQUEST_POPULARMOVIELIST, popularData),
    takeLeading(types.REQUEST_RANKMOVIELIST, rankData),
    takeLeading(types.REQUEST_GANREMOVIELIST, ganreData),
    takeLeading(types.REQUEST_GANREMOVIELIST2, ganreData2),
    takeLeading(types.REQUEST_GANREMOVIELIST3, ganreData3),
    takeLeading(types.REQUEST_COUNTRYMOVIELIST, countryData),
    takeLeading(types.REQUEST_COUNTRYMOVIELIST2, countryData2),
    takeLeading(types.REQUEST_COUNTRYMOVIELIST3, countryData3),
    takeLeading(types.REQUEST_FILTERCOUNTRYMOVIELIST, filterCountryData),
    takeLeading(types.REQUEST_FILTERGANREMOVIELIST, filterGanreData),
    takeLeading(types.REQUEST_ADD_MOVIELIST, addData),
    takeLeading(types.REQUEST_ADD_COUNTRYMOVIELIST, addCountryData),
    takeLeading(types.REQUEST_ADD_GANREMOVIELIST, addGanreData),
  ]);
}