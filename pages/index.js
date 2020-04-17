import React, { Component } from 'react';
import Link from 'next/link';
import WebsiteLayout from '../components/WebsiteWrapper';
const ImageList = [
	{
		// href: '/',
		href: '/2010/relief-line',
		title: 'Relief Line (2016)',
		subtitle: <span>Cancelled, replaced with Ontario Line</span>,
		img: 'Relief Line.png'
	},
	{
		// href: '/',
		href: '/2010/metrolinx-toronto-transit-plan',
		title: 'Metrolinx/Toronto Transit Plan (2011)',
		subtitle: 'Cancelled',
		// subtitle: '',
		img: 'Metrolinx-Toronto Transit Plan.png'
	},
	{
		// href: '/',
		href: '/2000/transit-city',
		title: 'Transit City (2007)',
		subtitle: 'Cancelled, partially under construction',
		img: 'Transit City.png'
	},
	{
		// href: '/',

		href: '/1990/rapid-transit-expansion-program',
		title: 'Rapid Transit Expansion Program (1993)',
		subtitle: 'Cancelled, partially built',
		// subtitle: '',
		img: 'Rapid Transit Expansion Program.png'
	},
	// {
	// 	// href: '/',
	// 	href: '/1990/lets-move',
	// 	title: "Let's Move (1990)",
	// 	subtitle: 'Cancelled, replaced with Rapid Transit Expansion Program',
	// 	img: '/images/Let's-Move.png'
	// },
	{
		// href: '/',
		href: '/1980/network-2011',
		title: 'Network 2011 (1985)',
		subtitle: "Cancelled, replaced with Let's Move",
		img: 'Network 2011.png'
	},
	{
		// href: '/',
		href: '/1970/go-urban',
		title: 'Go-Urban (1973)',
		subtitle: 'Cancelled, evolved into go-alrt',
		img: 'GO-Urban.png'
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
								<img
									className="homepage-item__img"
									src={`images/homepage/${item.img}`}
									alt={item.title}
								/>
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
