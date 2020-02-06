import React, { Component } from 'react';

export default class ImgTextRightBelow extends Component {
	render() {
		return (
			<div className="imgLefttextRigtBelow">
				<div className="imgLefttextRigtBelow-row_top">
					<div className="imgLefttextRigtBelow_img">
						<img src={/*this.props.img */ '/images/test.png'} alt="" />
					</div>
					<div className="imgLefttextRigtBelow_text imgLefttextRigtBelow_text-right">
						<h1 className="imgLefttextRigtBelow_text-right_h1">{this.props.title() || ''}</h1>
						<p className="italy">
							{typeof this.props.text.right === 'function' ? this.props.text.right() : ''}
						</p>
					</div>
				</div>
				<div className="imgLefttextRigtBelow_text imgLefttextRigtBelow_text-bottom italy">
					{typeof this.props.text.bottom === 'function' ? this.props.text.bottom() : ''}
				</div>
			</div>
		);
	}
}
