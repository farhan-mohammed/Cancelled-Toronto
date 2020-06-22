import React, { Component } from 'react';
import Head from 'next/head';

import WebsiteLayout from '../../components/WebsiteWrapper';
import ImgAll from '../../components/templates/MainImage';
import WebColumn from '../../components/templates/WebColumn';
import Footnotes from '../../components/Footnotes';

export default class RapidTransit extends Component {
	renderView() {
		return <ImgAll img="/images/Rapid Transit Expansion Program/Rapid Transit Expansion Program Map.png" />;
	}
	footnotes() {
		const footnotes = [
			`Nicolaas Van Rijn and Royson James. “Rae Okays New Lines for Subway 'Grand Slam'.” Toronto Star, February 9, 1993, sec. A1.`,
			`Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.`,
			`James Royson. “Attention, Subway Patrons: The TTC Needs More of You.” Toronto Star, December 4, 1993, sec. A1; Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.`,
			`Alan Dunlop. Two proposals: The photo at left shows Yonge St. looking south; intersecting with Sheppard Ave. (at cluster of high-rises); where Mel Lastman wants the proposed subway to run. Others want the line further north; at Finch Ave.; near the Xerox building (partially out of the picture above). That line would parallel the hydro right of way (to the right of where the helicopter is circling), 1990, black and white digital, Toronto Star photo archive, Toronto, accessed January 7, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0106979F&R=DC-TSPA_0106979F`,
			`Jim Byers. “Huge Transit Expansion Announced for Metro.” Toronto Star, April 5, 1990, sec. A1; Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.`,
			`Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.`,
			`David Lewis Stein. “After $45 Million Is That All There Is?” Toronto Star, February 5, 1993, sec. A27.`,
			`Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.`,
			`Toronto Transit Commission. “Toronto Rapid Transit Expansion Program.” Tunnelling and Underground Space Technology 10, no. 1 (1995): 53–63. https://doi.org/10.1016/0886-7798(95)90002-0.`,
			`Toronto Transit Commission. “Toronto Rapid Transit Expansion Program.” 53–63.`,
			`Toronto Transit Commission. “Toronto Rapid Transit Expansion Program.” 53–63.`,
			`Toronto Transit Commission. “Toronto Rapid Transit Expansion Program.” 53–63.`,
			`Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.`,
			`David Lewis Stein. “Metro Taxpayers Being Taken for a Ride.” Toronto Star, February 21, 1993, sec. B1.`,
			`Stein. “Metro Taxpayers Being Taken for a Ride.” sec. B1.`,
			`James Royson. “Deciding Which Train to Take Metro Council Has to Vote on Subway Expansion. Everyone has a Favorite.” Toronto Star, March 8, 1994, sec. A15.`,
			`James Royson. “Metro Has Final Say on 2 Lines, NDP Says.” Toronto Star, October 5, 1994, sec. A6.`,
			`Gail Swainson. “Transit Lines Halted After Two Days of Debate, Plan Defeated 18-12.” Toronto Star, February 24, 1995, sec. A1.`,
			'Canada. Ontario. Ministry of the Environment. Eglinton West Rapid Transit Environmental Assessment Report. Toronto: Toronto Transit Commission, 1993',
			`Bruce Campion-Smith. “How Province Could Take over the TTC But Potential Political Pitfalls in Store Should Queen's Park Override Metro.” Toronto Star, February 25, 1995, sec. A2.`,
			`Bruce Campion-Smith. “Eglinton Subway Project under Way $740 Million Line Will Create Thousands of Jobs, Rae Pledges.” Toronto Star, August 26, 1994, sec. A9; James, Royson. “TTC Backs New Transit Lines 1925 Million to Lay Groundwork for 1994 Start.” Toronto Star, February 17, 1993, sec. A6; James, Royson. “Work Begins on Sheppard Subway Line Metro, Province in Fight over Two Other Lines.” Toronto Star, June 23, 1994, sec. A10.`,
			`Bruce Campion-Smith. “Tories Derail Eglinton Subway But $945 Million Sheppard Line Gets Go-Ahead.” Toronto Star, July 22, 1995, sec. A4.`,
			`Boris Spremo. Canada – Ontario – Toronto – Transit Commission - Subways - Sheppard Subway, 1998, colour digital, Toronto Star photo archive, Toronto, accessed January 7, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0115683F&R=DC-TSPA_0115683F`,
			`Campion-Smith. “Tories Derail Eglinton Subway.” sec. A4.`,
			`Ibid.`
		];
		return <Footnotes footnotes={footnotes} />;
	}
	renderText = () => {
		return (
			<div className="body__text-con">
				<WebColumn
					left={[
						{ type: 'main-title', title: 'Rapid Transit Expansion Program (1993)' },
						{
							type: 'main-subtitle',
							title: () => (
								<span>
									Cancelled in 1995<span className="mediumhide">, </span>
									<span className="mediumshow">
										<br />
									</span>partially built
								</span>
							)
						}
					]}
					right={[
						{
							type: 'quote',
							text: () => (
								<span>
									The Rapid Transit Expansion Program put a focus on four projects: An Eglinton West
									subway, a Sheppard Subway, an extenstion of the Scarborough Rapid Transit Line, and
									an expansion of the Spadina line to York University
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									The 1993 Rapid Transit Expansion Program was the culmination of the NDP provincial
									government’s study of the previous Liberal government’s Let’s Move transit plan. The
									highlights for phase one – a Sheppard subway between Yonge Street and Don Mills
									Road, a subway on Eglinton Avenue West from Eglinton West Station in the east to a
									new “York City Centre” located at Black Creek Drive in the west, and eventually to
									Pearson Airport, an extended Spadina subway reaching York University, and an
									extension to the Scarborough rapid transit line.<sup>1</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									This first phase of the plan would cost $2.5 billion and create 50,000 jobs, with
									$1.5 billion from the province, $500 million from Metro Toronto, and $500 million
									from the private sector.
									<sup>2</sup> The plan, released at the end of the early 1990s recession, was seen as
									both a jobs creator and a way to rebuild ridership on the TTC subway system, which
									had fallen over 15 per cent between 1988 to 1993.<sup>3</sup>
								</span>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{
							type: 'content-title',
							title: 'North York Centre'
						},
						{
							type: 'quote',
							text: () => (
								<span>
									The Sheppard subway was crucial to the then-city of North York and Metropolitan
									Toronto’s plan to build a downtown centered along Yonge Street. Road capacity in the
									area was already strained, and a subway was necessary to ensure development could
									continue without straining the transportation infrastructure in the area.<sup>4</sup>
								</span>
							)
						},
						{
							type: 'quote',
							text: () => (
								<span>
									(Alan Dunlop / Toronto Star) © Toronto Star, 1990. Reproduced under license.
								</span>
							)
						}
					]}
					right={[
						{
							type: 'img',
							adjust: { hide: false },
							// /images/ already saved
							src: 'Rapid Transit Expansion Program/North York Centre.jpg'
						},
						{
							type: 'para',
							text: () => (
								<div>
									At the core of the NDP’s new plan was many of the same projects found in both the
									Let’s Move and Network 2011 plans: A Sheppard subway was made a priority in this
									plan, with provincial funding to match, unlike the previous conditional support for
									the line under the previous Liberal provincial government.<sup>5</sup> On Eglinton,
									plans for a busway were upgraded to a subway, pleasing municipal officials in the
									surrounding area and especially those from the then City of York, where the first
									phase of the future subway line was to terminate in a new central business district
									dubbed “York City Centre”.<sup>6</sup>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									Meanwhile, plans for a subway loop connecting the Yonge and Spadina subways were
									retained but expanded to include proposed stations at York University and with a
									more northerly alignment on Steeles Avenue rather than through the Finch hydro
									corridor as originally proposed.<sup>7</sup> Similarly, plans for extensions to the
									Bloor-Danforth subway and Scarborough rapid transit lines were retained, with an
									extension to Sherway Gardens on the Bloor-Danforth subway proposed as a second phase
									of the plan.<sup>8</sup>
								</div>
							)
						}
					]}
				/>
				<WebColumn
					oneColumn={true}
					center={[
						{
							type: 'content-title',
							title: 'Eglinton west'
						},
						{
							type: 'img',
							// /images/ already saved
							src: 'Rapid Transit Expansion Program/Eglinton West Alignment.png'
						},
						{
							type: 'quote',
							text: () => (
								<div>
									The environmental assessment of the Eglinton West subway identified four new
									stations and an interchange with the existing Spadina line at Eglinton West station,
									which was planned to be renamed Allen Station. The Terminus would be located
									adjacent to a new central business district, dubbed York City Centre. That project
									died shortly afterwards the Eglinton West subway was cancelled in 1995.<sup>9</sup>
								</div>
							)
						},
						{
							type: 'content-title',
							title: 'Sheppard'
						},
						{
							type: 'img',
							// /images/ already saved
							src: 'Rapid Transit Expansion Program/Sheppard Alignment.png'
						},
						{
							type: 'quote',
							text: () => (
								<div>
									The environmental assessment of the Sheppard subway identified four new stations and
									an interchange with the existing Yonge lines at Sheppard Station, which was
									eventually renamed Sheppard-Yonge Station. That project was eventually completed in
									2002.<sup>10</sup>
								</div>
							)
						},
						{
							type: 'content-title',
							title: 'SCARBOROUGH RAPID TRANSIT EXTENSION'
						},
						{
							type: 'img',
							// /images/ already saved
							src: 'Rapid Transit Expansion Program/Scarborough RT Extension Alignment.png'
						},
						{
							type: 'quote',
							text: () => (
								<div>
									The environmental assessment of the Scarborough rapid transit line extension
									identified four new station locations approximately following the route of Highland
									Creek.<sup>11</sup> Three stops would be initially built at the intersection of
									Progress Avenue and Markham Road, the intersection of Milner Avenue and Progress
									Avenue, and at approximately the intersection of Sheppard Avenue and Markham Road. A
									station would be built in the future on Bellamy Station adjacent to Highland Creek.
									Metro Toronto council was unsupportive of the project.
								</div>
							)
						},
						{
							type: 'content-title',
							title: 'YONGE-SPADINA LOOP'
						},
						{
							type: 'img',
							// /images/ already saved
							src: 'Rapid Transit Expansion Program/Yonge-Spadina Loop Alignment.png'
						},
						{
							type: 'quote',
							text: () => (
								<span>
									The environmental assessment of the Spadina subway extension to York University
									proposed three new stations following an entirely new alignment compared to the
									Let’s Move extension plan.<sup>12</sup> Stations were proposed at the C.N.R.
									subdivision at Finch Avenue West, near the intersection of Finch Avenue West and
									Kelle Street, and a station terminating at York University. Council was unsupportive
									of this plan, and it was later cancelled. An extension of the Spadina subway with a
									slightly different alignment was completed in 2017.
								</span>
							)
						}
					]}
				/>
				<WebColumn
					rightOnly={true}
					right={[
						{
							type: 'para',
							text: () => (
								<div>
									Investment into these projects by the provincial government, Metro Toronto, and the
									private sector were to be funnelled through a new crown corporation, the Ontario
									Transportation Corporation, which with a budget separate from the province’s
									revenues enabled the provincial government to proceed with projects without directly
									increasing Ontario’s deficit.<sup>13</sup>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									Following the recession, the provincial government’s deficit at the time – a record
									$10 billion was worrying for many and a key issue in the following 1995 provincial
									elections.<sup>14</sup> Likewise, municipal officials in Metro Toronto were
									concerned with the cost associated with the four subway projects proposed and their
									effect on municipal finances, which would see cost-cutting on municipal programs to
									support the 25 per cent municipal funding necessary for the projects.<sup>15</sup>{' '}
									Metro Toronto staff had earlier recommended Metro Toronto council to approve only
									the Eglinton West subway and Spadina extension to York University, leading to
									clashes between the province and Toronto municipal officials, with the province
									threatening to cut their share of funding for other municipal projects if only two
									of the four projects were approved.<sup>16</sup>
								</div>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{
							type: 'content-title',
							title: 'Eglinton West Subway Render'
						},
						{
							type: 'quote',
							text: () => (
								<div>
									Phase one of the Eglinton West subway was planned to terminate at York City Centre,
									a large office development planned alongside the subway. In this render produced for
									the Environmental Assessment of the project, a train pulls into York City Centre
									station with a final terminus of Pearson Airport seen on the subway destination
									blind.<sup>17</sup>
								</div>
							)
						}
						//},
						//{
						//type: 'quote',
						//text: () => (
						//<div>(Boris Spremo / Toronto Star) © Toronto Star, 1998. Reproduced under license.</div>
						//)
						//}
					]}
					right={[
						{
							type: 'img',
							adjust: { hide: false},
							src: 'Rapid Transit Expansion Program/York City Centre Render.jpg'
						}
					]}
				/>
				<WebColumn
					rightOnly={true}
					right={[
						{
							type: 'para',
							text: () => (
								<div>
									In the end, both the Sheppard and Eglinton West subways were approved while the
									Spadina and Scarborough rapid transit extensions, with little political support,
									were left in limbo.<sup>18</sup> A municipal election during the midst of the debate
									temporarily paused the discussion but both projects were eventually voted against by
									Metro Toronto council, leading to calls for the province to take control of the TTC.<sup>19</sup>{' '}
									Several proposals reportedly investigated by the province included transferring
									ownership, planning, and day-to-day operation of the subways to GO Transit, leaving
									the TTC to run only streetcars and buses, taking over just the remaining two
									projects and funding them through provincial funds only, or taking control of the
									TTC completely.<sup>20</sup>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									Ultimately, none of the proposals were enacted and by 1994, environmental
									assessments on the Eglinton West, Sheppard, Scarborough RT extension, and Spadina
									loop projects had been completed, with construction starting on the former two
									projects by late summer of 1994.<sup>21</sup> By early 1995, excavation had already
									progressed for tail tracks on the Eglinton West subway and procurement of tunnel
									boring machines had been underway for the Sheppard subway, then projected to begin
									tunnelling in mid-1996.<sup>22</sup>
								</div>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{
							type: 'content-title',
							title: 'Sheppard subway under construction'
						},
						{
							type: 'quote',
							text: () => (
								<div>
									The Sheppard subway was the only project spared cancellation by the Progressive
									Conservative provincial government, which deferred the other projects. Here,
									construction on the Sheppard subway progresses at the intersection of Sheppard
									Avenue and Leslie Street in 1998.<sup>23</sup>
								</div>
							)
						},
						{
							type: 'quote',
							text: () => (
								<div>(Boris Spremo / Toronto Star) © Toronto Star, 1998. Reproduced under license.</div>
							)
						}
					]}
					right={[
						{
							type: 'img',
							adjust: { hide: false, width: '2/3' },
							src: 'Rapid Transit Expansion Program/Sheppard Subway Construction.jpg'
						}
					]}
				/>
				<WebColumn
					left={[]}
					rightOnly={true}
					right={[
						{
							type: 'para',
							text: () => (
								<div>
									However, the election of a new Progressive Conservative provincial government
									running under an austerity platform quickly put an end to three of the four
									projects, with the Eglinton West subway deferred after their election in June of
									1995, funding cut for the Scarborough RT and Spadina extensions, leaving only the
									Sheppard subway left untouched.<sup>24</sup> Construction was halted on the Eglinton
									West subway and work to revert the street was quickly undertaken.<sup>25</sup> The
									poor financial status of both the province and Metro Toronto (later reorganized as
									the City of Toronto by the provincial government) kept the three unbuilt projects
									deferred for more than a decade before similar plans were explored by later
									provincial and municipal governments.
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									The Rapid Transit Expansion Program was a crucial point in transit planning for
									Toronto at its time. Not only did it refine and build upon plans studied for almost
									a decade, beginning with Network 2011, but it also provided the necessary funding
									for construction. Although never fully realized, the basis of the planning
									undertaken through this plan formed the first major extension to the TTC subway
									system for over two decades, with the Sheppard subway between Yonge Street and Don
									Mills Road opening in 2003. Meanwhile, key elements of the plan including a subway
									on Eglinton Avenue West and extensions to the Spadina line to York University have
									been revisited by later governments, with the Eglinton Crosstown LRT opening in 2021
									to have a similar routing and station placement as the planned Eglinton West subway,
									while an extension of the Spadina line with stops at York University opening in
									2017.
								</div>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{
							type: 'content-title',
							title: 'footnotes'
						}
					]}
					right={[
						{
							type: 'para',
							text: this.footnotes
						}
					]}
				/>
			</div>
		);
	};
	render() {
		return (
			<WebsiteLayout>
				<div className="body-con">
					<div>{this.renderView()}</div>
					<div>{this.renderText()}</div>
				</div>
			</WebsiteLayout>
		);
	}
}
