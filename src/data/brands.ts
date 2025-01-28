export interface Brand {
    name: string;
    logo: string;
    productCount: number;
    established: number;
    categories: string[];
    socials: {
        instagram?: string;
        website?: string;
    };
}

export interface BrandCategory {
    category: string;
    items: Brand[];
}

export const brands: BrandCategory[] = [
    {
        category: "Home & Lifestyle",
        items: [
            {
                name: "Hindware",
                logo: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Hindware.jpg",
                productCount: 150,
                established: 1960,
                categories: ["Sanitaryware", "Home Decor"],
                socials: {
                    instagram: "https://www.instagram.com/hindware/",
                    website: "https://www.hindware.com/",
                },
            },
            {
                name: "Water Tec",
                logo: "https://watertecindia.com/static/webIndex/images/43412f39-e97c-40be-b2f3-93c43e98a3ce-1736502986887.svg",
                productCount: 90,
                established: 1985,
                categories: ["Water Purifiers", "Technology"],
                socials: {
                    instagram: "https://www.instagram.com/watertech/",
                    website: "https://www.watertech.com/",
                },
            },
            {
                name: "Utkarsh",
                logo: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Utkarsh.jpg",
                productCount: 120,
                established: 1975,
                categories: ["Fertilizers", "Agro Products"],
                socials: {
                    instagram: "https://www.instagram.com/utkarsh/",
                    website: "https://www.utkarsh.com/",
                },
            },
        ],
    },
    {
        category: "Industrial",
        items: [
            {
                name: "Pidilite",
                logo: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Pidilite.jpg",
                productCount: 200,
                established: 1959,
                categories: ["Adhesives", "Industrial"],
                socials: {
                    instagram: "https://www.instagram.com/pidilite/",
                    website: "https://www.pidilite.com/",
                },
            },
            {
                name: "Scud",
                logo: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Scud.jpg",
                productCount: 80,
                established: 1990,
                categories: ["Tools", "Industrial Products"],
                socials: {
                    instagram: "https://www.instagram.com/scud/",
                    website: "https://www.scud.com/",
                },
            },
            {
                name: "Himgiri",
                logo: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Himgiri.jpg",
                productCount: 100,
                established: 1980,
                categories: ["Construction", "Materials"],
                socials: {
                    instagram: "https://www.instagram.com/himgiri/",
                    website: "https://www.himgiri.com/",
                },
            },
        ],
    },
    {
        category: "Technology",
        items: [
            {
                name: "Crompton",
                logo: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Crompton.jpg",
                productCount: 300,
                established: 1878,
                categories: ["Electronics", "Appliances"],
                socials: {
                    instagram: "https://www.instagram.com/crompton/",
                    website: "https://www.crompton.co.in/",
                },
            },
            {
                name: "Atlantis",
                logo: "https://atlantis.in/wp-content/uploads/2022/02/atlogo1-2.png",
                productCount: 50,
                established: 2000,
                categories: ["Water Dispensers", "Technology"],
                socials: {
                    instagram: "https://www.instagram.com/atlantis/",
                    website: "https://www.atlantis.com/",
                },
            },
            {
                name: "Neon",
                logo: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Neon.jpg",
                productCount: 75,
                established: 1995,
                categories: ["Lighting", "Electronics"],
                socials: {
                    instagram: "https://www.instagram.com/neon/",
                    website: "https://www.neon.com/",
                },
            },
        ],
    },
    {
        category: "Retail",
        items: [
            {
                name: "Ajay",
                logo: "https://picsum.photos/seed/ajay/200/200",
                productCount: 70,
                established: 1970,
                categories: ["Home Products", "Retail"],
                socials: {
                    instagram: "https://www.instagram.com/ajay/",
                    website: "https://www.ajay.com/",
                },
            },
            {
                name: "Sunsilk Ceramic Pvt. Ltd.",
                logo: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Suncera.jpg",
                productCount: 130,
                established: 1985,
                categories: ["Ceramics", "Tiles"],
                socials: {
                    instagram: "https://www.instagram.com/suncera/",
                    website: "https://www.suncera.com/",
                },
            },
            {
                name: "Gupta",
                logo: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Gupta.jpg",
                productCount: 110,
                established: 1965,
                categories: ["Retail", "Tools"],
                socials: {
                    instagram: "https://www.instagram.com/gupta/",
                    website: "https://www.gupta.com/",
                },
            },
        ],
    },
];
