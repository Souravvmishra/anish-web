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

export const finolexUtkarshProducts: BrandProductGroup[] = [
    {
        brand: "Finolex",
        categories: [
            {
                category: "Agriculture Pipes & Fittings",
                items: [
                    {
                        name: "Agriculture Pipes & Fittings",
                        material: "PVC-U",
                        brands: ["Finolex"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.finolexpipes.com/product/agriculture-pipes-fittings.jpg"
                    },
                    {
                        name: "Casing Pipes",
                        material: "PVC-U",
                        brands: ["Finolex"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.finolexpipes.com/product/casing-pipes.jpg"
                    },
                    {
                        name: "Column Pipes",
                        material: "PVC-U",
                        brands: ["Finolex"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.finolexpipes.com/product/column-pipes.jpg"
                    },
                    {
                        name: "Solvent Cement & Lubricant",
                        material: "Chemical Compounds",
                        brands: ["Finolex"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.finolexpipes.com/product/solvent-cement-lubricant.jpg"
                    }
                ]
            },
            {
                category: "Plumbing and Sanitation Pipes & Fittings",
                items: [
                    {
                        name: "ASTM Pipes & Fittings",
                        material: "PVC-U",
                        brands: ["Finolex"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.finolexpipes.com/product/astm-pipes-fittings.jpg"
                    },
                    {
                        name: "CPVC Pipes & Fittings",
                        material: "CPVC",
                        brands: ["Finolex"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.finolexpipes.com/product/cpvc-pipes-fittings.jpg"
                    },
                    {
                        name: "SWR Pipes & Fittings",
                        material: "PVC-U",
                        brands: ["Finolex"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.finolexpipes.com/product/swr-pipes-fittings.jpg"
                    },
                    {
                        name: "Sewerage Pipes",
                        material: "PVC-U",
                        brands: ["Finolex"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.finolexpipes.com/product/sewerage-pipes.jpg"
                    },
                    {
                        name: "Solvent Cement, Lubricant & Primer",
                        material: "Chemical Compounds",
                        brands: ["Finolex"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://www.finolexpipes.com/product/solvent-cement-lubricant-primer.jpg"
                    }
                ]
            }
        ]
    },
    {
        brand: "Utkarsh",
        categories: [
            {
                category: "Pipes & Fittings",
                items: [
                    {
                        name: "uPVC Pipes & Fittings",
                        material: "Unplasticized Polyvinyl Chloride (uPVC)",
                        brands: ["Utkarsh"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://utkarshindia.in/products/pipes"
                    },
                    {
                        name: "CPVC Pipes & Fittings",
                        material: "Chlorinated Polyvinyl Chloride (CPVC)",
                        brands: ["Utkarsh"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://utkarshindia.in/products/pipes"
                    },
                    {
                        name: "SWR Pipes & Fittings",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Utkarsh"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://utkarshindia.in/products/pipes"
                    },
                    {
                        name: "PVC Casing Pipes",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Utkarsh"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://utkarshindia.in/products/pipes"
                    },
                    {
                        name: "Column Riser Pipes",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Utkarsh"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://utkarshindia.in/products/pipes"
                    },
                    {
                        name: "Grey Agricultural Pipes",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Utkarsh"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://utkarshindia.in/products/pipes"
                    },
                    {
                        name: "PVC Water Tank",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Utkarsh"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://utkarshindia.in/products/pipes"
                    }
                ]
            }
        ]
    },
    {
        brand: "Ajay Pipes",
        categories: [
            {
                category: "Plumbing Solutions",
                items: [
                    {
                        name: "Flowline Plus (CPVC)",
                        material: "Chlorinated Polyvinyl Chloride (CPVC)",
                        brands: ["Ajay Pipes"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://ajaypipes.com/ajay-flowline-plus-cpvc-pipes-and-fittings/"
                    },
                    {
                        name: "Greenline (UPVC)",
                        material: "Unplasticized Polyvinyl Chloride (UPVC)",
                        brands: ["Ajay Pipes"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://ajaypipes.com/plumbing-supply/"
                    }
                ]
            },
            {
                category: "Drainage Solutions",
                items: [
                    {
                        name: "Drainline (SWR)",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Ajay Pipes"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://ajaypipes.com/products/"
                    },
                    {
                        name: "Terraline (UDS)",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Ajay Pipes"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://ajaypipes.com/products/"
                    }
                ]
            },
            {
                category: "Agricultural Solutions",
                items: [
                    {
                        name: "Agriline",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Ajay Pipes"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://ajaypipes.com/agriline/"
                    }
                ]
            },
            {
                category: "Industrial Solutions",
                items: [
                    {
                        name: "Deepline - Column Pipes",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Ajay Pipes"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://ajaypipes.com/products/"
                    },
                    {
                        name: "Deepline - Casing Pipes",
                        material: "Polyvinyl Chloride (PVC)",
                        brands: ["Ajay Pipes"],
                        variants: 0, // Specific number of variants not provided
                        price: "Contact for pricing",
                        imageUrl: "https://ajaypipes.com/products/"
                    }
                ]
            }
        ]
    }
];
