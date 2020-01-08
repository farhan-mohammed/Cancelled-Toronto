import React, { Component } from 'react';

export default class template extends Component {
	render() {
		return (
			<div className="body-con">
				<div>{this.props.view()}</div>
				<div>{this.props.text()}</div>
			</div>
		);
	}
}
