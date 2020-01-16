import React, { Component } from 'react';
import '../components/wrapper/mainSite';
import WebsiteLayout from '../components/wrapper/mainSite';
export default class App extends Component {
	render() {
		return (
			<WebsiteLayout>
				<div>App</div>
			</WebsiteLayout>
		);
	}
}
