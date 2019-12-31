import React, { Component } from 'react';
import Template from './template';
export default class Year1990 extends Component {
	renderView() {
		return <div>IMAGE TIME BOYS</div>;
	}
	renderText() {
		return (
			<div>
				<h1>Let's Move</h1>
				<p>
					A natural evolution of the TTC’s Network 2011 plan, the 1990 Let’s Move transit plan by the Liberal
					provincial government incorporated key elements of Network 2011 including a busway on Eglinton
					Avenue West between Mississauga and Eglinton West Station and “conditional support” for a Sheppard
					subway between Yonge Street and Scarborough City Centre – subject to the amount of private
					investment towards the project.<sup>1</sup> Beyond that, the plan introduced an ambitious plan to
					connect the two ends of the Yonge-University-Spadina subway by creating a loop through the hydro
					corridor parallel to Finch Avenue, a move that was predicted to increase capacity on the squeezed
					Yonge-University-Spadina line by 3,000 riders per hour.<sup>2</sup> Meanwhile, extensions to both
					the Bloor-Danforth subway in the west to Sherway Gardens and the Scarborough rapid transit line in
					the east to Sheppard Avenue and Markham Road would extend rapid transit to areas currently poorly
					served.<sup>3</sup> The combined plan along with GO Transit and TTC streetcar projects was to cost
					over $5 billion dollars and support plans for Toronto’s bid for the 1996 Olympics.<sup>4</sup>
				</p>
				<p>
					The plan was well-received by municipal officials within Metro Toronto and seen as a breakthrough in
					their fight for transit funding for projects. However, the plan, announced in April 1990, was soon
					back to the drawing board following the Liberal provincial government’s defeat in the September 1990
					Ontario general election and the election of an NDP provincial government who quickly halted the
					Liberals’ transit plans under the reasoning of conducting “value for money” studies of the projects.<sup>5</sup>{' '}
					Furthermore, the failure of Toronto’s bid for the 1996 Olympics killed hopes for Olympic-related
					private investment into transit projects such as the Sheppard subway, worrying top transit officials
					within the TTC that plans would be delayed as further funding was sought.<sup>6</sup> Despite these
					setbacks, the projects within the plan were mostly left untouched in the eventual provincial NDP’s
					transit plans, which further refined details including phasing and funding.
				</p>
			</div>
		);
	}
	render() {
		return <Template view={this.renderView} text={this.renderText} />;
	}
}
