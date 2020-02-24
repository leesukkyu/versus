import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from "history";

import NoMatch from '@Pages/NoMatch';
import Index from '@Pages/Index';
import Main from '@Pages/main/Main';

import userStoreTypes, { tokenTypes } from '@Stores/UserStore';
import { inject, observer } from 'mobx-react';

// 로그인 체크
const checkLogin = (token: tokenTypes) => {
  if (token) {
    return true;
  }
  return false;
};

// 보안 라우트
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkLogin(token) ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
    }
  />
);

// 오픈 라우트
const CustomRoute = inject('userStore')(
  observer((props: { userStore?: userStoreTypes }) => (
    <Router history={createBrowserHistory()}>
      {/* 인덱스에서 처리해야 할 라우터들 */}
      <Route
        path={[
          '/',
          '/login',
          '/find/pw/',
          '/find/id/',
        ]}
        name="index"
        component={Index}
        exact
      />
      {/* 보안 처리 해야 할 라우터들 */}
      <PrivateRoute path="/main" component={Main} token={props.userStore.token} />
      <Route component={NoMatch} />
    </Router>
  )),
);

export default CustomRoute;
