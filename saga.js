import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { fetchBlogApi, loginApi } from './apis/helperApi';
import { actionTypes, failure, loadDataSuccess, tickClock, loadBlogData, setUserData } from './actions'


function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

// function* fetchBlogDataSaga () {
//   try {
//     const { data } = yield call(fetchBlogApi)    
//     yield put(loadBlogData(data))
//   } catch (err) {
//     yield put(failure(err))
//   }
// }

function* attemptLoginSaga ({email, password}) {
  try {
    console.log('trying login')
    const { data: userData } = yield call(loginApi, email, password);
    const { data } = yield call(fetchBlogApi);
    console.log('done fetching')    
    yield put(loadBlogData(data));
    console.log('updated state')
    yield put(setUserData(userData))
  } catch (error) {
    console.log(error)
  }
}

function* fetchBlogDataSaga () {
  try {
    console.log('fetching data')
    const { data } = yield call(fetchBlogApi)
    console.log('done fetching')    
    yield put(loadBlogData(data))
    console.log('updated state')
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.FETCH_BLOG_DATA_SAGA, fetchBlogDataSaga),
    takeLatest(actionTypes.ATTEMPT_LOGIN_SAGA, attemptLoginSaga)
  ])
}

export default rootSaga
