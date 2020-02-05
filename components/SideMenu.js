import React, { Component } from 'react';
import Link from 'next/link';
class SideMenuItem extends Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false };
	}
	render() {
		let childClick = {};
		if (!this.state.clicked) {
			childClick = { padding: '0', height: '0' };
		}
		return (
			<div className="SMI_con" onClick={() => this.setState({ clicked: !this.state.clicked })}>
				<div className="SMI_tcon">
					<div className="SMI_decade">{`${this.props.item.decade}S`}</div>
					<div className="SMI_decade">
						<img
							className="sideMenu_iconarrow"
							s
							src={`/images/icons/${this.state.clicked ? 'up' : 'down'}.png`}
						/>
					</div>
				</div>
				<div className="SMI_scon" style={childClick} onClick={this.props.toggleHamburger}>
					{this.props.item.files.map(item => (
						<Link href={`/${this.props.item.decade}/${item.link}`}>
							<a>
								<div className="SMI_scon-list">
									<div className="SMI_scon-list-year">{item.year}</div>
									<div className="SMI_scon-list-name">{item.name}</div>
								</div>
							</a>
						</Link>
					))}
				</div>
			</div>
		);
	}
}
export default class SideMenu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const triggeredClass = `sideMenu ${this.props.open ? 'sideMenuOpen' : ''}`;
		return (
			<div className={triggeredClass}>
				<div className="sideMenu-con">
					<div className="sideMenu_row sideMenu_X" onClick={this.props.toggleHamburger}>
						<img className="sideMenu_icon" src={`/images/icons/x.png`} />
					</div>
					{this.props.NavList.map(item => (
						<div className="sideMenu_row">
							<SideMenuItem toggleHamburger={this.props.toggleHamburger} item={item} />
						</div>
					))}
				</div>
			</div>
		);
	}
}
