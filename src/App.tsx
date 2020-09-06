import React from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';

import GlobalStyles from './GlobalStyles';

// All Pages
import HomePage from './pages/HomePage';
import UserDetail from './pages/UserDetail';
import NotFoundPage from './pages/NotFoundPage';
import request from './utils/request';

function App(props: any) {
  return (
    <SWRConfig
        value={{
          fetcher: request,
          initialData: [],
          suspense: true,
          revalidateOnMount: true
        }}
    >
      <Provider store={props.store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user/:id" component={UserDetail} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
        <GlobalStyles />
      </Provider>

    </SWRConfig>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App;
