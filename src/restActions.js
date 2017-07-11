// these are meta actions. the "success" and "fail" are functions that take the result

export const GET = 'GET';
export const POST = 'POST';
export const DELETE = 'DELETE';

export function get(url, { success, fail }) {
  return {
    type: GET,
    payload: { url, success, fail },
    error: null
  };
}

export function post(url, { body, success, fail }) {
  return {
    type: POST,
    payload: { url, body, success, fail },
    error: null
  };
}

export function del(url, { success, fail }) {
  return {
    type: DELETE,
    payload: { url, success, fail },
    error: null
  };
}
