// To do: document!
import React, { Component } from 'react';

export default class WebColumn extends Component {
	renderItem = (item) => {
		const boilerplate = {
			stockArray: [
				{
					type: 'img',
					// /images/ already saved
					src: ''
				},
				{
					type: 'para',
					text: () => <div />
				},
				{
					type: 'quote',
					text: () => <div />
				},
				// Titles text can be function or strings
				{
					type: 'content-title',
					title: <div />
				},
				{
					type: 'main-title',
					title: <div>can be function or title</div>
				},
				{
					type: 'main-subtitle',
					title: <div>can be function or title</div>
				},
				{
					type: 'column2',
					right: [],
					left: []
				}
			]
		};
		// Wide image
		if (item.type == 'img') {
			let specClass = 'WC-item_img';
			let specClassCon = 'WC-item_img-con ';
			if (item.adjust) {
				if (item.adjust.width == '2/3') {
					specClass += ' WC-item_img_23';
				}
				if (item.adjust.hide === true) {
					specClassCon += ' WC-item_img-con_hide';
				}
			}
			return (
				<div className={specClassCon}>
					<img
						className={specClass}
						src={`/images/${item.src}`
						// '/images/test.png'
						}
						alt=""
					/>
				</div>
			);
		} else if (item.type == 'para') {
			return (
				<div className="WC-item_para-con">
					<p className="WC-item_para">{item.text()}</p>
				</div>
			);
		} else if (item.type == 'content-title') {
			return <div className="WC-item_ct">{typeof item.title == 'function' ? item.title() : item.title}</div>;
		} else if (item.type == 'main-title') {
			return <div className="WC-item_mt">{typeof item.title == 'function' ? item.title() : item.title}</div>;
		} else if (item.type == 'main-subtitle') {
			return <div className="WC-item_mst">{typeof item.title == 'function' ? item.title() : item.title}</div>;
		} else if (item.type == 'quote') {
			return (
				<div className="WC-item_quote-con">
					<p className="WC-item_quote">{item.text()}</p>
				</div>
			);
		} else if (item.type == 'img3row') {
			return (
				<div className="WC-item_img3row">
					<div className="WC-item_img3row__img1">
						<img src={`/images/${item.images[0]}`} />
					</div>
					<div className="WC-item_img3row__img2">
						<img src={`/images/${item.images[1]}`} />
					</div>
					<div className="WC-item_img3row__img3">
						<img src={`/images/${item.images[2]}`} />
					</div>
				</div>
			);
		} else if (item.type == 'column2') {
			return (
				<div className="WC-item_col2">
					<div className="WC-item_col2-left">{item.left.map((son) => this.renderItem(son))}</div>
					<div className="WC-item_col2-right">{item.right.map((son) => this.renderItem(son))}</div>
				</div>
			);
		} else if (item.type == 'empty') {
			return <div className="WC-item_empty" />;
		} else if (item.type == 'general') {
			return <div className="WC-item_gereal">{item.render()}</div>;
		}
	};
	renderRight = () => {
		return this.props.right.map((item) => <div className="WC-item">{this.renderItem(item)}</div>);
	};
	renderLeft = () => {
		return this.props.left.map((item) => <div className="WC-item">{this.renderItem(item)}</div>);
	};
	renderCenter = () => {
		return this.props.center.map((item) => <div className="WC-item">{this.renderItem(item)}</div>);
	};
	render() {
		const WC = `${this.props.oneColumn ? 'WC-center' : ''} WC ${this.props.rightOnly ? 'WC-rightOnly' : ''}`;
		if (this.props.oneColumn) {
			return (
				<div className={WC}>
					<div className="WC-center">{this.renderCenter()}</div>
				</div>
			);
		}
		return (
			<div className={WC}>
				<div className="WC-left">{this.renderLeft()}</div>
				<div className="WC-right">{this.renderRight()}</div>
			</div>
		);
	}
}
