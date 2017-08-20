import { get, post } from 'redux-saga-fetch';

// the result actions,
export const GET_HTTPBIN_SUCCESS = 'GET_HTTPBIN_SUCCESS';
export const GET_HTTPBIN_FAILURE = 'GET_HTTPBIN_FAILURE';

export const POST_HTTPBIN_SUCCESS = 'POST_HTTPBIN_SUCCESS';
export const POST_HTTPBIN_FAILURE = 'POST_HTTPBIN_FAILURE';

// get some fake data from httpbin
export function getHttpBin() {
  return get('https://httpbin.org/get', {
    success: response => response.json().then(getHttpBinSuccess),
    fail: getHttpBinFailure
  });
}

function getHttpBinSuccess(payload) {
  return { type: GET_HTTPBIN_SUCCESS, payload, error: null };
}

function getHttpBinFailure(error) {
  return { type: GET_HTTPBIN_FAILURE, payload: null, error };
}

// a post example
export function postHttpBin() {
  return post('https://httpbin.org/post', {
    body: { hello: 'world' },
    success: response => response.json().then(postHttpBinSuccess),
    failure: postHttpBinFailure
  });
}

function postHttpBinSuccess(payload) {
  return { type: POST_HTTPBIN_SUCCESS, payload, error: null };
}

function postHttpBinFailure(error) {
  return { type: POST_HTTPBIN_FAILURE, payload: null, error };
}
