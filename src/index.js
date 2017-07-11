import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import { Parent } from './Utils';
import GetDemo from './GetDemo';
import PostDemo from './PostDemo';

ReactDOM.render(
  <Provider store={store}>
    <Parent>
      <GetDemo />
      <PostDemo />
    </Parent>
  </Provider>,
  document.getElementById('root')
);
