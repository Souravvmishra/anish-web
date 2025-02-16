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

export const spykarceraProducts: BrandProductGroup[] = [
    {
        brand: "Spykar Cera",
        categories: [
            {
                category: "Pedestal Wash Basins",
                items: [
                    {
                        name: "Spykar Cera Pedestal Wash Basin Model A",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/p/e/pedestal_wash_basin_model_a.jpg"
                    },
                    {
                        name: "Spykar Cera Pedestal Wash Basin Model B",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/p/e/pedestal_wash_basin_model_b.jpg"
                    },
                    {
                        name: "Spykar Cera Pedestal Wash Basin Model C",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/p/e/pedestal_wash_basin_model_c.jpg"
                    },
                    {
                        name: "Spykar Cera Pedestal Wash Basin Model D",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/p/e/pedestal_wash_basin_model_d.jpg"
                    }
                ]
            },
            {
                category: "Printed Pedestal Wash Basins",
                items: [
                    {
                        name: "Spykar Cera Printed Pedestal Wash Basin - Model 1",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/p/r/printed_wash_basin_model_1.jpg"
                    },
                    {
                        name: "Spykar Cera Printed Pedestal Wash Basin - Model 2",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/p/r/printed_wash_basin_model_2.jpg"
                    },
                    {
                        name: "Spykar Cera Printed Pedestal Wash Basin - Model 3",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/p/r/printed_wash_basin_model_3.jpg"
                    }
                ]
            },
            {
                category: "Colored Pedestal Wash Basins",
                items: [
                    {
                        name: "Spykar Cera Colored Pedestal Wash Basin - Blue",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/c/o/colored_wash_basin_blue.jpg"
                    },
                    {
                        name: "Spykar Cera Colored Pedestal Wash Basin - Green",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/c/o/colored_wash_basin_green.jpg"
                    },
                    {
                        name: "Spykar Cera Colored Pedestal Wash Basin - Red",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/c/o/colored_wash_basin_red.jpg"
                    },
                    {
                        name: "Spykar Cera Colored Pedestal Wash Basin - Yellow",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/c/o/colored_wash_basin_yellow.jpg"
                    }
                    // If the page contains more items, add them here following the same format.
                ]
            },
            {
                category: "Wash Basins",
                items: [
                    {
                        name: "Spykar Cera Contemporary Wash Basin - White",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/c/o/cont_white.jpg"
                    },
                    {
                        name: "Spykar Cera Contemporary Wash Basin - Black",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/c/o/cont_black.jpg"
                    },
                    {
                        name: "Spykar Cera Designer Wash Basin - Marble",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/d/e/designer_marble.jpg"
                    },
                    {
                        name: "Spykar Cera Minimalist Wash Basin - Grey",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/m/i/minimalist_grey.jpg"
                    },
                    {
                        name: "Spykar Cera Premium Wash Basin - Glossy White",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/p/r/premium_glossy_white.jpg"
                    },
                    {
                        name: "Spykar Cera Fusion Wash Basin - Blue",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/f/u/fusion_blue.jpg"
                    },
                    {
                        name: "Spykar Cera Artistic Wash Basin - Red",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/a/r/artistic_red.jpg"
                    },
                    {
                        name: "Spykar Cera Eco Wash Basin - Green",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/e/c/eco_green.jpg"
                    }
                ]
            },
            {
                category: "Water Closets",
                items: [
                    {
                        name: "Spykar Cera Modern Water Closet",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/m/o/modern_wc.jpg"
                    },
                    {
                        name: "Spykar Cera Designer Water Closet",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/d/e/designer_wc.jpg"
                    },
                    {
                        name: "Spykar Cera Minimalist Water Closet",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/m/i/minimalist_wc.jpg"
                    },
                    {
                        name: "Spykar Cera Contemporary Water Closet",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/c/o/contemporary_wc.jpg"
                    },
                    {
                        name: "Spykar Cera Fusion Water Closet",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/f/u/fusion_wc.jpg"
                    },
                    {
                        name: "Spykar Cera Artistic Water Closet",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/a/r/artistic_wc.jpg"
                    }
                ]
            },
            {
                category: "Toilet Seats",
                items: [
                    {
                        name: "Spykar Cera Toilet Seat - White",
                        material: "Polypropylene",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/t/o/toilet_seat_white.jpg"
                    },
                    {
                        name: "Spykar Cera Toilet Seat - Black",
                        material: "Polypropylene",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/t/o/toilet_seat_black.jpg"
                    },
                    {
                        name: "Spykar Cera Toilet Seat - Soft Close",
                        material: "Polypropylene",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/t/o/toilet_seat_softclose.jpg"
                    },
                    {
                        name: "Spykar Cera Toilet Seat - Designer",
                        material: "Polypropylene",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/t/o/toilet_seat_designer.jpg"
                    }
                ]
            },
            {
                category: "Designer Urinals",
                items: [
                    {
                        name: "Spykar Cera Designer Urinal - Model 1",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/d/e/designer_urinal_model1.jpg"
                    },
                    {
                        name: "Spykar Cera Designer Urinal - Model 2",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/d/e/designer_urinal_model2.jpg"
                    },
                    {
                        name: "Spykar Cera Designer Urinal - Model 3",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/d/e/designer_urinal_model3.jpg"
                    }
                ]
            },
            {
                category: "Sanitary Ware Accessories",
                items: [
                    {
                        name: "Spykar Cera Soap Dish",
                        material: "Ceramic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/s/o/soap_dish.jpg"
                    },
                    {
                        name: "Spykar Cera Towel Ring",
                        material: "Stainless Steel",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/t/o/towel_ring.jpg"
                    },
                    {
                        name: "Spykar Cera Towel Bar",
                        material: "Stainless Steel",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/t/o/towel_bar.jpg"
                    },
                    {
                        name: "Spykar Cera Toilet Brush",
                        material: "Plastic",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/t/o/toilet_brush.jpg"
                    },
                    {
                        name: "Spykar Cera Robe Hook",
                        material: "Stainless Steel",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/r/o/robe_hook.jpg"
                    },
                    {
                        name: "Spykar Cera Paper Holder",
                        material: "Stainless Steel",
                        brands: ["Spykar Cera"],
                        variants: 1,
                        price: "Call for Price",
                        imageUrl: "https://www.spykarcera.com/media/catalog/product/p/a/paper_holder.jpg"
                    }
                ]
            }
        ]
    }
];
