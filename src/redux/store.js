import reducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

export default createStore(reducer, applyMiddleware(promiseMiddleware))