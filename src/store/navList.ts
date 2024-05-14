export interface File {
    year: string;
    name: string;
    link: string;
}
export interface NavListItem {
    decade: string;
    files: File[];
}

const NavList: NavListItem[] = [
    {
        decade: '1970',
        files: [
            {
                year: '1973',
                name: 'Go-Urban',
                // link: '/'
                link: 'go-urban',
            },
        ],
    },
    {
        decade: '1980',
        files: [
            // {
            //     year: '1982',
            //     name: 'GO-ALRT',
            //     // link: '/'
            //     link: 'go-alrt',
            // },
            {
                year: '1985',
                name: 'Network 2011',
                // link: '/'
                link: 'network-2011',
            },
        ],
    },
    {
        decade: '1990',
        files: [
            // {
            // 	year: '1990',
            // 	name: "Let's Move",
            // 	link: 'lets-move'
            // },
            {
                year: '1990/1993',
                name: "Let's Move/Rapid Transit Expansion Program",
                // link: '/'
                link: 'rapid-transit-expansion-program',
            },
        ],
    },
    {
        decade: '2000',
        files: [
            {
                year: '2007',
                name: 'Transit City',
                // link: '/'
                link: 'transit-city',
            },
        ],
    },
    {
        decade: '2010',
        files: [
            {
                year: '2011',
                name: 'Metrolinx/ Toronto Transit Plan',
                // link: '/'

                link: 'metrolinx-toronto-transit-plan',
            },
            {
                year: '2016',
                name: 'Relief Line',
                // link: '/'
                link: 'relief-line',
            },
        ],
    },
];

export default NavList;