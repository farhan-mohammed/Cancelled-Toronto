import React, { Component } from 'react';
import WebsiteLayout from '../../components/wrapper/mainSite';

import ImgTextRightBelow from '../../components/templates/imgTextRightBelow';
import ImgTextBelow from '../../components/templates/imgTextBelow';
import TwoColumn from '../../components/content/TwoColumn';
import ImgAll from '../../components/templates/ImgAll';
export default class RapidTransit extends Component {
	renderView() {
		return <ImgAll img="/images/RTEP.png" />;
	}
	renderText() {
		function footnotes() {
			return (
				<ol className="footnotes__list">
					<li className="footnotes__item">
						Nicolaas Van Rijn and Royson James. “Rae Okays New Lines for Subway 'Grand Slam'.” Toronto Star,
						February 9, 1993, sec. A1.
					</li>
					<li className="footnotes__item">
						Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.
					</li>
					<li className="footnotes__item">
						James Royson. “Attention, Subway Patrons: The TTC Needs More of You.” Toronto Star, December 4,
						1993, sec. A1; Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.
					</li>
					<li className="footnotes__item">
						Jim Byers. “Huge Transit Expansion Announced for Metro.” Toronto Star, April 5, 1990, sec. A1;
						Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.
					</li>
					<li className="footnotes__item">
						Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.
					</li>
					<li className="footnotes__item">
						David Lewis Stein. “After $45 Million Is That All There Is?” Toronto Star, February 5, 1993,
						sec. A27.
					</li>
					<li className="footnotes__item">
						Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.
					</li>
					<li className="footnotes__item">
						Toronto Transit Commission. “Toronto Rapid Transit Expansion Program.” Tunnelling and
						Underground Space Technology 10, no. 1 (1995): 53–63.
						https://doi.org/10.1016/0886-7798(95)90002-0.
					</li>
					<li className="footnotes__item">
						Toronto Transit Commission. “Toronto Rapid Transit Expansion Program.” 53–63.
					</li>
					<li className="footnotes__item">
						Alan Dunlop. Two proposals: The photo at left shows Yonge St. looking south; intersecting with
						Sheppard Ave. (at cluster of high-rises); where Mel Lastman wants the proposed subway to run.
						Others want the line further north; at Finch Ave.; near the Xerox building (partially out of the
						picture above). That line would parallel the hydro right of way (to the right of where the
						helicopter is circling), 1990, black and white digital, Toronto Star photo archive, Toronto,
						accessed January 7, 2020,
						https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0106979F&R=DC-TSPA_0106979F
					</li>
					<li className="footnotes__item">
						Rijn and James. “Rae Okays New Lines for Subway 'Grand Slam'.” sec. A1.
					</li>
					<li className="footnotes__item">
						David Lewis Stein. “Metro Taxpayers Being Taken for a Ride.” Toronto Star, February 21, 1993,
						sec. B1.
					</li>
					<li className="footnotes__item">Stein. “Metro Taxpayers Being Taken for a Ride.” sec. B1.</li>
					<li className="footnotes__item">
						James Royson. “Deciding Which Train to Take Metro Council Has to Vote on Subway Expansion.
						Everyone has a Favorite.” Toronto Star, March 8, 1994, sec. A15.
					</li>
					<li className="footnotes__item">
						James Royson. “Metro Has Final Say on 2 Lines, NDP Says.” Toronto Star, October 5, 1994, sec.
						A6.
					</li>
					<li className="footnotes__item">
						Gail Swainson. “Transit Lines Halted After Two Days of Debate, Plan Defeated 18-12.” Toronto
						Star, February 24, 1995, sec. A1.
					</li>
					<li className="footnotes__item">
						Bruce Campion-Smith. “How Province Could Take over the TTC But Potential Political Pitfalls in
						Store Should Queen's Park Override Metro.” Toronto Star, February 25, 1995, sec. A2.
					</li>
					<li className="footnotes__item">
						Toronto Transit Commission. “Toronto Rapid Transit Expansion Program.” 53–63.
					</li>
					<li className="footnotes__item">
						Toronto Transit Commission. “Toronto Rapid Transit Expansion Program.” 53–63.
					</li>
					<li className="footnotes__item">
						Bruce Campion-Smith. “Eglinton Subway Project under Way $740 Million Line Will Create Thousands
						of Jobs, Rae Pledges.” Toronto Star, August 26, 1994, sec. A9; James, Royson. “TTC Backs New
						Transit Lines 1925 Million to Lay Groundwork for 1994 Start.” Toronto Star, February 17, 1993,
						sec. A6; James, Royson. “Work Begins on Sheppard Subway Line Metro, Province in Fight over Two
						Other Lines.” Toronto Star, June 23, 1994, sec. A10.
					</li>
					<li className="footnotes__item">
						Bruce Campion-Smith. “Tories Derail Eglinton Subway But $945 Million Sheppard Line Gets
						Go-Ahead.” Toronto Star, July 22, 1995, sec. A4.
					</li>
					<li className="footnotes__item">Campion-Smith. “Tories Derail Eglinton Subway.” sec. A4.</li>
					<li className="footnotes__item">Ibid.</li>
					<li className="footnotes__item">
						Boris Spremo. Canada – Ontario – Toronto – Transit Commission - Subways - Sheppard Subway, 1998,
						colour digital, Toronto Star photo archive, Toronto, accessed January 7, 2020,
						https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0115683F&R=DC-TSPA_0115683F
					</li>
				</ol>
			);
		}
		const breakMark = '';
		const paraOne = () => (
			<span>
				The 1993 Rapid Transit Expansion Program was the culmination of the NDP provincial government’s study of
				the previous Liberal government’s Let’s Move transit plan. The highlights for phase one – a Sheppard
				subway between Yonge Street and Don Mills Road, a subway on Eglinton Avenue West from Eglinton West
				Station in the east to a new “York City Centre” located at Black Creek Drive in the west, and eventually
				to Pearson Airport, an extended Spadina subway reaching York University, and an extension to the
				Scarborough rapid transit line.<sup>1</sup> This first phase of the plan would cost $2.5 billion and
				create 50,000 jobs, with $1.5 billion from the province, $500 million from Metro Toronto, and $500
				million from the private sector.<sup>2</sup> The plan, released at the end of the early 1990s recession,
				was seen as both a jobs creator and a way to rebuild ridership on the TTC subway system, which had
				fallen over 15 per cent between 1988 to 1993.<sup>3</sup>
				At the core of the NDP’s new plan was many of the same projects found in both the Let’s Move and Network
				2011 plans: A Sheppard subway was made a priority in this plan, with provincial funding to match, unlike
				the previous conditional support for the line under the previous Liberal provincial government.
				<sup>4</sup> On Eglinton, plans for a busway were upgraded to a subway, pleasing municipal officials in
				the surrounding area and especially those from the then City of York, where the first phase of the
				future subway line was to terminate in a new central business district dubbed “York City Centre”.
				<sup>5</sup> Meanwhile, plans for a subway loop connecting the Yonge and Spadina subways were retained
				but expanded to include proposed stations at York University and with a more northerly alignment on
				Steeles Avenue rather than through the Finch hydro corridor as originally proposed.<sup>6</sup>{' '}
				Similarly, plans for extensions to the Bloor-Danforth subway and Scarborough rapid transit lines were
				retained, with an extension to Sherway Gardens on the Bloor-Danforth subway proposed as a second phase
				of the plan.<sup>7</sup>
				<div className="italy italybold" style={{ padding: '0.5em' }}>
					The Rapid Transit Expansion Program put a focus on four projects: An Eglinton West subway, a
					Sheppard subway, an extension of the Scarborough rapid transit line, and an extension of the Spadina
					line to York University.
				</div>
			</span>
		);
		const paraTwo = () => (
			<p>
				Investment into these projects by the provincial government, Metro Toronto, and the private sector were
				to be funnelled through a new crown corporation, the Ontario Transportation Corporation, which with a
				budget separate from the province’s revenues enabled the provincial government to proceed with projects
				without directly increasing Ontario’s deficit.<sup>11</sup> Following the recession, the provincial
				government’s deficit at the time – a record $10 billion was worrying for many and a key issue in the
				following 1995 provincial elections.<sup>12</sup> Likewise, municipal officials in Metro Toronto were
				concerned with the cost associated with the four subway projects proposed and their effect on municipal
				finances, which would see cost-cutting on municipal programs to support the 25 per cent municipal
				funding necessary for the projects.<sup>13</sup> Metro Toronto staff had earlier recommended Metro
				Toronto council to approve only the Eglinton West subway and Spadina extension to York University,
				leading to clashes between the province and Toronto municipal officials, with the province threatening
				to cut their share of funding for other municipal projects if only two of the four projects were
				approved.<sup>14</sup>
				<br />
				<br />
				In the end, both the Sheppard and Eglinton West subways were approved while the Spadina and Scarborough
				rapid transit extensions, with little political support, were left in limbo.
				<sup>15</sup> A municipal election during the midst of the debate temporarily paused the discussion but
				both projects were eventually voted against by Metro Toronto council, leading to calls for the province
				to take control of the TTC.<sup>16</sup> Several proposals reportedly investigated by the province
				included transferring ownership, planning, and day-to-day operation of the subways to GO Transit,
				leaving the TTC to run only streetcars and buses, taking over just the remaining two projects and
				funding them through provincial funds only, or taking control of the TTC completely.
				<sup>17</sup>
			</p>
		);
		return (
			<div className="body__text-con">
				<h1 className="body__text-h1 body__text-h11980">Rapid Transit Expansion Program (1993)</h1>
				<h2 className="body__text-h2">Cancelled in 1995, partially built</h2>
				<TwoColumn text={paraOne} />
				<ImgTextBelow
					img="/images/RTEPA.jpg"
					text={() => (
						<span>
							The environmental assessment of the Eglinton West subway identified four new stations and an
							interchange with the existing Spadina line at Eglinton West station, which was planned to be
							renamed Allen Station. The Terminus would be located adjacent to a new central business
							district, dubbed York City Centre. That project died shortly afterwards the Eglinton West
							subway was cancelled in 1995.<sup>8</sup>
						</span>
					)}
				/>
				<ImgTextBelow
					img="/images/RTEPB.jpg"
					text={() => (
						<span>
							The environmental assessment of the Sheppard subway identified four new stations and an
							interchange with the existing Yonge lines at Sheppard Station, which was eventually renamed
							Sheppard-Yonge Station. That project was eventually completed in 2002.<sup>9</sup>
						</span>
					)}
				/>
				<ImgTextRightBelow
					img="/images/RTEPC.jpg"
					title={() => (
						<h1>
							North York Centre<span className="mediumshow">, Left</span>{' '}
						</h1>
					)}
					text={{
						right: () => (
							<p className="italy">
								The Sheppard subway was crucial to the then-city of North York and Metropolitan
								Toronto’s plan to build a downtown centered along Yonge Street. Road capacity in the
								area was already strained, and a subway was necessary to ensure development could
								continue without straining the transportation infrastructure in the area.<sup>10</sup>
							</p>
						),
						bottom: () => (
							<span>
								Rapid transit expansion in the Network 2011 plan was to be phased over a 26-year
								timeframe, beginning with a Sheppard subway between Yonge Street to Victoria Park Avenue
								to be constructed between 1989-1994.<sup>16</sup> Then, a downtown subway between Pape
								Station on the Bloor-Danforth Line in the east to approximately the intersection of
								Spadina Avenue and Front Street in the west would be constructed in the years of
								1994-1999.<sup>17</sup> Then, between 1999-2004, rapid transit on Eglinton Avenue West
								would be constructed, initially as a partially grade-separated busway, with the
								possibility of converting it to a subway later.<sup>18</sup> Finally, between 2004-2010,
								the Sheppard subway would be extended on both ends from Yonge Street to Dufferin Street
								in the west, and from Victoria Park Avenue to Scarborough City Centre in the east.
								<sup>19</sup>
							</span>
						)
					}}
				/>
				<TwoColumn text={paraTwo} />
				<ImgTextBelow
					img={'/images/RTEPD.jpg'}
					text={() => (
						<span>
							The environmental assessment of the Scarborough rapid transit line extension identified four
							new station locations approximately following the route of Highland Creek.<sup>18</sup>{' '}
							Three stops would be initially built at the intersection of Progress Avenue and Markham
							Road, the intersection of Milner Avenue and Progress Avenue, and at approximately the
							intersection of Sheppard Avenue and Markham Road. A station would be built in the future on
							Bellamy Station adjacent to Highland Creek. Metro Toronto council was unsupportive of the
							project.
						</span>
					)}
				/>
				<ImgTextBelow
					src="/images/RTEPE.jpg"
					text={() => (
						<span>
							The environmental assessment of the Spadina subway extension to York University proposed
							three new stations following an entirely new alignment compared to the Let’s Move extension
							plan.
							<sup>19</sup> Stations were proposed at the C.N.R. subdivision at Finch Avenue West, near
							the intersection of Finch Avenue West and Kelle Street, and a station terminating at York
							University. Council was unsupportive of this plan, and it was later cancelled. An extension
							of the Spadina subway with a slightly different alignment was completed in 2017.
						</span>
					)}
				/>

				<div className="column2">
					<div style={{ flex: '1.75' }}>
						<img
							src="/images/RTEPF.jpg"
							style={{ width: '80%', margin: '0 auto', display: 'block' }}
							alt=""
						/>
						<h2>Sheppard Subway Under Construction, Above</h2>
						<div className="italy">
							The Sheppard subway was the only project spared cancellation by the Progressive Conservative
							provincial government, which deferred the other projects. Here, construction on the Sheppard
							subway progresses at the intersection of Sheppard Avenue and Leslie Street in 1998.
							<sup>24</sup>
						</div>
					</div>
					<div className="column2spacer" />
					<div>
						Ultimately, none of the proposals were enacted and by 1994, environmental assessments on the
						Eglinton West, Sheppard, Scarborough RT extension, and Spadina loop projects had been completed,
						with construction starting on the former two projects by late summer of 1994.<sup>20</sup> By
						early 1995, excavation had already progressed for tail tracks on the Eglinton West subway and
						procurement of tunnel boring machines had been underway for the Sheppard subway, then projected
						to begin tunnelling in mid-1996.<sup>21</sup> However, the election of a new Progressive
						Conservative provincial government running under an austerity platform quickly put an end to
						three of the four projects, with the Eglinton West subway deferred after their election in June
						of 1995, funding cut for the Scarborough RT and Spadina extensions, leaving only the Sheppard
						subway left untouched.<sup>22</sup> Construction was halted on the Eglinton West subway and work
						to revert the street was quickly undertaken.<sup>23</sup> The poor financial status of both the
						province and Metro Toronto (later reorganized as the City of Toronto by the provincial
						government) kept the three unbuilt projects deferred for more than a decade before similar plans
						were explored by later provincial and municipal governments.
						<br />
						<br /> The Rapid Transit Expansion Program was a crucial point in transit planning for Toronto
						at its time. Not only did it refine and build upon plans studied for almost a decade, beginning
						with Network 2011, but it also provided the necessary funding for construction. Although never
						fully realized, the basis of the planning undertaken through this plan formed the first major
						extension to the TTC subway system for over two decades, with the Sheppard subway between Yonge
						Street and Don Mills Road opening in 2003. Meanwhile, key elements of the plan including a
						subway on Eglinton Avenue West and extensions to the Spadina line to York University have been
						revisited by later governments, with the Eglinton Crosstown LRT opening in 2021 to have a
						similar routing and station placement as the planned Eglinton West subway, while an extension of
						the Spadina line with stops at York University opening in 2017.
					</div>
				</div>
				<h1 className="body__text-h1">Footnotes</h1>
				{footnotes()}
			</div>
		);
	}
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
