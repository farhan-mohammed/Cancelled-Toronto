import React, { Component } from 'react';
import '../components/wrapper/mainSite';
import Link from 'next/link';
import WebsiteLayout from '../components/wrapper/mainSite';
const ImageList = [
	{
		href: '/',
		// href: '/2010/relief-line',
		title: 'Relief Line (2016)',
		subtitle: 'Cancelled, replaced with Ontario Line',
		img: '/images/Image1.png'
	},
	{
		href: '/',
		// href: '/2010/metrolinx-toronto-transit-plan',
		title: 'Metrolinx/Toronto Transit Plan (2011)',
		subtitle: 'Cancelled',
		img: '/images/Image2.png'
	},
	{
		href: '/',
		// href: '/2000/transit-city',
		title: 'Transit City (2017)',
		subtitle: 'Cancelled, partially under construction',
		img: '/images/Image3.png'
	},
	{
		href: '/',

		// href: '/1990/rapid-transit-expansion-program',
		title: 'Rapid Transit Expansion Program (1993)',
		subtitle: 'Cancelled, partially built',
		img: '/images/Image4.png'
	},
	{
		href: '/',
		// href: '/1990/lets-move',
		title: "Let's Move (1990)",
		subtitle: 'Cancelled, replaced with RTEP',
		img: '/images/Image5.png'
	},
	{
		href: '/',
		// href: '/1980/network-2011',
		title: 'Network 2011 (1985)',
		subtitle: "Cancelled, replaced with Let's Move",
		img: '/images/Image6.png'
	}
];
export default class App extends Component {
	renderList = () => {
		return ImageList.map((item) => {
			return (
				<div key={item.href} className="homepage-item">
					<Link href={item.href}>
						<a className="homepage-item-con">
							<div className="homepage-item__img-con">
								<img className="homepage-item__img" src={item.img} alt="" />
							</div>
							<div className="homepage-item__text">
								<div className="homepage-item__text-title">{item.title}</div>
								<div className="homepage-item__text-subtitle">{item.subtitle}</div>
							</div>
						</a>
					</Link>
				</div>
			);
		});
	};
	render() {
		return (
			<WebsiteLayout>
				<div className="homepage-list">{this.renderList()}</div>
			</WebsiteLayout>
		);
	}
}
