import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
	render() {
		return (
			<div class="header">
				<div class="header-title">Cancelled Toronto:</div>
				<div class="header-subtitle">Transit Projects</div>
				<nav class="header-bar">
					<div class="header-bar-start">Cancelled Projects of the:</div>
					<ul className="header-nav">
						<li class="header-nav_li hvr-underline-from-center">
							<Link to="/Pre1950s">Pre 1950s</Link>
						</li>
						<li class="header-nav_li">
							<Link to="/1960s">1960s</Link>
						</li>
						<li class="header-nav_li">
							<Link to="/1970s">1970s</Link>
						</li>
						<li class="header-nav_li">
							<Link to="/1980s">1980s</Link>
						</li>
						<li class="header-nav_li">
							<Link to="/1990s">1990s</Link>
						</li>
						<li class="header-nav_li">
							<Link to="/2000s">2000s</Link>
						</li>
						<li class="header-nav_li">
							<Link to="/2010s">2010s</Link>
						</li>
					</ul>
					<div class="header-bar-end">
						<Link to="/">About the Site</Link>
					</div>
				</nav>
			</div>
		);
	}
}
