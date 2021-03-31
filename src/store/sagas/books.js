import { put, takeEvery, call } from 'redux-saga/effects'
import { Types } from '../reducers/books'

import { getBooks } from '../../services/books'

export function* fetchBooksSaga({ params }) {
  try {
    const { data } = yield call(getBooks, params)

    yield put({ type: Types.FETCH_BOOKS_SUCCESS, payload: { data }})
    
  } catch (error) {
    yield put({
      type: Types.FETCH_BOOKS_FAILURE,
      payload: { error }
    })
  }
}

export default function* root() {
  yield takeEvery(Types.FETCH_BOOKS, fetchBooksSaga)
}
