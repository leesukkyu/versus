/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import RootStore from '@Store/rootStore';

import moment from 'moment';

import App from './App';

moment.locale('ko', {
  weekdaysShort: ['일', '월', '화', '수', '목', '금', '토'],
  meridiem(hours) {
    return hours < 12 ? '오전' : '오후';
  },
});

ReactDOM.render(
  <Provider {...RootStore} rootStore={RootStore}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
