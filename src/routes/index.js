import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Paths from './routes.json'

import Home from '../containers/Home'
import Details from '../containers/Details'
import NotFound from '../containers/NotFound'

const Routes = () => (
	<Router>
		<Switch>
			<Route path={Paths.HOME} component={Home} exact />
			<Route path={Paths.DETAILS} component={Details} exact />
			<Route path={Paths.NOT_FOUND} component={NotFound} />
			<Redirect to={Paths.NOT_FOUND} />
		</Switch>
	</Router>
)

export default Routes
