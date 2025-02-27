export interface Product {
    name: string;
    material: string;
    brands: string[];
    variants: number;
    price: string;
    imageUrl: string;
}

export interface BrandProductGroup {
    brand: string;
    logo: string;
    supplier?: string;
    categories: {
        category: string;
        categoryImage?: string;
        items: Product[];
    }[];
}

export const hindwareProducts: BrandProductGroup[] = [
    {
        brand: "Hindware",
        logo: "/hindware.png",
        supplier: "arpita etp",
        categories: [
            {
                category: "Faucets",
                categoryImage: 'https://i.pinimg.com/736x/18/e7/94/18e794ac2bb7234188d44d892b70ba79.jpg',
                items: [
                    {
                        name: "Element Single Lever Basin Mixer",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹4,990",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/01/F360029CP-567x517.jpg"
                    },
                    {
                        name: "Immacula Basin Mixer",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹3,990",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/01/F360024CP-567x517.jpg"
                    },
                    {
                        name: "Contessa Neo Basin Mixer",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹2,990",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/01/F360012CP-567x517.jpg"
                    }
                ]
            },
            {
                category: "Sanitary Ware",
                categoryImage: 'https://i.pinimg.com/736x/4d/3e/68/4d3e686b2889e742883e2e129d458e5c.jpg',
                items: [
                    {
                        name: "Element Plus Star White",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹20,000",
                        imageUrl: "https://hindware.com/wp-content/uploads/2021/06/EWC-Element-White-Matte-567x517.png"
                    },
                    {
                        name: "Mariana Edge",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹20,500",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/10/92637-Mariana-Edge-567x517.png"
                    },
                    {
                        name: "Prima",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 2,
                        price: "₹9,990",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/10/92655-567x517.jpg"
                    },
                    {
                        name: "Eclipse Basin",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 2,
                        price: "₹3,990",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/10/91235-567x517.jpg"
                    }
                ]
            }
        ]
    }
];
