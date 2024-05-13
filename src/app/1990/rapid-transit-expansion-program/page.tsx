import FootNotes from '@/components/FootNotes';
import WebColumn from '@/components/WebColumn';
import React from 'react';
import footnotes from './footnotes';
import { ItemType } from '@/types/WebColumn/Item';
import Image from 'next/image';

export default function Page() {
    function render_footnotes() {
        return <FootNotes footnotes={footnotes} />;
    }
    const renderText = () => {
        return (
            <div className="body__text-con">
                <WebColumn
                    left={[
                        {
                            type: ItemType.Logo,
                            // /images/ already saved
                            src: 'Rapid Transit Expansion Program/Lets Move Logo.png',
                        },
                        {
                            type: ItemType.MainTitle,
                            title: "Let's Move/Rapid Transit Expansion Program (1990/1993)",
                        },
                        {
                            type: ItemType.MainSubtitle,
                            title: () => (
                                <span>
                                    Cancelled in 1995<span className="mediumhide">, </span>
                                    <span className="mediumshow">
                                        <br />
                                    </span>
                                    partially built
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The Let’s Move and Rapid Transit Expansion Program plans were
                                    two closely related plans that were natural successors to the
                                    TTC’s Network 2011 plan. Both the Let’s Move and Rapid Transit
                                    Expansion Program plans put a focus on four major projects: An
                                    Eglinton West subway, a Sheppard subway, an extension of the
                                    Scarborough rapid transit line, and an extension of the Spadina
                                    line to York University. Other projects part of both plans
                                    included an expanded Wilson yard, light rail transit on the
                                    waterfront, and a proposed extension of the Bloor-Danforth line
                                    westwards to Sherway Gardens, possibly to Dixie GO Station.
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    A natural evolution of the TTC’s Network 2011 plan, the 1990
                                    Let’s Move transit plan by the Liberal provincial government
                                    incorporated key elements of Network 2011, including a busway on
                                    Eglinton Avenue West between Mississauga and Eglinton West
                                    Station and “conditional support” for a Sheppard subway between
                                    Yonge Street and Scarborough City Centre – subject to the amount
                                    of private investment towards the project.<sup>1</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Beyond that, the plan introduced an ambitious proposal to
                                    connect the two ends of the Yonge-University-Spadina subway by
                                    creating a loop that would run along the hydro corridor parallel
                                    to Finch Avenue, a move that was predicted to increase capacity
                                    on the squeezed Yonge-University-Spadina line by 3,000 riders
                                    per hour.<sup>2</sup> Meanwhile, extensions to both the
                                    Bloor-Danforth subway in the west to Sherway Gardens (and
                                    beyond, in the future) and the Scarborough rapid transit line in
                                    the east to Sheppard Avenue and Markham Road would extend rapid
                                    transit to areas currently poorly served.<sup>3</sup> The
                                    combined plan along with GO Transit and TTC streetcar projects
                                    was to cost over $5 billion dollars and support plans for
                                    Toronto’s bid for the 1996 Olympics.<sup>4</sup> And like the
                                    Network 2011 plan that preceded it, the construction of subways
                                    connecting nodes such as North York Centre and Scarborough
                                    Centre would support long-standing Metropolitan Toronto plans
                                    for decentralisation.<sup>5</sup>
                                </span>
                            ),
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
                                    The Sheppard subway was crucial to the then-city of North York
                                    and Metropolitan Toronto’s plan to build a downtown centered
                                    along Yonge Street. Road capacity in the area was already
                                    strained, and a subway was necessary to ensure development could
                                    continue without straining the transportation infrastructure in
                                    the area.<sup>6</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    (Alan Dunlop / Toronto Star) © Toronto Star, 1990. Reproduced
                                    under license.
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            // /images/ already saved
                            src: 'Rapid Transit Expansion Program/North York Centre.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    The plan was well-received by municipal officials within Metro
                                    Toronto and seen as a breakthrough in their fight for transit
                                    funding for projects. However, the plan, announced in April
                                    1990, was temporarily paused following the Liberal provincial
                                    government’s defeat in the September 1990 Ontario general
                                    election and the election of an NDP provincial government which
                                    quickly paused the previous administration’s plans under the
                                    reasoning of conducting “value for money” studies of the
                                    projects.<sup>7</sup> Ultimately, the Let’s Move plan emerged
                                    unscathed from the NDP provincial government’s review of
                                    government spending, however was left unfunded as study
                                    continued.<sup>8</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    The Let’s Move plan remained unfunded until 1993, when the NDP
                                    provincial government announced refined Let’s Move plans under
                                    the new name <i>Rapid Transit Expansion Program</i>. The plan,
                                    released at the end of the early 1990s recession, was meant to
                                    act as both a jobs creator and a way to rebuild ridership on the
                                    TTC subway system, which had fallen over 15 per cent between
                                    1988 to 1993.<sup>9</sup> Phase one of the plan would include a
                                    Sheppard subway between Yonge Street and Don Mills Road, a
                                    subway on Eglinton Avenue West from Eglinton West Station in the
                                    east to a new “York City Centre” located at Black Creek Drive in
                                    the west, an extended Spadina subway reaching York University,
                                    and an extension to the Scarborough rapid transit line.
                                    <sup>10</sup> It would cost $2.5 billion and create 50,000 jobs,
                                    with $1.5 billion from the province, $500 million from Metro
                                    Toronto, and $500 million from the private sector.<sup>11</sup>
                                </div>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Rapid Transit on Eglinton Avenue West',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    Phase one of the Eglinton West subway was planned to terminate
                                    at York City Centre, a large office development planned
                                    alongside the subway. Pictured is a 1993 render produced for the
                                    environmental assessment of the project, showing a train pulling
                                    into York City Centre station with a final terminus of Pearson
                                    Airport seen on the subway destination blind.<sup>12</sup>{' '}
                                    Further below is an artists{"'"} rendition of the proposed York
                                    City Centre office development, which would have anchored the
                                    subway extension. <sup>13</sup>
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            // /images/ already saved
                            src: 'Rapid Transit Expansion Program/York City Centre Render.jpg',
                        },
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            // /images/ already saved
                            src: 'Rapid Transit Expansion Program/York City Centre Office Development.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    The Rapid Transit Expansion Program plan continued the same
                                    projects found in both the Let’s Move and Network 2011 plans
                                    while further building on them: A Sheppard subway was made a
                                    priority in this plan, with provincial funding to match, unlike
                                    the previous conditional support for the line under the previous
                                    Liberal provincial government.<sup>14</sup> On Eglinton, plans
                                    for a busway were upgraded to a subway, pleasing municipal
                                    officials in the surrounding area and especially those from the
                                    then City of York, where the first phase of the future subway
                                    line was to terminate in a new central business district dubbed
                                    “York City Centre”.<sup>15</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    Meanwhile, plans for a subway loop connecting the Yonge and
                                    Spadina subways were retained but expanded to include proposed
                                    stations at York University and with a more northerly alignment
                                    on Steeles Avenue rather than through the Finch hydro corridor
                                    as originally proposed.<sup>16</sup> Similarly, plans for
                                    extensions to the Bloor-Danforth subway and Scarborough rapid
                                    transit lines were retained, with an extension of the
                                    Bloor-Danforth line westwards to Sherway Gardens proposed as
                                    phase two of the plan. Further extensions westwards into
                                    Missisauga towards Dixie GO Station were conceptually examined
                                    as well, pending private-sector contribution.<sup>17</sup>
                                </div>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    oneColumn={true}
                    center={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Eglinton west',
                        },
                        {
                            type: ItemType.Image,
                            // /images/ already saved
                            src: 'Rapid Transit Expansion Program/Eglinton West Alignment.png',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <div>
                                    The environmental assessment of the Eglinton West subway
                                    identified four new stations and an interchange with the
                                    existing Spadina line at Eglinton West station, which was
                                    planned to be renamed Allen Station. The Terminus would be
                                    located adjacent to a new central business district, dubbed York
                                    City Centre. That project died shortly afterwards the Eglinton
                                    West subway was cancelled in 1995.<sup>18</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.ContentTitle,
                            title: 'Sheppard',
                        },
                        {
                            type: ItemType.Image,
                            // /images/ already saved
                            src: 'Rapid Transit Expansion Program/Sheppard Alignment.png',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <div>
                                    The environmental assessment of the Sheppard subway identified
                                    four new stations and an interchange with the existing Yonge
                                    lines at Sheppard Station, which was eventually renamed
                                    Sheppard-Yonge Station. That project was eventually completed in
                                    2002.<sup>19</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.ContentTitle,
                            title: 'SCARBOROUGH RAPID TRANSIT EXTENSION',
                        },
                        {
                            type: ItemType.Image,
                            // /images/ already saved
                            src: 'Rapid Transit Expansion Program/Scarborough RT Extension Alignment.png',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <div>
                                    The environmental assessment of the Scarborough rapid transit
                                    line extension identified four new station locations
                                    approximately following the route of Highland Creek.
                                    <sup>20</sup> Three stops would be initially built at the
                                    intersection of Progress Avenue and Markham Road, the
                                    intersection of Milner Avenue and Progress Avenue, and at
                                    approximately the intersection of Sheppard Avenue and Markham
                                    Road. A station would be built in the future on Bellamy Station
                                    adjacent to Highland Creek. Metro Toronto council was
                                    unsupportive of the project.
                                </div>
                            ),
                        },
                        {
                            type: ItemType.ContentTitle,
                            title: 'YONGE-SPADINA LOOP',
                        },
                        {
                            type: ItemType.Image,
                            // /images/ already saved
                            src: 'Rapid Transit Expansion Program/Yonge-Spadina Loop Alignment.png',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The environmental assessment of the Spadina subway extension to
                                    York University proposed three new stations following an
                                    entirely new alignment compared to the Let’s Move extension
                                    plan.<sup>21</sup> Stations were proposed at the C.N.R.
                                    subdivision at Finch Avenue West, near the intersection of Finch
                                    Avenue West and Kelle Street, and a station terminating at York
                                    University. Council was unsupportive of this plan, and it was
                                    later cancelled. An extension of the Spadina subway with a
                                    slightly different alignment was completed in 2017.
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    rightOnly={true}
                    right={[
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    Investment into these projects by the provincial government,
                                    Metro Toronto, and the private sector were to be funnelled
                                    through a new crown corporation, the Ontario Transportation
                                    Corporation, which with a budget separate from the province’s
                                    revenues enabled the provincial government to proceed with
                                    projects without directly increasing Ontario’s deficit.
                                    <sup>22</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    Following the recession, the provincial government’s deficit at
                                    the time – a record $10 billion was worrying for many and a key
                                    issue in the following 1995 provincial elections.<sup>23</sup>{' '}
                                    Likewise, municipal officials in Metro Toronto were concerned
                                    with the cost associated with the four subway projects proposed
                                    and their effect on municipal finances, which would see
                                    cost-cutting on municipal programs to support the 25 per cent
                                    municipal funding necessary for the projects.<sup>24</sup>
                                    Metro Toronto staff had earlier recommended Metro Toronto
                                    council to approve only the Eglinton West subway and Spadina
                                    extension to York University, leading to clashes between the
                                    province and Toronto municipal officials, with the province
                                    threatening to cut their share of funding for other municipal
                                    projects if only two of the four projects were approved.
                                    <sup>25</sup>
                                </div>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'GO Transit Expansion',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <div>
                                    The Let’s Move plan included a number of GO Transit improvements
                                    that were later separated from the subway focused Rapid Transit
                                    Expansion Program but still continued.<sup>26</sup> Projects
                                    such as the extension of the Lakeshore West line to downtown
                                    Hamilton, a new station in Burlington, and the extension of the
                                    Lakeshore East line to Oshawa were all products of the Let’s
                                    Move plan and the NDP provincial government’s investment in GO
                                    Transit.<sup>27</sup> Other Let’s Move plan GO Transit
                                    initiatives including the extension of the Richmond Hill line to
                                    Bloomington Sideroad in York Region were shelved and ultimately
                                    delayed, although such extension was eventually completed in
                                    2022, decades since the idea was first announced.<sup>28</sup>{' '}
                                    Pictured is a Richmond Hill line train over the Don Valley
                                    Parkway.<sup>29</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <div>
                                    (Tony Bock / Toronto Star) © Toronto Star, 1990. Reproduced
                                    under license.
                                </div>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            adjust: { hide: false },
                            src: 'Rapid Transit Expansion Program/GO Transit.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    In the end, both the Sheppard and Eglinton West subways were
                                    approved while the Spadina and Scarborough rapid transit
                                    extensions, with little political support, were left in limbo.
                                    <sup>30</sup> A municipal election during the midst of the
                                    debate temporarily paused the discussion but both projects were
                                    eventually voted against by Metro Toronto council, leading to
                                    calls for the province to take control of the TTC.<sup>31</sup>{' '}
                                    Several proposals reportedly investigated by the province
                                    included transferring ownership, planning, and day-to-day
                                    operation of the subways to GO Transit, leaving the TTC to run
                                    only streetcars and buses, taking over just the remaining two
                                    projects and funding them through provincial funds only, or
                                    taking control of the TTC completely.<sup>32</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    Ultimately, none of the proposals were enacted and by 1994,
                                    environmental assessments on the Eglinton West, Sheppard,
                                    Scarborough RT extension, and Spadina loop projects had been
                                    completed, with construction starting on the former two projects
                                    by late summer of 1994, with the other projects expected to
                                    start later on.<sup>33</sup> By early 1995, excavation had
                                    already progressed for tail tracks on the Eglinton West subway
                                    and procurement of tunnel boring machines had been underway for
                                    the Sheppard subway, then projected to begin tunnelling in
                                    mid-1996.<sup>34</sup>
                                </div>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Sheppard subway under construction',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <div>
                                    The Sheppard subway was the only project spared cancellation by
                                    the Progressive Conservative provincial government, which
                                    deferred the other projects. Here, construction on the Sheppard
                                    subway progresses at the intersection of Sheppard Avenue and
                                    Leslie Street in 1998.<sup>35</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <div>
                                    (Boris Spremo / Toronto Star) © Toronto Star, 1998. Reproduced
                                    under license.
                                </div>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            adjust: { hide: false, width: '2/3' },
                            src: 'Rapid Transit Expansion Program/Sheppard Subway Construction.jpg',
                        },
                    ]}
                />
                <WebColumn
                    left={[]}
                    rightOnly={true}
                    right={[
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    However, the election of a new Progressive Conservative
                                    provincial government running under an austerity platform
                                    quickly put an end to three of the four projects, with the
                                    Eglinton West subway deferred after their election in June of
                                    1995, funding cut for the Scarborough RT and Spadina extensions,
                                    leaving only the Sheppard subway left untouched.<sup>36</sup>{' '}
                                    Construction was halted on the Eglinton West subway and work to
                                    revert the street was quickly undertaken.<sup>37</sup> The poor
                                    financial status of both the province and Metro Toronto (later
                                    reorganized as the City of Toronto by the provincial government)
                                    kept the three unbuilt projects deferred for more than a decade
                                    before similar plans were explored by later provincial and
                                    municipal governments.
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    The Rapid Transit Expansion Program was a crucial point in
                                    transit planning for Toronto. Not only did the plan refine and
                                    build upon subway projects studied for almost a decade, it also
                                    provided the necessary funding for construction. Although never
                                    fully realized, the basis of the planning undertaken through
                                    this plan formed the first major extension to the TTC subway
                                    system for over two decades, with the Sheppard subway between
                                    Yonge Street and Don Mills Road opening in 2003. Meanwhile, key
                                    elements of the plan including a subway on Eglinton Avenue West
                                    and extensions to the Spadina line to York University have been
                                    revisited by later governments, with the Eglinton Crosstown LRT
                                    opening in 2021 to have a similar routing and station placement
                                    as the planned Eglinton West subway, while an extension of the
                                    Spadina line with stops at York University opening in 2017.
                                </div>
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
                    right={[
                        {
                            type: ItemType.Paragraph,
                            text: render_footnotes,
                        },
                    ]}
                />
            </div>
        );
    };
    return (
        <div className="body-con">
            <Image
                src="/images/Rapid Transit Expansion Program/Rapid Transit Expansion Program Map.png"
                alt=""
                className=" mb-6"
                layout="responsive"
                width={1000}
                height={500}
                priority
                placeholder="blur"
            />
            <div>{renderText()}</div>
        </div>
    );
}
