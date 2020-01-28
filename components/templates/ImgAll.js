import React, { Component } from 'react';

export default class ImgAll extends Component {
	render() {
		return (
			<div className="body__img-con">
				<img src={this.props.img} alt="" className="body__img" />
			</div>
		);
	}
}
