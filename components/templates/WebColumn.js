// There is documentation available on what the blocks and lists mean in the same directory as this file
import React, { Component } from 'react';

export default class WebColumn extends Component {
	renderItem = (item) => {
		const type = item.type;
		if (type === 'img') {
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
						alt={item.alt || ''}
					/>
				</div>
			);
		} else if (type === 'logo') {
			let specClass = 'WC-item_img';
			let specClassCon = 'WC-item_img-con ';
			if (item.adjust) {
				if (item.adjust.width == '1/3') {
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
						alt={item.alt || ''}
					/>
				</div>
			);
		} else if (type === 'para') {
			return (
				<div className="WC-item_para-con">
					<span className="WC-item_para">{typeof item.text == 'function' ? item.text() : item.title}</span>
				</div>
			);
		} else if (type === 'content-title') {
			return <div className="WC-item_ct">{typeof item.title == 'function' ? item.title() : item.title}</div>;
		} else if (type === 'main-title') {
			return <div className="WC-item_mt">{typeof item.title == 'function' ? item.title() : item.title}</div>;
		} else if (type === 'main-subtitle') {
			return <div className="WC-item_mst">{typeof item.title == 'function' ? item.title() : item.title}</div>;
		} else if (type === 'quote') {
			return (
				<div className="WC-item_quote-con">
					<span className="WC-item_quote">{typeof item.text == 'function' ? item.text() : item.title}</span>
				</div>
			);
		} else if (type === 'img3row') {
			return (
				<div className="WC-item_img3row">
					<div className="WC-item_img3row__img1">
						<img src={`/images/${item.images[0]}`} alt={item.alt || ''} />
					</div>
					<div className="WC-item_img3row__img2">
						<img src={`/images/${item.images[1]}`} alt={item.alt || ''} />
					</div>
					<div className="WC-item_img3row__img3">
						<img src={`/images/${item.images[2]}`} alt={item.alt || ''} />
					</div>
				</div>
			);
		} else if (type === 'column2') {
			return (
				<div className="WC-item_col2">
					<div className="WC-item_col2-left">{this.renderList(item.left)}</div>
					<div className="WC-item_col2-right">{this.renderList(item.right)}</div>
				</div>
			);
		} else if (type === 'empty') {
			return <div className="WC-item_empty" />;
		} else if (type === 'general') {
			return <div className="WC-item_gereal">{item.render()}</div>;
		}
	};
	renderList = (list) => {
		return list.map((item, i) => (
			<div key={i} className="WC-item">
				{this.renderItem(item)}
			</div>
		));
	};
	renderRight = () => {
		let right = this.props.right || [];
		return this.renderList(right);
	};
	renderLeft = () => {
		let left = this.props.left || [];
		return this.renderList(left);
	};
	renderCenter = () => {
		let center = this.props.center || [];
		return this.renderList(center);
	};
	render() {
		// oneColumn , rightOnly are properties that can be passed through to format how the component is goingt to look like
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
