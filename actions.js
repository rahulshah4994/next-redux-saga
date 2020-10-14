export const actionTypes = {

  LOAD_BLOG_DATA: 'LOAD_BLOG_DATA',
  FETCH_BLOG_DATA_SAGA: 'FETCH_BLOG_DATA_SAGA',
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_USER_DATA: 'SET_USER_DATA',
  HYDRATE: 'HYDRATE',
  ATTEMPT_LOGIN_SAGA: 'ATTEMPT_LOGIN_SAGA',


  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK' 
}

export function setField (field, data) {
  return {type: `SET_${field.toUpperCase()}`, value: data}
}

export function fetchBlogData () {
  return {type: actionTypes.FETCH_BLOG_DATA_SAGA}
}

export function attemptLogin (email, password) {
  return {type: actionTypes.ATTEMPT_LOGIN_SAGA, email, password}
}

export function loadBlogData (blogData) {
  return { type: actionTypes.LOAD_BLOG_DATA, value: blogData }
}

export function setUserData (userData) {
  return { type: actionTypes.SET_USER_DATA, value: userData}
}



export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}

export function increment() {
  return { type: actionTypes.INCREMENT }
}

export function decrement() {
  return { type: actionTypes.DECREMENT }
}

export function reset() {
  return { type: actionTypes.RESET }
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA }
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  }
}


export function startClock() {
  return { type: actionTypes.START_CLOCK }
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  }
}
