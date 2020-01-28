import React, { Component } from 'react';

export default class ImgTextBelow extends Component {
	render() {
		return (
			<div className="body_divide body_divideVL">
				<img src={this.props.img} alt="" />
				<div className="body__img-p italy" style={{ marginTop: '1em' }}>
					{this.props.text()}
				</div>
			</div>
		);
	}
}
