import { all, fork } from 'redux-saga/effects'

import books from './books'

export default function* root() {
  yield all([
    fork(books)
  ])
}
