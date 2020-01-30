import React, { Component } from 'react';
import Head from 'next/head';
import SideMenu from '../SideMenu';

import Header from '../Header.js';

const NavList = [
	{
		decade: '1980',
		files: [
			{
				year: '1985',
				name: 'Network 2011',
				// link: '/'
				link: 'network-2011'
			}
		]
	},
	{
		decade: '1990',
		files: [
			{
				year: '1990',
				name: "Let's Move",
				link: 'lets-move'
			},
			{
				year: '1993',
				name: 'Rapid Transit Expansion Program',
				// link: '/'
				link: 'rapid-transit-expansion-program'
			}
		]
	},
	{
		decade: '2000',
		files: [
			{
				year: '2007',
				name: 'Transit City',
				// link: '/'
				link: 'transit-city'
			}
		]
	},
	{
		decade: '2010',
		files: [
			{
				year: '2011',
				name: 'Metrolinx / Toronto Transit Plan',
				// link: '/'

				link: 'metrolinx-toronto-transit-plan'
			},
			{
				year: '2016',
				name: 'Relief Line',
				// link: '/'
				link: 'relief-line'
			}
		]
	}
];
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
				<Header NavList={NavList} toggleHamburger={this.toggleHamburger} activeHam={this.state.hamburger} />
				<SideMenu NavList={NavList} toggleHamburger={this.toggleHamburger} open={this.state.hamburger} />

				{this.props.children}
			</div>
		);
	}
}
