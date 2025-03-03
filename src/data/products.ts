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
                categoryImage: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/faucet/3/j/y/wall-mount-installation-type-alto-collection-bathroom-premium-original-imah36ffeauazcqg.jpeg?q=90&crop=false',
                items: [
                    {
                        name: "Element Single Lever Basin Mixer",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹4,990",
                        imageUrl: "https://hindware.com/wp-content/uploads/2021/03/F360011-435x397.png"
                    },
                    {
                        name: "Immacula Basin Mixer",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹3,990",
                        imageUrl: "https://jantacart.com/media/catalog/product/cache/d146fcfb3805452606a83d20e3861cd5/f/1/f110035cp.jpg"
                    },
                    {
                        name: "Contessa Neo Basin Mixer",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹2,990",
                        imageUrl: "https://m.media-amazon.com/images/I/51YvvweRCTL.jpg"
                    },
                    {
                        name: "KITCHEN MIX/TAP",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹5,700",
                        imageUrl: "https://hindware.com/wp-content/uploads/2025/01/F920010CP-435x397.jpg"
                    },
                    {
                        name: "Flora Prime",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹6,990",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/09/F780020XCP-435x397.jpg"
                    },
                    {
                        name: "Shower Drain- Square(PGD)",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹1,990",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/09/F860090PGD-435x397.jpg"
                    },
                    {
                        name: "Flora Prime",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹1,080",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/09/F780043CP-435x397.jpg"
                    },
                    {
                        name: "Flora Prime",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹3,850",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/09/F780011CP-435x397.jpg"
                    },
                    {
                        name: "Towel Shelf (RGD)",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹7,900",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/04/F880008RGD-435x397.jpg"
                    },
                    {
                        name: "EXPOSED KIT 3OUTLET DIVERTER-FLORA",
                        material: "Brass",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹2,300",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/04/F280068CP-435x397.jpg"
                    },
                    
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
                    },
                    {
                        name: "Fabio Neo",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹10,000",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/05/20157-430x392.jpg"
                    },
                    {
                        name: "Charm",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹10,500",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/05/92620-430x392.jpg"
                    },
                    {
                        name: "Essence",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹14,950",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/05/92051-430x392.jpg"
                    },
                    {
                        name: "Athens",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹16,000",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/05/92614-430x392.jpg"
                    },
                    {
                        name: "Margo S",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹18,700",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/05/92600-430x392.jpg"
                    },
                    {
                        name: "Pure",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹12,000",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/05/20151-430x392.jpg"
                    },
                    {
                        name: "Tozzo",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹11,990",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/05/20123-430x392.jpg"
                    },
                    {
                        name: "Constellation",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹21,630",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/05/20028-430x392.jpg"
                    },
                    {
                        name: "Ace",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹10,500",
                        imageUrl: "https://hindware.com/wp-content/uploads/2024/05/20154-430x392.jpg"
                    },
                    {
                        "name": "Ace",
                        "material": "Ceramic",
                        "brands": ["Hindware"],
                        "variants": 1,
                        "price": "₹10,500",
                        "imageUrl": "https://hindware.com/wp-content/uploads/2024/05/20154-430x392.jpg"
                    },
                ]
            }
        ]
    }
];
