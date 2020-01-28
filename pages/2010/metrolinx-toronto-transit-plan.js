import React, { Component } from 'react';
import WebsiteLayout from '../../components/wrapper/mainSite';

import ImgTextBelow from '../../components/templates/imgTextBelow';
import TwoColumn from '../../components/content/TwoColumn';
import ImgAll from '../../components/templates/ImgAll';
import ImgTextRightBelow from '../../components/templates/imgTextRightBelow';
export default class MetroLinxTTP extends Component {
	renderView = () => <ImgAll img="/images/metro1.png" />;
	renderText() {
		const renderFootnotes = () => {
			const footnotes = [
				"Kristin, Rushowy, and Kalinowski Tess. “Sheppard Not a Priority - Yet: Despite Ford's Comments, Transit Plan Won't Be Set until the New Year.” Toronto Star, December 22, 2010, sec. GT2.",
				"Tess, Kalinowski, and Rider David. “'War on the Car Is over': Ford Scraps Transit City: Move Could Leave Toronto on Hook for Millions in Penalties, Wasted Work.” Toronto Star, December 2, 2010, sec. A1.",
				"David, Rider. “Eglinton Rail Back on Table in Ford's New Transit Plan: Signs Point to Compromise with Metrolinx, TTC That Would Save LRT Line.” Toronto Star, January 4, 2011, sec. A1.",
				'Rider. “Eglinton Rail Back on Table.” sec. A1; Tess, Kalinowski. “Ford Pitches Private-Public Partnership for Subway: Metrolinx Would Still Build Eglinton Light Rail, at Least to Kennedy Station.” Toronto Star, February 17, 2011, sec. A3.',
				'Rider. “Eglinton Rail Back on Table.” sec. A1',
				'Rider. “Eglinton Rail Back on Table.” sec. A1',
				'Eric Sehr. Scarborough Town Centre (DSC_0387), 2013, colour digital, Flickr, Toronto, accessed January 21, 2020, https://www.flickr.com/photos/ericvery/9417961445/. Creative Commons License (CC BY-NC-ND 2.0), https://creativecommons.org/licenses/by-nc-nd/2.0/',
				'Kalinowski. “Ford Pitches Private-Public Partnership for Subway.” sec. A3.',
				"Tess, Kalinowski. “It's Full Steam Ahead for Eglinton LRT: Province and City Agree to Underground Rail Plan.” Toronto Star, April 1, 2011, sec. GT3.",
				"Robert, Benzies, and Kalinowski Tess. “$12.4 Billion TTC Deal 'Close': Queen's Park, City Agree to Extend Sheppard Subway, Build Underground Eglinton Light Rail Line.” Toronto Star, March 31, 2011, sec. GT1.",
				"Kalinowski. “It's Full Steam Ahead for Eglinton LRT” sec. GT3.",
				' Wyliepoon. IMG_4538, 2009, colour digital, Flickr, Toronto, accessed January 21, 2020, https://www.flickr.com/photos/wyliepoon/4077118456/. Creative Commons License (CC BY-NC-ND 2.0), https://creativecommons.org/licenses/by-nc-nd/2.0/',
				"James, Royson. “Caution: Road Tolls Ahead: Ford's Transit Guru Predicts Drivers Will Pay the Price for Subway Expansion.” Toronto Star, May 28, 2011, sec. A1.",
				'Paul, Moloney. “Sheppard Subway Cost Soars.” Toronto Star, June 25, 2011, sec. GT4.',
				"Elizabeth, Church. “TTC Chief Fired as Province Runs out of Patience.” The Globe and Mail. February 22, 2012, sec. A1; Tess, Kalinowski. “Ford Plots to Oust TTC Chief: Shakeup Likely as General Manager's Opposition to Sheppard Subway Extension Puts Job at Risk.” Toronto Star, July 22, 2011, sec. A1.",
				'Tess, Kalinowski. “New Eglinton LRT Plan Could Be a Step Closer.” Toronto Star, January 24, 2012, sec. GT1.',
				"Daniel, Dale, and David Rider. “Ford's TTC Plans Lack Support: More Councillors Back Vision of Transit Chair Karen Stintz.” Toronto Star, January 28, 2012, sec. GT2.",
				"Dale, and Rider. “Ford's TTC Plans Lack Support.” sec. GT2.",
				"Tess, Kalinowski, and Dale Daniel. “Ford Trounced in Transit Vote: Mayor Calls Council Defeat 'Irrelevant' as Stintz Wins Vote to Restore Above-Ground LRT Plan.” Toronto Star, February 9, 2012, sec. A1.",
				'James, Royson. “Ford Fumbles as City Staff Pan Subway.” Toronto Star, March 1, 2012, sec. A1.',
				"James, Royson. “Ford's Last Subway Lifeline.” Toronto Star, March 17, 2012, sec. GT2; James, Royson. “Ford Refuses to Accept Subway Loss: Council Votes 24-19 for Light Rail, but Combative Mayor Wants to Turn down Province's $8.4B Cheque.” Toronto Star, March 23, 2012, sec. A1.",
				'James, Royson. “Ford Refuses to Accept Subway Loss.” sec. A1.',
				'Tess, Kalinowski, Dale Daniel, and Benzie Robert. “Detailed LRT Plan Few Months Away: Metrolinx Ponders Scheduling and Cash, Ford Eyes Referendum.” Toronto Star, March 24, 2012, sec. GT2; Tess, Kalinowski. “Ford Fails to Delay LRT Master Plan.” Toronto Star, November 2, 2012, sec. GT3; Tess, Kalinowski. “Province Takes Lead on LRT Project: TTC Differs on Timeline for Eglinton Line Work.” Toronto Star, May 31, 2012, sec. GT2.',
				" Tess, Kalinowski. “Metrolinx to Build Sheppard LRT First: Finch Will Follow, with All Four of Toronto's Light Rail Lines Expected to Be Done by 2020.” Toronto Star, April 25, 2012, sec. GT1.",
				"Rhianna, Jackson-Kelso, and Bensadoun Emerald. “How Ford's TTC Overhaul Compares to Toronto City Plans.” Toronto Star, April 11, 2019, sec. GT10."
			];
			return (
				<ol className="footnotes__list">
					{footnotes.map((text) => <li className="footnotes__item">{text}</li>)}
				</ol>
			);
		};
		return (
			<div className="body__text-con">
				<h1 className="body__text-h1 body__text-h11980">Network 2011 (1985)</h1>
				<h2 className="body__text-h2">Cancelled, evolved to Let’s Move (1990)</h2>
				{
					// The two column shit
				}

				<ImgTextRightBelow
					img="/images/metro2.png"
					title={() => <span>Scarborough City Centre</span>}
					text={{
						right: () => (
							<span>
								Development of Scarborough City Centre had increased significantly since a Sheppard
								subway to Scarborough City Centre was first proposed in 1985 through Network 2011.
								Although office development plateaued after the 1990s as metropolitan-level planning
								trends focused on “recentralization” towards the downtown core, significant growth in
								high-density residential in the area has increased the population significantly.
								<sup>7</sup>
							</span>
						)
					}}
				/>
				<TwoColumn
					text={() => (
						<span>
							Developments in negotiations peaked in mid-February 2011, with the City of Toronto pitching
							to Metrolinx an agreement to shift all Transit City funding towards a fully underground
							Eglinton LRT between approximately Black Creek Drive to Kennedy Station, while the city
							would work on extending the Sheppard subway east and westwards utilising private-public
							partnerships.<sup>8</sup> An agreement was finally made in April of 2011 in the form of a
							$12.4 billion transit plan similar to the City of Toronto’s earlier proposal, with the
							approximately $8.2 billion in provincial funding towards Transit City projects transferred
							towards building a fully-underground Eglinton LRT running from Black Creek Drive to Kennedy
							Station, where it would then approach the surface and follow the route of a refurbished
							Scarborough rapid transit line.<sup>9</sup> <br/> <br/>Meanwhile, $4.2 billion would be spent on
							extensions east and westwards to the Sheppard subway to Downsview Station in the east and
							Scarborough Centre Station in the west, set to open in 2019.<sup>10</sup> Remaining
							provincial funds leftover from the $8.2 billion planned to be spent on the Eglinton LRT
							would also be diverted to completing the Sheppard subway extensions, anticipated to be up to
							$650 million.<sup>11</sup>
						</span>
					)}
				/>
				<ImgTextRightBelow
					img="/images/metro3.png"
					title={() => <span>Sheppard subway</span>}
					text={{
						right: () => (
							<span>
								The focal point of the Metrolinx/Toronto Transit Plan was extensions of the Sheppard
								subway both east and westwards, similarly to the original Sheppard subway as proposed in
								Network 2011. The subway was planned to utilise significant private investment, mainly
								from developers, but the plan fell through as further analysis found a funding pitfall
								of over $1 billion.<sup>12</sup>
							</span>
						)
					}}
				/>
				<TwoColumn
					text={() => (
						<span>
							Almost immediately, concerns over the city’s proposal to raise funds necessary for the
							Sheppard subway extensions were raised. While Rob Ford maintained that the extensions could
							be built using funds from private-public partnerships, it quickly became apparent that other
							revenue tools would be necessary to raise funds for the project, with Gordon Chong, head of
							the TTC’s investment division suggesting road tolls, congestion charges, and development
							fees.<sup>13</sup> By June 2011, further study into the project found the estimated cost
							would be $500 million more than originally pegged at, now totalling $4.7 billion.
							<sup>14</sup>
							<br />
							<br />
							Opposition to the project from within the TTC and the city also developed, beginning with
							TTC chief general manager Gary Webster who refused to support the Sheppard subway
							extensions, much to the ire of mayor Rob Ford, whose allies on the TTC board later fired
							Gary Webster.<sup>15</sup> Then, following a series of victories in cancelling proposed
							budget cuts, Toronto city councillors led by TTC chair Karen Stintz began calling for a
							compromise transit plan, one that would see the original plan for an Eglinton LRT running
							underground between Keele Street and Laird Drive only, with a surface right-of-way for the
							rest of the route.<sup>16</sup> <br/> <br/>In a new transit plan spearheaded by Karen Stintz, the
							savings from the Eglinton LRT would be utilised to extend the Sheppard subway eastwards two
							stations to Victoria Park Avenue, with remaining funds spent on some sort of rapid transit
							on Finch Avenue West.<sup>17</sup> Costs saved from avoiding tunnelling were estimated to be
							as much as $1.5 billion.<sup>18</sup> <br/> <br/>Her plan, debated in council in early February of
							2012, restored the original Transit City plans for the Finch West and Eglinton LRTs, while
							pausing plans for a Sheppard subway in anticipation of recommendations from an expert panel
							on whether surface light rail or underground subway technology would be more effective.
							<sup>19</sup> Soon after, city staff concluded that Rob Ford’s plan to almost exclusively
							utilise private investment towards extensions of the Sheppard subway were unviable, with a
							funding gap of almost $1 billion on the section between Don Mills Station and Scarborough
							Centre Station alone.<sup>20</sup>
						</span>
					)}
				/>
				<ImgTextBelow
					img=""
					text={() => (
						<span>
							As funding issues for the Sheppard subway continued to arise, city council voted to restore
							original plans for provincially-funded light rail lines on Sheppard, Finch, and Eglinton
							Avenues.{' '}
						</span>
					)}
				/>
				<TwoColumn
					text={() => (
						<span>
							Finally, with the release of the report in mid-March of 2012 showing that light rail
							technology would be more effective, council voted 24-19 to restore the previous funded plan
							for light rail on Sheppard East, Finch West, and Eglinton Avenues, much to the dismay of the
							mayor.<sup>21</sup>Appealing to the province, which would have wholly funded the $8.4
							billion light rail plan, Rob Ford urged the province not to fund the plan, which was denied.<sup>22</sup><br/> <br/>Attempts
							to revive the subway-focused plan through a city-wide referendum were unsuccessful, as were
							efforts to delay the light rail plan, which’s development was transferred from the TTC to
							the province through Metrolinx.<sup>23</sup>Construction on light rail would begin on
							Sheppard Avenue East in 2014 and Finch Avenue West in 2015, which along with the then
							already under-construction Eglinton LRT would see completion in 2020.<sup>24</sup>In the
							end, the Sheppard East LRT was further delayed, deferred, and eventually replaced with
							proposals for a future extension of the Sheppard subway in 2019, while the Finch West LRT
							began preparatory construction in 2019, with a completion date set for 2023.<sup>25</sup>
							<br />
							<br />
							The saga for which the Metrolinx/Toronto Transit Plan was created was ultimately a blip from
							the province’s original plan for a watered-down Transit City proposal. Although certain
							elements of the Metrolinx/Toronto Transit Plan from 2011 survive today through the current
							Progressive Conservative administration’s plan for an eventual extension of the Sheppard
							subway eastwards, such a project is neither funded or a priority. Meanwhile, Rob Ford’s
							vision for a fully-underground Eglinton LRT was never realized, with current construction on
							a mixed-grade LRT planned for completion in fall of 2021. Despite so, the Metrolinx/Toronto
							Transit Plan represented the culmination of previous transit plans such as the Rapid Transit
							Expansion Program and Network 2011, which foresaw the construction of a complete Sheppard
							subway as well as grade-separated rapid transit on Eglinton Avenue West.
							<br />
						</span>
					)}
				/>
				<h1 className="body__text-h1">Footnotes</h1>
				{renderFootnotes()}
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
