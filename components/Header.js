import React, { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header-title">Cancelled Toronto:</div>
				<div className="header-subtitle">Transit Projects</div>
				<nav className="header-bar">
					<div className="header-bar-start">Cancelled Projects of the:</div>
					<ul className="header-nav">
						<li className="header-nav_li hvr-underline-from-center">
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
						</li>
						<li className="header-nav_li">
							<Link href="/1980s">
								<a>1980s</a>
							</Link>
						</li>
						<li className="header-nav_li">
							<Link href="/1990s">
								<a>1990s</a>
							</Link>
						</li>
						<li className="header-nav_li">
							<Link href="/2000s">
								<a>2000s</a>
							</Link>
						</li>
						<li className="header-nav_li">
							<Link href="/2010s">
								<a>2010s</a>
							</Link>
						</li>
					</ul>
					<div className="header-bar-end">
						<Link href="/">
							<a>About the Site</a>
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}
