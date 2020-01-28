import React, { Component } from 'react';
import Link from 'next/link';
const NavList = [
	{
		decade: '1980',
		files: [
			{
				name: 'Network 2011',
				// link: '/'
				link: 'network-2011'
			}
		]
	},
	{
		decade: '1990',
		files: [
			{ name: "Let's Move", link: 'lets-move' },
			{
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
				name: 'Metrolinx/Toronto Transit Plan',
				// link: '/'

				link: 'metrolinx-toronto-transit-plan'
			},
			{
				name: 'Relief Line',
				// link: '/'
				link: 'relief-line'
			}
		]
	}
];
export default class Header extends Component {
	renderList = () =>
		NavList.map(({ decade, files }) => (
			<li className="header-nav_li  hnv-li" key={decade}>
				<span>{`${decade}s`}</span>
				<ul className=" hnv-li-ul">
					{files.map(({ name, link }) => (
						<Link href={`/${decade}/${link}`} key={link}>
							<a>
								<li className="hnv-li hnv-li-ul-li">{name}</li>
							</a>
						</Link>
					))}
				</ul>
			</li>
		));
	render() {
		const activeClass = `HamBurg ${this.props.activeHam ? 'change' : ''}`;
		return (
			<div className="header">
				<div className="header-top">
					<div className="header-top-pic">
						<Link href="/">
							<a>
								{/* <div className="header-pic_wide">
									<img className="header-pic_widepng" src="/images/header/wide.png" />
								</div> */}
								<div className="header-pic_narrow">
									<img className="header-pic_narrowpng" src="/images/header/narrow.png" />
								</div>
							</a>
						</Link>
					</div>
					<div className="header-top-ham" onClick={this.props.toggleHamburger}>
						<div className={activeClass}>
							<div className="HamBurgbar1" />
							<div className="HamBurgbar2" />
							<div className="HamBurgbar3" />
						</div>
					</div>
				</div>
				<nav className="header-bar">
					{/* <div className="header-bar-start">
						Cancelled Plans<div className="header-bar-starttxt"> of the</div>:
					</div> */}
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
