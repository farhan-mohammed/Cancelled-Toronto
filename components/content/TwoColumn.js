import React from 'react';
class TwoColumn extends React.Component {
	render() {
		return <div className="body__text-p column2easy">{this.props.text()}</div>;
	}
}
export default TwoColumn;
