import React, { Component } from 'react';
import Head from 'next/head';

import WebsiteLayout from '../../components/WebsiteWrapper';
import WebColumn from '../../components/templates/WebColumn';
import Footnotes from '../../components/Footnotes';

export default class Year1980 extends Component {
	constructor(props) {
		super(props);
		this.state = { toggled: false };
	}
	renderView() {
		return (
			<div className="body__img-con">
				<img src="/images/Network 2011/Network 2011 Map.png" alt="" className="body__img" style={{ margin: '10px 0' }} />
			</div>
		);
	}
	renderFootnotes = () => {
		const footnotes = [
			`Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network 2011. Toronto: Toronto Transit Commission, 1985; Mitchell Smith. “TTC Urges $2.7 Billion Expansion.” Toronto Star, October 1, 1985, sec. A19.`,
			`Smith. “TTC Urges $2.7 Billion Expansion.” sec. A19.`,
			`Michael Smith. “Province Considering New Subway TTC Says.” Toronto Star, April 5, 1987, sec. A3; Smith. “TTC Urges $2.7 Billion Expansion.” sec. A19.`,
			`Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network 2011. Toronto: Toronto Transit Commission, 1985.`,
			`Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network 2011.`,
			`Ibid.`,
			`Ibid, 14.`,
			`Ibid, 26.`,
			`Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Downtown Rapid Transit Study. Toronto: Toronto Transit Commission, 1985`,
			`Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Downtown Rapid Transit Study, 52.`,
			`Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network 2011, 14.`,
			`Ibid, 59, A.3.`,
			`David Cooper. Canada – Ontario – North York - Yonge St, 1979, black and white digital, Toronto Star photo archive, Toronto, accessed January 14, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0107105F&R=DC-TSPA_0107105F`,
			`Mitchell Smith. “Tonks Makes Pitch to Keep Subway Plan Alive for Eglinton.” Toronto Star, June 24, 1986, sec. A6.`,
			`Bob Mitchell. “Eglinton Transit Line Gets Top Billing in 2011.” Toronto Star. June 3, 1986, sec. W6.`,
			`Mike Foster. “Metro's the Loser If Network 2011 Put Back on Shelf.” Toronto Star, February 17, 1987, sec. N4.`,
			`Michael Smith. “Ontario Likely to Derail Sheppard Subway, Officials Fear.” Toronto Star, December 26, 1987, sec. A8.`,
			`Peter Howell. “TTC Fighting on Two Fronts Province, Toronto Give It Rough Ride.” Toronto Star, March 12, 1990, sec. A1.`,
			`Alan Dunlop. Scar Town Centre, 1985, black and white digital, Toronto Star photo archive, Toronto, accessed January 7, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0107997F&R=DC-TSPA_0107997F`,
			`W R Code. “The Strength of the Centre: Downtown Offices and Metropolitan Decentralization Policy in Toronto.” Environment and Planning A: Economy and Space 15, no. 10 (1983): 1361. https://doi.org/10.1068/a151361.`,
			`Code. “The Strength of the Centre,” 1361-1362.  `,
			`Howell. “TTC Fighting on Two Fronts Province, Toronto Give It Rough Ride.” sec. A1.`,
			`Jim Byers. “Huge Transit Expansion Announced for Metro.” Toronto Star, April 5, 1990, sec. A1.`,
			`Byers. “Huge Transit Expansion Announced for Metro.” sec. A1]`,
			`Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network 2011, 56.`
		];
		return <Footnotes footnotes={footnotes} />;
	};
	renderText = () => {
		return (
			<div>
				<WebColumn
					left={[
						{ type: 'main-title', title: 'Network 2011 (1985)' },
						{ type: 'main-subtitle', title: 'Cancelled' },
						{ type: 'main-subtitle', title: `Evolved into Let's Move` }
					]}
					right={[
						{
							type: 'quote',
							text: () => (
								<span>
									Network 2011 at its core was a transit plan that was created to achieve the planning goals of Metropolitan Toronto and their objective of creating multiple central business districts within the city. 
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									Network 2011 was a 1985 plan by the Toronto Transit Commission for transit expansion, named for the target completion date of 2011. The plan focused on three new rapid transit lines: a subway along Sheppard Avenue from Dufferin Street in the west to Scarborough City Centre in the east, a new rapid transit corridor on Eglinton Avenue West initially composed of express buses linking Mississauga to Eglinton West Station, and a downtown subway between approximately the intersection of Front Street and Spadina Avenue and Pape Station.<sup>1</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
Furthermore, an extension of the Spadina line from Wilson Station to Sheppard Avenue would allow for transfers between the Yonge-University-Spadina line and the future Sheppard subway.<sup>2</sup> All-in-all, the plan would cost $2.7 billion, 25 per cent paid for by the Metro Toronto government and 75 per cent from the provincial government.<sup>3</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									Planning for what became of Network 2011 began in 1982, with the release of the
									Accelerated Rapid Transit Study undertaken by Metro Toronto and the TTC.<sup>4</sup>{' '}
									The report, which studied four corridors for future rapid transit expansion
									including Eglinton, “Central Radial” (a route downtown via existing rail corridors),
									Sheppard, and the Finch hydro corridor, identified potential station, yard, and
									routing locations, as well as potential costs and impacts on the surrounding
									community and environment.<sup>5</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									The findings of the study were then broken down into three more detailed studies offering further analysis of the ridership and feasibility of each of the corridors: the Sheppard/Finch Rapid Transit Study, the Downtown Rapid Transit Study, and the Eglinton West Rapid Transit Study.<sup>6</sup> The outcomes of these studies and the recommended alignments were combined to create Network 2011, which utilised the findings of the three studies to recommend suggested phasing for constructing the plan according to Metro Toronto planning objectives. The Metro Toronto official plan of the time (Metroplan) called for the creation of a multi-centred urban structure within Metro Toronto, with the development of nodes which would act as major employment and activity centres outside downtown Toronto to encourage decentralisation.<sup>7</sup>
								</span>
							)
						}
					]}
				/>
				{
					//Fix this
					//Add title - Downtown Rapid Transit Study
				}
				<WebColumn
					oneColumn={true}
					center={[
						{
							type: 'img',
							// /images/ already saved
							src: 'Network 2011/Downtown Rapid Transit Study Routes.jpg'
						},
						{
							type: 'quote',
							text: () => (
								<span>
									The routing of the proposed downtown subway was a key concern of the Downtown Rapid
									Transit Study, a precursor document of Network 2011. The main concern for the
									downtown subway was to relieve pressure off the Yonge subway line, which would
									otherwise exceed design capacity if unbuilt.<sup>8</sup> A variety of routings were
									considered, including a subway along Bay Street from Bay Station on the
									Bloor-Danforth line to Union Station on the Yonge-University line, but the majority
									of alignments created a “J” or “U” shape.<sup>9</sup> In the end, a routing along
									Pape-Eastern-Railway Corridor-Front was recommended, with the western terminus
									located at approximately Front Street and Spadina Avenue.<sup>10</sup>
								</span>
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
									As a result, the proposed Sheppard subway, which would connect two of the identified
									nodes, Scarborough City Centre and North York Centre, was identified as the priority
									of the Network 2011 plan.<sup>11</sup> A downtown subway that would relieve
									the Yonge subway line would follow, followed by rapid transit on Eglinton West,
									which Network 2011 recommended to be implemented initially as a partially
									grade-separated busway that could eventually be upgraded to a subway.<sup>12</sup>
								</span>
							)
						}
					]}
				/>
				<WebColumn
					left={[
						{ type: 'content-title', title: 'North York Centre' },
						{
							type: 'quote',
							text: () => (
								<span>
									The planned Sheppard subway, when fully built, was planned to connect two emerging
									central business districts, North York Centre and Scarborough City Centre. Pictured
									is North York Centre, with the intersection and western terminus of the first phase
									of the subway, Sheppard Avenue and Yonge Street, at the lower centre.<sup>13</sup>
								</span>
							)
						}
					]}
					right={[
						{ type: 'img', adjust: { hide: true }, src: 'Network 2011/North York Centre.jpg' },
						{
							type: 'para',
							text: () => (
								<span>
									Approved by Metro Toronto council by 1986, the plan was to be implemented in phases according to the Network 2011 plan, with council deciding a subway on Sheppard Avenue from Yonge Street to Victoria Park Avenue as the priority, much to the dismay of municipal officials in Etobicoke, York, and Peel Region who wanted rapid transit on Eglinton Avenue first.<sup>14</sup> Officials from the three municipal bodies were further dismayed at the plan’s commitment to construct only a busway on Eglinton, rather than a light rail line or a subway, with the plan only specifying that it could be replaced with a subway – eventually.<sup>15</sup> The plan saw further opposition from surrounding municipal and regional governments including York, Peel, and Durham Regions who sought funding for their transportation plans centred around the then proposed Highway 407, and who saw Network 2011 as competition for such funding.<sup>16</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									Ultimately, difficulties in funding the plan quickly derailed the timelines proposed. The then-Liberal provincial government – who was not involved in the development of the Network 2011 plan, baulked at the $75 million a year from the province necessary for a full build-out and decided to conduct their own study of transit proposals in the province.<sup>17</sup> Completed in May of 1988, their report downgraded funding priority of the Sheppard subway in favour of expanding GO Transit commuter services and extending the Spadina line towards York Region.<sup>18</sup>
								</span>
							)
						}
					]}
				/>

				{/**Ask danny about the first right paragrpah, might be wrong */}
				<WebColumn
					left={[
						{ type: 'content-title', title: 'scarborough town Centre' },
						{
							type: 'quote',
							text: () => (
								<span>
									Scarborough City Centre, pictured, an emerging central business district that would be the planned eventual terminus of the Sheppard subway.<sup>19</sup> Planning in Metro Toronto at the time de-emphasised growth in the downtown, taking action such as restricting office development to protect adjacent communities and reduce the pressure of redevelopment for historic structures within them.<sup>20</sup> New central business districts such as Scarborough City Centre were intended to receive the majority of new office developments, something planners hoped would decrease the pressure of large amounts of commuters headed downtown in the peak direction by encouraging reverse commuting.<sup>21</sup>
								</span>
							)
						}
					]}
					right={[
						{ type: 'img', adjust: { hide: true }, src: 'Network 2011/Scarborough-City-Centre.jpg' },
						{
							type: 'para',
							text: () => (
								<span>
									By then, the cost for completing a Sheppard subway from Yonge Street to Victoria Park Avenue had more than doubled from a 1985 estimate of $500 million to an estimate of $1.1 billion in 1989.<sup>22</sup> Come 1990 – an election year, the (eventually defeated) Liberals kept the Sheppard subway on life support by supporting the project only if a portion of the project could be paid for through private sector investment and without disrupting funding for their own transit plan, dubbed “Let’s Move”.<sup>23</sup> Also retained was plans for rapid transit on Eglinton in the form of a busway to Peel Region but a downtown subway and a complete Sheppard subway from Downsview to Scarborough City Centre were dropped.<sup>24</sup>
								</span>
							)
						},
						{
							type: 'para',
							text: () => (
								<span>
									Although much of what Network 2011 proposed was never built in the timeframes proposed, elements of the plan were highly influential in the plans of subsequent provincial and municipal governments and remain so. The Sheppard subway, a key element of the Network 2011 plan was funded several years later under the Rapid Transit Expansion Program and opened in 2003, ten years after the original proposed opening date of 1993 detailed in Network 2011.<sup>25</sup> Meanwhile today, plans for a downtown subway continue to be studied while rapid transit on Eglinton has taken the form of light rail, currently under construction and planned for a 2021 opening.
								</span>
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
					{this.renderText()}
				</div>
			</WebsiteLayout>
		);
	}
}
