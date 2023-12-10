export const PRODUCT_CATEGORIES = [
    {
        label:"UI kits",
        value:"ui-kits" as const,
        featured:[
            {
                name:"Editor picks",
                href:'#',
                imageSrc: '/nav/ui-kits/blue.jpg'
            },
            {
                name:"New Arrivals",
                href:'#',
                imageSrc: '/nav/ui-kits/mixed.jpg'
            },
            {
                name:"Bestselling Icons",
                href:'#',
                imageSrc: '/nav/ui-kits/purple.jpg'
            },
        ],
    },
    {
        label:"Icons",
        value:"icons" as const,
        featured:[
            {
                name:"Favourite Icons Picks",
                href:'#',
                imageSrc: '/nav/icons/bestsellers.jpg'
            },
            {
                name:"New Arrivals",
                href:'#',
                imageSrc: '/nav/icons/new.jpg'
            },
            {
                name:"Best Sellers",
                href:'#',
                imageSrc: '/nav/icons/picks.jpg'
            },
        ],
    },
]