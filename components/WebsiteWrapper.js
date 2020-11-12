import React, { Component } from 'react';
import Head from 'next/head';
import SideMenu from './SideMenu';
import Header from './Header.js';
// NavList contains the list of pages and their repesective propers to be displayed on the header and the side menu
const NavList = [
	{
		decade: '1970',
		files: [
			{
				year: '1973',
				name: 'Go-Urban',
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
		this.state = {
			/** Store the state of whether the sidemenu is open or close */
			hamburger: false
		};
	}
	// Function toggles the Sidemenu whenever called, causing the sidemenu to change from an open -> close or close -> open state
	toggleHamburger = () => {
		this.setState({ hamburger: !this.state.hamburger });
	};
	renderFooter = (
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
						<a href="mailto:danny.xue@uwaterloo.ca">danny.xue@uwaterloo.ca</a>
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
			<div className="ft-cp">Copyright © 2020 cancelledtoronto.ca. all rights reserved</div>
		</footer>
	);

	render() {
		let containerWrapper = `container outer-container ${this.state.hamburger ? 'outer-containerOpen' : ''}`;
		return (
			<div className={containerWrapper}>
				{/** There are meta properties that are stored in the Head of the page */}
				<Head>
					<meta property="og:title" content="Cancelled Toronto" />
					<meta property="og:image" content="/images/back.png" />
					<link rel="icon" type="image/png" href="/images/thumb.png" />
					<link href="/styles.css" rel="stylesheet" />
					<script src="https://www.w3counter.com/tracker.js?id=130470" />
					<title>Cancelled Toronto</title>
				</Head>
				<Header
					NavList={NavList}
					/**Passing the power to close and open the Sidemenu */
					toggleHamburger={this.toggleHamburger}
					/** Passing the current state of the sidemenu as well to ensure that the states are consistent througout components */
					activeHam={this.state.hamburger}
				/>
				<SideMenu
					NavList={NavList}
					/**Passing the power to close and open the Sidemenu */
					toggleHamburger={this.toggleHamburger}
					/** Passing the current state of the sidemenu as well to ensure that the states are consistent througout components */
					open={this.state.hamburger}
				/>

				{
					/** The content for the rest of the site i.e the core of the website goes here*/
					this.props.children
				}
				{
					/**    Renders the footer with contact and copyright information about the website*/
					this.renderFooter
				}
			</div>
		);
	}
}
