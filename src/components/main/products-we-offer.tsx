import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Droplet,
    ShowerHead,
    CircuitBoard,
    Gauge,
    PackageSearch,
    Bath,
    Wrench
} from "lucide-react";
import Link from "next/link";
import { JSX } from "react";
import CustomQuoteDialog from "../custom-quote";

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
            category: "Pipes and Fittings",
            icon: <Wrench className="w-6 h-6 text-primary" />,
            link: "/products-we-deal",
            subcategories: [
                {
                    name: "PVC Pipes",
                    products: [
                        {
                            id: "pf-01",
                            name: "UPVC Pressure Pipes",
                            description: "Schedule 40 & 80, Size: 15mm to 150mm",
                            link: "/products/pf-01"
                        },
                        {
                            id: "pf-02",
                            name: "CPVC Pipes",
                            description: "Hot & cold water systems, CTS size",
                            link: "/products/pf-02"
                        }
                    ]
                },
                {
                    name: "Pipe Fittings",
                    products: [
                        {
                            id: "pf-03",
                            name: "PVC Fittings",
                            description: "Elbows, Tees, Couplings, and Adapters",
                            link: "/products/pf-03"
                        },
                        {
                            id: "pf-04",
                            name: "Metal Fittings",
                            description: "Brass and Steel connections",
                            link: "/products/pf-04"
                        }
                    ]
                }
            ]
        },
        {
            category: "Bathroom Solutions",
            icon: <Bath className="w-6 h-6 text-primary" />,
            link: "/products-we-deal",
            subcategories: [
                {
                    name: "Faucets & Sanitary",
                    products: [
                        {
                            id: "bs-01",
                            name: "Premium Faucets",
                            description: "Single-lever, Wall-mounted options",
                            link: "/products/bs-01"
                        },
                        {
                            id: "bs-02",
                            name: "Sanitary Ware",
                            description: "WCs, Wash Basins, Urinals",
                            link: "/products/bs-02"
                        }
                    ]
                },
                {
                    name: "Accessories",
                    products: [
                        {
                            id: "bs-03",
                            name: "Bathroom Accessories",
                            description: "Towel rails, Soap dishes, Paper holders",
                            link: "/products/bs-03"
                        },
                        {
                            id: "bs-04",
                            name: "Shower Systems",
                            description: "Overhead showers, Hand showers",
                            link: "/products/bs-04"
                        }
                    ]
                }
            ]
        },
        {
            category: "Home Appliances",
            icon: <ShowerHead className="w-6 h-6 text-primary" />,
            link: "/products-we-deal",
            subcategories: [
                {
                    name: "Water Heaters",
                    products: [
                        {
                            id: "ha-01",
                            name: "Storage Water Heaters",
                            description: "15L to 50L capacity, 5-star rated",
                            link: "/products/ha-01"
                        },
                        {
                            id: "ha-02",
                            name: "Instant Water Heaters",
                            description: "3kW to 6kW power rating",
                            link: "/products/ha-02"
                        }
                    ]
                },
                {
                    name: "Kitchen Equipment",
                    products: [
                        {
                            id: "ha-03",
                            name: "Kitchen Chimneys",
                            description: "60-90cm width, Auto-clean feature",
                            link: "/products/ha-03"
                        }
                    ]
                }
            ]
        },
        {
            category: "Motors & Pumps",
            icon: <CircuitBoard className="w-6 h-6 text-primary" />,
            link: "/products-we-deal",
            subcategories: [
                {
                    name: "Water Pumps",
                    products: [
                        {
                            id: "mp-01",
                            name: "Submersible Pumps",
                            description: "0.5HP to 2HP, Single & 3-phase",
                            link: "/products/mp-01"
                        },
                        {
                            id: "mp-02",
                            name: "Booster Pumps",
                            description: "Automatic pressure control systems",
                            link: "/products/mp-02"
                        }
                    ]
                },
                {
                    name: "Motors",
                    products: [
                        {
                            id: "mp-03",
                            name: "Electric Motors",
                            description: "High-efficiency IE3 motors",
                            link: "/products/mp-03"
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
                        <Droplet className="w-4 h-4 text-primary" />
                        Plumbing Solutions Catalog
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
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
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
                                            <PackageSearch className="w-4 h-4 text-primary" />
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
                                                            <Droplet className="w-5 h-5 text-primary/80" />
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
                                    <Gauge className="w-4 h-4" />
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
                            Complete Plumbing Solutions Catalog
                        </h3>
                        <p className="mt-4 text-muted-foreground">
                            Access our full range of plumbing products with technical specifications
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                                <Link href="/products">
                                    <Droplet className="w-5 h-5" />
                                    Download Full Catalog (PDF)
                                </Link>
                            </Button>
                            <CustomQuoteDialog />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsWeOffer;
