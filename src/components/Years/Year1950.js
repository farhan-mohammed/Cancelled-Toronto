import React, { Component } from 'react';
import Template from './template';
export default class Year1950 extends Component {
	renderView() {
		return <div>IMAGE TIME BOYS</div>;
	}
	renderText() {
		return <div>Textde</div>;
	}
	render() {
		return <Template view={this.renderView} text={this.renderText} />;
	}
}
