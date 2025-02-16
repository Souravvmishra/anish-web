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

export const ashirvadProducts: BrandProductGroup[] = [
    {
        brand: "Ashirvad",
        categories: [
            {
                category: "Plumbing Pipes and Fittings",
                items: [
                    {
                        name: "FlowGuard-Plus® CPVC",
                        material: "Chlorinated Polyvinyl Chloride (CPVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/flowguard-plus-cpvc/"
                    },
                    {
                        name: "uPVC Aqualife+ Plumbing System",
                        material: "Unplasticized Polyvinyl Chloride (uPVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/upvc-aqualife-plus-plumbing-system/"
                    },
                    {
                        name: "SWR Plumbing System",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/swr-plumbing-system/"
                    }
                ]
            },
            {
                category: "Agriculture Pipes and Fittings",
                items: [
                    {
                        name: "Column Pipes",
                        material: "Unplasticized Polyvinyl Chloride (uPVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/column-pipes/"
                    },
                    {
                        name: "Casing Pipes",
                        material: "Unplasticized Polyvinyl Chloride (uPVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/casing-pipes/"
                    },
                    {
                        name: "Agri Pipes",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/agri-pipes/"
                    }
                ]
            },
            {
                category: "Industrial Solutions",
                items: [
                    {
                        name: "uPVC Korrosafe Pipes and Fittings",
                        material: "Unplasticized Polyvinyl Chloride (uPVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/upvc-korrosafe-pipes-and-fittings/"
                    },
                    {
                        name: "Electrofusion Fittings",
                        material: "High-Density Polyethylene (HDPE)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/electrofusion-fittings/"
                    }
                ]
            },
            {
                category: "Fire Protection System",
                items: [
                    {
                        name: "BlazeMaster® Fire Protection System",
                        material: "Chlorinated Polyvinyl Chloride (CPVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/blazemaster/"
                    }
                ]
            },
            {
                category: "Infrastructure Solutions",
                items: [
                    {
                        name: "Dynaflo PVC-O Pipes",
                        material: "Molecular Oriented Polyvinyl Chloride (PVC-O)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/dynaflo-pvc-o-pipes/"
                    },
                    {
                        name: "Akasison Siphonic Roof Drainage System",
                        material: "Various",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/akasison-siphonic-roof-drainage-system/"
                    }
                ]
            },
            {
                category: "Water Tanks & Y Strainer",
                items: [
                    {
                        name: "Water Storage Tanks",
                        material: "Polyethylene",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/water-storage-tanks/"
                    },
                    {
                        name: "Y-Strainer",
                        material: "Unplasticized Polyvinyl Chloride (uPVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/y-strainer/"
                    }
                ]
            },
            {
                category: "Bath and Kitchen Solutions",
                items: [
                    {
                        name: "Concealed Valves and Diverters",
                        material: "Brass",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/concealed-valves-and-diverters/"
                    },
                    {
                        name: "WC PAN Connectors",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/wc-pan-connectors/"
                    },
                    {
                        name: "Ashirvad Waste Outlets & Traps",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Ashirvad"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.ashirvad.com/products/ashirvad-waste-outlets-and-traps/"
                    }

                ]
            }
        ]
    }
]
