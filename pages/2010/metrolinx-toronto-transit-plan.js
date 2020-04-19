import React, { Component } from 'react';
import Head from 'next/head';

import WebsiteLayout from '../../components/WebsiteWrapper.js';
import ImgAll from '../../components/templates/MainImage';
import WebColumn from '../../components/templates/WebColumn';
import Footnotes from '../../components/Footnotes.js';

export default class MetroLinxTTP extends Component {
	renderView = () => <ImgAll img="/images/Metrolinx-Toronto Transit Plan/Metrolinx-Toronto Transit Plan Map.png" />;
	renderText() {
		const renderFootnotes = () => {
			const footnotes = [
				`Kristin, Rushowy, and Kalinowski Tess. “Sheppard Not a Priority - Yet: Despite Ford's Comments, Transit Plan Won't Be Set until the New Year.” Toronto Star, December 22, 2010, sec. GT2.`,
				`Tess, Kalinowski, and Rider David. “'War on the Car Is over': Ford Scraps Transit City: Move Could Leave Toronto on Hook for Millions in Penalties, Wasted Work.” Toronto Star, December 2, 2010, sec. A1.`,
				`David, Rider. “Eglinton Rail Back on Table in Ford's New Transit Plan: Signs Point to Compromise with Metrolinx, TTC That Would Save LRT Line.” Toronto Star, January 4, 2011, sec. A1.`,
				`Eric Sehr. Scarborough Town Centre (DSC_0387), 2013, colour digital, Flickr, Toronto, accessed January 21, 2020, https://www.flickr.com/photos/ericvery/9417961445/. Creative Commons License (CC BY-NC-ND 2.0), https://creativecommons.org/licenses/by-nc-nd/2.0/`,
				`Rider. “Eglinton Rail Back on Table.” sec. A1; Tess, Kalinowski. “Ford Pitches Private-Public Partnership for Subway: Metrolinx Would Still Build Eglinton Light Rail, at Least to Kennedy Station.” Toronto Star, February 17, 2011, sec. A3.`,
				`Rider. “Eglinton Rail Back on Table.” sec. A1`,
				`Rider. “Eglinton Rail Back on Table.” sec. A1`,
				`Kalinowski. “Ford Pitches Private-Public Partnership for Subway.” sec. A3.`,
				`Tess, Kalinowski. “It's Full Steam Ahead for Eglinton LRT: Province and City Agree to Underground Rail Plan.” Toronto Star, April 1, 2011, sec. GT3.`,
				`Robert, Benzies, and Kalinowski Tess. “$12.4 Billion TTC Deal 'Close': Queen's Park, City Agree to Extend Sheppard Subway, Build Underground Eglinton Light Rail Line.” Toronto Star, March 31, 2011, sec. GT1.`,
				`Kalinowski. “It's Full Steam Ahead for Eglinton LRT” sec. GT3.`,
				`David, Crombie, Miller Eric, Chong Gordon, Hunter Mitzie, Khosla Prabha, Ahmed Israt, and McCullough Ernie. “Report of the Expert Advisory Panel Regarding Transit on Sheppard Avenue East.” Toronto, 2012; “Ontario And Toronto Moving Forward On Public Transit.” Ontario And Toronto Moving Forward On Public Transit. Office of the Premier, March 31, 2011. https://news.ontario.ca/opo/en/2011/03/ontario-and-toronto-moving-forward-on-public-transit.html.`,
				`Canada. Ontario. Ministry of the Environment. Review of the environmental assessment Sheppard Subway. Toronto: Ontario Ministry of the Environment, 1993`,
				`“Sheppard Subway Extensions Analysis of Funding Options for Toronto Transit Infrastructure Limited and the City of Toronto.” Toronto: KPMG, 2011.`,
				`James, Royson. “Caution: Road Tolls Ahead: Ford's Transit Guru Predicts Drivers Will Pay the Price for Subway Expansion.” Toronto Star, May 28, 2011, sec. A1.`,
				`Paul, Moloney. “Sheppard Subway Cost Soars.” Toronto Star, June 25, 2011, sec. GT4.`,
				`Elizabeth, Church. “TTC Chief Fired as Province Runs out of Patience.” The Globe and Mail. February 22, 2012, sec. A1; Tess, Kalinowski. “Ford Plots to Oust TTC Chief: Shakeup Likely as General Manager's Opposition to Sheppard Subway Extension Puts Job at Risk.” Toronto Star, July 22, 2011, sec. A1.`,
				`Tess, Kalinowski. “New Eglinton LRT Plan Could Be a Step Closer.” Toronto Star, January 24, 2012, sec. GT1.`,
				`Wyliepoon. IMG_4538, 2009, colour digital, Flickr, Toronto, accessed January 21, 2020, https://www.flickr.com/photos/wyliepoon/4077118456/. Creative Commons License (CC BY-NC-ND 2.0), https://creativecommons.org/licenses/by-nc-nd/2.0/`,
				`Daniel, Dale, and David Rider. “Ford's TTC Plans Lack Support: More Councillors Back Vision of Transit Chair Karen Stintz.” Toronto Star, January 28, 2012, sec. GT2.`,
				`Dale, and Rider. “Ford's TTC Plans Lack Support.” sec. GT2.`,
				`Tess, Kalinowski, and Dale Daniel. “Ford Trounced in Transit Vote: Mayor Calls Council Defeat 'Irrelevant' as Stintz Wins Vote to Restore Above-Ground LRT Plan.” Toronto Star, February 9, 2012, sec. A1.`,
				`James, Royson. “Ford Fumbles as City Staff Pan Subway.” Toronto Star, March 1, 2012, sec. A1.`,
				`James, Royson. “Ford's Last Subway Lifeline.” Toronto Star, March 17, 2012, sec. GT2; James, Royson. “Ford Refuses to Accept Subway Loss: Council Votes 24-19 for Light Rail, but Combative Mayor Wants to Turn down Province's $8.4B Cheque.” Toronto Star, March 23, 2012, sec. A1.`,
				`James, Royson. “Ford Refuses to Accept Subway Loss.” sec. A1.`,
				`Tess, Kalinowski, Dale Daniel, and Benzie Robert. “Detailed LRT Plan Few Months Away: Metrolinx Ponders Scheduling and Cash, Ford Eyes Referendum.” Toronto Star, March 24, 2012, sec. GT2; Tess, Kalinowski. “Ford Fails to Delay LRT Master Plan.” Toronto Star, November 2, 2012, sec. GT3; Tess, Kalinowski. “Province Takes Lead on LRT Project: TTC Differs on Timeline for Eglinton Line Work.” Toronto Star, May 31, 2012, sec. GT2.`,
				`Tess, Kalinowski. “Metrolinx to Build Sheppard LRT First: Finch Will Follow, with All Four of Toronto's Light Rail Lines Expected to Be Done by 2020.” Toronto Star, April 25, 2012, sec. GT1.`,
				`Rhianna, Jackson-Kelso, and Bensadoun Emerald. “How Ford's TTC Overhaul Compares to Toronto City Plans.” Toronto Star, April 11, 2019, sec. GT10.`
			];
			return <Footnotes footnotes={footnotes} />;
		};
		return (
			<div>
				<WebColumn
					left={[
						{ type: 'main-title', title: 'Metrolinx / Toronto Transit Plan (2011)' },
						{ type: 'main-subtitle', title: 'Cancelled in 2012' }
					]}
					right={[
						{
							type: 'quote',
							text: () => (
								<span>
									The Metrolinx / Toronto Transit Plan was a plan spearheaded by Toronto mayor Rob
									Ford that replaced the funded plan for light rail on Sheppard, Finch, and Eglinton
									Avenues with extensions of the Sheppard subway east and westwards and a fully
									grade-separated LRT on Eglinton Avenue.
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									The cancellation of Transit City following Rob Ford’s election as mayor of Toronto
									in late October of 2010 meant that transit plans in the city would shift yet again.
									While Transit City proposed light rail transit (LRT) running along several key
									thoroughfares in the city in a dedicated surface right-of-way, Rob Ford’s transit
									plan focused on building subways, with the extension of the Sheppard subway
									eastwards to Scarborough Centre Station and westwards to Downsview Station his
									number one focus.<sup>1</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									By the time of Transit City’s cancellation on the first day of taking office, the
									Sheppard East LRT was already under construction as construction crews began
									building a bridge for Stouffville line GO trains over Sheppard Avenue, work that was
									continued because of its necessity for either plan.<sup>2</sup> That left a handful
									of other funded Transit City and other Toronto transit projects in limbo including
									the proposed Finch West LRT running from Finch West Station on the yet-unopened
									Toronto-York Spadina Subway Extension to Humber College, the Eglinton LRT between
									approximately Black Creek Drive to Kennedy Station on the Bloor-Danforth Line, and
									the refurbishment and extension of the Scarborough rapid transit line from McCowan
									Station to Sheppard Avenue.<sup>3</sup>
								</span>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{ type: 'content-title', title: 'Scarborough City Centre' },
						{
							type: 'quote',
							text: () => (
								<span>
									Development of Scarborough City Centre had increased significantly since a Sheppard
									subway to Scarborough City Centre was first proposed in 1985 through Network 2011.
									Although office development plateaued after the 1990s as metropolitan-level planning
									trends focused on “recentralization” towards the downtown core, significant growth
									in high-density residential in the area has increased the population significantly.<sup>4</sup>
								</span>
							)
						},
						{
							type: 'quote',
							text: () => (
								<span>
									“Scarborough Town Centre (DSC_0387)” by Eric Sehr is licensed under CC BY-NC-ND 2.0
								</span>
							)
						}
					]}
					right={[
						{
							type: 'img',
							// adjust: { hide: true },
							src: 'Metrolinx-Toronto Transit Plan/Scarborough City Centre.jpg',
							alt: 'This image shows the skyline of Scarborough City Centre, a central business district of Toronto and proposed terminus of an extension of the Sheppard subway eastwards'
						},
						{
							type: 'para',
							text: () => (
								<span>
									Negotiations for a revised transit plan between the regional transportation agency
									Metrolinx and the city began shortly after in December 2010, with the province
									focusing on saving the Eglinton LRT, described as the “centrepiece” of its regional
									transportation plan.<sup>5</sup> Eglinton’s high connectivity with several GO
									Transit lines, the existing subway, and future extensions towards Toronto Pearson
									airport and the Mississauga Transitway ultimately saved the project from the
									chopping block, unlike the Sheppard East and Finch West LRTs, along with the
									Scarborough rapid transit line refurbishment and extension.<sup>6</sup> During
									negotiations, several cost-saving methods were considered as a method to avoid
									expensive underground construction, including elevated transit options and bus-only
									lanes through the Finch hydro corridor as a replacement for the planned Finch West
									LRT.<sup>7</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									Developments in negotiations peaked in mid-February 2011, with the City of Toronto
									pitching to Metrolinx an agreement to shift all Transit City funding towards a fully
									underground Eglinton LRT between approximately Black Creek Drive to Kennedy Station,
									while the city would work on extending the Sheppard subway east and westwards
									utilising private-public partnerships.<sup>8</sup> An agreement was finally made in
									April of 2011 in the form of a $12.4 billion transit plan similar to the City of
									Toronto’s earlier proposal, with the approximately $8.2 billion in provincial
									funding towards Transit City projects transferred towards building a
									fully-underground Eglinton LRT running from Black Creek Drive to Kennedy Station,
									where it would then approach the surface and follow the route of a refurbished
									Scarborough rapid transit line.<sup>9</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									Meanwhile, $4.2 billion would be spent on extensions east and westwards to the
									Sheppard subway to Downsview Station in the east and Scarborough Centre Station in
									the west, set to open in 2019.<sup>10</sup> Remaining provincial funds leftover from
									the $8.2 billion planned to be spent on the Eglinton LRT would also be diverted to
									completing the Sheppard subway extensions, anticipated to be up to $650 million.<sup>11</sup>
								</span>
							)
						}
					]}
				/>
				<WebColumn
					oneColumn
					center={[
						{ type: 'content-title', title: 'Sheppard East Extension' },
						,
						{
							type: 'img',
							// adjust: { hide: true },
							src: 'Metrolinx-Toronto Transit Plan/Sheppard East Extension Alignment.jpg',
							alt: 'This image shows the proposed extension of the Sheppard subway eastwards, with six new stations at Consumers Road, Victoria Park Avenue, Warden Avenue, Kennedy Road, the CN/CP rail interchange, and Progress Avenue. A new connection to a proposed re-built Scarborough Rapid Transit line in the form of an extension of the proposed Eglinton Crosstown LRT would be made at Scarborough Centre Station.'
						},
						{
							type: 'quote',
							text: () => (
								<span>
									Conceptual alignments of the Sheppard subway’s extension eastwards to Scarborough Town Centre featured six new stations with connections at Scarborough Centre Station to a rebuilt Scarborough Rapid Transit line that would be part of the provinces’ Eglinton-Scarborough Crosstown LRT project.<sup>12</sup> The alignment closely followed plans for a complete Sheppard subway as laid out in the original 1992 environmental assessment for the project studied between the Let’s Move and Rapid Transit Expansion Program eras.<sup>13</sup>
								</span>
							)
						}
					]}
				/>
				<WebColumn
					oneColumn
					center={[
						{ type: 'content-title', title: 'Sheppard West Extension' },
						{
							type: 'img',
							// adjust: { hide: true },
							src: 'Metrolinx-Toronto Transit Plan/Sheppard West Extension Alignment.jpg',
							alt: 'This image shows the alignment of the proposed extension of the Sheppard subway westwards, with three new stations at Senlac Road, Bathurst Avenue, and Wilson Heights Boulevard. A new connection to the Spadina segment of the Yonge-University subway would be made at Downsview station.'
						},
						{
							type: 'quote',
							text: () => (
								<span>
									Conceptual alignments of the Sheppard subway’s extension westwards to Downsview
									Station (later renamed Sheppard West Station) included three new stations with a new
									connection to the Yonge-University subway at Downsview Station.<sup>14</sup>
								</span>
							)
						}
					]}
				/>
				<WebColumn
					rightonly
					left={[]}
					right={[
						,
						{
							type: 'para',
							text: () => (
								<span>
									Almost immediately, concerns over the city’s proposal to raise funds necessary for
									the Sheppard subway extensions were raised. While Rob Ford maintained that the
									extensions could be built using funds from private-public partnerships, it quickly
									became apparent that other revenue tools would be necessary to raise funds for the
									project, with Gordon Chong, head of the TTC’s investment division suggesting road
									tolls, congestion charges, and development fees.<sup>14</sup> By June 2011, further
									study into the project found the estimated cost would be $500 million more than
									originally pegged at, now totalling $4.7 billion.<sup>16</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									Opposition to the project from within the TTC and the city also developed, beginning
									with TTC chief general manager Gary Webster who refused to support the Sheppard
									subway extensions, much to the ire of mayor Rob Ford, whose allies on the TTC board
									later fired Gary Webster.<sup>17</sup> Then, following a series of victories in
									cancelling proposed budget cuts, Toronto city councillors led by TTC chair Karen
									Stintz began calling for a compromise transit plan, one that would see the original
									plan for an Eglinton LRT running underground between Keele Street and Laird Drive
									only, with a surface right-of-way for the rest of the route.<sup>18</sup>
								</span>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{ type: 'content-title', title: 'Sheppard Subway' },
						{
							type: 'quote',
							text: () => (
								<span>
									The focal point of the Metrolinx/Toronto Transit Plan was extensions of the Sheppard
									subway both east and westwards, similarly to the original Sheppard subway as
									proposed in Network 2011. The subway was planned to utilise significant private
									investment, mainly from developers, but the plan fell through as further analysis
									found a funding pitfall of over $1 billion.<sup>19</sup>
								</span>
							)
						},
						{
							type: 'quote',
							text: () => <span>“IMG_4538” by wyliepoon is licensed under CC BY-NC-ND 2.0</span>
						}
					]}
					right={[
						{
							type: 'img',
							// adjust: { hide: true },
							src: 'Metrolinx-Toronto Transit Plan/Sheppard-Yonge Station.jpg',
							alt: 'This image shows Sheppard-Yonge station at platform-level.'
						},

						{
							type: 'para',
							text: () => (
								<span>
									In a new transit plan spearheaded by Karen Stintz, the savings from the Eglinton LRT
									would be utilised to extend the Sheppard subway eastwards two stations to Victoria
									Park Avenue, with remaining funds spent on some sort of rapid transit on Finch
									Avenue West.<sup>20</sup> Costs saved from avoiding tunnelling were estimated to be
									as much as $1.5 billion.<sup>21</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									Her plan, debated in council in early February of 2012, restored the original
									Transit City plans for the Finch West and Eglinton LRTs, while pausing plans for a
									Sheppard subway in anticipation of recommendations from an expert panel on whether
									surface light rail or underground subway technology would be more effective.<sup>22</sup>{' '}
									Soon after, city staff concluded that Rob Ford’s plan to almost exclusively utilise
									private investment towards extensions of the Sheppard subway were unviable, with a
									funding gap of almost $1 billion on the section between Don Mills Station and
									Scarborough Centre Station alone.<sup>23</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									Finally, with the release of the report in mid-March of 2012 showing that light rail
									technology would be more effective, council voted 24-19 to restore the previous
									funded plan for light rail on Sheppard East, Finch West, and Eglinton Avenues, much
									to the dismay of the mayor.<sup>24</sup> Appealing to the province, which would have
									wholly funded the $8.4 billion light rail plan, Rob Ford urged the province not to
									fund the plan, which was denied.<sup>25</sup>
								</span>
							)
						}
					]}
				/>
				<WebColumn
					oneColumn={true}
					center={[
						{
							type: 'content-title',
							title: 'City-council backed plan'
						},
						{
							type: 'img',
							// /images/ already saved
							src: 'Metrolinx-Toronto Transit Plan/Funded Transit City Map.png',
							alt: 'This image shows the network of transit lines that were fully funded prior to their cancellation by Rob Ford. It features the Finch West LRT, the Eglinton Crosstown LRT, and the Sheppard East LRT.'
						},
						{
							type: 'quote',
							text: () => (
								<div>
									As funding issues for the Sheppard subway continued to arise, city council voted to
									restore original plans for provincially-funded light rail lines on Sheppard, Finch,
									and Eglinton Avenues.{' '}
								</div>
							)
						}
					]}
				/>
				<WebColumn
					left={[]}
					right={[
						{
							type: 'para',
							text: () => (
								<span>
									Attempts to revive the subway-focused plan through a city-wide referendum were
									unsuccessful, as were efforts to delay the light rail plan, which’s development was
									transferred from the TTC to the province through Metrolinx.<sup>26</sup>{' '}
									Construction on light rail would begin on Sheppard Avenue East in 2014 and Finch
									Avenue West in 2015, which along with the then already under construction Eglinton
									LRT would see completion in 2020.<sup>27</sup> In the end, the Sheppard East LRT was
									further delayed, deferred, and eventually replaced with proposals for a future
									extension of the Sheppard subway in 2019, while the Finch West LRT began preparatory
									construction in 2019, with a completion date set for 2023.<sup>28</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									The saga that led to the creation of the Metrolinx/Toronto Transit Plan was
									ultimately a blip from the province’s original plan for a watered-down Transit City
									proposal. Although certain elements of the Metrolinx/Toronto Transit Plan from 2011
									survive today through the Doug Ford Progressive Conservative administration’s plan
									for an eventual extension of the Sheppard subway eastwards, such a project is
									neither funded or a priority. Meanwhile, Rob Ford’s vision for a fully-underground
									Eglinton LRT was never realized, with current construction on a mixed-grade LRT
									planned for completion in fall of 2021. Despite so, the Metrolinx/Toronto Transit
									Plan represented the culmination of previous transit plans such as the Rapid Transit
									Expansion Program and Network 2011, which foresaw the construction of a complete
									Sheppard subway as well as grade-separated rapid transit on Eglinton Avenue West.
								</span>
							)
						}
					]}
				/>
				<WebColumn
					left={[ { type: 'main-title', title: 'footnotes' } ]}
					right={[ { type: 'para', text: renderFootnotes } ]}
				/>
			</div>
		);
	}
	render() {
		return (
			<WebsiteLayout>
				<div className="body-con">
					<div>{this.renderView()}</div>
					{this.renderText()}
				</div>
			</WebsiteLayout>
		);
	}
}
