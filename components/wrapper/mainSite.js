import React, { Component } from 'react';
import Head from 'next/head';
import SideMenu from '../SideMenu';
import Header from '../Header.js';
export default class mainSite extends Component {
	constructor(props) {
		super(props);
		this.state = { hamburger: false };
	}
	toggleHamburger = () => {
		this.setState({ hamburger: !this.state.hamburger });
	};
	render() {
		let containerWrapper = `container outer-container ${this.state.hamburger ? 'outer-containerOpen' : ''}`;
		return (
			<div className={containerWrapper}>
				<Head>
					<link rel="icon" type="image/png" href="/images/thumb.png" />
					<link href="/styles.css" rel="stylesheet" />
					<title>Cancelled Toronto</title>
				</Head>
				<Header toggleHamburger={this.toggleHamburger} activeHam={this.state.hamburger} />
				<SideMenu toggleHamburger={this.toggleHamburger} open={this.state.hamburger} />

				{this.props.children}
			</div>
		);
	}
}
