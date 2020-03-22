import React, { Component } from 'react';
import WebsiteLayout from '../../components/wrapper/mainSite';

import ImgTextRightBelow from '../../components/templates/imgTextRightBelow';
import ImgTextBelow from '../../components/templates/imgTextBelow';
import TwoColumn from '../../components/content/TwoColumn';
import ImgAll from '../../components/templates/ImgAll';
import WebColumn from '../../components/templates/WebColumn';
export default class TransitCity extends Component {
	renderView() {
		return <ImgAll img="/images/transitcity/TC1.png" />;
	}
	renderFootnotes = () => {
		const footnotes = [
			`“Transit City Report.” Transit City Report. Toronto Transit Commission, March 12, 2007. https://web.archive.org/web/20070708160209/http://www.transitcity.ca/index.php?option=com_content&task=view&id=14&Itemid=28&limit=1&limitstart=4.`,
			`“Transit City Report.”`,
			`BillyCabic. TTC 4071, 4022. 2018, colour digital, Flickr, Toronto, accessed March 17th, 2020, https://www.flickr.com/photos/ttc125drewry/41285764171/. Creative Commons License (CC BY-NC 2.0), https://creativecommons.org/licenses/by-nc/2.0/`,
			`“Transit City Report.”.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Ibid.`,
			`Wyliepoon. Eglinton LRT Maintenance & Storage Facility. 2019, colour digital, Flickr, Toronto, accessed March 17th, 2020, https://www.flickr.com/photos/wyliepoon/47940095168/in/photolist-2g3iw5Y-2g3ix4b-2g3itzN-cs9kDj-cs9krm-cs9nDf-cs9mby-2g3iunp-cs9nfq-2g3iBK8-cs9mGq-2g3iqpZ-2g3ipcJ-2g3ip2o-2g3iys1-2g3itRE-2g3itMS-2giTTSs-2giUkk5-2giUk3M-2giUp61-2giU4Zg-2giTXV7-2giTUv4-2giUked-2giU5xR-2giU1PZ-2giU1vY-2giUpg1-2giTUPA-2giUjY8-2giUdEg-2g3iohT-2g3iqc4-cs9kML-cs9nth-cs9n3Y-cs9mjC-2g3iski-cs9mRw-2g3ixkP-cs9kZf-2giTUEs-2giTY2u-2giUjV2-2giUjNZ-2giTRep-2giU1ZP-2giU1WN-2giTREu. Creative Commons License (CC BY-NC-ND 2.0), https://creativecommons.org/licenses/by-nc-nd/2.0/`,
			`Kevin, McGran. “TTC Outlines Plans for Dedicated Bus Lanes; Cheaper to Build than Subways Miller Says Ideas Are Achievable. Plan Puts Buses in Dedicated Lanes.” Toronto Star, January 13, 2005, sec. B01.`,
			`McGran. “TTC Outlines.” sec. B01.`,
			`Vincent, Donovan. “Miller Reveals Transit Plan; Favours Streetcars over Underground No Time to Wait for Subways, He Says.” Toronto Star, October 26, 2006, sec. R11.`,
			`Jeff, Gray. “New Subway about Moving 905 Voters.” The Globe and Mail. March 26, 2007, sec. A13.`,
			`James, Royson. “Cash-Poor Toronto in Transit Limbo.” Toronto Star, January 14, 2005, sec. B03.`,
			`Wyliepoon. Eglinton LRT Maintenance & Storage Facility. 2019, colour digital, Flickr, Toronto, accessed March 17th, 2020, https://www.flickr.com/photos/wyliepoon/47940094626/in/photolist-2g3ivVC-2g3ion8-2g3ixBd-2g3izjr-2g3iptW-2g3ixU2-2g3iz9g-2g3iwFn-2g3iABw-2g3iBWa-2g3iBS2-2g3irP2-2g3iqc4-2g3ivyh-2g3ikUr-2g3iv73-2g3iuVS-2g3iu5Z-2g3ip2o-2g3iys1-2g3itMS-WmCVat-bBpWo9-bBpWvW-2g3ioWE-2g3io6w-2g3isf6-2g3irPb-2g3ihcb-2g3ivpu-2g3iohT-2g3itrX-2g3itfz-2g3ipCP-2g3ipzs-2g3izfy-2g3ixuQ-gAuGae-bntiec-ee8j7p-eee3cS-ee8jRn-ee8pxc-eeebmu-ee8st8-eeeaFE-eee45E-ee8qWg-28iNyqZ-ee8oVH. Creative Commons License (CC BY-NC-ND 2.0), https://creativecommons.org/licenses/by-nc-nd/2.0/`,
			`Tess, Kalinowski. “A $17.5B Transit Promise; Premier's Pre-Election Pledge Will Create Jobs, Ease Congestion, Reduce Greenhouse Emissions.” Toronto Star, June 16, 2007, sec. A6.`,
			`Tess, Kalinowski. “Transit Plans Run on Separate Tracks; Regional Draft Offers Alternative to TTC's Light Rail Network.” Toronto Star, September 4, 2008, sec. A1.`,
			`Tess, Kalinowski. “Transit City Full Speed Ahead; Planners Refine Details as First of 7 Proposed Light Rail Lines to Break Ground This Fall.” Toronto Star, March 4, 2009, sec. GT5.`,
			`Kalinowski. “Transit City Full Speed Ahead” sec. GT5.`,
			`Tess, Kalinowski. “$950M For New Light Rail Line; Province and Ottawa Will Fund Sheppard East LRT but Haven't Agreed to Replace Aging Streetcar Fleet.” Toronto Star, May 16, 2009, sec. GT3; Tess, Kalinowski. “Transit Gets $9B Jump-Start; Miller Says Provincial Cash for Light Rail Lines Will Create Jobs, Reduce Pollution and Gridlock.” Toronto Star, April 2, 2009, sec. A1.`,
			`The West End. TTC Line 4 Don Mills Station. 2016, colour digital, Flickr, Toronto, accessed March 17th, 2020, https://www.flickr.com/photos/thewestend/31358221460/. Creative Commons License (CC BY-NC-ND 2.0), https://creativecommons.org/licenses/by-nc-nd/2.0/`,
			`John, Goddard, Rider David, and Kalinowski Tess. “GTA Transit Takes $4 Billion Whack Rapid Transit, Viva Projects under Threat Move to Delay Projects 'beyond Short-Sighted,' Furious Miller Says.” Toronto Star, March 26, 2010, sec. A1.`,
			`Tess, Kalinowski. “Trimmed-down Plan on Track for Approval: Next Stop Metrolinx despite Objection to Longer Timelines.” Toronto Star, May 18, 2010, sec. GT2; Paul, Moloney. “Construction Begins on Sheppard LRT.” Toronto Star, December 22, 2009, sec. GT4.`,
			`Tess, Kalinowski, and Rider David. “'War on the Car Is over': Ford Scraps Transit City: Move Could Leave Toronto on Hook for Millions in Penalties, Wasted Work.” Toronto Star, December 2, 2010, sec. A1.`,
			`Kalinowski. “Trimmed-down Plan on Track for Approval.” sec. GT2.`,
			`Kalinowski and Rider. “'War on the Car Is over'.” sec. A1.`,
			`Tess, Kalinowski, and Benzies Rob. “Some Fear Worst for Transit City: Ford's Team Scheduled to Meet with Senior TTC Staff Wednesday.” Toronto Star, December 1, 2010, sec. GT2.`,
			`Kalinowski and Rider. “'War on the Car Is over'.” sec. A1.`,
			`Natalie, Alcoba. “Metrolinx Gives Rob Ford's Transit Plan a Lift.” National Post. February 6, 2012. https://nationalpost.com/posted-toronto/metrolinx-gives-rob-fords-transit-plan-a-lift.`,
			`Ben, Spurr. “Federal Funding Shuffle Casts Doubt on Sheppard LRT.” Toronto Star. June 23, 2017. https://www.thestar.com/news/city_hall/2017/06/23/federal-funding-for-finch-lrt-casts-doubt-on-sheppard-project.html.`,
			`Mary Crandall. working at the western end. 2019, colour digital, Flickr, Toronto, accessed March 17th, 2020, https://www.flickr.com/photos/57340921@N03/47486040332/in/photolist-2fmbnpj-gAuaQA-gAv6bn-2g3ixbF-2g3ivuu-2g3it5n-2g3irmK-2g3irKd-2g3ih5T-2g3ihHG-2g3ii5t-2g3io5y-2g3imr4-2g3inXE-2g3inah-2g3iu2T-2g3ij7U-ebTUWE-2g3ijrB-2g3iunp-2g3itRE-2g3is6D-2g3ivVC-2g3ion8-2g3ipcJ-2g3ixBd-2g3izjr-2g3iptW-2g3ixU2-2g3iz9g-2g3iwFn-2g3iABw-2g3iBK8-2g3iBWa-2g3iBS2-2g3irP2-2g3iqpZ-2g3iqc4-2g3ivyh-2g3ikUr-2g3iv73-2g3iuVS-2g3iu5Z-2g3ioWE-2g3io6w-2g3isf6-2g3irPb-2g3ihcb-2g3ivpu-2g3ip2o/. Creative Commons License (CC BY-NC-ND 2.0), https://creativecommons.org/licenses/by-nc-nd/2.0/`
		];
		return (
			<ol className="footnotes__list">{footnotes.map((text) => <li className="footnotes__item">{text}</li>)}</ol>
		);
	};
	renderText = () => {
		return (
			<div className="body__text-con">
				<WebColumn
					left={[
						{ type: 'main-title', title: 'Transit city (2011)' },
						{
							type: 'main-subtitle',
							title: 'Cancelled'
						},
						{
							type: 'main-subtitle',
							title: 'Partially under construction'
						}
					]}
					right={[
						{
							type: 'quote',
							text: () => (
								<span>
									The largest rapid transit plan by kilometres ever proposed for Toronto, Transit
									City’s vast network of light rail transit lines running across the city was the
									culmination of a shift towards focusing on intermediate capacity transit systems
									(ICTS) for transit expansion. Previous attempts utilised then-experimental linear
									induction motor technology, resulting in the Scarborough rapid transit line, which
									was ultimately plagued with issues. Light rail vehicles running in their own
									right-of-ways as proposed by the Transit City plan harkens back to plans for ICTS
									lines utilising coupled streetcars proposed by the TTC in the early 1970s and 80s.
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									Transit City was an ambitious transit expansion plan jointly announced by the City
									of Toronto and the TTC in March 2007 that called for the construction of a network
									of light rail transit (LRT) lines across the city.<sup>1</sup> A total of over 120
									kilometres of new rapid transit was proposed on seven corridors, six following
									arterial roads and a line following the waterfront. Additionally, an upgrade and
									extension of the Scarborough rapid transit line to Malvern using newer intermediate
									capacity transit system technology was included in this plan, with plans eventually
									changing to a refurbishment of the line to utilise the same light rail technology
									proposed to be utilised on the other Transit City lines. In total, the plan would
									cost just over $6 billion, none of which was funded at the time of the announcement,
									with an estimated completion date of 2021.<sup>2</sup>
								</span>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{
							type: 'content-title',
							title: 'Streetcar Right-of-way'
						},
						{
							type: 'quote',
							text: () => (
								<span>
									Transit City light rail lines would utilise dedicated right-of-ways to avoid being
									impeded by vehicular traffic.<sup>3</sup> Similar dedicated right-of-ways had been
									previously implemented on streetcar routes such as the 512 St.Clair, pictured here,
									510 Spadina, and the 509 Harbourfront streetcar.
								</span>
							)
						},
						{
							type: 'quote',
							text: () => <span>“TTC 4071, 4022” by BillyCabic is licensed under CC BY-NC 2.0</span>
						}
					]}
					right={[
						{
							type: 'img',
							src: 'transitcity/TC2.jpg'
						},
						{
							type: 'para',
							text: () => (
								<div>
									<li>
										On Don Mills Road, an 18-kilometre line would stretch from Steeles Avenue in the
										north to the Bloor-Danforth subway in the south and run entirely on a surface
										dedicated right-of-way.<sup>4</sup>
									</li>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									<li>
										On Eglinton Avenue, a 31-kilometre line would run from a new Renforth transitway
										station to be constructed as part of the Mississauga Transitway in the west to
										Kennedy Station on the Bloor-Danforth line in the east, with a short spur-line
										providing service to Pearson Airport.<sup>5</sup> The line would provide a vital
										east-west connection through the centre of the City of Toronto and would run on
										a surface right-of-way between Renforth transitway station to Keele Street, then
										underground to Laird Drive, where it would resume running on the surface in a
										dedicated right-of-way until it reached Kennedy Station.<sup>6</sup>
									</li>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									<li>
										On Finch Avenue West, an 18-kilometre line would run from the area near the
										intersection of Finch Avenue West and Highway 27 in the west to Finch Station on
										the Yonge-University line in a dedicated surface right-of-way.<sup>7</sup>{' '}
										Extensions further west towards Mississauga and south towards Woodbine Racetrack
										and Pearson Airport were also proposed for future extensions.<sup>8</sup>
									</li>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									<li>
										On Jane Street, a 17-kilometre line would begin at Jane Station on the
										Bloor-Danforth line in the south and end at Steeles West Station on the
										then-proposed Toronto-York Spadina Subway Extension in the north, with a spur
										eastward from the intersection of St. Clair Avenue and Jane Street towards Gunn
										Loop, the western terminus of the 512 St. Clair streetcar line.<sup>9</sup>{' '}
										Originally proposed to run entirely on the surface in a dedicated right-of-way,
										mixed-surface and underground routings were considered during its planning.<sup>10</sup>
									</li>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									<li>
										In Scarborough, a 15-kilometre line would start at Kennedy Station on the
										Bloor-Danforth line and run east along Eglinton Avenue, north-east on Kingston
										Road, and north on Morningside Avenue to service the University of Toronto
										Scarborough Campus and eventually terminate in the Malvern neighbourhood.<sup>11</sup>{' '}
										The line would run in a dedicated surface right-of-way and run on the same
										tracks of the proposed Sheppard East LRT line for a short section in the
										northern part of the line approaching Malvern.<sup>12</sup>
									</li>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									<li>
										On Sheppard East, a 14-kilometre line would run east from Don Mills Station on
										the Sheppard Line to the Malvern neighbourhood in the west.<sup>13</sup> The
										line would connect with a proposed extension and refurbishment of the
										Scarborough rapid transit line to create a new transit terminal serving
										north-east Scarborough, providing a vital hub for transit riders in the area.<sup>14</sup>{' '}
										The line would run almost entirely on a dedicated surface right-of-way except
										for a brief decent underground to connect with the Sheppard subway at Don Mills
										station, where a platform-level connection with the subway was planned.
										Extensions eastward towards Durham Region were proposed for future
										consideration.<sup>15</sup>
									</li>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									<li>
										Along the waterfront, an 11-kilometre line connecting southern Etobicoke in the
										west to Exhibition Place in the east, extending current streetcar services along
										the waterfront between Exhibition Place and Union Station.<sup>16</sup> Parts of
										the line would follow both the railway corridor adjacent and the Gardiner
										Expressway to connect with existing track on the Queensway and Lake Shore
										Boulevard, which would be upgraded to become a dedicated right-of-way.<sup>17</sup>{' '}
										Extensions both west into Mississauga and east from Union Station were proposed
										for future consideration.<sup>18</sup>
									</li>
								</div>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{
							type: 'content-title',
							title: 'Light Rail Vehicles'
						},
						{
							type: 'quote',
							text: () => (
								<span>
									New light rail vehicles similar to the planned new streetcars were to be utilised on
									the new Transit City lines. The vehicles eventually selected by Metrolinx were
									Bombardier’s Flexity Freedom, part of Bombardier’s Flexity family of streetcars and
									light rail vehicles.<sup>19</sup> Following delivery concerns of Bombardier’s
									vehicles, Alstom’s Citidas Spirit was selected to replace Bombardier’s vehicles for
									use on the Finch West LRT line, with Bombardier’s vehicles to be exclusively used on
									the Eglinton Crosstown LRT.
								</span>
							)
						},
						{
							type: 'quote',
							text: () => (
								<span>
									“Eglinton LRT Maintenance & Storage Facility” by wyliepoon is licensed under CC
									BY-NC-ND 2.0
								</span>
							)
						}
					]}
					right={[
						{
							type: 'img',
							src: 'transitcity/TC3.jpg'
						},
						{
							type: 'para',
							text: () => (
								<div>
									The origins for Transit City began in 2005 with the completion of the Building a
									Transit City study conducted by the TTC, which called for the construction of rapid
									transit on key thoroughfares in the city including Eglinton Avenue, Lawrence Avenue,
									Sheppard Avenue, Kingston Road, King Street, Queen Street, Dundas Avenue West,
									Bremner Boulevard, Don Mills Road, Lakeshore Boulevard, and Jane Street.<sup>20</sup>{' '}
									The study prioritised lower-cost surface rapid transit options including the
									creation of dedicated rights-of-ways for buses and light rail transit over costly
									underground subway lines, crucial for the TTC in an era of both falling modes of
									transport market share and budgets.<sup>21</sup>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									The outcome of the study was endorsed by the then-mayor of Toronto, David Miller,
									whose transit plan in the 2006 Toronto municipal election included light rail
									transit lines on Don Mills Road and along the Waterfront, as well as dedicated bus
									lanes on Kingston Road and Yonge Street.<sup>22</sup> His victory in those elections
									advanced plans of the study towards the Transit City plan announced in 2007, but
									even with his re-election, plans for light rail and surface rapid transit saw little
									support outside of the municipality, with the provincial and federal governments
									funding plans for an extension of the Spadina subway line towards York instead.<sup>23</sup>{' '}
									And despite the promises of cost-savings by building above-ground, funding for new
									transit projects was impossible, with the cash-strapped TTC faced with budget cuts
									of nearly $200 million early in 2005 as a result of cuts from the City of Toronto.<sup>24</sup>
								</div>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{
							type: 'content-title',
							title: 'Bombardier Flexity Freedom'
						},
						{
							type: 'quote',
							text: () => (
								<span>
									Transit City lines were to utilise Bombardier Flexity Freedom light rail vehicles,
									which closely resembled Bombardier’s Flexity Outlook streetcars. While Bombardier
									Flexity Outlook streetcars only have doors on one side, Bombardier Flexity Freedom
									light rail vehicles have doors on both sides. Additionally, Bombardier Flexity
									Outlook streetcars utilise the TTC’s Toronto track rail gauge, while Bombardier
									Flexity Freedom light rail vehicles utilise a standard track gauge.<sup>25</sup>
								</span>
							)
						},
						{
							type: 'quote',
							text: () => (
								<span>
									“Eglinton LRT Maintenance & Storage Facility” by wyliepoon is licensed under CC
									BY-NC-ND 2.0
								</span>
							)
						}
					]}
					right={[
						{
							type: 'img',
							src: 'transitcity/TC4.jpg'
						},
						{
							type: 'para',
							text: () => (
								<div>
									The outcome of the study was endorsed by the then-mayor of Toronto, David Miller,
									whose transit plan in the 2006 Toronto municipal election included light rail
									transit lines on Don Mills Road and along the Waterfront, as well as dedicated bus
									lanes on Kingston Road and Yonge Street.<sup>22</sup> His victory in those elections
									advanced plans of the study towards the Transit City plan announced in 2007, but
									even with his re-election, plans for light rail and surface rapid transit saw little
									support outside of the municipality, with the provincial and federal governments
									funding plans for an extension of the Spadina subway line towards York instead.<sup>23</sup>{' '}
									And despite the promises of cost-savings by building above-ground, funding for new
									transit projects was impossible, with the cash-strapped TTC faced with budget cuts
									of nearly $200 million early in 2005 as a result of cuts from the City of Toronto.<sup>24</sup>
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
							title: 'Sheppard East LRT'
						},
						{
							type: 'img',
							// /images/ already saved
							src: 'transitcity/TC5.jpg'
						},
						{
							type: 'quote',
							text: () => (
								<div>
									The environmental assessment of the Sheppard East LRT identified 25 new stops and an
									interchange with the existing Sheppard line at Don Mills Station. It was eventually
									cancelled in favour of an extension of the Sheppard subway in 2011, although it was
									later reinstated. However, the line continues to be limbo as of 2020, with long-term
									plans reverting to intentions for a subway extension.
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
							title: 'Finch West LRT'
						},
						{
							type: 'img',
							// /images/ already saved
							src: 'transitcity/TC6.jpg'
						},
						{
							type: 'quote',
							text: () => (
								<div>
									The environmental assessment of the Finch West LRT identified 31 new stops and two
									interchanges with the Yonge-University subway, one at the existing Finch Station and
									one at the then-planned Finch West Station on the Toronto-York Spadina Subway
									Extension. The line saw several changes during the planning process, first with the
									section between Finch West Station and Finch Station being cut, and later its
									cancellation following Rob Ford’s election as mayor.
								</div>
							)
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
									Planning for Transit City routes had also progressed, with TTC planners deciding to
									extend the Finch West LRT from its eastern terminus at Finch Station on the
									Yonge-University line to Don Mills Station on the Sheppard line to meet the existing
									Sheppard subway and proposed Sheppard East LRT.<sup>28</sup> Meanwhile, proposals to
									extend and refurbish the existing Scarborough rapid transit line to utilise
									low-floor LRT technology as proposed on other Transit City lines were considered, as
									was connecting the proposed reconstructed line with the proposed Eglinton LRT.<sup>29</sup>{' '}
									By mid-2009, two announcements committed funding for the Sheppard East, Finch West,
									and Eglinton LRTs from the provincial and federal governments totalling $6.8
									billion, $1 billion for the Sheppard East LRT, planned to begin construction later
									in the year, and $5.8 billion for the Finch West and Eglinton LRTs, which would see
									construction start in 2010.<sup>30</sup>
								</div>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{
							type: 'content-title',
							title: 'Don Mills Station'
						},
						{
							type: 'quote',
							text: () => (
								<span>
									At Don Mills, TTC planners considered several options for interfacing the proposed
									Sheppard East LRT with the existing Sheppard subway line. Eventually, plans to have
									the LRT meet the existing subway at platform level were finalised, with transfers
									between the subway and LRT planned to be a walk from one vehicle to another.<sup>31</sup>
								</span>
							)
						},
						{
							type: 'quote',
							text: () => (
								<span>
									“TTC Line 4 Don Mills Station” by The West End is licensed under CC BY-NC-ND 2.0
								</span>
							)
						}
					]}
					right={[
						{
							type: 'img',
							src: 'transitcity/TC7.jpg'
						},
						{
							type: 'para',
							text: () => (
								<div>
									However, setbacks quickly emerged for the plan, beginning with funding issues as
									work began to ramp up. Starting with the province postponing $4 billion on transit
									spending in the GTA, detailed estimates of the costs of the funded Transit City
									projects emerged, showing that the approved plans would cost $2 billion more than
									originally estimated.<sup>32</sup> While construction on the Sheppard East LRT began
									in late 2009, Metrolinx revised timelines for the other two projects, delaying the
									completion date of projects by two years on top of the delays in postponing
									construction until at least 2013.<sup>33</sup>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									By then, the provincial government was planned to fund the entirety of the approved
									Transit City projects, except for a $330 million portion from the federal
									government.<sup>34</sup> Meanwhile, portions of the Sheppard East and Finch West
									LRTs were delayed for future phases, with the loss of a short section of the
									Sheppard East LRT from Morningside Avenue to Meadowvale Road, and the elimination of
									the section between Finch West station and Don Mills Station.<sup>35</sup>
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
							title: 'Funded transit lines'
						},
						{
							type: 'img',
							// /images/ already saved
							src: 'transitcity/TC8.png'
						},
						{
							type: 'quote',
							text: () => (
								<div>
									The provincial government moved to fund three of the seven Transit City projects and
									an extension of the Scarborough Rapid Transit line. However, changing plans and
									limited funding meant several changes to the plan before construction could start.
									Eventually, only two of the four projects funded in 2009 began construction.
								</div>
							)
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
									More worrying, however, was the upcoming 2010 Toronto municipal elections, with
									front-runner (and eventual mayor-elect) Rob Ford campaigning on ending the “war on
									the car” by cancelling Transit City, which projects would have run on a dedicated
									surface right-of-way in the median of roads, removing left-turn lanes found in the
									centre-median lanes.<sup>36</sup> His election and the eventual cancellation of
									Transit City projects on the first day of taking office in favour of his transit
									plan, namely the completion of the Sheppard subway as proposed in Network 2011
									(Downsview to Scarborough Centre), put the city at odds with the province, which had
									already spent $130 million on planning and $1.3 billion in contracts related to
									tunnel-boring machines and light rail vehicles.<sup>37</sup>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									However, work underway on the Sheppard East LRT continued, with the work underway
									grade-separating the Stouffville GO line tracks from Sheppard Avenue necessary for
									either an LRT or a subway.<sup>38</sup> Ultimately, negotiations between the city
									and the province resulted in a revised plan for transit in the city, one that
									transferred all provincial funding related to Transit City to a new
									fully-underground Eglinton LRT, along with an extension of the Sheppard subway to be
									built with municipal and private funding.<sup>39</sup>
								</div>
							)
						},
						{
							type: 'para',
							text: () => (
								<div>
									Today, portions of Transit City survive, both in plans and in-reality. Further
									developments in city council eventually restored the pre-Ford election plans for
									light rail, and the Eglinton LRT began construction in 2011, with the Finch West LRT
									delayed several times by the provincial government until preparation work began in
									2019. A Sheppard East LRT was later put on-hold, and eventually cancelled, with the
									current provincial government planning for an eventual extension of the Sheppard
									subway to approximately the intersection of Sheppard Avenue and McCowan Road.<sup>40</sup>
								</div>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{
							type: 'content-title',
							title: 'Eglinton Crosstown Construction'
						},
						{
							type: 'quote',
							text: () => (
								<span>
									Construction on the Eglinton Crosstown began in 2011 with a total of 25 stations and
									stops, underground and aboveground. Pictured is the western portal located east of
									Mount Dennis Station where trains will run elevated over Black Creek Drive.<sup>41</sup>
								</span>
							)
						},
						{
							type: 'quote',
							text: () => (
								<span>
									“working at the western end” by Mary Crandall is licensed under CC BY-NC-ND 2.0
								</span>
							)
						}
					]}
					right={[
						{
							type: 'img',
							src: 'transitcity/TC9.jpg'
						},
						{
							type: 'para',
							text: () => (
								<div>
									Meanwhile, plans for rapid transit on Don Mills survives as studies for originally,
									the Relief Line North rapid transit and now the Ontario Line, a proposed rapid
									transit line that integrates elements of the cancelled Relief Line and the proposed
									Don Mills LRT. Both Jane Street and the waterfront LRTs remain on TTC and City of
									Toronto plans for future study, while plans for a Scarborough-Malvern LRT are
									currently being studied as part of an extension of the Eglinton LRT eastwards. More
									than ten years on, elements of Transit City have continued to be relevant in transit
									planning in Toronto, and two lines originally proposed as part of the plan are under
									construction and planned to open in the near future.
								</div>
							)
						}
					]}
				/>
				<WebColumn
					left={[ { type: 'content-title', title: 'footnotes' } ]}
					right={[ { type: 'para', text: this.renderFootnotes } ]}
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
