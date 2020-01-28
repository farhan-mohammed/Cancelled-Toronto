import React, { Component } from 'react';
import 'next-images';
import WebsiteLayout from '../../components/wrapper/mainSite';

import ImgTextBelow from '../../components/templates/imgTextBelow';
import TwoColumn from '../../components/content/TwoColumn';
import ImgAll from '../../components/templates/ImgAll';
import ImgTextRightBelow from '../../components/templates/imgTextRightBelow';

export default class Year1980 extends Component {
	constructor(props) {
		super(props);
		this.state = { toggled: false };
	}
	renderButton = () => {
		return (
			<button
				onClick={() => {
					if (this.state.toggled) {
						this.setState({ toggled: false });
					} else {
						this.setState({ toggled: true });
					}
				}}
			>
				Click Me to Change!
			</button>
		);
	};
	renderView() {
		return <ImgAll img="/images/1980.png"></ImgAll>;
	}
	renderText1() {
		return (
			<div className="body__text-con">
				<h1 className="body__text-h1">Network 2011</h1>
				<h2 className="body__text-h2">Evolved into Let’s Move (1990)</h2>
				<p className="body__text-p">
					Network 2011 was a 1985 plan by the Toronto Transit Commission for transit expansion, named for the
					target completion date of 2011. The plan focused on three new rapid transit lines: a subway along
					Sheppard Avenue from Downsview in the west to Scarborough City Centre in the east, a new rapid
					transit corridor on Eglinton Avenue West composed of express buses linking Mississauga to Eglinton
					West Station, and a downtown subway between Union Station and Pape Station.<sup>1</sup> Furthermore,
					an extension of the Spadina line from Wilson Station to the Downsview Area would allow for transfers
					between the Yonge-University-Spadina line and the future Sheppard subway.<sup>2</sup> All-in-all,
					the plan would cost $2.7 billion, 25 per cent paid for by the Metro Toronto government and 75 per
					cent from the provincial government.<sup>3</sup>
				</p>
				<p className="body__text-p">
					Approved by Metro Toronto Council by 1986, the plan would be implemented in phases, with council
					deciding on a subway on Sheppard Avenue from Yonge Street to Victoria Park Avenue as the priority,
					much to the dismay of municipal officials in Etobicoke, York, and Peel Region who wanted rapid
					transit on Eglinton Avenue first.<sup>4</sup> Officials from the three municipal bodies were further
					appalled at the plan’s commitment to construct only a busway on Eglinton, rather than a light rail
					line or a subway, with the plan only specifying that it could be replaced with a subway –
					eventually.<sup>5</sup> The plan saw further opposition from surrounding municipal and regional
					governments including York, Peel, and Durham Regions who sought funding for their transportation
					plans centred around the then proposed Highway 407, and who saw Network 2011 as competition for such
					funding.<sup>6</sup>
				</p>
				<p className="body__text-p">
					Ultimately, difficulties in funding the plan quickly derailed the timelines proposed in the plan.
					The then-Liberal provincial government – who was not involved in the development of the Network 2011
					plan, baulked at the $75 million a year from the province necessary for a full build-out and decided
					to conduct a full study of all transit proposals in the province.<sup>7</sup> Completed in May of
					1988, the report downgraded funding priority of the Sheppard subway in favour of expanding GO
					Transit services and extending the Spadina line towards York Region.<sup>8</sup> By then, the cost
					for completing a Sheppard subway from Yonge Street to Victoria Park Avenue had more than doubled
					from a 1985 estimate of $500 million to an estimate of $1.1 billion in 1989.<sup>9</sup> Come 1990 –
					an election year, the (eventually defeated) Liberals kept the Sheppard subway on life support by
					supporting the project only if a portion of the project could be paid for through private sector
					investment and without disrupting funding for their transit plan, dubbed “Let’s Move”.<sup>10</sup>{' '}
					Also retained was plans for rapid transit on Eglinton in the form of a busway to Peel Region but a
					downtown subway and a complete Sheppard subway from Downsview to Scarborough City Centre were
					dropped.<sup>11</sup>
				</p>
				<p className="body__text-p">
					Although much of what Network 2011 proposed was never built in the timeframes proposed, elements of
					the plan were highly influential to the plans of subsequent provincial and municipal governments and
					remain so. Today, plans for a downtown subway continue to be studied while rapid transit on Eglinton
					has taken the form of light rail, currently under-construction and planned for a 2021 opening.
				</p>
				<h1 className="body__text-h1">Footnotes</h1>
				<ol className="footnotes__list">
					<li className="footnotes__item">
						Smith, Mitchell. “TTC Urges $2.7 Billion Expansion.” Toronto Star, October 1, 1985, sec. A19.
					</li>
					<li className="footnotes__item">
						Smith, Mitchell. “TTC Urges $2.7 Billion Expansion.” Toronto Star, October 1, 1985, sec. A19.
					</li>
					<li className="footnotes__item">
						Smith, Michael. “Province Considering New Subway TTC Says.” Toronto Star, April 5, 1987, sec.
						A3; Smith, Mitchell. “TTC Urges $2.7 Billion Expansion.” Toronto Star, October 1, 1985, sec.
						A19.
					</li>
					<li className="footnotes__item">
						Smith, Mitchell. “Tonks Makes Pitch to Keep Subway Plan Alive for Eglinton.” Toronto Star, June
						24, 1986, sec. A6.
					</li>
					<li className="footnotes__item">
						Mitchell, Bob. “Eglinton Transit Line Gets Top Billing in 2011.” Toronto Star. June 3, 1986,
						sec. W6.
					</li>
					<li className="footnotes__item">
						Foster, Mike. “Metro's the Loser If Network 2011 Put Back on Shelf.” Toronto Star, February 17,
						1987, sec. N4.
					</li>
					<li className="footnotes__item">
						Smith, Michael. “Ontario Likely to Derail Sheppard Subway, Officials Fear.” Toronto Star,
						December 26, 1987, sec. A8.
					</li>
					<li className="footnotes__item">
						Howell, Peter. “TTC Fighting on Two Fronts Province, Toronto Give It Rough Ride.” Toronto Star,
						March 12, 1990, sec. A1.
					</li>
					<li className="footnotes__item">
						Howell, Peter. “TTC Fighting on Two Fronts Province, Toronto Give It Rough Ride.” Toronto Star,
						March 12, 1990, sec. A1.
					</li>
					<li className="footnotes__item">
						Byers, Jim. “Huge Transit Expansion Announced for Metro.” Toronto Star, April 5, 1990, sec. A1.
					</li>
					<li className="footnotes__item">
						Byers, Jim. “Huge Transit Expansion Announced for Metro.” Toronto Star, April 5, 1990, sec. A1.
					</li>
				</ol>
			</div>
		);
	}
	renderText2() {
		function footnotes() {
			return (
				<ol className="footnotes__list">
					<li className="footnotes__item">
						Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning
						Committee. Network 2011. Toronto: Toronto Transit Commission, 1985; Mitchell Smith. “TTC Urges
						$2.7 Billion Expansion.” Toronto Star, October 1, 1985, sec. A19.
					</li>
					<li className="footnotes__item">Smith. “TTC Urges $2.7 Billion Expansion.” sec. A19.</li>
					<li className="footnotes__item">
						Michael Smith. “Province Considering New Subway TTC Says.” Toronto Star, April 5, 1987, sec. A3;
						Smith. “TTC Urges $2.7 Billion Expansion.” sec. A19.
					</li>
					<li className="footnotes__item">
						Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning
						Committee. Network 2011. Toronto: Toronto Transit Commission, 1985.
					</li>
					<li className="footnotes__item">
						Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning
						Committee. Network 2011.
					</li>
					<li className="footnotes__item">Ibid.</li>
					<li className="footnotes__item">Ibid, 14.</li>
					<li className="footnotes__item">Ibid, 14.</li>
					<li className="footnotes__item">Ibid, 59, A.3.</li>
					<li className="footnotes__item">Ibid, 26.</li>
					<li className="footnotes__item">
						Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning
						Committee. Downtown Rapid Transit Study. Toronto: Toronto Transit Commission, 1985
					</li>
					<li className="footnotes__item">
						Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning
						Committee. Downtown Rapid Transit Study, 52.
					</li>
					<li className="footnotes__item">
						Mitchell Smith. “Tonks Makes Pitch to Keep Subway Plan Alive for Eglinton.” Toronto Star, June
						24, 1986, sec. A6.
					</li>
					<li className="footnotes__item">
						Bob Mitchell. “Eglinton Transit Line Gets Top Billing in 2011.” Toronto Star. June 3, 1986, sec.
						W6.
					</li>
					<li className="footnotes__item">
						Mike Foster. “Metro's the Loser If Network 2011 Put Back on Shelf.” Toronto Star, February 17,
						1987, sec. N4.
					</li>
					<li className="footnotes__item">
						Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning
						Committee. Network 2011, 56.
					</li>
					<li className="footnotes__item">
						Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning
						Committee. Network 2011. 57.
					</li>
					<li className="footnotes__item">Ibid, 58.</li>
					<li className="footnotes__item">Ibid, 58.</li>
					<li className="footnotes__item">
						Doug Griffin. Canada – Ontario – North York – Yonge St, 1981, black and white digital, Toronto
						Star photo archive, Toronto, accessed January 7, 2020,
						https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0107107F&R=DC-TSPA_0107107F
					</li>
					<li className="footnotes__item">
						Alan Dunlop. Scar Town Centre, 1985, black and white digital, Toronto Star photo archive,
						Toronto, accessed January 7, 2020,
						https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0107997F&R=DC-TSPA_0107997F
					</li>
					<li className="footnotes__item">
						W R Code. “The Strength of the Centre: Downtown Offices and Metropolitan Decentralization Policy
						in Toronto.” Environment and Planning A: Economy and Space 15, no. 10 (1983): 1361.
						https://doi.org/10.1068/a151361.
					</li>
					<li className="footnotes__item">Code. “The Strength of the Centre,” 1361-1362.</li>
					<li className="footnotes__item">
						Michael Smith. “Ontario Likely to Derail Sheppard Subway, Officials Fear.” Toronto Star,
						December 26, 1987, sec. A8.
					</li>
					<li className="footnotes__item">
						Peter Howell. “TTC Fighting on Two Fronts Province, Toronto Give It Rough Ride.” Toronto Star,
						March 12, 1990, sec. A1
					</li>
					<li className="footnotes__item">
						Howell. “TTC Fighting on Two Fronts Province, Toronto Give It Rough Ride.” sec. A1.
					</li>
					<li className="footnotes__item">
						Jim Byers. “Huge Transit Expansion Announced for Metro.” Toronto Star, April 5, 1990, sec. A1.
					</li>
					<li className="footnotes__item">Byers. “Huge Transit Expansion Announced for Metro.” sec. A1.</li>
				</ol>
			);
		}
		const breakMark = '';
		return (
			<div className="body__text-con">
				<h1 className="body__text-h1 body__text-h11980">Network 2011 (1985)</h1>
				<h2 className="body__text-h2">Cancelled, evolved to Let’s Move (1990)</h2>
				<div className="mediumshow">
					<p className="body__text-p">
						<div className="column2 Sec1980adjust1">
							<div>
								Network 2011 was a 1985 plan by the Toronto Transit Com-mission for transit expansion,
								named for the target completion date of 2011. The plan focused on three new rapid
								transit lines: a subway along Sheppard Avenue from Downsview in the west to Scarborough
								City Centre in the east, a new rapid transit corridor on Eglinton Avenue West initially
								composed of express buses linking Mississauga to Eglinton West Station, and a
							</div>
							<div className="column2spacer" />
							<div>
								the study were then broken down into three more detailed studies offering further
								analysis of the ridership and feasibility of each of the corridors: the Sheppard/Finch
								Rapid Transit Study, the Downtown Rapid Transit Study, and the Eglinton West Rapid
								Transit Study.<sup>6</sup> The outcomes of these studies and the recommended alignments
								were combined to create Network 2011, which utilised the findings of the three studies
							</div>
						</div>
						<div className="flexrow flex">
							<div>
								downtown subway between approximately the intersection of Front Street and Spadina
								Avenue and Pape Station.<sup>1</sup> Furthermore, an extension of the Spadina line from
								Wilson Station to the Downsview Area would allow for transfers between the
								Yonge-University-Spadina line and the future Sheppard subway.<sup>2</sup> All-in-all,
								the plan would cost $2.7 billion, 25 per cent paid for by the Metro Toronto government
								and 75 per cent from the provincial government.<sup>3</sup>
								<br />
								<br />
								Planning for what became of Network 2011
							</div>
							<div className="blurb x1980Specialblurb">
								Network 2011 at its core was a transit plan that was planned to achieve the planning
								goals of Metro-politan Toronto and their objective of creating multiple central business
								districts within the city.
							</div>
							<div>
								to recommended alignments were combined to create Network 2011, which utilised the
								findings of the three studies to recommend suggested phases in constructing the plan
								according to Metro Toronto planning objectives. The Metro Toronto official plan of the
								time (Metroplan) called for the creation of a multi-centred urban structure within Metro
								Toronto, with the development of nodes which would act as major employment and activity
								centres besides downtown Toronto to encourage decentralisation.<sup>7</sup> As a result,
								the proposed Sheppard subway, which would
							</div>
						</div>
						<div className="column2">
							<div>
								began in 1982, with the release of the Accelerated Rapid Transit Study undertaken by
								Metro Toronto and the TTC.<sup>4</sup> The report, which studied four corridors for
								future rapid transit expansion including Eglinton, “Central Radial” (a route downtown
								via existing rail corridors), Sheppard, and the Finch hydro corridor, identified
								potential station, yard, and routing locations, as well as potential costs and impacts
								on the surrounding community and environment.<sup>5</sup> The findings of
							</div>
							<div className="column2spacer" />
							<div>
								connect two of the identified nodes, Scarborough City Centre and North York Centre, was
								identified as the priority of the Network 2011 plan.<sup>8</sup> A downtown subway that
								would aim to relieve the Yonge subway line would follow, followed by rapid transit on
								Eglinton West, which Network 2011 recommended to be implemented initially as a partially
								grade-separated busway that could eventually be upgraded to a subway.<sup>9</sup>
							</div>
						</div>
					</p>
				</div>
				<div className="mediumhide">
					<div>
						Network 2011 was a 1985 plan by the Toronto Transit Com-mission for transit expansion, named for
						the target completion date of 2011. The plan focused on three new rapid transit lines: a subway
						along Sheppard Avenue from Downsview in the west to Scarborough City Centre in the east, a new
						rapid transit corridor on Eglinton Avenue West initially composed of express buses linking
						Mississauga to Eglinton West Station, and a downtown subway between approximately the
						intersection of Front Street and Spadina Avenue and Pape Station.<sup>1</sup> Furthermore, an
						extension of the Spadina line from Wilson Station to the Downsview Area would allow for
						transfers between the Yonge-University-Spadina line and the future Sheppard subway.<sup>2</sup>{' '}
						All-in-all, the plan would cost $2.7 billion, 25 per cent paid for by the Metro Toronto
						government and 75 per cent from the provincial government.<sup>3</sup>
					</div>
					<div className="blurb x1980Specialblurb">
						Network 2011 at its core was a transit plan that was planned to achieve the planning goals of
						Metro-politan Toronto and their objective of creating multiple central business districts within
						the city.
					</div>
					<div>
						<p>
							Planning for what became of Network 2011 began in 1982, with the release of the Accelerated
							Rapid Transit Study undertaken by Metro Toronto and the TTC.<sup>4</sup> The report, which
							studied four corridors for future rapid transit expansion including Eglinton, “Central
							Radial” (a route downtown via existing rail corridors), Sheppard, and the Finch hydro
							corridor, identified potential station, yard, and routing locations, as well as potential
							costs and impacts on the surrounding community and environment.<sup>5</sup> The findings of
							the study were then broken down into three more detailed studies offering further analysis
							of the ridership and feasibility of each of the corridors: the Sheppard/Finch Rapid Transit
							Study, the Downtown Rapid Transit Study, and the Eglinton West Rapid Transit Study.
							<sup>6</sup> The outcomes of these studies and the recommended alignments were combined to
							create Network 2011, which utilised the findings of the three studies to recommended
							alignments were combined to create Network 2011, which utilised the findings of the three
							studies to recommend suggested phases in constructing the plan according to Metro Toronto
							planning objectives.
						</p>
						<p>
							<br />
							The Metro Toronto official plan of the time (Metroplan) called for the creation of a
							multi-centred urban structure within Metro Toronto, with the development of nodes which
							would act as major employment and activity centres besides downtown Toronto to encourage
							decentralisation.<sup>7</sup> As a result, the proposed Sheppard subway, which would connect
							two of the identified nodes, Scarborough City Centre and North York Centre, was identified
							as the priority of the Network 2011 plan.<sup>8</sup> A downtown subway that would aim to
							relieve the Yonge subway line would follow, followed by rapid transit on Eglinton West,
							which Network 2011 recommended to be implemented initially as a partially grade-separated
							busway that could eventually be upgraded to a subway.<sup>9</sup>
						</p>
					</div>
				</div>
				<ImgTextBelow
					src="/images/1980B.jpg"
					text={() => (
						<span>
							The routing of the proposed downtown subway was a key concern of the Downtown Rapid Transit
							Study, a precursor document of Network 2011. The main concern for the downtown subway was to
							relieve pressure off the Yonge subway line, which would otherwise exceed design capacity if
							unbuilt.<sup>10</sup> A variety of routings were considered, including a subway along Bay
							Street from Bay Station on the Bloor-Danforth line to Union Station on the Yonge line, but
							the majority of alignments created a “J” or “U” shape.<sup>11</sup> In the end, a routing
							along Pape-Eastern-Railway Corridor-Front was recommended, with the western terminus located
							at approximately Front Street and Spadina Avenue.<sup>12</sup>
						</span>
					)}
				/>
				<TwoColumn
					text={() => (
						<span>
							Approved by Metro Toronto Council by 1986, the plan was to be implemented in phases
							according to the Network 2011 plan, with council deciding on a subway on Sheppard Avenue
							from Yonge Street to Victoria Park Avenue as the priority, much to the dismay of municipal
							officials in Etobicoke, York, and Peel Region who wanted rapid transit on Eglinton Avenue
							first.<sup>13</sup> Officials from the three municipal bodies were further appalled at the
							plan’s commitment to construct only a busway on Eglinton, rather than a light rail line or a
							subway, with the plan only specifying that it could be replaced with a subway – eventually.
							<sup>14</sup> The plan saw further opposition from surrounding municipal and regional
							governments including York, Peel, and Durham Regions who sought funding for their
							transportation plans centred around the then proposed Highway 407, and who saw Network 2011
							as competition for such funding.<sup>15</sup>
						</span>
					)}
				></TwoColumn>
				<ImgTextRightBelow
					img="/images/1980C.jpg"
					title={() => (
						<h1>
							North York Centre<span className="mediumshow">, Left</span>{' '}
						</h1>
					)}
					text={{
						right: () => (
							<p className="italy">
								The planned Sheppard subway, when fully built, was planned to connect two emerging
								central business districts, North York Centre and Scarborough City Centre. Pictured to
								the left is North York Centre, with the intersection and western terminus of the first
								phase of the subway, Sheppard Avenue and Yonge Street, at the top right.<sup>20</sup>
							</p>
						),
						below: () => (
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
						),
					}}
				></ImgTextRightBelow>
				<ImgTextRightBelow
					img="/images/1980D.jpg"
					title={() => (
						<h1>
							Scarborough City Centre<span className="mediumshow">, Left</span>{' '}
						</h1>
					)}
					text={{
						right: () => <span></span>,
						below: () => (
							<span>
								Scarborough City Centre, planned eventual terminus of the Sheppard subway and emerging
								central business district.<sup>21</sup> Planning in Metro Toronto at the time
								de-emphasised growth in the downtown, taking action such as restricting office
								development to protect adjacent communities and reduce the pressure of redevelopment for
								historic structures within them.
								<sup>22</sup> New central business districts such as Scarborough City Centre were
								intended to receive the majority of new office developments, something planners hoped
								would decrease the pressure of large amounts of commuters headed downtown in the peak
								direction by encouraging reverse commuting.<sup>23</sup>
							</span>
						),
					}}
				></ImgTextRightBelow>
				<TwoColumn
					text={() => (
						<span>
							Ultimately, difficulties in funding the plan quickly derailed the timelines proposed in the
							plan. The then-Liberal provincial government – who was not involved in the development of
							the Network 2011 plan, baulked at the $75 million a year from the province necessary for a
							full build-out and decided to conduct a full study of all transit proposals in the province.
							<sup>24</sup> Completed in May of 1988, the report downgraded funding priority of the
							Sheppard subway in favour of expanding GO Transit services and extending the Spadina line
							towards York Region.<sup>25</sup> By then, the cost for completing a Sheppard subway from
							Yonge Street to Victoria Park Avenue had more than doubled from a 1985 estimate of $500
							million to an estimate of $1.1 billion in 1989.<sup>26</sup> Come 1990 – an election year,
							the (eventually defeated) Liberals kept the Sheppard subway on life support by supporting
							the project only if a portion of the project could be paid for through private sector
							investment and without disrupting funding for their transit plan, dubbed “Let’s Move”.
							<sup>27</sup> Also retained was plans for rapid transit on Eglinton in the form of a busway
							to Peel Region but a downtown subway and a complete Sheppard subway from Downsview to
							Scarborough City Centre were dropped.<sup>28</sup>
							<br />
							<br />
							Although much of what Network 2011 proposed was never built in the timeframes proposed,
							elements of the plan were highly influential to the plans of subsequent provincial and
							municipal governments and remain so. The Sheppard subway, a key element of the Network 2011
							plan was funded several years later under the Rapid Transit Expansion Program and opened in
							2003, ten years after the original proposed opening date of 1993 detailed in Network 2011.
							Meanwhile today, plans for a downtown subway continue to be studied while rapid transit on
							Eglinton has taken the form of light rail, currently under-construction and planned for a
							2021 opening.
						</span>
					)}
				/>
				<h1 className="body__text-h1">Footnotes</h1>
				{footnotes()}
			</div>
		);
	}
	renderText = () => {
		return (
			<div>
				{this.renderButton()}
				{this.state.toggled}
				{this.state.toggled ? this.renderText1() : this.renderText2()}
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
