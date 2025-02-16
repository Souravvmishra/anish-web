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

export const groheProducts: BrandProductGroup[] = [
    {
        brand: "Grohe",
        categories: [
            {
                category: "Grohe Atrio 2018 Tapware Collection",
                items: [
                    {
                        name: "Grohe Atrio 2018 Single-Lever Mixer",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/atrio-2018-single-lever.jpg" // placeholder URL; update with actual path if available
                    },
                    {
                        name: "Grohe Atrio 2018 Dual-Lever Mixer",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/atrio-2018-dual-lever.jpg" // placeholder URL; update with actual path if available
                    },
                    {
                        name: "Grohe Atrio 2018 Basin Mixer",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/atrio-2018-basin-mixer.jpg" // placeholder URL; update with actual path if available
                    }
                ]
            },
            {
                category: "Grohe Grandera Mixer Taps",
                items: [
                    {
                        name: "Grohe Grandera Single-Hole Mixer Tap",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/Grandera-Single-Hole.jpg" // Update with actual image URL
                    },
                    {
                        name: "Grohe Grandera Centre Set Mixer Tap",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/Grandera-Centre-Set.jpg" // Update with actual image URL
                    },
                    {
                        name: "Grohe Grandera Basin Mixer Tap",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/Grandera-Basin.jpg" // Update with actual image URL
                    }
                ]
            },
            {
                category: "Grohe Allure Brilliant Mixer Taps",
                items: [
                    {
                        name: "Grohe Allure Brilliant Single-Hole Mixer Tap",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/Allure-Brilliant-Single-Hole.jpg" // Update with actual URL if different
                    },
                    {
                        name: "Grohe Allure Brilliant Centre Set Mixer Tap",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/Allure-Brilliant-Centre-Set.jpg" // Update with actual URL if different
                    },
                    {
                        name: "Grohe Allure Brilliant Basin Mixer Tap",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/Allure-Brilliant-Basin.jpg" // Update with actual URL if different
                    }
                ]
            },
            {
                category: "Grohe Sensor Taps",
                items: [
                    {
                        name: "Grohe Sensia Sensor Tap",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/sensia-sensor-tap.jpg" // Replace with the actual image URL
                    },
                    {
                        name: "Grohe Sense Guard Sensor Tap",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/sense-guard-sensor-tap.jpg" // Replace with the actual image URL
                    },
                    {
                        name: "Grohe Touchless Sensor Tap",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/touchless-sensor-tap.jpg" // Replace with the actual image URL
                    }
                ]
            },
            {
                category: "Grohe Plus Wash Basins",
                items: [
                    {
                        name: "Grohe Plus Single-Lever Basin Mixer",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/plus-single-lever-basin-mixer.jpg" // update with actual URL if available
                    },
                    {
                        name: "Grohe Plus Centre Set Basin Mixer",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/plus-centre-set-basin-mixer.jpg" // update with actual URL if available
                    },
                    {
                        name: "Grohe Plus Dual-Lever Basin Mixer",
                        material: "Chrome-plated Brass",
                        brands: ["Grohe"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.grohe.co.in/media/image/plus-dual-lever-basin-mixer.jpg" // update with actual URL if available
                    }
                ]
            }
        ]
    }
];
