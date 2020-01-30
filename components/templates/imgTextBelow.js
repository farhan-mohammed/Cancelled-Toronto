import React, { Component } from 'react';

export default class ImgTextBelow extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="body_divide body_divideVL">
				<img src={this.props.img /*'/images/test.png'*/} alt="" />
				<div className="body__img-p italy" style={{ marginTop: '1em' }}>
					{this.props.text()}
				</div>
			</div>
		);
	}
}
