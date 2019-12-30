import React, { Component } from 'react';

export default class Delete extends Component {
	render() {
		return (
			<div class="container">
				<div class="header">
					<div class="header-title">Cancelled Toronto:</div>
					<div class="header-subtitle">Transit Projects</div>
					<ul class="header-nav">
						<li class="header-nav_li">Cancelled Projects of the:</li>
						<li class="header-nav_li">Pre 1950s</li>
						<li class="header-nav_li">1960s</li>
						<li class="header-nav_li">1970s</li>
						<li class="header-nav_li">1980s</li>
						<li class="header-nav_li">1990s</li>
						<li class="header-nav_li">2000s</li>
						<li class="header-nav_li">2010s</li>
						<li class="header-nav_li">About the Site</li>
					</ul>
				</div>
				<div class="body">
					<div class="body-content">
						<img src="./Certificate.png" alt="" />
					</div>
					<div class="body-title">
						A Subway on Christie St.
						<span class="body-title__sub">(Briefly Considered, 1960)</span>
					</div>
				</div>
			</div>
		);
	}
}
