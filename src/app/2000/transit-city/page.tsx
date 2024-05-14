import React from 'react';
import Image from "next/image";
import footnotes from './footnotes';

import FootNotes from '@/components/FootNotes';
import WebColumn from '@/components/WebColumn';
import { ItemType } from '@/types/WebColumn/Item';
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Transit city (2007): Cancelled.',
    openGraph: {
        title: 'Transit city (2007): Cancelled',
    },
};
import MainImage from '@/images/headerimages/Transit City Map.png';
export default function Page() {
    const renderFootnotes = () => {
        return <FootNotes footnotes={footnotes} />;
    };
    const renderText = () => {
        return (
            <div className="body__text-con">
                <WebColumn
                    left={[
                        {
                            type: ItemType.Logo,
                            // /images/ already saved
                            src: 'Transit City/Transit City Logo.png',
                        },
                        { type: ItemType.MainTitle, title: 'Transit city (2007)' },
                        {
                            type: ItemType.MainSubtitle,
                            title: 'Cancelled',
                        },
                        {
                            type: ItemType.MainSubtitle,
                            title: 'Partially under construction',
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    The largest rapid transit plan by kilometres ever proposed for
                                    Toronto, Transit City’s vast network of light rail transit lines
                                    running across the city was the culmination of a shift towards
                                    focusing on intermediate capacity transit systems (ICTS) for
                                    transit expansion. Previous attempts utilised then-experimental
                                    linear induction motor technology, resulting in the
                                    issue-plagued Scarborough rapid transit line. Light rail
                                    vehicles running in their own right-of-ways as proposed by the
                                    Transit City plan harkens back to plans for ICTS lines utilising
                                    coupled streetcars, similar to ideas proposed by the TTC in the
                                    early 1970s and 80s.
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <span>
                                    Transit City was an ambitious transit expansion plan jointly
                                    announced by the City of Toronto and the TTC in March 2007 that
                                    called for the construction of a network of light rail transit
                                    (LRT) lines across the city.<sup>1</sup> A total of over 120
                                    kilometres of new rapid transit was proposed on seven corridors,
                                    six following arterial roads and a line following the
                                    waterfront. Additionally, an upgrade and extension of the
                                    Scarborough rapid transit line to Malvern using newer
                                    intermediate capacity transit system technology was included in
                                    this plan, with plans eventually changing to a refurbishment of
                                    the line to utilise the same light rail technology proposed to
                                    be utilised on the other Transit City lines. In total, the plan
                                    would cost just over $6 billion, none of which was funded at the
                                    time of the announcement, with an estimated completion date of
                                    2021.<sup>2</sup>
                                </span>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Streetcar Right-of-way',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    Transit City light rail lines would utilise dedicated
                                    right-of-ways to avoid being impeded by vehicular traffic.
                                    <sup>3</sup> Similar dedicated right-of-ways had been previously
                                    implemented on streetcar routes such as the 512 St.Clair,
                                    pictured here, 510 Spadina, and the 509 Harbourfront streetcar.
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    “TTC 4071, 4022” by BillyCabic is licensed under CC BY-NC 2.0
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            src: 'Transit City/St.Clair Streetcar ROW.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    <li>
                                        On Don Mills Road, an 18-kilometre line would stretch from
                                        Steeles Avenue in the north to the Bloor-Danforth subway in
                                        the south and run entirely on a surface dedicated
                                        right-of-way.<sup>4</sup>
                                    </li>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    <li>
                                        On Eglinton Avenue, a 31-kilometre line would run from a new
                                        Renforth transitway station to be constructed as part of the
                                        Mississauga Transitway in the west to Kennedy Station on the
                                        Bloor-Danforth line in the east, with a short spur-line
                                        providing service to Pearson Airport.<sup>5</sup> The line
                                        would provide a vital east-west connection through the
                                        centre of the City of Toronto and would run on a surface
                                        right-of-way between Renforth transitway station to Keele
                                        Street, then underground to Laird Drive, where it would
                                        resume running on the surface in a dedicated right-of-way
                                        until it reached Kennedy Station.<sup>6</sup>
                                    </li>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    <li>
                                        On Finch Avenue West, an 18-kilometre line would run from
                                        the area near the intersection of Finch Avenue West and
                                        Highway 27 in the west to Finch Station on the
                                        Yonge-University line in a dedicated surface right-of-way.
                                        <sup>7</sup> Extensions further west towards Mississauga and
                                        south towards Woodbine Racetrack and Pearson Airport were
                                        also proposed for future extensions.<sup>8</sup>
                                    </li>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    <li>
                                        On Jane Street, a 17-kilometre line would begin at Jane
                                        Station on the Bloor-Danforth line in the south and end at
                                        Steeles West Station on the then-proposed Toronto-York
                                        Spadina Subway Extension in the north, with a spur eastward
                                        from the intersection of St. Clair Avenue and Jane Street
                                        towards Gunn Loop, the western terminus of the 512 St. Clair
                                        streetcar line.<sup>9</sup> Originally proposed to run
                                        entirely on the surface in a dedicated right-of-way,
                                        mixed-surface and underground routings were considered
                                        during its planning.<sup>10</sup>
                                    </li>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    <li>
                                        In Scarborough, a 15-kilometre line would start at Kennedy
                                        Station on the Bloor-Danforth line and run east along
                                        Eglinton Avenue, north-east on Kingston Road, and north on
                                        Morningside Avenue to service the University of Toronto
                                        Scarborough Campus and eventually terminate in the Malvern
                                        neighbourhood.<sup>11</sup> The line would run in a
                                        dedicated surface right-of-way and run on the same tracks of
                                        the proposed Sheppard East LRT line for a short section in
                                        the northern part of the line approaching Malvern.
                                        <sup>12</sup>
                                    </li>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    <li>
                                        On Sheppard East, a 14-kilometre line would run east from
                                        Don Mills Station on the Sheppard Line to the Malvern
                                        neighbourhood in the west.<sup>13</sup> The line would
                                        connect with a proposed extension and refurbishment of the
                                        Scarborough rapid transit line to create a new transit
                                        terminal serving north-east Scarborough, providing a vital
                                        hub for transit riders in the area.<sup>14</sup> The line
                                        would run almost entirely on a dedicated surface
                                        right-of-way except for a brief decent underground to
                                        connect with the Sheppard subway at Don Mills station, where
                                        a platform-level connection with the subway was planned.
                                        Extensions eastward towards Durham Region were proposed for
                                        future consideration.<sup>15</sup>
                                    </li>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    <li>
                                        Along the waterfront, an 11-kilometre line connecting
                                        southern Etobicoke in the west to Exhibition Place in the
                                        east, extending current streetcar services along the
                                        waterfront between Exhibition Place and Union Station.
                                        <sup>16</sup> Parts of the line would follow both the
                                        railway corridor adjacent and the Gardiner Expressway to
                                        connect with existing track on the Queensway and Lake Shore
                                        Boulevard, which would be upgraded to become a dedicated
                                        right-of-way.<sup>17</sup> Extensions both west into
                                        Mississauga and east from Union Station were proposed for
                                        future consideration.<sup>18</sup>
                                    </li>
                                </div>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Light Rail Vehicles',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    New light rail vehicles similar to the planned new streetcars
                                    were to be utilised on the new Transit City lines. The vehicles
                                    eventually selected by Metrolinx were Bombardier’s Flexity
                                    Freedom, part of Bombardier’s Flexity family of streetcars and
                                    light rail vehicles.<sup>19</sup> Following delivery concerns of
                                    Bombardier’s vehicles, Alstom’s Citidas Spirit was selected to
                                    replace Bombardier’s vehicles for use on the Finch West LRT
                                    line, with Bombardier’s vehicles to be exclusively used on the
                                    Eglinton Crosstown LRT. Shown to the right is Bombardier’s
                                    Flexity Freedom LRV originally planned for use on all Transit
                                    City and other LRT projects in the Greater Toronto Area, but is
                                    now only planned to be used on the Eglinton Crosstown LRT line.
                                    Below that is Alstom’s Citidas Spirit LRV utilised by OC Transpo
                                    on Line 1 Confederation Line and planned to be used on the Finch
                                    West LRT line as well as the Hurontario LRT planned in
                                    Mississauga.<sup>20</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    “Eglinton LRT Maintenance & Storage Facility” by wyliepoon is
                                    licensed under CC BY-NC-ND 2.0
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    “OC Transpo O Train LRV 1107” by Youngjin is licensed under CC
                                    BY-SA 3.0
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            src: 'Transit City/Bombardier Flexity Freedom LRV 1.jpg',
                        },
                        {
                            type: ItemType.Image,
                            src: 'Transit City/Alstom_Citidas_Spirit.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    The origins for Transit City began in 2005 with the completion
                                    of the Building a Transit City study conducted by the TTC, which
                                    called for the construction of rapid transit on key
                                    thoroughfares in the city including Eglinton Avenue, Lawrence
                                    Avenue, Sheppard Avenue, Kingston Road, King Street, Queen
                                    Street, Dundas Avenue West, Bremner Boulevard, Don Mills Road,
                                    Lakeshore Boulevard, and Jane Street.<sup>21</sup> The study
                                    prioritised lower-cost surface rapid transit options including
                                    the creation of dedicated rights-of-ways for buses and light
                                    rail transit over costly underground subway lines, crucial for
                                    the TTC in an era of both falling modes of transport market
                                    share and budgets.<sup>22</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    The outcome of the study was endorsed by the then-mayor of
                                    Toronto, David Miller, whose transit plan in the 2006 Toronto
                                    municipal election included light rail transit lines on Don
                                    Mills Road and along the Waterfront, as well as dedicated bus
                                    lanes on Kingston Road and Yonge Street.<sup>25</sup> His
                                    victory in those elections advanced plans of the study towards
                                    the Transit City plan announced in 2007, but even with his
                                    re-election, plans for light rail and surface rapid transit saw
                                    little support outside of the municipality, with the provincial
                                    and federal governments funding plans for an extension of the
                                    Spadina subway line towards York instead.<sup>26</sup> And
                                    despite the promises of cost-savings by building above-ground,
                                    funding for new transit projects was impossible, with the
                                    cash-strapped TTC faced with budget cuts of nearly $200 million
                                    early in 2005 as a result of cuts from the City of Toronto.
                                    <sup>27</sup>
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
                            title: 'Sheppard East LRT',
                        },
                        {
                            type: ItemType.Image,
                            // /images/ already saved
                            src: 'Transit City/Sheppard East Alignment.jpg',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <div>
                                    The environmental assessment of the Sheppard East LRT identified
                                    25 new stops and an interchange with the existing Sheppard line
                                    at Don Mills Station. It was eventually cancelled in favour of
                                    an extension of the Sheppard subway in 2011, although it was
                                    later reinstated. However, the line continues to be limbo as of
                                    2020, with long-term plans reverting to intentions for a subway
                                    extension.
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
                            title: 'Finch West LRT',
                        },
                        {
                            type: ItemType.Image,
                            // /images/ already saved
                            src: 'Transit City/Finch West Alignment.jpg',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <div>
                                    The environmental assessment of the Finch West LRT identified 31
                                    new stops and two interchanges with the Yonge-University subway,
                                    one at the existing Finch Station and one at the then-planned
                                    Finch West Station on the Toronto-York Spadina Subway Extension.
                                    The line saw several changes during the planning process, first
                                    with the section between Finch West Station and Finch Station
                                    being cut, and later its cancellation following Rob Ford’s
                                    election as mayor.
                                </div>
                            ),
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
                                    Planning for Transit City routes had also progressed, with TTC
                                    planners deciding to extend the Finch West LRT from its eastern
                                    terminus at Finch Station on the Yonge-University line to Don
                                    Mills Station on the Sheppard line to meet the existing Sheppard
                                    subway and proposed Sheppard East LRT.<sup>28</sup> Meanwhile,
                                    proposals to extend and refurbish the existing Scarborough rapid
                                    transit line to utilise low-floor LRT technology as proposed on
                                    other Transit City lines were considered, as was connecting the
                                    proposed reconstructed line with the proposed Eglinton LRT.
                                    <sup>29</sup> By mid-2009, two announcements committed funding
                                    for the Sheppard East, Finch West, and Eglinton LRTs from the
                                    provincial and federal governments totalling $6.8 billion, $1
                                    billion for the Sheppard East LRT, planned to begin construction
                                    later in the year, and $5.8 billion for the Finch West and
                                    Eglinton LRTs, which would see construction start in 2010.
                                    <sup>30</sup>
                                </div>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Don Mills Station',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    At Don Mills, TTC planners considered several options for
                                    interfacing the proposed Sheppard East LRT with the existing
                                    Sheppard subway line. Eventually, plans to have the LRT meet the
                                    existing subway at platform level were finalised, with transfers
                                    between the subway and LRT planned to be a walk from one vehicle
                                    to another.<sup>31</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    “TTC Line 4 Don Mills Station” by The West End is licensed under
                                    CC BY-NC-ND 2.0
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            src: 'Transit City/Don Mills Station.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    However, setbacks quickly emerged for the plan, beginning with
                                    funding issues as work began to ramp up. Starting with the
                                    province postponing $4 billion on transit spending in the GTA,
                                    detailed estimates of the costs of the funded Transit City
                                    projects emerged, showing that the approved plans would cost $2
                                    billion more than originally estimated.<sup>32</sup> While
                                    construction on the Sheppard East LRT began in late 2009,
                                    Metrolinx revised timelines for the other two projects, delaying
                                    the completion date of projects by two years on top of the
                                    delays in postponing construction until at least 2013.
                                    <sup>33</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    By then, the provincial government was planned to fund the
                                    entirety of the approved Transit City projects, except for a
                                    $330 million portion from the federal government.<sup>34</sup>{' '}
                                    Meanwhile, portions of the Sheppard East and Finch West LRTs
                                    were delayed for future phases, with the loss of a short section
                                    of the Sheppard East LRT from Morningside Avenue to Meadowvale
                                    Road, and the elimination of the section between Finch West
                                    station and Don Mills Station.<sup>35</sup>
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
                            title: 'Funded transit lines',
                        },
                        {
                            type: ItemType.Image,
                            // /images/ already saved
                            src: 'Transit City/Funded Transit City Map.png',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <div>
                                    The provincial government moved to fund three of the seven
                                    Transit City projects and an extension of the Scarborough Rapid
                                    Transit line. However, changing plans and limited funding meant
                                    several changes to the plan before construction could start.
                                    Eventually, only two of the four projects funded in 2009 began
                                    construction.
                                </div>
                            ),
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
                                    More worrying, however, was the upcoming 2010 Toronto municipal
                                    elections, with front-runner (and eventual mayor-elect) Rob Ford
                                    campaigning on ending the “war on the car” by cancelling Transit
                                    City, which projects would have run on a dedicated surface
                                    right-of-way in the median of roads, removing left-turn lanes
                                    found in the centre-median lanes.<sup>36</sup> His election and
                                    the eventual cancellation of Transit City projects on the first
                                    day of taking office in favour of his transit plan, namely the
                                    completion of the Sheppard subway as proposed in Network 2011
                                    (Downsview to Scarborough Centre), put the city at odds with the
                                    province, which had already spent $130 million on planning and
                                    $1.3 billion in contracts related to tunnel-boring machines and
                                    light rail vehicles.<sup>37</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    However, work underway on the Sheppard East LRT continued, with
                                    the work underway grade-separating the Stouffville GO line
                                    tracks from Sheppard Avenue necessary for either an LRT or a
                                    subway.<sup>38</sup> Ultimately, negotiations between the city
                                    and the province resulted in a revised plan for transit in the
                                    city, one that transferred all provincial funding related to
                                    Transit City to a new fully-underground Eglinton LRT, along with
                                    an extension of the Sheppard subway to be built with municipal
                                    and private funding.<sup>39</sup>
                                </div>
                            ),
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    Today, portions of Transit City survive, both in plans and
                                    in-reality. Further developments in city council eventually
                                    restored the pre-Ford election plans for light rail, and the
                                    Eglinton LRT began construction in 2011, with the Finch West LRT
                                    delayed several times by the provincial government until
                                    preparation work began in 2019. A Sheppard East LRT was later
                                    put on-hold, and eventually cancelled, with the current
                                    provincial government planning for an eventual extension of the
                                    Sheppard subway to approximately the intersection of Sheppard
                                    Avenue and McCowan Road.<sup>40</sup>
                                </div>
                            ),
                        },
                    ]}
                />
                <WebColumn
                    left={[
                        {
                            type: ItemType.ContentTitle,
                            title: 'Eglinton Crosstown Construction',
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    Construction on the Eglinton Crosstown began in 2011 with a
                                    total of 25 stations and stops, underground and aboveground.
                                    Pictured is the western portal located east of Mount Dennis
                                    Station where trains will run elevated over Black Creek Drive.
                                    <sup>41</sup>
                                </span>
                            ),
                        },
                        {
                            type: ItemType.Quote,
                            text: () => (
                                <span>
                                    “working at the western end” by Mary Crandall is licensed under
                                    CC BY-NC-ND 2.0
                                </span>
                            ),
                        },
                    ]}
                    right={[
                        {
                            type: ItemType.Image,
                            src: 'Transit City/Mount Dennis Portal.jpg',
                        },
                        {
                            type: ItemType.Paragraph,
                            text: () => (
                                <div>
                                    Meanwhile, plans for rapid transit on Don Mills survives as
                                    studies for originally, the Relief Line North rapid transit and
                                    now the Ontario Line, a proposed rapid transit line that
                                    integrates elements of the cancelled Relief Line and the
                                    proposed Don Mills LRT. Both Jane Street and the waterfront LRTs
                                    remain on TTC and City of Toronto plans for future study, while
                                    plans for a Scarborough-Malvern LRT are currently being studied
                                    as part of an extension of the Eglinton LRT eastwards. More than
                                    ten years on, elements of Transit City have continued to be
                                    relevant in transit planning in Toronto, and two lines
                                    originally proposed as part of the plan are under construction
                                    and planned to open in the near future.
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
                className=" my-6"
                width={1000}
                height={500}
                priority
                placeholder="blur"
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto"
                }} />
            ;<div>{renderText()}</div>
        </div>
    );
}
