import {
  GET_HTTPBIN_SUCCESS,
  GET_HTTPBIN_FAILURE,
  POST_HTTPBIN_SUCCESS,
  POST_HTTPBIN_FAILURE
} from './actions';

const initialState = {
  get: { payload: null, loaded: false },
  post: { payload: null, loaded: false }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HTTPBIN_SUCCESS:
      return {
        ...state,
        get: {
          loaded: true,
          payload: action.payload
        }
      };

    case GET_HTTPBIN_FAILURE:
      return {
        ...state,
        get: {
          error: action.error
        }
      };

    case POST_HTTPBIN_SUCCESS:
      return {
        ...state,
        post: {
          loaded: true,
          payload: action.payload
        }
      };

    case POST_HTTPBIN_FAILURE:
      return {
        ...state,
        post: {
          error: action.error
        }
      };

    default:
      return state;
  }
}
