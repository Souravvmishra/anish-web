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

export const americanProducts: BrandProductGroup[] = [
    {
        brand: "American Standard",
        categories: [
            {
                category: "Basin Faucets",
                items: [
                    {
                        name: "Kastello 3-Hole Basin Mixer with Pop-Up Drain FFAS1603-101500BF0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFAS1603-101500BF0.jpg"
                    },
                    {
                        name: "Acacia Evolution 3-Hole Basin Mixer FFAS1303-102500BF0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFAS1303-102500BF0.jpg"
                    },
                    {
                        name: "Acacia Evolution Basin Mixer FFAS1301-102500BF0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFAS1301-102500BF0.jpg"
                    },
                    {
                        name: "Acacia Evolution Basin Mono FFAS1306-101500BF0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFAS1306-101500BF0.jpg"
                    },
                    {
                        name: "Acacia Evolution High Spout Basin Mixer FFAS1305-102500BF0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFAS1305-102500BF0.jpg"
                    },
                    {
                        name: "Acacia Evolution Wall Mount Basin Mixer FFAS1304-102500BF0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFAS1304-102500BF0.jpg"
                    },
                    {
                        name: "Kastello Basin Mixer with Pop-Up Drain FFAS1601-101500BF0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFAS1601-101500BF0.jpg"
                    },
                    {
                        name: "Compact Codie Codie Basin Mixer FFASB201-101501BF0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFASB201-101501BF0.jpg"
                    },
                    {
                        name: "Compact Codie Codie Basin Mono FFASB206-101500BF0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFASB206-101500BF0.jpg"
                    },
                    {
                        name: "Concept Square Basin Mixer FFAS0401-151500BA0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFAS0401-151500BA0.jpg"
                    },
                    {
                        name: "Cygnet Basin Mixer (w/o Pop-Up) FFAS0301-151500BA0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFAS0301-151500BA0.jpg"
                    },
                    {
                        name: "Cygnet Extended Basin Mixer (w/o Pop-Up) FFAS0303-151500BA0",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/FFAS0303-151500BA0.jpg"
                    }
                ]
            },
            {
                category: "Bathroom Accessories",
                items: [
                    {
                        name: "Glass Holder",
                        material: "Stainless Steel",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/glass-holder.jpg"
                    },
                    {
                        name: "Paper Holder",
                        material: "Stainless Steel",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/paper-holder.jpg"
                    },
                    {
                        name: "Robe Hook",
                        material: "Stainless Steel",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/robe-hook.jpg"
                    },
                    {
                        name: "Soap Dish",
                        material: "Ceramic/Plastic",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/soap-dish.jpg"
                    },
                    {
                        name: "Toilet Brush",
                        material: "Plastic",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/toilet-brush.jpg"
                    },
                    {
                        name: "Towel Bar",
                        material: "Stainless Steel",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/towel-bar.jpg"
                    },
                    {
                        name: "Towel Ring",
                        material: "Stainless Steel",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/towel-ring.jpg"
                    },
                    {
                        name: "Towel Shelf",
                        material: "Stainless Steel",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/towel-shelf.jpg"
                    }
                ]
            },
            {
                category: "Bath & Showers",
                items: [
                    {
                        name: "Acacia Evolution Bath & Shower Mixer FFBS1301-XYZ",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/AcaciaEvolutionBathShowersMixer.jpg"
                    },
                    {
                        name: "Kastello Bath & Shower Mixer with Pop-Up Drain FFBS1601-XYZ",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/KastelloBathShowersMixer.jpg"
                    },
                    {
                        name: "Concept Square Bath & Shower Mixer FFBS0401-XYZ",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/ConceptSquareBathShowersMixer.jpg"
                    },
                    {
                        name: "Cygnet Bath & Shower Mixer (w/o Pop-Up) FFBS0301-XYZ",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/CygnetBathShowersMixer.jpg"
                    },
                    {
                        name: "Cygnet Extended Bath & Shower Mixer (w/o Pop-Up) FFBS0303-XYZ",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/CygnetExtendedBathShowersMixer.jpg"
                    },
                    {
                        name: "Compact Codie Bath & Shower Mixer FFBSB201-XYZ",
                        material: "Chrome-plated Brass",
                        brands: ["American Standard"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.americanstandard.in/media/images/CompactCodieBathShowersMixer.jpg"
                    }
                ]
            }
        ]
    }
];
