import React, { Component } from 'react';
import WebsiteLayout from '../../components/wrapper/mainSite';

import ImgTextBelow from '../../components/templates/imgTextBelow';
import TwoColumn from '../../components/content/TwoColumn';
import ImgAll from '../../components/templates/ImgAll';
import ImgTextRightBelow from '../../components/templates/imgTextRightBelow';
export default class MetroLinxTTP extends Component {
	renderView = () => <ImgAll img="/images/metro1.png"></ImgAll>;
	renderText() {
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
						),
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
							Scarborough rapid transit line.<sup>9</sup> Meanwhile, $4.2 billion would be spent on
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
						),
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
							rest of the route.<sup>16</sup> In a new transit plan spearheaded by Karen Stintz, the
							savings from the Eglinton LRT would be utilised to extend the Sheppard subway eastwards two
							stations to Victoria Park Avenue, with remaining funds spent on some sort of rapid transit
							on Finch Avenue West.<sup>17</sup> Costs saved from avoiding tunnelling were estimated to be
							as much as $1.5 billion.<sup>18</sup> Her plan, debated in council in early February of
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
							mayor.<sup>19</sup>Appealing to the province, which would have wholly funded the $8.4
							billion light rail plan, Rob Ford urged the province not to fund the plan, which was
							denied..<sup>20</sup> Attempts to revive the subway-focused plan through a city-wide
							referendum were unsuccessful, as were efforts to delay the light rail plan, which’s
							development was transferred from the TTC to the province through Metrolinx..<sup>21</sup>{' '}
							Construction on light rail would begin on Sheppard Avenue East in 2014 and Finch Avenue West
							in 2015, which along with the then already under-construction Eglinton LRT would see
							completion in 2020..<sup>22</sup> In the end, the Sheppard East LRT was further delayed,
							deferred, and eventually replaced with proposals for a future extension of the Sheppard
							subway in 2019, while the Finch West LRT began preparatory construction in 2019, with a
							completion date set for 2023..<sup>23</sup> <br />
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
						</span>
					)}
				></TwoColumn>
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
