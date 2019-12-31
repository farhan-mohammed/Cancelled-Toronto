import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
	render() {
		return (
			<div class="header">
				<div class="header-title">Cancelled Toronto:</div>
				<div class="header-subtitle">Transit Projects</div>
				<ul class="header-nav">
					<li class="header-nav_li">Cancelled Projects of the:</li>
					<li class="header-nav_li">
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
					<li class="header-nav_li">
						<Link to="/">About the Site</Link>
					</li>
				</ul>
			</div>
		);
	}
}
