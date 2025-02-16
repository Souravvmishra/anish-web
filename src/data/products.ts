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
    categories: {
        category: string;
        items: Product[];
    }[];
}

export const hindwareProducts: BrandProductGroup[] = [
    {
        brand: "Hindware",
        categories: [
            {
                category: "Water Closets",
                items: [
                    {
                        name: "Element Plus Star White",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹20,000",
                        imageUrl: "https://hindware.com/path/to/element-plus-star-white.jpg"
                    },
                    {
                        name: "Mariana Edge",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹20,500",
                        imageUrl: "https://hindware.com/path/to/mariana-edge.jpg"
                    },
                    {
                        name: "Prima",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 2,
                        price: "₹9,990",
                        imageUrl: "https://hindware.com/path/to/prima.jpg"
                    },
                    {
                        name: "Starc",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹17,900",
                        imageUrl: "https://hindware.com/path/to/starc.jpg"
                    },
                    {
                        name: "Stellar",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹16,990",
                        imageUrl: "https://hindware.com/path/to/stellar.jpg"
                    },
                    {
                        name: "Agnese Neo",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 2,
                        price: "₹17,990",
                        imageUrl: "https://hindware.com/path/to/agnese-neo.jpg"
                    },
                    {
                        name: "Ace Washdown",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹9,500",
                        imageUrl: "https://hindware.com/path/to/ace-washdown.jpg"
                    }
                ]
            },
            {
                category: "Wash Basins",
                items: [
                    {
                        name: "Eclipse",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 2,
                        price: "₹3,990 - ₹4,990",
                        imageUrl: "https://hindware.com/path/to/eclipse.jpg"
                    },
                    {
                        name: "Fabio",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹2,790",
                        imageUrl: "https://hindware.com/path/to/fabio.jpg"
                    },
                    {
                        name: "Prima",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹1,590",
                        imageUrl: "https://hindware.com/path/to/prima-washbasin.jpg"
                    },
                    {
                        name: "Rene",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹6,500",
                        imageUrl: "https://hindware.com/path/to/rene.jpg"
                    },
                    {
                        name: "Cascade",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹25,990",
                        imageUrl: "https://hindware.com/path/to/cascade.jpg"
                    },
                    {
                        name: "Armada",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹1,750",
                        imageUrl: "https://hindware.com/path/to/armada.jpg"
                    },
                    {
                        name: "Ascent",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹1,190",
                        imageUrl: "https://hindware.com/path/to/ascent.jpg"
                    },
                    {
                        name: "Athens",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹3,990",
                        imageUrl: "https://hindware.com/path/to/athens.jpg"
                    }
                ]
            },
            {
                category: "Cisterns",
                items: [
                    {
                        name: "Coupled Cistern",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹8,000",
                        imageUrl: "https://hindware.com/path/to/coupled-cistern.jpg"
                    },
                    {
                        name: "Concealed Cistern",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹10,500",
                        imageUrl: "https://hindware.com/path/to/concealed-cistern.jpg"
                    },
                    {
                        name: "Intelligent Cistern",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹14,000",
                        imageUrl: "https://hindware.com/path/to/intelligent-cistern.jpg"
                    },
                    {
                        name: "Wall Mounted Cistern",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹9,500",
                        imageUrl: "https://hindware.com/path/to/wall-mounted-cistern.jpg"
                    },
                    {
                        name: "Smart Flush Cistern",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹12,000",
                        imageUrl: "https://hindware.com/path/to/smart-flush-cistern.jpg"
                    },
                    {
                        name: "Dual Flush Cistern",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹11,000",
                        imageUrl: "https://hindware.com/path/to/dual-flush-cistern.jpg"
                    },
                    {
                        name: "Tankless Cistern",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹16,000",
                        imageUrl: "https://hindware.com/path/to/tankless-cistern.jpg"
                    },
                    {
                        name: "Touch-Free Cistern",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹13,500",
                        imageUrl: "https://hindware.com/path/to/touch-free-cistern.jpg"
                    },
                    {
                        name: "Eco Saver Cistern",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹9,990",
                        imageUrl: "https://hindware.com/path/to/eco-saver-cistern.jpg"
                    }
                ]
            },
            {
                category: "Combo Packs",
                items: [
                    {
                        name: "Coupled Combo Pack",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹15,000",
                        imageUrl: "https://hindware.com/path/to/coupled-combo-pack.jpg"
                    },
                    {
                        name: "One Piece Combo Pack",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹14,500",
                        imageUrl: "https://hindware.com/path/to/one-piece-combo-pack.jpg"
                    },
                    {
                        name: "Wall Mounted Combo Pack",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹16,000",
                        imageUrl: "https://hindware.com/path/to/wall-mounted-combo-pack.jpg"
                    },
                    {
                        name: "Intelligent Combo Pack",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹20,000",
                        imageUrl: "https://hindware.com/path/to/intelligent-combo-pack.jpg"
                    },
                    {
                        name: "Dual Flush Combo Pack",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹17,500",
                        imageUrl: "https://hindware.com/path/to/dual-flush-combo-pack.jpg"
                    },
                    {
                        name: "Extended Combo Pack",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹18,000",
                        imageUrl: "https://hindware.com/path/to/extended-combo-pack.jpg"
                    },
                    {
                        name: "Touch-Free Combo Pack",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹19,500",
                        imageUrl: "https://hindware.com/path/to/touch-free-combo-pack.jpg"
                    },
                    {
                        name: "Tankless Combo Pack",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹22,000",
                        imageUrl: "https://hindware.com/path/to/tankless-combo-pack.jpg"
                    },
                    {
                        name: "Eco Saver Combo Pack",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹16,500",
                        imageUrl: "https://hindware.com/path/to/eco-saver-combo-pack.jpg"
                    }
                ]
            },
            {
                category: "Urinals",
                items: [
                    {
                        name: "Standard Wall Urinal",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹2,500",
                        imageUrl: "https://hindware.com/path/to/standard-wall-urinal.jpg"
                    },
                    {
                        name: "Touch Free Urinal",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹3,000",
                        imageUrl: "https://hindware.com/path/to/touch-free-urinal.jpg"
                    },
                    {
                        name: "Smart Flush Urinal",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹3,500",
                        imageUrl: "https://hindware.com/path/to/smart-flush-urinal.jpg"
                    },
                    {
                        name: "Integrated Urinal",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹2,800",
                        imageUrl: "https://hindware.com/path/to/integrated-urinal.jpg"
                    },
                    {
                        name: "Wall Mounted Urinal",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹2,900",
                        imageUrl: "https://hindware.com/path/to/wall-mounted-urinal.jpg"
                    },
                    {
                        name: "Floor Mounted Urinal",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹3,200",
                        imageUrl: "https://hindware.com/path/to/floor-mounted-urinal.jpg"
                    },
                    {
                        name: "Modern Urinal",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹3,100",
                        imageUrl: "https://hindware.com/path/to/modern-urinal.jpg"
                    },
                    {
                        name: "Eco Saver Urinal",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹2,700",
                        imageUrl: "https://hindware.com/path/to/eco-saver-urinal.jpg"
                    },
                    {
                        name: "Dual Flush Urinal",
                        material: "Ceramic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹3,300",
                        imageUrl: "https://hindware.com/path/to/dual-flush-urinal.jpg"
                    }
                ]
            },
            {
                category: "Bath Tubs",
                items: [
                    {
                        name: "Hindware Strauss (N) Bathtub",
                        material: "Acrylic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹27,390",
                        imageUrl: "https://hindware.com/wp-content/uploads/2023/03/strauss-bathtub.jpg"
                    },
                    {
                        name: "Hindware Marina Bathtub",
                        material: "Acrylic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹14,460",
                        imageUrl: "https://hindware.com/wp-content/uploads/2023/03/marina-bathtub.jpg"
                    },
                    {
                        name: "Trendy Bathtub",
                        material: "Acrylic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹15,590",
                        imageUrl: "https://hindware.com/wp-content/uploads/2023/03/trendy-bathtub.jpg"
                    },
                    {
                        name: "Vantage (N) Bathtub",
                        material: "Acrylic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹39,950",
                        imageUrl: "https://hindware.com/wp-content/uploads/2023/03/vantage-bathtub.jpg"
                    },
                    {
                        name: "Marina Plus Bathtub",
                        material: "Acrylic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹14,960",
                        imageUrl: "https://hindware.com/wp-content/uploads/2023/03/marina-plus-bathtub.jpg"
                    },
                    {
                        name: "Trendy Plus Bathtub",
                        material: "Acrylic",
                        brands: ["Hindware"],
                        variants: 1,
                        price: "₹16,210",
                        imageUrl: "https://hindware.com/wp-content/uploads/2023/03/trendy-plus-bathtub.jpg"
                    }
                ]
            }
        ]
    },
];
