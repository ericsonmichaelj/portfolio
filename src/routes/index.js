import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React from 'react'
import { About } from '../views/'
import CoreLayout from '../layout/CoreLayout'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={CoreLayout}>
      <IndexRoute component={About} />
    </Route>
  </Router>
)

export default routes
