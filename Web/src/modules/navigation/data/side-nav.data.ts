import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'Main Page',
        items: ['dashboard'],
    },
    {
        text: 'Investing',
        items: ['layouts', 'pages'],
    },
    {
        text: 'My Trade History',
        items: ['history'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Portfolio',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Sell Orders',
        submenu: [
            {
                text: 'Processing Orders',
                link: '/dashboard/static',
            },
            {
                text: 'Filled Orders',
                link: '/dashboard/light',
            },
            {
                text: 'Rejected Orders',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Buy Orders',
        submenu: [
            {
                text: 'Processing Orders',
                link: '/dashboard/static',
            },
            {
                text: 'Filled Orders',
                link: '/dashboard/light',
            },
            {
                text: 'Rejected Orders',
                link: '/dashboard/light',
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    history: {
        icon: 'chart-area',
        text: 'History',
        link: '/history',
    },
};
