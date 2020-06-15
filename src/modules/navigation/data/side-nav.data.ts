import { SideNavItems, SideNavSection, UserSideNavItems, userSideNavSection} from '@modules/navigation/models';

export const sideNavSections:

SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
    },
    {
        text: 'INTERFACE',
        // items: ['layouts','testOperations','questionOperations'],
        items: ['testOperations','questionOperations'],

    },
    // {
    //     text: 'ADDONS',
    //     items: ['ch, 'tables'],
    // },
];

export const userSideNavSections:

userSideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
    },
   
];

export const userSideNavItems: 
UserSideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/user-dashboard',
    },
}




export const sideNavItems: 
SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    // layouts: {
    //     icon: 'columns',
    //     text: 'Layouts',
    //     submenu: [
    //         {
    //             text: 'Static Navigation',
    //             link: '/dashboard/static',
    //         },
           
    //     ],
    // },
    
    testOperations: {
        icon: 'book-open',
        text: 'Test Operations',
        submenu: [
                    {
                        text: 'Create Test',
                        icon: 'book-open',
                        link: '/dashboard/test/create-test',
                    },
                    {
                        text: 'View Test Available',
                        icon: 'book-open',
                        link: '/dashboard/test/view-test',
                    },
                   
                ],
        
    },
    questionOperations:{
        icon:'book-open',
        text:'Question Operations',
        link:'/dashboard/test/question-operations'
    },
    // charts: {
    //     icon: 'chart-area',
    //     text: 'Charts',
    //     link: '/charts',
    // },
    // tables: {
    //     icon: 'table',
    //     text: 'Tables',
    //     link: '/tables',
    // },
};





