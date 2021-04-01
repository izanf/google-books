import { put, takeEvery, call, select } from 'redux-saga/effects'
import { Types } from '../reducers/books'

import { getBooks } from '../../services/books'

export function* fetchBooksSaga({ params }) {
  const list = yield select(store => store.books.list)

  try {
    console.log('PARAMS', params, list)
    const { data } = yield call(getBooks, params.qs)

    yield put({ type: Types.FETCH_BOOKS_SUCCESS, payload: { items: params.loadMore ? [...list, ...data.items] : data.items, totalItems: data.totalItems }})
    
  } catch (error) {
    yield put({
      type: Types.FETCH_BOOKS_FAILURE,
      payload: { error }
    })
  }
}

const handleFavorites = (id, favorites) => {
  const hasFavorite = favorites.find(item => item === id)

  if (!hasFavorite) return [...favorites, id] 

  return favorites.filter(item => item !== id)
}

export function* handleFavoriteSaga({ params }) {
  const favorites = yield select(store => store.books.favorites)

  try {
    yield put({ type: Types.HANDLE_FAVORITE_SUCCESS, payload: { favorites: handleFavorites(params, favorites) } })
    
  } catch (error) {
    yield put({
      type: Types.HANDLE_FAVORITE_FAILURE,
      payload: { error }
    })
  }
}

export default function* root() {
  yield takeEvery(Types.FETCH_BOOKS, fetchBooksSaga)
  yield takeEvery(Types.HANDLE_FAVORITE, handleFavoriteSaga)
}
