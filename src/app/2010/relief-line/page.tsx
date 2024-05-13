import React from 'react';
import footnotes from './footnotes';
import FootNotes from '@/components/FootNotes';
import WebColumn from '@/components/WebColumn';
import { ItemType } from '@/types/WebColumn/Item';
import Image from "next/legacy/image";
import MainImage from '@/images/headerimages/Relief Line Map.png';
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Relief Line (2016): Cancelled in 2019, Evolved into Ontario Line.',
    openGraph: {
        images: ['/images/Relief Line/Relief Line Map.png'],
        title: 'Relief Line (2016): Cancelled in 2019, Evolved into Ontario Line.',
    },
};
const images = [
    '/images/Relief Line/Relief Line Map.png',
    '/images/Relief Line/Relief Line Alignment.jpg',
    '/images/Relief Line/Moss Park and Regent Park.jpg',
    '/images/Relief Line/Bloor-Yonge Station.jpg',
];

export default function Page() {
    function renderFootnotes() {
        return <FootNotes footnotes={footnotes} />;
    }
    const renderBody = () => {
        return (
            <div>
                <WebColumn
                    left={[
                        {
                            type: ItemType.Logo,
                            // /images/ already saved
                            src: 'Relief Line/Relief Line Logo.png',
                        },
                        { type: ItemType.MainTitle, title: 'Relief Line (2016)' },
                        {
                            type: ItemType.MainSubtitle,
                            title: 'Cancelled in 2019',
                        },
                        {
                            type: ItemType.MainSubtitle,
                            title: 'Evolved into ontario line',
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The Relief Line was not a new concept. Rapid transit through the
                                    downtown core had seen multiple iterations throughout history,
                                    stemming back to the first serious efforts to build rapid
                                    transit in Toronto. The proposed line would run from Osgoode
                                    Station, along Queen Street, before bending southwards to serve
                                    the proposed Unilever/East Harbour development in the east side
                                    of the city’s downtown. Then, it would curve north on Carlaw
                                    Avenue before shifting onto Pape Street, finally connecting with
                                    the Bloor-Danforth subway at Pape Station.
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    The Relief Line project was a proposed 7.5-kilometre subway line
                                    running from Osgoode Station in the south-west to Pape Station
                                    in the north-east, connecting the busy Yonge-University line
                                    with the Bloor-Danforth line.<sup>1</sup> The necessity for
                                    another subway line leading into the central downtown area had
                                    been a crucial part of Toronto transit plans for over half a
                                    century, with the first concrete plans for east-west downtown
                                    rapid transit proposed by the TTC in 1946 as part of a subway
                                    plan referendum held during the 1946 Toronto municipal
                                    elections.<sup>2</sup> The approved proposal envisioned an
                                    underground streetcar line along Queen Street with tracks
                                    connecting to surface streetcar routes at Trinity Park in the
                                    west and Pape Street in the east.<sup>3</sup> Planned to be
                                    completed after the Yonge subway approved in the same
                                    referendum, planners shifted their focus on an east-west route
                                    on Bloor Street instead.<sup>4</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Then, in 1985, the Downtown Rapid Transit Study as part of
                                    Network 2011 studied a subway from Pape Station in the
                                    north-east to approximately the intersection of Front Street and
                                    Spadina Avenue utilising the rail-corridors and Front Street as
                                    the alignment.<sup>5</sup> The planned project, poised to
                                    provide relief to the already overburdened Yonge subway line,
                                    was eventually cancelled as other projects took priority.
                                    <sup>6</sup> The approved 2016 Relief Line proposal shared many
                                    similarities with the one presented in Network 2011, but ran
                                    along Queen Street through the downtown, with eight station
                                    stops, three of those interchange stations.
                                    <sup>7</sup>
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    oneColumn
                    center={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Approved Alignment',
                        },
                        {
                            type: ItemType.Image,
                            src: 'Relief Line/Relief Line Alignment.jpg',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The approved Relief Line alignment would be 7.5 kilometres long
                                    and run from Pape Station in the north-east to Osgoode Station
                                    in the south-west, with eight stations in total.
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    rightOnly
                    left={[]}
                    right={[
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    The revival of planning for a downtown subway began with the
                                    2008 publication of Metrolinx’s regional transportation plan,
                                    the Big Move, which foresaw the need for a “U” shaped subway
                                    running from an undetermined station along the Danforth section
                                    of the Bloor-Danforth line, south-west through downtown with
                                    connections with the Yonge and University subways, and
                                    north-west towards an undetermined station along the western
                                    section of the Bloor-Danforth line.<sup>8</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Planned to be implemented within 25 years, plans for the line
                                    were accelerated as support from municipal and transit officials
                                    grew, and as capacity issues along the existing Yonge subway
                                    which the proposed line would help relieve worsened.
                                    <sup>9</sup> Updates to the regional transportation plan were
                                    undertaken in 2013 which reprioritized the core section of the
                                    project running from a station along the University subway to a
                                    station along the Bloor-Danforth line to be completed within 15
                                    years.<sup>10</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    The proposed subway, dubbed the Downtown Relief Line because of
                                    its projected effect on providing relief to capacity strains on
                                    existing subway infrastructure, underwent studies for potential
                                    alignments starting in 2012 with the TTC’s Downtown Rapid
                                    Transit Expansion Study, with further refinement in 2014 with
                                    the start of the Relief Line Project Assessment undertaken by
                                    the City of Toronto and the TTC.
                                    <sup>11</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    A breakthrough in the planning of the Relief Line came in March
                                    2016, with the identification and approval of a preferred
                                    corridor by Toronto city council.
                                    <sup>12</sup> The corridor, running from Pape Station to
                                    downtown Toronto using Pape Avenue and Queen or Richmond Streets
                                    was chosen because of its positive effects on several aspects
                                    considered: serving a wide range of destinations, connectivity
                                    with other transit initiatives, promotion of social equity, and
                                    lowest potential cost.
                                    <sup>13</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    An alignment within the corridor was eventually selected and
                                    approved by council in May 2017, with a line running from Pape
                                    Station to Osgoode Station via Pape Avenue, Carlaw Avenue,
                                    Eastern Avenue, and Queen Street and stations at Osgoode
                                    Station, Queen Station, Sherbourne Street, Sumach Street,
                                    Broadview Avenue, Carlaw Avenue, Gerrard Street, and Pape
                                    Station.<sup>14</sup> Besides interchanges with the
                                    Yonge-University and Bloor-Danforth lines at the existing
                                    Osgoode, Queen, and Pape Stations, stations with connections to
                                    future SmartTrack and GO Regional Express Rail services were
                                    planned at stations at Broadview Avenue and Gerrard Street.
                                    <sup>15</sup>
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Moss park and regent Park',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    A Relief Line corridor on Queen Street was recommended over one
                                    on King Street, one which would intersect with the heart of the
                                    Financial District and was forecasted to have higher ridership.
                                    Among the reasons – valuable city-building opportunities at
                                    improving social equity for historically disadvantaged
                                    neighbourhoods including Moss Park and Regent Park.<sup>16</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    “Moss Park and Regent Park” by Sean Marshall is licensed under
                                    CC BY-NC 2.0
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,

                            // adjust: { hide: true },
                            src: 'Relief Line/Moss Park and Regent Park.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    In addition to the downtown portion of the Relief Line project,
                                    a northern extension from Pape Station began planning in 2017
                                    with a partnership between Metrolinx and the TTC towards
                                    developing an initial business case for the project, dubbed the
                                    Relief Line North.<sup>17</sup> Corridors studied in the initial
                                    phases of planning included options on Bayview Avenue, Leslie
                                    Street, Don Mills Road, and Victoria Park Avenue, with proposed
                                    connections to the upcoming Eglinton LRT, the Sheppard subway,
                                    the proposed Sheppard East LRT, and the Yonge subway depending
                                    on the corridor chosen.<sup>18</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Concerns over the Relief Line were primarily related to its high
                                    costs, and where the project would fit within a crowded pool of
                                    other Toronto transit projects contending for funding.
                                    <sup>19</sup> City residents in the borough of Scarborough were
                                    especially critical to the Relief Line, with a plurality of
                                    residents supporting the one-stop extension of the
                                    Bloor-Danforth line to Scarborough City Centre as the top
                                    transit priority for the city in 2016.<sup>20</sup> The high
                                    cost of the project, estimated at $6.8 billion in May of 2017,
                                    was not fully funded by the time the project was cancelled in
                                    April of 2019, while the controversial $3.2 billion one-stop
                                    Scarborough subway extension was, or was nearing it.
                                    <sup>21</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Although both provincial and federal administrations had thrown
                                    their support towards the Relief Line project as far as
                                    providing piecemeal bits of funding towards its planning and
                                    design work, the project was left unfunded until it was replaced
                                    with the Ontario Line project in April of 2019.<sup>22</sup> The
                                    relative helplessness for the City of Toronto to fund transit
                                    priorities without significant provincial and federal funding
                                    was exacerbated by the revenue tools available to the city –
                                    excluding unpopular suggestions to increase property taxes.
                                    <sup>23</sup> An attempt by the City of Toronto to toll its
                                    municipal expressways including the Gardiner Expressway and Don
                                    Valley Parkway – with revenues going towards maintaining tolled
                                    routes and funding transit, was quashed by the provincial
                                    government, which recognized the political unpopularity of such
                                    tolls in seat-rich suburban communities outside Toronto.
                                    <sup>24</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Ultimately, the Relief Line was necessary to any further transit
                                    expansion in Toronto and the surrounding region, with the
                                    project’s effect on relieving the capacity strains on existing
                                    downtown subway infrastructure a prerequisite for projects such
                                    as extending the Yonge subway northwards to Richmond Hill.
                                    <sup>25</sup> After the election of a new Progressive
                                    Conservative provincial government, existing transit proposals
                                    in Toronto were studied, resulting in key changes proposed to
                                    the Relief Line.<sup>26</sup>
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Yonge Line Crowding',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The Relief Line was planned to divert ridership away from the
                                    over-capacity Yonge subway, which on an average weekday
                                    rush-hour carries 28,000 to 30,000 people per hour in the peak
                                    direction, higher than the current scheduled capacity of 28,000
                                    people per hour. The proposal that replaced it, the Ontario
                                    Line, is expected to divert even more ridership from the Yonge
                                    subway because of its northern extension from Pape Station to
                                    the future Science Centre Station on Eglinton Avenue.
                                    <sup>27</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    &quot;Bloor Subway Station 2&quot; by Raysonho. Public Domain
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,

                            src: 'Relief Line/Bloor-Yonge Station.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    The new line, designated the Ontario Line, would roughly follow
                                    the same corridor as the Relief Line but with extensions to the
                                    north-east towards the Eglinton LRT’s Science Centre Station and
                                    south-west towards Exhibition GO Station.<sup>28</sup> A
                                    different alignment would be utilised, with the Ontario Line
                                    running from Exhibition GO Station and following the rail
                                    corridor eastwards before turning northwards on Bathurst Street,
                                    then westwards onto Queen Street.<sup>29</sup> From there, the
                                    line would run through the downtown core with interchanges to
                                    the existing Yonge-University line before veering south from
                                    Queen Street at approximately Parliament Street towards the West
                                    Don Lands neighbourhood before curving east to follow the rail
                                    corridor to Pape Avenue.<sup>30</sup> Then, the subway would
                                    follow Pape Avenue to Millwood Road, where it would cross the
                                    Don Valley and follow Don Mills Road through the dense
                                    neighbourhoods of Thorncliffe Park and Flemingdon Park to the
                                    currently under construction Science Centre Station, with a
                                    total of 15 stations along the entire line and only follow
                                    approximately three kilometres of the Relief Line’s route.
                                    <sup>31</sup> Additionally, smaller, lighter, and automated
                                    trains that could run in smaller headways would be used instead
                                    of TTC subway rolling stock, making the proposed line
                                    independent of the existing TTC subway system.<sup>32</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Cost- and time-savings were touted by building above-ground in
                                    several areas including a crossing over the Don River, as well
                                    as following the Lakeshore East and Stouffville lines rail
                                    corridor instead of tunnelling underground.<sup>33</sup> The
                                    line would cost an estimated $10.9 billion and utilise a
                                    private-public partnership procurement model.<sup>34</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Expected to open in 2027, the Ontario Line was the centrepiece
                                    of the new government’s transit plan, and a precondition for the
                                    government’s other transit projects including the extension of
                                    the Yonge subway to Richmond Hill, a three stop extension of the
                                    Bloor-Danforth line through Scarborough, and an extension of the
                                    under construction Eglinton LRT to Pearson Airport, all of which
                                    would add additional riders to a strained Yonge subway without
                                    the Ontario Line.<sup>35</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Although the Relief Line was effectively cancelled with the
                                    April 2018 announcement, the Ontario Line is expected to fulfill
                                    many of the same objectives: providing relief to the
                                    over-capacity Yonge subway, promoting social equity by bringing
                                    rapid transit to underserviced neighbourhoods, and bringing
                                    connectivity with a variety of other transit initiatives.
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'footnotes',
                        },
                    ]}
                    right={[{ type: ItemType.Paragraph, text: renderFootnotes }]}
                />
            </div>
        );
    };
    return (
        <div className="body-con">
            <Image
                src={MainImage}
                alt=""
                className=" py-2"
                layout="responsive"
                width={1000}
                height={500}
                priority
                placeholder="blur"
            />
            {renderBody()}
        </div>
    );
}
