import React, { Component } from 'react';
import Link from 'next/link';
const NavList = [
	{ decade: '1980', files: [ { name: 'Network 2011', link: 'network-2011' } ] },
	{
		decade: '1990',
		files: [
			{ name: "Let's Move", link: 'lets-move' },
			{ name: 'Rapit Transit Expansion Program', link: 'rapid-transit-expansion-program' }
		]
	},
	{ decade: '2000', files: [ { name: 'Transit City', link: 'transit-city' } ] },
	{
		decade: '2010',
		files: [
			{ name: 'Metrolinx/Toronto Transit Plan', link: 'metrolinx-toronto-transit-plan' },
			{ name: 'Relief Line', link: 'relief-line' }
		]
	}
];
export default class Header extends Component {
	renderList = () =>
		NavList.map(({ decade, files }) => (
			<li className="header-nav_li  hnv-li" key={decade}>
				<span>{decade}</span>
				<ul className=" hnv-li-ul">
					{files.map(({ name, link }) => (
						<Link href={`/${decade}/${link}`} key={link}>
							<a>
								<li className="hnv-li hnv-li-ul-li">{name}</li>
							</a>
						</Link>
					))}
					<li>item 2</li>
					<li>item 3</li>
				</ul>
			</li>
		));
	render() {
		return (
			<div className="header">
				<Link href="/">
					<a>
						<div className="header-title">Cancelled Toronto:</div>
						<div className="header-subtitle">Transit Projects</div>
					</a>
				</Link>
				<nav className="header-bar">
					<div className="header-bar-start">Cancelled Projects of the:</div>
					<ul className="header-nav">
						{/* <li className="header-nav_li hvr-underline-from-center">
							<Link href="/Pre1950s">
								<a>1950s</a>
							</Link>
						</li>
						<li className="header-nav_li">
							<Link href="/1960s">
								<a>1960s</a>
							</Link>
						</li>
						<li className="header-nav_li">
							<Link href="/1970s">
								<a>1970s</a>
							</Link>
						</li> */}
						{this.renderList()}
					</ul>
					{/* <div className="header-bar-end">
						<Link href="/">
							<a>About the Site</a>
						</Link>
					</div> */}
				</nav>
			</div>
		);
	}
}
