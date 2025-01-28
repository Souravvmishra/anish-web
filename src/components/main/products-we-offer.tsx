// ProductsWeOffer.tsx
import { Button } from "@/components/ui/button";
import {
    Anchor,
    ArrowRight,
    Bolt,
    Box,
    BriefcaseConveyorBelt,
    Forklift,
    Gauge,
    PackageSearch,
    Warehouse,
    Wrench
} from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

type ProductCategory = {
    category: string;
    icon: JSX.Element;
    subcategories: {
        name: string;
        products: {
            id: string;
            name: string;
            description: string;
            link: string;
        }[];
    }[];
    link: string;
};

export const ProductsWeOffer = () => {
    const productCategories: ProductCategory[] = [
        {
            category: "Material Handling",
            icon: <BriefcaseConveyorBelt className="w-6 h-6 text-primary" />,
            link: "/material-handling",
            subcategories: [
                {
                    name: "Conveying Systems",
                    products: [
                        {
                            id: "mh-01",
                            name: "Roller Conveyors",
                            description: "Heavy-duty gravity rollers up to 2000kg capacity",
                            link: "/products/mh-01"
                        },
                        {
                            id: "mh-02",
                            name: "Chain Conveyors",
                            description: "Drag chain systems for pallet handling",
                            link: "/products/mh-02"
                        },
                        {
                            id: "mh-03",
                            name: "Belt Conveyors",
                            description: "Rubber/PU belts up to 30m length",
                            link: "/products/mh-03"
                        }
                    ]
                },
                {
                    name: "Lifting Equipment",
                    products: [
                        {
                            id: "mh-04",
                            name: "Electric Chain Hoists",
                            description: "1-10 ton capacity, IP54 rated",
                            link: "/products/mh-04"
                        },
                        {
                            id: "mh-05",
                            name: "Wire Rope Hoists",
                            description: "5-50 ton lifting capacity",
                            link: "/products/mh-05"
                        }
                    ]
                }
            ]
        },
        {
            category: "Storage Solutions",
            icon: <Warehouse className="w-6 h-6 text-primary" />,
            link: "/storage-solutions",
            subcategories: [
                {
                    name: "Racking Systems",
                    products: [
                        {
                            id: "ss-01",
                            name: "Selective Pallet Racks",
                            description: "Hot-dip galvanized, 5-15 ton/upright",
                            link: "/products/ss-01"
                        },
                        {
                            id: "ss-02",
                            name: "Drive-in Racking",
                            description: "High-density storage systems",
                            link: "/products/ss-02"
                        }
                    ]
                },
                {
                    name: "Shelving",
                    products: [
                        {
                            id: "ss-03",
                            name: "Cantilever Shelving",
                            description: "For long item storage up to 6m",
                            link: "/products/ss-03"
                        }
                    ]
                }
            ]
        },
        {
            category: "Industrial Tools",
            icon: <Wrench className="w-6 h-6 text-primary" />,
            link: "/industrial-tools",
            subcategories: [
                {
                    name: "Power Tools",
                    products: [
                        {
                            id: "it-01",
                            name: "Impact Wrenches",
                            description: "1/2 drive, 750-1500Nm torque",
              link: "/products/it-01"
            },
                        {
                            id: "it-02",
                            name: "Hydraulic Cutters",
                            description: "25-ton cutting capacity",
                            link: "/products/it-02"
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 text-sm border rounded-full text-muted-foreground bg-muted">
                        <PackageSearch className="w-4 h-4 text-primary" />
                        Industrial Equipment Catalog
                    </div>

                    <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Our Core Product {" "}
                        <span className="relative inline-block">
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-xl opacity-50" />
                            <span className="relative">Range</span>
                        </span>
                    </h2>
                </div>

                {/* Products Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {productCategories.map((category) => (
                        <div
                            key={category.category}
                            className="p-6 border rounded-xl bg-muted/10 hover:bg-muted/20 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                {category.icon}
                                <h3 className="text-xl font-semibold">{category.category}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.subcategories.map((subcategory) => (
                                    <div key={subcategory.name} className="border-t pt-4">
                                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                                            <Forklift className="w-4 h-4 text-primary" />
                                            <h4 className="font-medium">{subcategory.name}</h4>
                                        </div>

                                        <ul className="space-y-3">
                                            {subcategory.products.map((product) => (
                                                <li key={product.id} className="group">
                                                    <Link
                                                        href={product.link}
                                                        className="flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-muted/30 transition-colors"
                                                    >
                                                        <div className="flex-shrink-0">
                                                            <Bolt className="w-5 h-5 text-primary/80" />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium">{product.name}</div>
                                                            <div className="text-sm text-muted-foreground">
                                                                {product.description}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant="outline"
                                className="mt-6 w-full rounded-full gap-2"
                                asChild
                            >
                                <Link href={category.link}>
                                    <Box className="w-4 h-4" />
                                    View All {category.category}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Full Catalog CTA */}
                <div className="mt-20 text-center border-t pt-16">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold">
                            Complete Industrial Solutions Catalog
                        </h3>
                        <p className="mt-4 text-muted-foreground">
                            Access 500+ industrial products with technical specifications and CAD drawings
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                                <Link href="/products">
                                    <Gauge className="w-5 h-5" />
                                    Download Full Catalog (PDF)
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 gap-2" asChild>
                                <Link href="/contact">
                                    <Anchor className="w-5 h-5" />
                                    Request Custom Quote
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ProductsWeOffer;
