import React, { Component } from 'react';
import Head from 'next/head';
import SideMenu from './SideMenu';

import Header from './Header.js';

const NavList = [
	{
		decade: '1970',
		files: [
			{
				year: '1973',
				name: 'Go Urban',
				// link: '/'
				link: 'go-urban'
			}
		]
	},
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
			// {
			// 	year: '1990',
			// 	name: "Let's Move",
			// 	link: 'lets-move'
			// },
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
					<script src="https://www.w3counter.com/tracker.js?id=130470" />
					<title>Cancelled Toronto</title>
				</Head>
				<Header NavList={NavList} toggleHamburger={this.toggleHamburger} activeHam={this.state.hamburger} />
				<SideMenu NavList={NavList} toggleHamburger={this.toggleHamburger} open={this.state.hamburger} />

				{this.props.children}
				<footer className="ft">
					<div className="ft-ptf">
						<div className="ft-ptf_image">
							<img src="/images/footer/danny.png" />
						</div>
						<div className="ft-ptf_text">
							<div>content researched and written by danny xue</div>
							<div>
								<a href="https://www.linkedin.com/in/danny-xue/">linkedin.com/in/danny-xue</a>
							</div>
							<div>
								<a href="mailto:danny.xue@edu.uwaterloo.ca">danny.xue@edu.uwaterloo.ca</a>
							</div>
						</div>
					</div>
					<div className="ft-ptf">
						<div className="ft-ptf_image">
							<img src="/images/footer/farhan.png" />
						</div>
						<div className="ft-ptf_text">
							<div>site built by farhan mohammed</div>
							<div>
								<a href="https://farhan.site">farhan.site</a>
							</div>
							<div>
								<a href="https://www.linkedin.com/in/farhanmoh/">linkedin.com/in/farhanmoh</a>
							</div>
						</div>
					</div>
					<div className="ft-cp">copyright © 2020 cancelledtoronto.ca. all rights reserved</div>
				</footer>
			</div>
		);
	}
}
