import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../Header.js';
export default class mainSite extends Component {
	render() {
		return (
			<div className="container">
				<Head>
					<link href="/styles.css" rel="stylesheet" />
					<title>Cancelled Toronto</title>
				</Head>
				<Header />
				{this.props.children}
			</div>
		);
	}
}
