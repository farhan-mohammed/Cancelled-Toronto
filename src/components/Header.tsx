'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import NavList, { NavListItem, File } from '@/store/navList';
export default function Header() {
    const [hamburgOpen, setHamburgOpen] = useState(false);
    const renderList = () =>
        // Uses the List of pages passed through by WebsiteWrapper to render a bar with sections that have dropdowns for the pages that ly in that section
        NavList.map(({ decade, files }) => (
            <li
                className=" min-h-8 flex-1 text-center  flex justify-center	 items-center  transform perspective-none shadow-none text-lg group font-ttc"
                key={decade}
            >
                <span>{`${decade}s`}</span>
                <ul className=" hidden absolute top-full w-full z-100 left-0 group-hover:block">
                    {files.map(({ name, link }) => (
                        <Link href={`/${decade}/${link}`} key={link}>
                            <li className="bg-gray-900 text-white text-base	 p-2 leading-normal  box-border uppercase">
                                {name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </li>
        ));
    const closeHamburg = () => setHamburgOpen(false);
    return (
        <div className="w-full flex flex-row sm:flex-col  align-middle justify-between ">
            <Link className="flex max-w-44 h-10vh min-h-100 p-2" href="/">
                <Image
                    alt="Cancelled Toront Transit Plans"
                    className="relative"
                    src="/images/header/narrow.png"
                    width={200}
                    height={150}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto"
                    }} />
            </Link>
            {/** The hamburger menu that only shows up on mobile*/}
            <div className="flex sm:hidden justify-between items-center p-10">
                <div
                    className={`HamBurg ${hamburgOpen ? 'change' : ''}`}
                    onClick={() => {
                        setHamburgOpen(!hamburgOpen);
                    }}
                >
                    <div className="HamBurgbar1" />
                    <div className="HamBurgbar2" />
                    <div className="HamBurgbar3" />
                </div>
            </div>
            <SideMenu hamburgOpen={hamburgOpen} closeHamburg={closeHamburg} />
            {/** The Header navigation that shows up on longer devices*/}
            <nav className="hidden sm:flex box-border  px-2 flex-row items-center w-full bg-gray-900 text-white">
                <ul className=" text-white w-full flex  flex-row justify-between items-center flex-1 list-none ">
                    {renderList()}
                </ul>
            </nav>
        </div>
    );
}

interface SideMenuProps {
    hamburgOpen: boolean;
    closeHamburg: () => void;
}
function SideMenu({ hamburgOpen, closeHamburg }: SideMenuProps) {
    // const { NavList, toggleHamburger } = this.props;
    const triggeredClass = `sideMenu ${hamburgOpen ? 'sideMenuOpen' : ''}`;
    return (
        <div className={triggeredClass}>
            <div className="sideMenu-con">
                <div className="sideMenu_row sideMenu_X">
                    <Image
                        className="sideMenu_icon hover:cursor-pointer"
                        src={`/images/icons/x.png`}
                        width={25}
                        height={25}
                        alt="X"
                        onClick={closeHamburg}
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
                {NavList.map((item) => (
                    <div className="sideMenu_row" key={item.decade}>
                        <SideMenuItem
                            item={item}
                            closeHamburg={closeHamburg}
                            hamburgStatus={hamburgOpen}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

interface SideMenuItemProps {
    item: NavListItem;
    hamburgStatus: boolean;
    closeHamburg: () => void;
}
function SideMenuItem({ item, closeHamburg, hamburgStatus }: SideMenuItemProps) {
    /** Refers to wheter an item in the side menu is closed or open */
    const [clicked, setClicked] = useState(false);
    let childClick = clicked ? {} : { padding: '0', height: '0' };
    useEffect(() => {
        if (!hamburgStatus) {
            setClicked(false);
        }
    }, [hamburgStatus]);
    return (
        <div
            className="SMI_con font-ttc"
            /**OnClick hides or shows the pages related to this section */
            onClick={() => setClicked(!clicked)}
        >
            <div className="SMI_tcon hover:cursor-pointer">
                <div className="font-ttc uppercase text-lg tracking-wider">{`${item.decade}S`}</div>
                <div className="font-ttc uppercase text-lg tracking-wider">
                    <Image
                        /** Renders the up or down array depending on whether this section is currently showing its pages or not */
                        src={`/images/icons/${clicked ? 'up' : 'down'}.png`}
                        width={25}
                        height={18}
                        alt=""
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
            </div>
            {/**This div holds the pages renders in this section */}
            <div
                className="SMI_scon"
                style={childClick}
                /**Closes the hamburger when a specific page is clicked */
                onClick={closeHamburg}
            >
                {item.files.map((file: File) => (
                    <Link
                        /** The Link Component automatically forwards the React App to the page */
                        key={`/${item.decade}/${file.link}`}
                        href={`/${item.decade}/${file.link}`}
                    >
                        <div className="SMI_scon-list">
                            <div className="SMI_scon-list-year flex items-center">{file.year}</div>
                            <div className="SMI_scon-list-name">{file.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
