import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  blogPosts: null,
  email: 'rahulshah4994@gmail.com',
  password: 'Rocky@5342',
  userData: {
    full_name: 'Rahul Shah'
  }
} 

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case actionTypes.LOAD_BLOG_DATA:
      return {
        ...state, 
        blogPosts: action.value
      }

    case actionTypes.SET_EMAIL:
      return {...state, 
        email: action.value
      }

    case actionTypes.SET_PASSWORD:
      return {...state, 
        password: action.value
      }

    case actionTypes.SET_USER_DATA:
      console.log("Inside reducer",action.value)
      return {...state, 
        userData: action.value
      }
    






    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      }

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      }

    
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      }

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      }

    default:
      return state
  }
}

export default reducer
