import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
    const IMAGE_LIST = [
        {
            // href: '/',
            href: '/2010/relief-line',
            title: 'Relief Line (2016)',
            subtitle: <span>Cancelled, replaced with Ontario Line</span>,
            img: 'Relief Line.png',
        },
        {
            // href: '/',
            href: '/2010/metrolinx-toronto-transit-plan',
            title: 'Metrolinx/Toronto Transit Plan (2011)',
            subtitle: 'Cancelled',
            // subtitle: '',
            img: 'Metrolinx-Toronto Transit Plan.png',
        },
        {
            // href: '/',
            href: '/2000/transit-city',
            title: 'Transit City (2007)',
            subtitle: 'Cancelled, partially under construction',
            img: 'Transit City.png',
        },
        {
            // href: '/',

            href: '/1990/rapid-transit-expansion-program',
            title: "Let's Move/Rapid Transit Expansion Program (1990/1993)",
            subtitle: 'Cancelled, partially built',
            // subtitle: '',
            img: 'Rapid Transit Expansion Program.png',
        },
        // {
        // 	// href: '/',
        // 	href: '/1990/lets-move',
        // 	title: "Let's Move (1990)",
        // 	subtitle: 'Cancelled, replaced with Rapid Transit Expansion Program',
        // 	img: '/images/Let's-Move.png'
        // },
        {
            // href: '/',
            href: '/1980/network-2011',
            title: 'Network 2011 (1985)',
            subtitle: "Cancelled, replaced with Let's Move",
            img: 'Network 2011.png',
        },
        {
            // href: '/',
            href: '/1970/go-urban',
            title: 'Go-Urban (1973)',
            subtitle: 'Cancelled, evolved into go-alrt',
            img: 'GO-Urban.png',
        },
    ];
    return (
        <div className="sm:p-2 flex flex-col sm:flex-row  flex-wrap justify-around items-stretch w-full">
            {IMAGE_LIST.map((item) => {
                return (
                    <div key={item.href} className="w-full sm:w-1/2  my-4  px-2 box-border">
                        <Link href={item.href} legacyBehavior>
                            <a className="flex flex-col h-full">
                                <div
                                    className="flex-none w-full border"
                                    style={{ borderColor: '#2b2b2b' }}
                                >
                                    <Image
                                        className=" min-h-175px flex flex-col p-4"
                                        src={`/images/homepage/${item.img}`}
                                        alt={item.title}
                                        width={300}
                                        height={300}
                                        layout="responsive"
                                        priority
                                    />
                                </div>
                                <div
                                    className="flex-1 w-full min-h-65px p-2  box-border"
                                    style={{
                                        color: '#fffffa',
                                        backgroundColor: '#2b2b2b',
                                    }}
                                >
                                    <div className=" uppercase text-2xl font-ttc leading-tight mt-0">
                                        {item.title}
                                    </div>
                                    <div className="font-ttc uppercase text-lg leading-tight	">
                                        {item.subtitle}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
