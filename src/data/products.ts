export interface Product {
    name: string;
    material: string;
    brands: string[];
    variants: number;
    imageUrl: string;
}

export interface BrandProductGroup {
    brand: string;
    categories: {
        category: string;
        items: Product[];
    }[];
}

export const products: BrandProductGroup[] = [
    {
        brand: "Jaquar",
        categories: [
            {
                category: "Sanitaryware & Bath Essentials",
                items: [
                    { name: "Bath Tubs", material: "Acrylic/FRP", brands: ["Jaquar"], variants: 12, imageUrl: "https://picsum.photos/300/200?random=1" },
                    { name: "Wash Basins", material: "Ceramic/Stone", brands: ["Jaquar"], variants: 15, imageUrl: "https://picsum.photos/300/200?random=4" }
                ]
            }
        ]
    },
    {
        brand: "Grohe",
        categories: [
            {
                category: "Bath Fittings",
                items: [
                    { name: "Shower Systems", material: "Stainless Steel", brands: ["Grohe"], variants: 8, imageUrl: "https://picsum.photos/300/200?random=2" },
                    { name: "Smart Faucets", material: "Brass/Chrome", brands: ["Grohe"], variants: 10, imageUrl: "https://picsum.photos/300/200?random=3" }
                ]
            }
        ]
    },
    {
        brand: "Kirloskar",
        categories: [
            {
                category: "Industrial Solutions",
                items: [
                    { name: "Water Pumps", material: "Cast Iron", brands: ["Kirloskar"], variants: 12, imageUrl: "https://picsum.photos/300/200?random=7" },
                    { name: "Storage Tanks", material: "Polyethylene", brands: ["Kirloskar"], variants: 7, imageUrl: "https://picsum.photos/300/200?random=10" }
                ]
            }
        ]
    },
    {
        brand: "Sintex",
        categories: [
            {
                category: "Water Storage",
                items: [
                    { name: "Storage Tanks", material: "Polyethylene", brands: ["Sintex"], variants: 7, imageUrl: "https://picsum.photos/300/200?random=10" }
                ]
            }
        ]
    }
];
