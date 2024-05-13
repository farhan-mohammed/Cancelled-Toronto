import Image from 'next/image';
import React from 'react';
import { Item, ItemType } from '@/types/WebColumn/Item';

interface WebColumnProps {
    oneColumn?: Boolean;
    rightOnly?: Boolean;
    left?: Item[];
    right?: Item[];
    center?: Item[];
}
export default function WebColumn({
    oneColumn,
    rightOnly,
    left = [],
    right = [],
    center = [],
}: WebColumnProps) {
    const renderItem = (item: Item) => {
        switch (item.type) {
            case ItemType.Image: {
                let specClass = 'mb-3';
                let specClassCon = 'WC-item_img-con ';
                if (item.adjust) {
                    if (item.adjust.width == '2/3') {
                        specClassCon += ' sm:w-2/3';
                    }
                    if (item.adjust.hide) {
                        specClassCon += ' WC-item_img-con_hide';
                    }
                }
                return (
                    <div className={specClassCon}>
                        <Image
                            className={specClass}
                            src={
                                `/images/${item.src}`
                                // '/images/test.png'
                            }
                            layout="responsive"
                            width={1000}
                            height={500}
                            alt={item.alt || ''}
                        />
                    </div>
                );
            }
            case ItemType.Logo: {
                let specClass = 'WC-item_img';
                let specClassCon = 'mb-4 ';
                if (item.adjust) {
                    if (item.adjust.width == '1/3') {
                        specClass += ' WC-item_img_23';
                    }
                    if (item.adjust.hide) {
                        specClassCon += ' WC-item_img-con_hide';
                    }
                }
                return (
                    <div className={specClassCon}>
                        <Image
                            className={specClass}
                            src={
                                `/images/${item.src}`
                                // '/images/test.png'
                            }
                            width={300}
                            height={300}
                            alt={item.alt || ''}
                        />
                    </div>
                );
            }
            case ItemType.Quote:
            case ItemType.Paragraph:
                return (
                    <div className="mb-5 text-lg">
                        <span className={item.type == ItemType.Quote ? 'italic' : ''}>
                            {typeof item.text == 'function' ? item.text() : item.text}
                        </span>
                    </div>
                );
            case ItemType.ContentTitle:
                return (
                    <div className="uppercase text-3xl tracking-wider font-ttc">
                        {typeof item.title == 'function' ? item.title() : item.title}
                    </div>
                );
            case ItemType.MainTitle:
                return (
                    <div className="uppercase text-4xl tracking-wider font-ttc">
                        {typeof item.title == 'function' ? item.title() : item.title}
                    </div>
                );
            case ItemType.MainSubtitle:
                return (
                    <div className="uppercase text-xl mt-n10 text-light  w-full font-ttc">
                        {typeof item.title == 'function' ? item.title() : item.title}
                    </div>
                );
            case ItemType.ThreeImageInRow:
                return (
                    <div className="flex flex-col sm:flex-row w-full">
                        <div className="sm:mr-4 flex-1 relative ">
                            <Image
                                src={`/images/${item.images[0]}`}
                                alt={item.alt || ''}
                                width={500}
                                height={500}
                                layout="responsive"
                            />
                        </div>
                        <div className="sm:mr-4 flex-1  relative ">
                            <Image
                                src={`/images/${item.images[1]}`}
                                alt={item.alt || ''}
                                width={500}
                                layout="responsive"
                                height={500}
                            />
                        </div>
                        <div className="flex-1 relative ">
                            <Image
                                src={`/images/${item.images[2]}`}
                                alt={item.alt || ''}
                                layout="responsive"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                );
            case ItemType.TwoColumn:
                return (
                    <div className="WC-item_col2">
                        <div className="WC-item_col2-left">{renderList(item.left)}</div>
                        <div className="WC-item_col2-right">{renderList(item.right)}</div>
                    </div>
                );
            case ItemType.Empty:
                return <div className="WC-item_empty" />;
            case ItemType.General:
                if (item.render) {
                    return <div className="WC-item_gereal">{item.render()}</div>;
                }
        }
    };
    const renderList = (list: Item[]) => {
        return list.map((item, i) => (
            <div key={i} className="w-full">
                {renderItem(item)}
            </div>
        ));
    };

    const renderRight = () => renderList(right);
    const renderLeft = () => renderList(left);
    const renderCenter = () => renderList(center);

    // oneColumn , rightOnly are properties that can be passed through to format how the component is goingt to look like
    const WC = `${oneColumn ? 'WC-center' : ''} flex flex-col sm:flex-row w-full max-w-full mt-2 ${
        rightOnly ? 'WC-rightOnly' : ''
    }`;
    if (oneColumn) {
        return (
            <div className={WC}>
                <div className="WC-center">{renderCenter()}</div>
            </div>
        );
    }
    return (
        <div className={WC}>
            <div className="flex-1 box-border px-2">{renderLeft()}</div>
            <div className="flex-2 box-border px-2 w-full sm:w-max-66">{renderRight()}</div>
        </div>
    );
}
