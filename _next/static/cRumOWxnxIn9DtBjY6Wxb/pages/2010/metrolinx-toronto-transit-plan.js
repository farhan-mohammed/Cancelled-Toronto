(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"21bv":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("0iUn"),a=n("sLSF"),i=n("MI3g"),r=n("a7VT"),s=n("Tit0"),l=n("q1tI"),u=n.n(l).a.createElement,c=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u("div",{className:"body__img-con"},u("img",{src:this.props.img,alt:"",className:"body__img"}))}}]),t}(l.Component)},GywJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2010/metrolinx-toronto-transit-plan",function(){return n("sJfg")}])},O4A9:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n("0iUn"),a=n("sLSF"),i=n("MI3g"),r=n("a7VT"),s=n("AT/M"),l=n("Tit0"),u=n("vYYK"),c=n("q1tI"),d=n.n(c).a.createElement,h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return n=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l))),Object(u.a)(Object(s.a)(n),"renderItem",(function(e){var t=e.type;if("img"===t){var o="WC-item_img",a="WC-item_img-con ";return e.adjust&&("2/3"==e.adjust.width&&(o+=" WC-item_img_23"),!0===e.adjust.hide&&(a+=" WC-item_img-con_hide")),d("div",{className:a},d("img",{className:o,src:"/images/".concat(e.src),alt:e.alt||""}))}return"para"===t?d("div",{className:"WC-item_para-con"},d("span",{className:"WC-item_para"},"function"==typeof e.text?e.text():e.title)):"content-title"===t?d("div",{className:"WC-item_ct"},"function"==typeof e.title?e.title():e.title):"main-title"===t?d("div",{className:"WC-item_mt"},"function"==typeof e.title?e.title():e.title):"main-subtitle"===t?d("div",{className:"WC-item_mst"},"function"==typeof e.title?e.title():e.title):"quote"===t?d("div",{className:"WC-item_quote-con"},d("span",{className:"WC-item_quote"},"function"==typeof e.text?e.text():e.title)):"img3row"===t?d("div",{className:"WC-item_img3row"},d("div",{className:"WC-item_img3row__img1"},d("img",{src:"/images/".concat(e.images[0]),alt:e.alt||""})),d("div",{className:"WC-item_img3row__img2"},d("img",{src:"/images/".concat(e.images[1]),alt:e.alt||""})),d("div",{className:"WC-item_img3row__img3"},d("img",{src:"/images/".concat(e.images[2]),alt:e.alt||""}))):"column2"===t?d("div",{className:"WC-item_col2"},d("div",{className:"WC-item_col2-left"},n.renderList(e.left)),d("div",{className:"WC-item_col2-right"},n.renderList(e.right))):"empty"===t?d("div",{className:"WC-item_empty"}):"general"===t?d("div",{className:"WC-item_gereal"},e.render()):void 0})),Object(u.a)(Object(s.a)(n),"renderList",(function(e){return e.map((function(e,t){return d("div",{key:t,className:"WC-item"},n.renderItem(e))}))})),Object(u.a)(Object(s.a)(n),"renderRight",(function(){var e=n.props.right||[];return n.renderList(e)})),Object(u.a)(Object(s.a)(n),"renderLeft",(function(){var e=n.props.left||[];return n.renderList(e)})),Object(u.a)(Object(s.a)(n),"renderCenter",(function(){var e=n.props.center||[];return n.renderList(e)})),n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e="".concat(this.props.oneColumn?"WC-center":""," WC ").concat(this.props.rightOnly?"WC-rightOnly":"");return this.props.oneColumn?d("div",{className:e},d("div",{className:"WC-center"},this.renderCenter())):d("div",{className:e},d("div",{className:"WC-left"},this.renderLeft()),d("div",{className:"WC-right"},this.renderRight()))}}]),t}(c.Component)},Q0pP:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("0iUn"),a=n("sLSF"),i=n("MI3g"),r=n("a7VT"),s=n("Tit0"),l=n("q1tI"),u=n.n(l).a.createElement,c=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props.footnotes||[];return u("ol",{className:"footnotes__list"},e.map((function(e,t){return u("li",{key:t,className:"footnotes__item"},e)})))}}]),t}(l.Component)},sJfg:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var o=n("0iUn"),a=n("sLSF"),i=n("MI3g"),r=n("a7VT"),s=n("AT/M"),l=n("Tit0"),u=n("vYYK"),c=n("q1tI"),d=n.n(c),h=(n("8Kt/"),n("mk2b")),p=n("21bv"),f=n("O4A9"),g=n("Q0pP"),m=d.a.createElement,w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return n=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l))),Object(u.a)(Object(s.a)(n),"renderView",(function(){return m(p.a,{img:"/images/Metrolinx-Toronto Transit Plan/Metrolinx-Toronto Transit Plan Map.png"})})),n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"renderText",value:function(){return m("div",null,m(f.a,{left:[{type:"main-title",title:"Metrolinx / Toronto Transit Plan (2011)"},{type:"main-subtitle",title:"Cancelled in 2012"}],right:[{type:"quote",text:function(){return m("span",null,"The Metrolinx / Toronto Transit Plan was a plan spearheaded by Toronto mayor Rob Ford that replaced the funded plan for light rail on Sheppard, Finch, and Eglinton Avenues with extensions of the Sheppard subway east and westwards and a fully grade-separated LRT on Eglinton Avenue.")}},{type:"para",text:function(){return m("span",null,"The cancellation of Transit City following Rob Ford\u2019s election as mayor of Toronto in late October of 2010 meant that transit plans in the city would shift yet again. While Transit City proposed light rail transit (LRT) running along several key thoroughfares in the city in a dedicated surface right-of-way, Rob Ford\u2019s transit plan focused on building subways, with the extension of the Sheppard subway eastwards to Scarborough Centre Station and westwards to Downsview Station his number one focus.",m("sup",null,"1"))}},{type:"para",text:function(){return m("span",null,"By the time of Transit City\u2019s cancellation on the first day of taking office, the Sheppard East LRT was already under construction as construction crews began building a bridge for Stouffville line GO trains over Sheppard Avenue, work that was continued because of its necessity for either plan.",m("sup",null,"2")," That left a handful of other funded Transit City and other Toronto transit projects in limbo including the proposed Finch West LRT running from Finch West Station on the yet-unopened Toronto-York Spadina Subway Extension to Humber College, the Eglinton LRT between approximately Black Creek Drive to Kennedy Station on the Bloor-Danforth Line, and the refurbishment and extension of the Scarborough rapid transit line from McCowan Station to Sheppard Avenue.",m("sup",null,"3"))}}]}),m(f.a,{left:[{type:"content-title",title:"Scarborough City Centre"},{type:"quote",text:function(){return m("span",null,"Development of Scarborough City Centre had increased significantly since a Sheppard subway to Scarborough City Centre was first proposed in 1985 through Network 2011. Although office development plateaued after the 1990s as metropolitan-level planning trends focused on \u201crecentralization\u201d towards the downtown core, significant growth in high-density residential in the area has increased the population significantly.",m("sup",null,"4"))}},{type:"quote",text:function(){return m("span",null,"\u201cScarborough Town Centre (DSC_0387)\u201d by Eric Sehr is licensed under CC BY-NC-ND 2.0")}}],right:[{type:"img",src:"Metrolinx-Toronto Transit Plan/Scarborough City Centre.jpg",alt:"This image shows the skyline of Scarborough City Centre, a central business district of Toronto and proposed terminus of an extension of the Sheppard subway eastwards"},{type:"para",text:function(){return m("span",null,"Negotiations for a revised transit plan between the regional transportation agency Metrolinx and the city began shortly after in December 2010, with the province focusing on saving the Eglinton LRT, described as the \u201ccentrepiece\u201d of its regional transportation plan.",m("sup",null,"5")," Eglinton\u2019s high connectivity with several GO Transit lines, the existing subway, and future extensions towards Toronto Pearson airport and the Mississauga Transitway ultimately saved the project from the chopping block, unlike the Sheppard East and Finch West LRTs, along with the Scarborough rapid transit line refurbishment and extension.",m("sup",null,"6")," During negotiations, several cost-saving methods were considered as a method to avoid expensive underground construction, including elevated transit options and bus-only lanes through the Finch hydro corridor as a replacement for the planned Finch West LRT.",m("sup",null,"7"))}},{type:"para",text:function(){return m("span",null,"Developments in negotiations peaked in mid-February 2011, with the City of Toronto pitching to Metrolinx an agreement to shift all Transit City funding towards a fully underground Eglinton LRT between approximately Black Creek Drive to Kennedy Station, while the city would work on extending the Sheppard subway east and westwards utilising private-public partnerships.",m("sup",null,"8")," An agreement was finally made in April of 2011 in the form of a $12.4 billion transit plan similar to the City of Toronto\u2019s earlier proposal, with the approximately $8.2 billion in provincial funding towards Transit City projects transferred towards building a fully-underground Eglinton LRT running from Black Creek Drive to Kennedy Station, where it would then approach the surface and follow the route of a refurbished Scarborough rapid transit line.",m("sup",null,"9"))}},{type:"para",text:function(){return m("span",null,"Meanwhile, $4.2 billion would be spent on extensions east and westwards to the Sheppard subway to Downsview Station in the east and Scarborough Centre Station in the west, set to open in 2019.",m("sup",null,"10")," Remaining provincial funds leftover from the $8.2 billion planned to be spent on the Eglinton LRT would also be diverted to completing the Sheppard subway extensions, anticipated to be up to $650 million.",m("sup",null,"11"))}}]}),m(f.a,{oneColumn:!0,center:[{type:"content-title",title:"Sheppard East Extension"},,{type:"img",src:"Metrolinx-Toronto Transit Plan/Sheppard East Extension Alignment.jpg",alt:"This image shows the proposed extension of the Sheppard subway eastwards, with six new stations at Consumers Road, Victoria Park Avenue, Warden Avenue, Kennedy Road, the CN/CP rail interchange, and Progress Avenue. A new connection to a proposed re-built Scarborough Rapid Transit line in the form of an extension of the proposed Eglinton Crosstown LRT would be made at Scarborough Centre Station."},{type:"quote",text:function(){return m("span",null,"Conceptual alignments of the Sheppard subway\u2019s extension eastwards to Scarborough Town Centre featured six new stations with connections at Scarborough Centre Station to a rebuilt Scarborough Rapid Transit line that would be part of the provinces\u2019 Eglinton-Scarborough Crosstown LRT project.",m("sup",null,"12")," The alignment closely followed plans for a complete Sheppard subway as laid out in the original 1992 environmental assessment for the project studied between the Let\u2019s Move and Rapid Transit Expansion Program eras.",m("sup",null,"13"))}}]}),m(f.a,{oneColumn:!0,center:[{type:"content-title",title:"Sheppard West Extension"},{type:"img",src:"Metrolinx-Toronto Transit Plan/Sheppard West Extension Alignment.jpg",alt:"This image shows the alignment of the proposed extension of the Sheppard subway westwards, with three new stations at Senlac Road, Bathurst Avenue, and Wilson Heights Boulevard. A new connection to the Spadina segment of the Yonge-University subway would be made at Downsview station."},{type:"quote",text:function(){return m("span",null,"Conceptual alignments of the Sheppard subway\u2019s extension westwards to Downsview Station (later renamed Sheppard West Station) included three new stations with a new connection to the Yonge-University subway at Downsview Station.",m("sup",null,"14"))}}]}),m(f.a,{rightonly:!0,left:[],right:[,{type:"para",text:function(){return m("span",null,"Almost immediately, concerns over the city\u2019s proposal to raise funds necessary for the Sheppard subway extensions were raised. While Rob Ford maintained that the extensions could be built using funds from private-public partnerships, it quickly became apparent that other revenue tools would be necessary to raise funds for the project, with Gordon Chong, head of the TTC\u2019s investment division suggesting road tolls, congestion charges, and development fees.",m("sup",null,"14")," By June 2011, further study into the project found the estimated cost would be $500 million more than originally pegged at, now totalling $4.7 billion.",m("sup",null,"16"))}},{type:"para",text:function(){return m("span",null,"Opposition to the project from within the TTC and the city also developed, beginning with TTC chief general manager Gary Webster who refused to support the Sheppard subway extensions, much to the ire of mayor Rob Ford, whose allies on the TTC board later fired Gary Webster.",m("sup",null,"17")," Then, following a series of victories in cancelling proposed budget cuts, Toronto city councillors led by TTC chair Karen Stintz began calling for a compromise transit plan, one that would see the original plan for an Eglinton LRT running underground between Keele Street and Laird Drive only, with a surface right-of-way for the rest of the route.",m("sup",null,"18"))}}]}),m(f.a,{left:[{type:"content-title",title:"Sheppard Subway"},{type:"quote",text:function(){return m("span",null,"The focal point of the Metrolinx/Toronto Transit Plan was extensions of the Sheppard subway both east and westwards, similarly to the original Sheppard subway as proposed in Network 2011. The subway was planned to utilise significant private investment, mainly from developers, but the plan fell through as further analysis found a funding pitfall of over $1 billion.",m("sup",null,"19"))}},{type:"quote",text:function(){return m("span",null,"\u201cIMG_4538\u201d by wyliepoon is licensed under CC BY-NC-ND 2.0")}}],right:[{type:"img",src:"Metrolinx-Toronto Transit Plan/Sheppard-Yonge Station.jpg",alt:"This image shows Sheppard-Yonge station at platform-level."},{type:"para",text:function(){return m("span",null,"In a new transit plan spearheaded by Karen Stintz, the savings from the Eglinton LRT would be utilised to extend the Sheppard subway eastwards two stations to Victoria Park Avenue, with remaining funds spent on some sort of rapid transit on Finch Avenue West.",m("sup",null,"20")," Costs saved from avoiding tunnelling were estimated to be as much as $1.5 billion.",m("sup",null,"21"))}},{type:"para",text:function(){return m("span",null,"Her plan, debated in council in early February of 2012, restored the original Transit City plans for the Finch West and Eglinton LRTs, while pausing plans for a Sheppard subway in anticipation of recommendations from an expert panel on whether surface light rail or underground subway technology would be more effective.",m("sup",null,"22")," ","Soon after, city staff concluded that Rob Ford\u2019s plan to almost exclusively utilise private investment towards extensions of the Sheppard subway were unviable, with a funding gap of almost $1 billion on the section between Don Mills Station and Scarborough Centre Station alone.",m("sup",null,"23"))}},{type:"para",text:function(){return m("span",null,"Finally, with the release of the report in mid-March of 2012 showing that light rail technology would be more effective, council voted 24-19 to restore the previous funded plan for light rail on Sheppard East, Finch West, and Eglinton Avenues, much to the dismay of the mayor.",m("sup",null,"24")," Appealing to the province, which would have wholly funded the $8.4 billion light rail plan, Rob Ford urged the province not to fund the plan, which was denied.",m("sup",null,"25"))}}]}),m(f.a,{oneColumn:!0,center:[{type:"content-title",title:"City-council backed plan"},{type:"img",src:"Metrolinx-Toronto Transit Plan/Funded Transit City Map.png",alt:"This image shows the network of transit lines that were fully funded prior to their cancellation by Rob Ford. It features the Finch West LRT, the Eglinton Crosstown LRT, and the Sheppard East LRT."},{type:"quote",text:function(){return m("div",null,"As funding issues for the Sheppard subway continued to arise, city council voted to restore original plans for provincially-funded light rail lines on Sheppard, Finch, and Eglinton Avenues."," ")}}]}),m(f.a,{left:[],right:[{type:"para",text:function(){return m("span",null,"Attempts to revive the subway-focused plan through a city-wide referendum were unsuccessful, as were efforts to delay the light rail plan, which\u2019s development was transferred from the TTC to the province through Metrolinx.",m("sup",null,"26")," ","Construction on light rail would begin on Sheppard Avenue East in 2014 and Finch Avenue West in 2015, which along with the then already under construction Eglinton LRT would see completion in 2020.",m("sup",null,"27")," In the end, the Sheppard East LRT was further delayed, deferred, and eventually replaced with proposals for a future extension of the Sheppard subway in 2019, while the Finch West LRT began preparatory construction in 2019, with a completion date set for 2023.",m("sup",null,"28"))}},{type:"para",text:function(){return m("span",null,"The saga that led to the creation of the Metrolinx/Toronto Transit Plan was ultimately a blip from the province\u2019s original plan for a watered-down Transit City proposal. Although certain elements of the Metrolinx/Toronto Transit Plan from 2011 survive today through the Doug Ford Progressive Conservative administration\u2019s plan for an eventual extension of the Sheppard subway eastwards, such a project is neither funded or a priority. Meanwhile, Rob Ford\u2019s vision for a fully-underground Eglinton LRT was never realized, with current construction on a mixed-grade LRT planned for completion in fall of 2021. Despite so, the Metrolinx/Toronto Transit Plan represented the culmination of previous transit plans such as the Rapid Transit Expansion Program and Network 2011, which foresaw the construction of a complete Sheppard subway as well as grade-separated rapid transit on Eglinton Avenue West.")}}]}),m(f.a,{left:[{type:"main-title",title:"footnotes"}],right:[{type:"para",text:function(){return m(g.a,{footnotes:["Kristin, Rushowy, and Kalinowski Tess. \u201cSheppard Not a Priority - Yet: Despite Ford's Comments, Transit Plan Won't Be Set until the New Year.\u201d Toronto Star, December 22, 2010, sec. GT2.","Tess, Kalinowski, and Rider David. \u201c'War on the Car Is over': Ford Scraps Transit City: Move Could Leave Toronto on Hook for Millions in Penalties, Wasted Work.\u201d Toronto Star, December 2, 2010, sec. A1.","David, Rider. \u201cEglinton Rail Back on Table in Ford's New Transit Plan: Signs Point to Compromise with Metrolinx, TTC That Would Save LRT Line.\u201d Toronto Star, January 4, 2011, sec. A1.","Eric Sehr. Scarborough Town Centre (DSC_0387), 2013, colour digital, Flickr, Toronto, accessed January 21, 2020, https://www.flickr.com/photos/ericvery/9417961445/. Creative Commons License (CC BY-NC-ND 2.0), https://creativecommons.org/licenses/by-nc-nd/2.0/","Rider. \u201cEglinton Rail Back on Table.\u201d sec. A1; Tess, Kalinowski. \u201cFord Pitches Private-Public Partnership for Subway: Metrolinx Would Still Build Eglinton Light Rail, at Least to Kennedy Station.\u201d Toronto Star, February 17, 2011, sec. A3.","Rider. \u201cEglinton Rail Back on Table.\u201d sec. A1","Rider. \u201cEglinton Rail Back on Table.\u201d sec. A1","Kalinowski. \u201cFord Pitches Private-Public Partnership for Subway.\u201d sec. A3.","Tess, Kalinowski. \u201cIt's Full Steam Ahead for Eglinton LRT: Province and City Agree to Underground Rail Plan.\u201d Toronto Star, April 1, 2011, sec. GT3.","Robert, Benzies, and Kalinowski Tess. \u201c$12.4 Billion TTC Deal 'Close': Queen's Park, City Agree to Extend Sheppard Subway, Build Underground Eglinton Light Rail Line.\u201d Toronto Star, March 31, 2011, sec. GT1.","Kalinowski. \u201cIt's Full Steam Ahead for Eglinton LRT\u201d sec. GT3.","David, Crombie, Miller Eric, Chong Gordon, Hunter Mitzie, Khosla Prabha, Ahmed Israt, and McCullough Ernie. \u201cReport of the Expert Advisory Panel Regarding Transit on Sheppard Avenue East.\u201d Toronto, 2012; \u201cOntario And Toronto Moving Forward On Public Transit.\u201d Ontario And Toronto Moving Forward On Public Transit. Office of the Premier, March 31, 2011. https://news.ontario.ca/opo/en/2011/03/ontario-and-toronto-moving-forward-on-public-transit.html.","Canada. Ontario. Ministry of the Environment. Review of the environmental assessment Sheppard Subway. Toronto: Ontario Ministry of the Environment, 1993","\u201cSheppard Subway Extensions Analysis of Funding Options for Toronto Transit Infrastructure Limited and the City of Toronto.\u201d Toronto: KPMG, 2011.","James, Royson. \u201cCaution: Road Tolls Ahead: Ford's Transit Guru Predicts Drivers Will Pay the Price for Subway Expansion.\u201d Toronto Star, May 28, 2011, sec. A1.","Paul, Moloney. \u201cSheppard Subway Cost Soars.\u201d Toronto Star, June 25, 2011, sec. GT4.","Elizabeth, Church. \u201cTTC Chief Fired as Province Runs out of Patience.\u201d The Globe and Mail. February 22, 2012, sec. A1; Tess, Kalinowski. \u201cFord Plots to Oust TTC Chief: Shakeup Likely as General Manager's Opposition to Sheppard Subway Extension Puts Job at Risk.\u201d Toronto Star, July 22, 2011, sec. A1.","Tess, Kalinowski. \u201cNew Eglinton LRT Plan Could Be a Step Closer.\u201d Toronto Star, January 24, 2012, sec. GT1.","Wyliepoon. IMG_4538, 2009, colour digital, Flickr, Toronto, accessed January 21, 2020, https://www.flickr.com/photos/wyliepoon/4077118456/. Creative Commons License (CC BY-NC-ND 2.0), https://creativecommons.org/licenses/by-nc-nd/2.0/","Daniel, Dale, and David Rider. \u201cFord's TTC Plans Lack Support: More Councillors Back Vision of Transit Chair Karen Stintz.\u201d Toronto Star, January 28, 2012, sec. GT2.","Dale, and Rider. \u201cFord's TTC Plans Lack Support.\u201d sec. GT2.","Tess, Kalinowski, and Dale Daniel. \u201cFord Trounced in Transit Vote: Mayor Calls Council Defeat 'Irrelevant' as Stintz Wins Vote to Restore Above-Ground LRT Plan.\u201d Toronto Star, February 9, 2012, sec. A1.","James, Royson. \u201cFord Fumbles as City Staff Pan Subway.\u201d Toronto Star, March 1, 2012, sec. A1.","James, Royson. \u201cFord's Last Subway Lifeline.\u201d Toronto Star, March 17, 2012, sec. GT2; James, Royson. \u201cFord Refuses to Accept Subway Loss: Council Votes 24-19 for Light Rail, but Combative Mayor Wants to Turn down Province's $8.4B Cheque.\u201d Toronto Star, March 23, 2012, sec. A1.","James, Royson. \u201cFord Refuses to Accept Subway Loss.\u201d sec. A1.","Tess, Kalinowski, Dale Daniel, and Benzie Robert. \u201cDetailed LRT Plan Few Months Away: Metrolinx Ponders Scheduling and Cash, Ford Eyes Referendum.\u201d Toronto Star, March 24, 2012, sec. GT2; Tess, Kalinowski. \u201cFord Fails to Delay LRT Master Plan.\u201d Toronto Star, November 2, 2012, sec. GT3; Tess, Kalinowski. \u201cProvince Takes Lead on LRT Project: TTC Differs on Timeline for Eglinton Line Work.\u201d Toronto Star, May 31, 2012, sec. GT2.","Tess, Kalinowski. \u201cMetrolinx to Build Sheppard LRT First: Finch Will Follow, with All Four of Toronto's Light Rail Lines Expected to Be Done by 2020.\u201d Toronto Star, April 25, 2012, sec. GT1.","Rhianna, Jackson-Kelso, and Bensadoun Emerald. \u201cHow Ford's TTC Overhaul Compares to Toronto City Plans.\u201d Toronto Star, April 11, 2019, sec. GT10."]})}}]}))}},{key:"render",value:function(){return m(h.a,null,m("div",{className:"body-con"},m("div",null,this.renderView()),this.renderText()))}}]),t}(c.Component)}},[["GywJ",0,2,1,3]]]);