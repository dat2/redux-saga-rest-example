# redux-saga-rest-example
This is an example of how to cleanly remove duplication between many kinds of
{REQUEST, SUCCESS, FAILURE} for different objects (eg. A_REQUEST, A_SUCCESS, A_FAILURE,
B_REQUEST, B_SUCCESS, B_FAILURE). This creates 3 'rest' actions which trigger other actions
(see `src/restActions.js`, `src/restSaga.js` and `src/actions.js`).

The demo is in `src/GetDemo.js` and `src/PostDemo.js`.
