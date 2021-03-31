import {
createStore,
combineReducers,
applyMiddleware,
compose
} from 'redux'

import middlewares, { sagaMiddleware } from './middlewares'

import * as rootReducers from './reducers'
import rootSagas from './sagas'

const combinedReducers = combineReducers(rootReducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSagas)

export default store
