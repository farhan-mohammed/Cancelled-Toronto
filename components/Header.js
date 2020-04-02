import React, { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {
	renderList = () =>
		// Uses the List of pages passed through by WebsiteWrapper to render a bar with sections that have dropdowns for the pages that ly in that section
		this.props.NavList.map(({ decade, files }) => (
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
					{/**The title at the top */}
					<div className="header-top-pic">
						<Link href="/">
							<a>
								<div className="header-pic_narrow">
									<img className="header-pic_narrowpng" src="/images/header/narrow.png" />
								</div>
							</a>
						</Link>
					</div>
					{/** The hamburger menu that only shows up on mobile*/}
					<div className="header-top-ham" onClick={this.props.toggleHamburger}>
						<div className={activeClass}>
							<div className="HamBurgbar1" />
							<div className="HamBurgbar2" />
							<div className="HamBurgbar3" />
						</div>
					</div>
				</div>
				{/** The Header navigation that shows up on longer devices*/}
				<nav className="header-bar">
					<ul className="header-nav">{this.renderList()}</ul>
				</nav>
			</div>
		);
	}
}
