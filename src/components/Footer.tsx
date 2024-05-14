import Image from "next/image";
import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full px-4 py-10 text-gray-700 uppercase font-ttc">
            <div className="max-w-full flex items-center flex-row mb-4">
                <div className="flex-none flex items-center justify-center">
                    <Image
                        src="/images/footer/danny.png"
                        alt=""
                        width={56}
                        height={56}
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
                <div className="ml-5">
                    <div>content researched and written by danny xue</div>
                    <div>
                        <a href="https://www.linkedin.com/in/danny-xue/" target="_blank">
                            linkedin.com/in/danny-xue
                        </a>
                    </div>
                    <div>
                        <a href="mailto:danny.xue@uwaterloo.ca" target="_blank">
                            danny.xue@uwaterloo.ca
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-full flex items-center flex-row mb-4">
                <div className="flex-none flex items-center justify-center">
                    <Image
                        src="/images/footer/farhan.png"
                        alt=""
                        width={56}
                        height={56}
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
                <div className="ml-5">
                    <div>site built by farhan mohammed</div>
                    <div>
                        <a href="https://farhan.site" target="_blank">
                            farhan.site
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/farhanhmd/" target="_blank">
                            linkedin.com/in/farhanhmd
                        </a>
                    </div>
                </div>
            </div>
            <div className="uppercase w-fit">Last updated: May 2024</div>
            <div className="uppercase w-fit">
                Copyright © 2024 cancelledtoronto.ca. all rights reserved
            </div>
        </footer>
    );
}
