import React, { Component } from 'react';
import Delete from './delete';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Year1950 from './Years/Year1950';
import Year1960 from './Years/Year1960';
import Year1970 from './Years/Year1970';
import Year1980 from './Years/Year1980';
import Year1990 from './Years/Year1990';
import Year2000 from './Years/Year2000';
import Year2010 from './Years/Year2010';
import Home from './Home';
export default class App extends Component {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/Pre1950s" exact component={Year1950} />
					<Route path="/1960s" exact component={Year1960} />
					<Route path="/1970s" exact component={Year1970} />
					<Route path="/1980s" exact component={Year1980} />
					<Route path="/1990s" exact component={Year1990} />
					<Route path="/2000s" exact component={Year2000} />
					<Route path="/2010s" exact component={Year2010} />
				</BrowserRouter>
			</div>
		);
	}
}
