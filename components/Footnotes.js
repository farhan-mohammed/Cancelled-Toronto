import React, { Component } from 'react';
export default class Footnotes extends Component {
	render() {
		const footnotes = this.props.footnotes || [];
		return (
			/**Renders a list of footnotes based on the list passed through */
			<ol className="footnotes__list">
				{footnotes.map((text, i) => (
					<li key={i} className="footnotes__item">
						{text}
					</li>
				))}
			</ol>
		);
	}
}
