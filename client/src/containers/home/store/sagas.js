import { put, takeEvery } from 'redux-saga/effects';
import { setApp } from "./actions";
import { FEATCH_LIFTS } from "./types";
import { setIsLoading, setIsError } from '../../../store/actions';

const countriesEndpoint = 'https://restcountries.com/v3.1/all'

function* constructLifts() {
  yield put(setIsLoading(true))
  try { 
    const res = yield fetch(`${countriesEndpoint}`).then(res => res.json());
    yield put(setApp(res))
  }
  catch {
    yield put(setIsError(true))
  }
  finally {
    yield put(setIsLoading(false))
  }
}

function* countrySaga() {
  yield takeEvery(FEATCH_LIFTS, constructLifts);
  // yield takeEvery('ADD_USER_REQUESTED', addUser);
}

export default countrySaga;
