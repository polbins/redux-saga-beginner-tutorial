import {delay} from 'redux-saga'
import {put, call, takeEvery,} from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
export function * incrementAsync() {
  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

// Our watcher Saga: spawn a new incrementAsync task on each
// INCREMENT_ASYNC
export function * watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function * rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}

export function * helloSaga() {
  console.log('Hello Sagas!')
}
