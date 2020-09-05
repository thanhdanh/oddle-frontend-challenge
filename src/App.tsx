import React from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './GlobalStyles';

// All Pages
import HomePage from './pages/HomePage';
import UserDetail from './pages/UserDetail';
import NotFoundPage from './pages/NotFoundPage';

function App(props: any) {
  return (
    <Provider store={props.store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/user/:id" component={UserDetail} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Router>
      <GlobalStyles />
    </Provider>
    
  );
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
}

export default App;
