export interface Product {
    name: string;
    material: string;
    brands: string[];
    variants: number;
    imageUrl: string; 
}

export interface ProductCategory {
    category: string;
    items: Product[];
}

export const products: ProductCategory[] = [
    {
        category: "Sanitaryware & Bath Essentials",
        items: [
            { name: "Bath Tubs", material: "Acrylic/FRP", brands: ["Jaquar", "Cera", "Parryware"], variants: 12, imageUrl: "https://picsum.photos/300/200?random=1" },
            { name: "Shower Systems", material: "Stainless Steel", brands: ["Grohe", "Kohler", "Hindware"], variants: 8, imageUrl: "https://picsum.photos/300/200?random=2" },
            { name: "Smart Faucets", material: "Brass/Chrome", brands: ["Delta", "Moen", "Hansgrohe"], variants: 10, imageUrl: "https://picsum.photos/300/200?random=3" },
            { name: "Wash Basins", material: "Ceramic/Stone", brands: ["Roca", "American Standard"], variants: 15, imageUrl: "https://picsum.photos/300/200?random=4" },
            { name: "Repair Kits", material: "Metal/Plastic", brands: ["Danco", "Korky"], variants: 20, imageUrl: "https://picsum.photos/300/200?random=5" },
        ]
    },
    {
        category: "Industrial Solutions",
        items: [
            { name: "Industrial Valves", material: "Stainless Steel", brands: ["L&T", "KITZ"], variants: 15, imageUrl: "https://picsum.photos/300/200?random=6" },
            { name: "Water Pumps", material: "Cast Iron", brands: ["Kirloskar", "Crompton"], variants: 12, imageUrl: "https://picsum.photos/300/200?random=7" },
            { name: "Pipe Fittings", material: "PVC/Galvanized", brands: ["Finolex", "Astral"], variants: 25, imageUrl: "https://picsum.photos/300/200?random=8" },
            { name: "Pressure Gauges", material: "Brass/Steel", brands: ["WIKA", "Ashcroft"], variants: 18, imageUrl: "https://picsum.photos/300/200?random=9" },
            { name: "Storage Tanks", material: "Polyethylene", brands: ["Sintex", "Vishvaraj"], variants: 7, imageUrl: "https://picsum.photos/300/200?random=10" },
        ]
    }
];
