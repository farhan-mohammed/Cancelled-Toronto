import React, { Component } from 'react';

export default class SideMenu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const triggeredClass = `sideMenu ${this.props.open ? 'sideMenuOpen' : ''}`;
		return (
			<div className={triggeredClass}>
				<div className="sideMenu-con">
					<div className="sideMenu-con_close" onClick={this.props.toggleHamburger}>
						close
					</div>
				</div>
			</div>
		);
	}
}
