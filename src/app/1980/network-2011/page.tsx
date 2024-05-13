import React from 'react';

import FootNotes from '@/components/FootNotes';
import WebColumn from '@/components/WebColumn';
import footnotes from './footnotes';
import { ItemType } from '@/types/WebColumn/Item';
import Image from 'next/image';
export default function Page() {
    const renderFootnotes = () => {
        return <FootNotes footnotes={footnotes} />;
    };

    const renderText = () => {
        return (
            <div>
                <WebColumn
                    left={[
                        { type: ItemType.MainTitle, title: 'Network 2011 (1985)' },
                        {
                            type: ItemType.MainSubtitle,
                            title: 'Cancelled',
                        },
                        {
                            type: ItemType.MainSubtitle,
                            title: `Evolved into Let's Move`,
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    Network 2011 at its core was a transit plan that was created to
                                    achieve the planning goals of Metropolitan Toronto and their
                                    objective of creating multiple central business districts within
                                    the city.
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Network 2011 was a 1985 plan by the Toronto Transit Commission
                                    for transit expansion, named for the target completion date of
                                    2011. The plan focused on three new rapid transit lines: a
                                    subway along Sheppard Avenue from Dufferin Street in the west to
                                    Scarborough City Centre in the east, a new rapid transit
                                    corridor on Eglinton Avenue West initially composed of express
                                    buses linking Mississauga to Eglinton West Station, and a
                                    downtown subway between approximately the intersection of Front
                                    Street and Spadina Avenue and Pape Station.<sup>1</sup>{' '}
                                    Furthermore, an extension of the Spadina line from Wilson
                                    Station to Sheppard Avenue would allow for transfers between the
                                    Yonge-University-Spadina line and the future Sheppard subway.
                                    <sup>2</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    The plan was to be phased over a 26-year timeframe, with the
                                    recommended phasing beginning with a Sheppard subway between
                                    Yonge Street to Victoria Park Avenue to be constructed between
                                    1989-1994.<sup>3</sup> Then, a downtown subway between Pape
                                    Station on the Bloor-Danforth Line in the east to approximately
                                    the intersection of Spadina Avenue and Front Street in the west
                                    would be constructed in the years of 1994-1999.<sup>4</sup>{' '}
                                    Following that, between 1999-2004, rapid transit on Eglinton
                                    Avenue West would be constructed, initially as a partially
                                    grade-separated busway, with the possibility of converting it to
                                    a subway later.<sup>5</sup> Finally, between 2004-2010, the
                                    Sheppard subway would be extended on both ends from Yonge Street
                                    to Dufferin Street in the west, and from Victoria Park Avenue to
                                    Scarborough City Centre in the east.<sup>6</sup> All-in-all, the
                                    plan would cost $2.7 billion, 25 per cent paid for by the Metro
                                    Toronto government and 75 per cent from the provincial
                                    government.<sup>7</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Planning for what became Network 2011 began in 1982, with the
                                    release of the Accelerated Rapid Transit Study undertaken by
                                    Metro Toronto and the TTC.<sup>8</sup> The report, which studied
                                    four corridors for future rapid transit expansion including
                                    Eglinton, “Central Radial” (a route downtown via existing rail
                                    corridors), Sheppard, and the Finch hydro corridor, identified
                                    potential station, yard, and routing locations, as well as
                                    potential costs and impacts on the surrounding community and
                                    environment.<sup>9</sup>
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    oneColumn={true}
                    center={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Accelerated Rapid Transit Study',
                        },
                        {
                            type: ItemType.Image,
                            // /images/ already saved
                            src: 'Network 2011/Accelerated Rapid Transit Study Routes.png',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The TTC studied numerous corridors for potential future rapid
                                    transit line alignments as part of the Accelerated Rapid Transit
                                    Study, several of which became the foundation of Network 2011
                                    later on.<sup>10</sup> Many of these studied corridors were
                                    later developed into or resemble plans today for rapid transit.
                                    Shown are the alignments studied in the Accelerated Rapid
                                    Transit Study including the Eglinton, Central Radial, Sheppard,
                                    and Finch corridors.
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[]}
                    right={[
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    The findings of the study were then broken down into three more
                                    detailed studies offering further analysis of the ridership and
                                    feasibility of each of the corridors: the Sheppard/Finch Rapid
                                    Transit Study, the Downtown Rapid Transit Study, and the
                                    Eglinton West Rapid Transit Study.<sup>11</sup> From the
                                    studies, lines were proposed along Sheppard Avenue, Eglinton
                                    Avenue West, and through downtown along a Pape-Eastern-Railway
                                    Corridor-Front alignment.<sup>12</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    The findings of these studies and the recommended alignments
                                    were combined to create Network 2011, which utilised the
                                    findings of the three studies to recommend suggested phasing for
                                    constructing the plan according to Metro Toronto planning
                                    objectives. The Metro Toronto official plan of the time
                                    (Metroplan) called for the creation of a multi-centred urban
                                    structure within Metro Toronto, with the development of nodes
                                    which would act as major employment and activity centres outside
                                    downtown Toronto to encourage decentralisation.<sup>13</sup>
                                </span>
                            ),
                        },
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
                            type: ItemType.ContentTitle,
                            title: 'Downtown Rapid Transit Study',
                        },
                        {
                            type: ItemType.Image,
                            // /images/ already saved
                            src: 'Network 2011/Downtown Rapid Transit Study Routes.jpg',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The routing of the proposed downtown subway was a key concern of
                                    the Downtown Rapid Transit Study, a precursor document of
                                    Network 2011. The main concern for the downtown subway was to
                                    relieve pressure off the Yonge subway line, which would
                                    otherwise exceed design capacity if unbuilt.<sup>14</sup> A
                                    variety of routings were considered, including a subway along
                                    Bay Street from Bay Station on the Bloor-Danforth line to Union
                                    Station on the Yonge-University line, but the majority of
                                    alignments created a “J” or “U” shape.<sup>15</sup> In the end,
                                    a routing along Pape-Eastern-Railway Corridor-Front was
                                    recommended, with the western terminus located at approximately
                                    Front Street and Spadina Avenue.<sup>16</sup> An alignment along
                                    Front Street and Wellington Street instead of along the railway
                                    corridor and Front Street was also recommended as an alternative
                                    to the recommended alignment.<sup>17</sup>
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'A New Downtown Subway',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    One of Network 2011’s key proposed additions to Toronto’s rapid
                                    transit network was a “J” shaped line studied earlier as part of
                                    the TTC’s 1985 Downtown Rapid Transit Study. The study had
                                    recommended an alignment along a Pape-Eastern-Railway
                                    Corridor-Front alignment using Intermediate Capacity Transit
                                    System (ICTS) technology similar to the Scarborough RT, although
                                    larger trains similar to ones proposed as part of the GO ALRT
                                    proposal from the same era were also a contender.<sup>18</sup>{' '}
                                    Both elevated and underground options of the alignment were
                                    considered.<sup>19</sup> Given “serious consideration” as a
                                    result of potential savings of $52 million in 1985 dollars, an
                                    elevated alignment of the proposed downtown line along Front
                                    Street would have caused immense visual impacts and reduced
                                    pavement and sidewalk widths in the area.<sup>20</sup>{' '}
                                    Pedestrian links in the Union Station area would also have been
                                    severely impacted.<sup>21</sup> Here, images show the proposed
                                    line elevated through the Pape Street at Gerrard Street
                                    intersection, past Union Station, and its visual impacts running
                                    along Front Street. At Union Station, a large modernist station
                                    facility would stand in front of the classical beaux-arts façade
                                    of Union Station, with connections with the
                                    Yonge-University-Spadina subway made by several stories of
                                    stairs. A similar horizontal alignment located underground was
                                    eventually recommended.<sup>22</sup> Ultimately, the elevated
                                    line’s unsightly visual impacts on existing structures such as
                                    Union Station led its rejection in favour of an underground
                                    alignment.<sup>23</sup>
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            src: 'Network 2011/Gerrard at Pape view.jpg',
                        },
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            src: 'Network 2011/Union Station view 2.jpg',
                        },
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            src: 'Network 2011/Union Station view.jpg',
                        },
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            src: 'Network 2011/Convention centre view.jpg',
                        },
                    ]}
                />
                <WebColumn
                    right={[
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    As a result, the proposed Sheppard subway (which would connect
                                    two of the identified nodes, Scarborough City Centre and North
                                    York Centre) was identified as the priority of the Network 2011
                                    plan.<sup>24</sup> Although a downtown subway would relieve the
                                    then already overburdened Yonge subway line, it was deemed
                                    inconsistent with Metroplan.<sup>25</sup> The anticipated growth
                                    of the suburban centres of Scarborough City Centre and North
                                    York Centre as dictated by Metroplan, the high volumes of bus
                                    ridership along Finch and Sheppard Avenues, and a diverse set of
                                    alternatives (including GO Transit improvements, the
                                    then-proposed “Spadina LRT”, and express buses on streets such
                                    as Sherbourne Street) played important roles in placing a
                                    proposed subway on Sheppard Avenue a priority ahead of a line
                                    through downtown.<sup>26</sup> Meanwhile, rapid transit on
                                    Eglinton Avenue would improve links between Peel Region and
                                    Metropolitan Toronto, relieving growing traffic between the two
                                    jurisdictions.<sup>27</sup> Intense population and employment
                                    growth had occurred in the decades prior in the suburban
                                    communities outside the former City of Toronto, a trend that was
                                    predicted to continue.<sup>28</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Varying forms of rapid transit technology were recommended for
                                    each of the lines; subway technology was assumed for Sheppard,
                                    Intermediate Capacity Transit System (ICTS) technology for the
                                    downtown line (although limited changes in alignment geometry
                                    could support a subway), and a busway for Eglinton West (with
                                    eventual upgrade to some form of rail transit).<sup>29</sup> The
                                    wide right-of-way along Eglinton Avenue West – originally
                                    planned for the Richview Expressway would allow for a surface
                                    dedicated transit right-of-way from Renforth Drive to Jane
                                    Street, with grade separations located at Kipling Avenue,
                                    Islington Avenue, and Royal York Road.<sup>30</sup> From Jane
                                    Street to Caledonia Road, the busway would enter a tunnel before
                                    surfacing north of Eglinton Avenue to run along the surface on
                                    the CN Belt Line right-of-way, before veering south to meet
                                    Eglinton West Station from the north in the station{"'"}s bus
                                    terminal.<sup>31</sup>
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Proposed Eglinton Busway',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The proposed Eglinton West rapid transit line was recommended to
                                    be constructed initially as a busway.<sup>32</sup> Here, images
                                    of the MBTA’s Silver Line, a busway running along dedicated
                                    right-of-ways on the surface and briefly underground show a
                                    system with several similarities to what was proposed along
                                    Eglinton, albeit in a much more urban setting.<sup>35</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    “MBTA route SL2 bus at World Trade Center station” by
                                    Pi.1415926535 is licensed under CC BY-SA 3.0
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            src: 'Network 2011/MBTA-Silver-Line.jpg',
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'North York Centre',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The planned Sheppard subway, when fully built, was planned to
                                    connect two emerging central business districts, North York
                                    Centre and Scarborough City Centre. Pictured is North York
                                    Centre, with the intersection and western terminus of the first
                                    phase of the subway, Sheppard Avenue and Yonge Street at the far
                                    right.<sup>36</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    (David Cooper / Toronto Star) © Toronto Star, 1979. Reproduced
                                    under license.
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            src: 'Network 2011/North York Centre.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Approved by Metro Toronto council by 1986, the plan was to be
                                    implemented in phases according to the Network 2011 plan, with
                                    council agreeing with the plan for a subway on Sheppard Avenue
                                    from Yonge Street to Victoria Park Avenue to be the priority,
                                    much to the dismay of municipal officials in Etobicoke, York,
                                    and Peel Region who wanted rapid transit on Eglinton Avenue
                                    first.<sup>37</sup> Officials from the three municipal bodies
                                    were further dismayed at the plan’s commitment to construct only
                                    a busway on Eglinton, rather than a light rail line or a subway,
                                    with the plan only specifying that it could be replaced with a
                                    subway – eventually.<sup>38</sup> The plan saw further
                                    opposition from surrounding municipal and regional governments
                                    including York, Peel, and Durham Regions who sought funding for
                                    their transportation plans centred around the then proposed
                                    Highway 407, and who saw Network 2011 as competition for such
                                    funding.<sup>39</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Ultimately, difficulties in funding the plan quickly derailed
                                    the timelines proposed. The then-Liberal provincial government –
                                    who was not involved in the development of the Network 2011
                                    plan, baulked at the $75 million a year from the province
                                    necessary for a full build-out and decided to conduct their own
                                    study of transit proposals in the province.<sup>40</sup>{' '}
                                    Completed in May of 1988, their report downgraded funding
                                    priority of the Sheppard subway in favour of expanding GO
                                    Transit commuter services and extending the Spadina line towards
                                    York Region.<sup>41</sup>
                                </span>
                            ),
                        },
                    ]}
                />
                {/**Ask danny about the first right paragrpah, might be wrong */}
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'scarborough town Centre',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    Scarborough City Centre, pictured, an emerging central business
                                    district that would be the planned eventual terminus of the
                                    Sheppard subway.<sup>42</sup> Planning in Metro Toronto at the
                                    time de-emphasised growth in the downtown, taking action such as
                                    restricting office development to protect adjacent communities
                                    and reduce the pressure of redevelopment for historic structures
                                    within them.<sup>43</sup> New central business districts such as
                                    Scarborough City Centre were intended to receive the majority of
                                    new office developments, something planners hoped would decrease
                                    the pressure of large amounts of commuters headed downtown in
                                    the peak direction by encouraging reverse commuting.
                                    <sup>35</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    (Alan Dunlop / Toronto Star) © Toronto Star, 1985. Reproduced
                                    under license.
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            src: 'Network 2011/Scarborough-City-Centre.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    By then, the cost for completing a Sheppard subway from Yonge
                                    Street to Victoria Park Avenue had more than doubled from a 1985
                                    estimate of $500 million to an estimate of $1.1 billion in 1989.
                                    <sup>45</sup> Come 1990 – an election year, the (eventually
                                    defeated) Liberals kept the Sheppard subway on life support by
                                    supporting the project only if a portion of the project could be
                                    paid for through private sector investment and without
                                    disrupting funding for their own transit plan, dubbed “Let’s
                                    Move”.<sup>46</sup> Also retained was plans for rapid transit on
                                    Eglinton in the form of a busway to Peel Region but a downtown
                                    subway and a complete Sheppard subway from Downsview to
                                    Scarborough City Centre were dropped.<sup>47</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Although much of what Network 2011 proposed was never built in
                                    the timeframes proposed, elements of the plan were highly
                                    influential in the plans of subsequent provincial and municipal
                                    governments and remain so. The Sheppard subway, a key element of
                                    the Network 2011 plan was funded several years later under the
                                    Rapid Transit Expansion Program and opened in 2003, ten years
                                    after the original proposed opening date of 1993 detailed in
                                    Network 2011.<sup>48</sup> Meanwhile today, plans for a downtown
                                    subway continue to be studied while rapid transit on Eglinton
                                    has taken the form of light rail, currently under construction
                                    and planned for a 2022 opening.
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    oneColumn={true}
                    center={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Post-Network 2011 Future Expansion',
                        },
                        {
                            type: ItemType.Image,
                            src: 'Network 2011/Network 2011 Future Map.png',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The Network 2011 plan also laid out potential future extensions
                                    to the rapid transit network after the Network 2011 projects had
                                    been completed.<sup>49</sup> For the proposed downtown subway,
                                    the plan envisioned extensions west via Front Street and the
                                    rail corridor, with two potential alignments further west along
                                    the rail line or north along Roncesvalles Avenue after passing
                                    the King-Queen-Queensway-Roncesvalles intersection.<sup>50</sup>{' '}
                                    An extension of the downtown subway north of Pape to Eglinton
                                    Avenue was also proposed to run along Pape Avenue, onto the
                                    Millwood viaduct, and north-east along Overlea Boulevard,
                                    similar to the proposed alignment of the Ontario Line more than
                                    thirty years later.<sup>51</sup> The Sheppard subway was
                                    envisioned to be extended westwards, passing underneath
                                    Downsview airport and north to run west along both the Finch
                                    hydro corridor and Finch Avenue.<sup>52</sup> After meeting
                                    Highway 27 (known as Etobicoke Parkway in the Network 2011 plan)
                                    the alignment would veer south along the road before meeting and
                                    running south along the Manby (Etobicoke) hydro corridor, with a
                                    terminus at Kipling Station.<sup>53</sup>
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Footnotes',
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
                src="/images/Network 2011/Network 2011 Map.png"
                alt=""
                className="my-3"
                layout="responsive"
                width={1000}
                height={500}
                priority
                placeholder="blur"
            />
            {renderText()}
        </div>
    );
}
