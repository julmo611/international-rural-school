import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignIn from './forms/SignIn';
import SignUp from './forms/SignUp';
import NavTop from './components/NavTop';
import Dashboard from './components/Dashboard';

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<NavTop />
					<Route
						exact
						path="/"
						render={() =>
							localStorage.getItem('token') ? (
								<Dashboard />
							) : (
								<Redirect to="/signin" />
							)
						}
					/>
				</div>
				<div>
					<Switch>
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/dashboard" component={Dashboard} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
