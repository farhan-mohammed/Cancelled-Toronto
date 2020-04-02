import React, { Component } from 'react';
import Link from 'next/link';
/**
 * To do: Create a function that closes all sections when the Link Component is activated or clicked on
 */
export default class SideMenu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const triggeredClass = `sideMenu ${this.props.open ? 'sideMenuOpen' : ''}`;
		const { NavList, toggleHamburger } = this.props;
		return (
			<div className={triggeredClass}>
				<div className="sideMenu-con">
					<div className="sideMenu_row sideMenu_X" onClick={toggleHamburger}>
						<img className="sideMenu_icon" src={`/images/icons/x.png`} />
					</div>
					{NavList.map((item) => (
						<div className="sideMenu_row" key={item.decade}>
							<SideMenuItem toggleHamburger={toggleHamburger} item={item} />
						</div>
					))}
				</div>
			</div>
		);
	}
}

class SideMenuItem extends Component {
	constructor(props) {
		super(props);
		/** Refers to wheter an item in the side menu is closed or open */
		this.state = { clicked: false };
	}
	render() {
		let childClick = this.state.clicked ? {} : { padding: '0', height: '0' };
		const pages = this.props.item.files;
		return (
			<div
				className="SMI_con"
				/**OnClick hides or shows the pages related to this section */
				onClick={() => this.setState({ clicked: !this.state.clicked })}
			>
				<div className="SMI_tcon">
					<div className="SMI_decade">{`${this.props.item.decade}S`}</div>
					<div className="SMI_decade">
						<img
							className="sideMenu_iconarrow"
							/** Renders the up or down array depending on whether this section is currently showing its pages or not */
							src={`/images/icons/${this.state.clicked ? 'up' : 'down'}.png`}
						/>
					</div>
				</div>
				{/**This div holds the pages renders in this section */}
				<div
					className="SMI_scon"
					style={childClick}
					/**Closes the hamburger when a specific page is clicked */
					onClick={this.props.toggleHamburger}
				>
					{pages.map((item) => (
						<Link
							/** The Link Component automatically forwards the React App to the page */
							key={`/${this.props.item.decade}/${item.link}`}
							href={`/${this.props.item.decade}/${item.link}`}
						>
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
