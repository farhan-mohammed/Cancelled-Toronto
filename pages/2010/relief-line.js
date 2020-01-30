import React, { Component } from 'react';
import WebsiteLayout from '../../components/wrapper/mainSite';
const images = [ '/images/2010-RF_1.png', '/images/2010-RF_2.png', '/images/2010-RF_3.jpg', '/images/2010-RF_4.jpg' ];
import ImgTextRightBelow from '../../components/templates/imgTextRightBelow';
import TwoColumn from '../../components/content/TwoColumn';
export default class ReliefLine extends Component {
	renderView() {
		return (
			<div className="body__img-con">
				<img src={images[0]} alt="" className="body__img" style={{ margin: '10px 0' }} />
			</div>
		);
	}
	renderFootnotes() {
		return (
			<ol className="footnotes__list">
				<li className="footnotes__item">
					Canada. Ontario. City of Toronto. Transit Expansion Program – Status Update. Toronto: City of
					Toronto, 2019, https://www.toronto.ca/legdocs/mmis/2019/ex/bgrd/backgroundfile-131525.pdf
				</li>
				<li className="footnotes__item">
					“Ten-to-One Vote Given TTC Project.” The Globe and Mail. January 2, 1946, sec. 1.
				</li>
				<li className="footnotes__item">“Ten-to-One Vote Given TTC Project.” sec. 1.</li>
				<li className="footnotes__item">
					“City Can't Have Subway Plans Till Next Year.” The Globe and Mail. May 27, 1955, sec. 5.
				</li>
				<li className="footnotes__item">
					Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning
					Committee. Network 2011. Toronto: Toronto Transit Commission, 1985.
				</li>
				<li className="footnotes__item">
					Jim Byers. “Huge Transit Expansion Announced for Metro.” Toronto Star, April 5, 1990, sec. A1.
				</li>
				<li className="footnotes__item">
					Canada. Ontario. City of Toronto. Transit Expansion Program – Status Update; Canada. Ontario.
					Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network
					2011. Toronto: Toronto Transit Commission, 1985.
				</li>
				<li className="footnotes__item">
					Canada. Ontario. Metrolinx. The Big Move. Toronto: Ontario Government, 2008.
				</li>
				<li className="footnotes__item">Canada. Ontario. Metrolinx. The Big Move.</li>
				<li className="footnotes__item">
					Canada. Ontario. Metrolinx. The Big Move Baseline Monitoring Report. Toronto: Ontario Government,
					2013.
				</li>
				<li className="footnotes__item">
					Canada. Ontario. City of Toronto. City Planning Division. Developing Toronto’s Transit Network Plan:
					Phase 1 – Relief Line Project Assessment. Toronto: City of Toronto, 2016; Canada. Ontario. City of
					Toronto. Toronto Transit Commission. Downtown Rapid Transit Expansion Study. Toronto: Toronto
					Transit Commission, 2012.
				</li>
				<li className="footnotes__item">
					Canada. Ontario. City of Toronto. Transit Expansion Program – Status Update.
				</li>
				<li className="footnotes__item">
					Canada. Ontario. City of Toronto. Transit Expansion Program – Status Update.
				</li>
				<li className="footnotes__item">Ibid.</li>
				<li className="footnotes__item">Ibid.</li>
				<li className="footnotes__item">Ibid.</li>
				<li className="footnotes__item">Ibid.</li>
				<li className="footnotes__item">
					Ben, Spurr. “Relief Line Subway Riders' Priority, Poll Shows: Scarborough the Exception, as 44% of
					Residents There Want Extension to Their Area.” Toronto Star, February 10, 2018, sec. A18.
				</li>
				<li className="footnotes__item">
					Spurr. “Relief Line Subway Riders' Priority.” Toronto Star, sec. A18.
				</li>
				<li className="footnotes__item">
					Ben, Spurr. “Toronto Will Get Billions for Transit: $9B Funding Boost over 10 Years after Province
					Agrees to Match Ottawa's Infrastructure Plan.” Toronto Star, March 15, 2018, sec. A1.
				</li>
				<li className="footnotes__item">
					Jeff, Gray. “Ontario Government Commits $150-Million for Planning of Downtown Relief Line.” The
					Globe and Mail. June 2, 2016, sec. A5.
				</li>
				<li className="footnotes__item">
					Jennifer, Pagliaro. “Council Backs Mayor's Road Tolls: Plan Could Begin as Soon as 2019 and Be Fully
					in Place by 2024.” Toronto Star, December 14, 2016, sec. GT1.
				</li>
				<li className="footnotes__item">
					David, Rider, and Pagliaro Jennifer. “Livid Mayor Rips Province's U-Turn on Tolls: 'Shortsighted'
					Decision Is the Latest Example of Dismissive Treatment by Queen's Park.” Toronto Star, January 28,
					2017, sec. A16.
				</li>
				<li className="footnotes__item">
					Sean Marshall. Moss Park and Regent Park, 2018, colour digital, Flickr, Toronto, accessed January
					19, 2020, https://www.flickr.com/photos/7119320@N05/38860072644/in/photostream/. Creative Commons
					License (CC BY-NC 2.0), https://creativecommons.org/licenses/by-nc/2.0/
				</li>
				<li className="footnotes__item">
					Ben, Spurr. “Minister Understands the Need for Relief: Transportation Head Says Opening Subway Line
					before Yonge Extension 'Makes Sense'.” Toronto Star, December 2, 2018, sec. A4.
				</li>
				<li className="footnotes__item">
					Ben, Spurr. “Province Seeks to Upend Subway Plans: Letters to City Signal Radical Changes to Relief
					Line, Eglinton LRT as Part of Upload Scheme.” Toronto Star, March 27, 2019, sec. A1.
				</li>
				<li className="footnotes__item">
					Canada. Ontario. Infrastructure Ontario and Metrolinx. Ontario Line Initial Business Case. Toronto:
					Ontario Government, 2019,
					http://www.metrolinx.com/en/regionalplanning/projectevaluation/benefitscases/20190725_Ontario_Line_IBC.PDF
				</li>
				<li className="footnotes__item">
					Canada. Ontario. Infrastructure Ontario and Metrolinx. Ontario Line Initial Business Case.
				</li>
				<li className="footnotes__item">Ibid.</li>
				<li className="footnotes__item">Ibid.</li>
				<li className="footnotes__item">Ibid.</li>
				<li className="footnotes__item">
					Ben, Spurr. “Over the Don and under Fort York: Building the 15-Kilometre Ontario Line Could Get
					Tricky, Engineering Experts Say.” Toronto Star, April 16, 2019, sec. GT1.
				</li>
				<li className="footnotes__item">
					Ben, Spurr. “Ontario Line Plan Shows New Downtown Route: Path Diverges Further from Relief Line
					Plans, Casting Doubt on Province's Completion Date.” Toronto Star, July 23, 2019, sec. A1.
				</li>
				<li className="footnotes__item">
					Ben, Spurr. “Ford Vows to Guarantee Funding for Ambitious Subway, LRT Expansion: Redrawing the Map.”
					Toronto Star, April 11, 2019, sec. A1.
				</li>
				<li className="footnotes__item">
					Ben, Spurr. “No Relief in Sight: Despite Overcrowding on the TTC, a Long-Planned Downtown Relief
					Line to Ease Pressure on the Yonge Subway Is Still Years Away from Being Built.” Toronto Star,
					February 4, 2018, sec. A1; Canada. Ontario. Infrastructure Ontario and Metrolinx. Ontario Line
					Initial Business Case; Rayson Ho. Bloor Subway Station 2, 2010, colour digital, Wikimedia Commons,
					Toronto, accessed January 19, 2020, https://commons.wikimedia.org/wiki/File:BloorSubwayStation2.jpg.
					Public Domain.
				</li>
			</ol>
		);
	}
	renderBody() {
		const paraOne = () => (
			<p>
				Ultimately, the Relief Line was necessary to any further transit expansion in Toronto and the
				surrounding region, with the project’s effect on relieving the capacity strains on existing downtown
				subway infrastructure a prerequisite for projects such as extending the Yonge subway northwards to
				Richmond Hill.<sup>25</sup> After the election of a new Progressive Conservative provincial government,
				existing transit proposals in Toronto were studied, resulting in key changes proposed to the Relief
				Line.<sup>26</sup> <br /> <br />The new line, designated the Ontario Line, would roughly follow the same
				corridor as the Relief Line but with extensions to the north-east towards the Eglinton LRT’s Science
				Centre Station and south-west towards Exhibition GO Station.<sup>27</sup> A different alignment would be
				utilised, with the Ontario Line running from Exhibition GO Station and following the rail corridor
				eastwards before turning northwards on Bathurst Street, then westwards onto Queen Street.<sup>28</sup>{' '}
				From there, the line would run through the downtown core with interchanges to the existing
				Yonge-University line before veering south from Queen Street at approximately Parliament Street towards
				the West Don Lands neighbourhood before curving east to follow the rail corridor to Pape Avenue.<sup>29</sup>{' '}
				Then, the subway would follow Pape Avenue to Millwood Road, where it would cross the Don Valley and
				follow Don Mills Road through the dense neighbourhoods of Thorncliffe Park and Flemingdon Park to the
				currently under construction Science Centre Station, with a total of 15 stations along the entire line
				and only follow approximately three kilometres of the Relief Line’s route.<sup>30</sup> Additionally,
				smaller, lighter, and automated trains that could run in smaller headways would be used instead of TTC
				subway rolling stock, making the proposed line independent of the existing TTC subway system.<sup>31</sup>{' '}
				<br /> <br />Cost- and time-savings were touted by building above-ground in several areas including a
				crossing over the Don River, as well as following the Lakeshore East and Stouffville lines rail corridor
				instead of tunnelling underground.<sup>32</sup> The line would cost an estimated $10.9 billion and
				utilise a private-public partnership procurement model.<sup>33</sup> <br /> <br />Expected to open in
				2027, the Ontario Line was the centrepiece of the new government’s transit plan, and a precondition for
				the government’s other transit projects including the extension of the Yonge subway to Richmond Hill, a
				three stop extension of the Bloor-Danforth line through Scarborough, and an extension of the
				under-construction Eglinton LRT to Pearson Airport, all of which would add additional riders to a
				strained Yonge subway without the Ontario Line.<sup>34</sup> Although the Relief Line was effectively
				cancelled with the April 2018 announcement, the Ontario Line is expected to fulfill many of the same
				objectives: providing relief to the over-capacity Yonge subway, promoting social equity by bringing
				rapid transit to underserviced neighbourhoods, and bringing connectivity with a variety of other transit
				initiatives.
			</p>
		);
		return (
			<div className="body__text-con">
				<h1 className="body__text-h1">Relief Line (2016)</h1>
				<h2 className="body__text-h2">Cancelled in 2019, replaced with Ontario Line</h2>
				<div className="mediumshow">
					<div className="body__text-p">
						<div className="column2 Sec1980adjust1">
							<div>
								The Relief Line project was a proposed 7.5-kilometre subway line running from Osgoode
								Station in the south-west to Pape Station in the north-east, connecting the busy
								Yonge-University line with the Bloor-Danforth line.<sup>1</sup>The necessity for another
								subway line leading into the central downtown area had been a crucial part of Toronto
								transit plans for over half a century, with the first concrete plans for east-west
								downtown rapid transit
							</div>
							<div className="column2spacer" />
							<div>
								along Queen Street through the downtown, with eight station stops, three of those
								interchange stations.<sup>7</sup>
								<br />
								<br />
								The revival of planning for a downtown subway began with the 2008 publication of
								Metrolinx’s regional transportation plan, the Big Move, which foresaw the need for a “U”
								shaped subway running from an undetermined station along the Danforth section of
							</div>
						</div>
						<div className="flexrow flex">
							<div>
								plans for over half a century, with the first concrete plans for east-west downtown
								rapid transit proposed by the TTC in 1946 as part of a subway plan referendum held
								during the 1946 Toronto municipal elections.<sup>2</sup> The approved proposal
								envisioned an underground streetcar line along Queen Street with tracks connecting to
								surface streetcar routes at Trinity Park in the west and Pape Street in the east.
								<sup>3</sup> Planned to be completed after the Yonge subway approved in the same
								referendum, planners shifted their focus on an east-west route on Bloor
							</div>
							<div className="blurb x1980Specialblurb">
								The Relief Line was not a new concept. Rapid transit through the downtown core had seen
								multiple iterations throughout history, stemming back to the first serious efforts to
								build rapid transit in Toronto.
							</div>
							<div>
								the Bloor-Danforth line, south-west through downtown with connections with the Yonge and
								University subways, and north-west towards an undetermined station along the western
								section of the Bloor-Danforth line.<sup>8</sup> <br /> <br />Planned to be implemented
								within 25 years, plans for the line were accelerated as support from municipal and
								transit officials grew, and as capacity issues along the existing Yonge subway which the
								proposed line would help relieve worsened.<sup>9</sup> Updates to the regional
								transportation plan were undertaken in 2013 which reprioritized the core section of the
							</div>
						</div>
						<div className="column2">
							<div>
								Street instead.<sup>4</sup> <br /> <br />More recently in 1985, the Downtown Rapid
								Transit Study as part of Network 2011 studied a subway from Pape Station in the
								north-east to approximately the intersection of Front Street and Spadina Avenue
								utilising the rail-corridors and Front Street as the alignment.<sup>5</sup> The planned
								project, poised to provide relief to the already overburdened Yonge subway line, was
								eventually cancelled as other projects took priority.<sup>6</sup> The approved 2016
								Relief Line proposal shared many similarities with the one presented in Network 2011,
								but ran
							</div>
							<div className="column2spacer" />
							<div>
								project running from a station along the University subway to a station along the
								Bloor-Danforth line to be completed within 15 years.<sup>10</sup>
								<br /> <br />The proposed subway, dubbed the Downtown Relief Line because of its
								projected effect on providing relief to capacity strains on existing subway
								infrastructure, underwent studies for potential alignments starting in 2012 with the
								TTC’s Downtown Rapid Transit Expansion Study, with further refinement in 2014 with the
								start of the Relief Line Project Assessment undertaken by the City of Toronto and the
								TTC.<sup>11</sup>
							</div>
						</div>
					</div>
				</div>
				<div className="mediumhide">
					<div>
						The Relief Line project was a proposed 7.5-kilometre subway line running from Osgoode Station in
						the south-west to Pape Station in the north-east, connecting the busy Yonge-University line with
						the Bloor-Danforth line.<sup>1</sup>The necessity for another subway line leading into the
						central downtown area had been a crucial part of Toronto transit plans for over half a century,
						with the first concrete plans for east-west downtown rapid transit proposed by the TTC in 1946
						as part of a subway plan referendum held during the 1946 Toronto municipal elections.
						<sup>2</sup> The approved proposal envisioned an underground streetcar line along Queen Street
						with tracks connecting to surface streetcar routes at Trinity Park in the west and Pape Street
						in the east.<sup>3</sup> Planned to be completed after the Yonge subway approved in the same
						referendum, planners shifted their focus on an east-west route on Bloor Street instead.
						<sup>4</sup> <br /> <br />More recently in 1985, the Downtown Rapid Transit Study as part of
						Network 2011 studied a subway from Pape Station in the north-east to approximately the
						intersection of Front Street and Spadina Avenue utilising the rail-corridors and Front Street as
						the alignment.
						<sup>5</sup> The planned project, poised to provide relief to the already overburdened Yonge
						subway line, was eventually cancelled as other projects took priority.<sup>6</sup> The approved
						2016 Relief Line proposal shared many similarities with the one presented in Network 2011, but
						ran along Queen Street through the downtown, with eight station stops, three of those
						interchange stations.<sup>7</sup>
					</div>
					<div className="blurb x1980Specialblurb">
						The Relief Line was not a new concept. Rapid transit through the downtown core had seen multiple
						iterations throughout history, stemming back to the first serious efforts to build rapid transit
						in Toronto.
					</div>
					<div>
						The revival of planning for a downtown subway began with the 2008 publication of Metrolinx’s
						regional transportation plan, the Big Move, which foresaw the need for a “U” shaped subway
						running from an unnamed station along the Danforth section of the Bloor-Danforth line,
						south-west through the downtown with connections with the Yonge and University subways, and
						north-west towards an unnamed station along the western section of the Bloor-Danforth line.
						<sup>8</sup> <br /> <br />Planned to be implemented within 25 years, plans for the line were
						accelerated as support from municipal and transit officials grew, and as capacity issues along
						the existing Yonge subway which the proposed line would help relieve worsened.<sup>9</sup>{' '}
						Updates to the regional transportation plan were undertaken in 2013 which reprioritized the core
						section of the project running from a station along the University subway to a station along the
						Bloor-Danforth line to be completed within 15 years.<sup>10</sup> <br /> <br />The proposed
						subway, dubbed the Downtown Relief Line because of its projected effect on providing relief to
						capacity strains on existing subway infrastructure, underwent studies for potential alignments
						starting in 2012 with the TTC’s Downtown Rapid Transit Expansion Study, with further refinement
						in 2014 with the start of the Relief Line Project Assessment undertaken by the City of Toronto
						and the TTC.<sup>11</sup>
					</div>
				</div>
				<div className="body__img-con">
					<img src={images[1]} alt="" className="body__img" />
				</div>

				<div className="column2 RFpadding">
					<div>
						A breakthrough in the planning of the Relief Line came in March 2016, with the identification
						and approval of a preferred corridor by Toronto city council.<sup>12</sup> The corridor, running
						from Pape Station to downtown Toronto using Pape Avenue and Queen or Richmond Streets was chosen
						because of its positive effects on several aspects considered: serving a wide range of
						destinations, connectivity with other transit initiatives, promotion of social equity, and
						lowest potential cost.<sup>13</sup> <br /> <br />An alignment within the corridor was selected
						and approved by
						<div className="RFsec1 mediumshow">
							<div className="blurb RFSpecialblurb mediumshow">
								Network 2011 at its core was a transit plan that was planned to achieve the planning
								goals of Metro-politan Toronto and their objective of creating multiple central business
								districts within the city.
							</div>
							<div className="RFsec1son RFsec1sonmd">
								council in May 2017, and Queen Street and stations at Osgoode Station, Queen Station,
								Sherbourne Street, Sumach Street, Broadview Avenue, Carlaw Avenue, Gerrard Street, and
								Pape Station.<sup>14</sup> Besides interchanges with the Yonge-University and
								Bloor-Danforth lines at the existing Osgoode, Queen, and Pape Stations, stations with
								connections to future SmartTrack and GO Regional Express Rail services were
							</div>
						</div>
						<span className="mediumhide">
							{' '}
							council in May 2017, and Queen Street and stations at Osgoode Station, Queen Station,
							Sherbourne Street, Sumach Street, Broadview Avenue, Carlaw Avenue, Gerrard Street, and Pape
							Station.<sup>14</sup> Besides interchanges with the Yonge-University and Bloor-Danforth
							lines at the existing Osgoode, Queen, and Pape Stations, stations with connections to future
							SmartTrack and GO Regional Express Rail services were{' '}
						</span>
						planned at stations at Broadview Avenue and Gerrard Street.<sup>15</sup> <br /> <br />In
						addition to the downtown portion of the Relief Line project, a northern extension from Pape
						Station began planning in 2017 with a partnership between Metrolinx and the TTC towards
						developing an initial business case for the project, dubbed the Relief Line North<sup>16</sup>{' '}
						Corridors studied in the initial phases of planning included options on Bayview Avenue, Leslie
						Street, Don Mills Road, and Victoria Park Avenue, with proposed connections to the upcoming
						Eglinton LRT, the Sheppard subway, the proposed Sheppard East LRT, and the Yonge{' '}
						<span className="mediumhide">
							subway depending on the corridor chosen.<sup>17</sup>
						</span>
						<div className="blurb x1980Specialblurb mediumhide">
							Network 2011 at its core was a transit plan that was planned to achieve the planning goals
							of Metro-politan Toronto and their objective of creating multiple central business districts
							within the city.
						</div>
					</div>
					<div className=" column2spacer" />
					<div>
						<span className="mediumshow">
							subway depending on the corridor chosen.<sup>17</sup>
							<br />
						</span>
						Concerns over the Relief Line were primarily related to its high costs, and where the project
						would fit within a crowded pool of other Toronto transit projects contending for funding.
						<sup>18</sup> City residents in the borough of Scarborough were especially critical to the
						Relief Line, with a plurality of residents supporting the one-stop extension of the
						Bloor-Danforth line to Scarborough City Centre as the top transit priority for the city in 2016.
						<sup>19</sup> The high cost of the project, estimated at $6.8 billion in May of 2017, was not
						fully funded by the time the project was cancelled in April of 2019, while the controversial
						$3.2 billion one-stop Scarborough subway extension was, or was nearing it.<sup>20</sup>
						<br />
						<br />
						Although both provincial and federal administrations had thrown their support towards the Relief
						Line project as far as providing piecemeal bits of funding towards its planning and design work,
						the project was left unfunded until it was replaced with the Ontario Line project in April of
						2019.<sup>21</sup> The relative helplessness for the City of Toronto to fund transit priorities
						without significant provincial and federal funding was exacerbated by the revenue tools
						available to the city – excluding unpopular suggestions to increase property taxes.<sup>22</sup>{' '}
						An attempt by the City of Toronto to toll its municipal expressways including the Gardiner
						Expressway and Don Valley Parkway – with revenues going towards maintaining tolled routes and
						funding transit, was quashed by the provincial government, which recognized the political
						unpopularity of such tolls in seat-rich suburban communities outside Toronto.<sup>23</sup>
					</div>
				</div>
				<ImgTextRightBelow
					img={images[2]}
					title={() => <span>Moss Park and Regent Park Communities</span>}
					text={{
						right: () => (
							<span>
								A Relief Line corridor on Queen Street was recommended over one on King Street, one
								which would intersect with the heart of the Financial District and was forecasted to
								have higher ridership. Among the reasons – valuable city-building opportunities at
								improving social equity for historically disadvantaged neighbourhoods including Moss
								Park and Regent Park.
							</span>
						)
					}}
				/>
				<TwoColumn text={paraOne} />
				<ImgTextRightBelow
					img={images[3]}
					title={() => <span>Yonge Line Crowding</span>}
					text={{
						right: () => (
							<span>
								The Relief Line was planned to divert ridership away from the over-capacity Yonge
								subway, which on an average weekday rush-hour carries 28,000 to 30,000 people per hour
								in the peak direction, higher than the current scheduled capacity of 28,000 people per
								hour. The proposal that replaced it, the Ontario Line, is expected to divert even more
								ridership from the Yonge subway because of its northern extension from Pape Station to
								the future Science Centre Station on Eglinton Avenue.<sup>35</sup>
							</span>
						)
					}}
				/>
				<h1 className="body__text-h1 footnotes-h1">Footnotes</h1>
				{this.renderFootnotes()}
			</div>
		);
	}
	render() {
		return (
			<WebsiteLayout>
				<div className="body-con">
					<div>{this.renderView()}</div>
					<div>{this.renderBody()}</div>
				</div>
			</WebsiteLayout>
		);
	}
}
