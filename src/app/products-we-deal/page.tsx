"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/main/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ChevronLeft, Search, X } from "lucide-react";

// Brand-specific imports
import { groheProducts } from "@/data/grohe_faucets";
import { americanProducts } from "@/data/american_standard";
import { spykarceraProducts } from "@/data/spykar_cera";
import { finolexUtkarshProducts } from "@/data/finolex";
import { BrandProductGroup, Product, hindwareProducts } from "@/data/products";
import { SupplierAlert } from "@/components/supplier";
import { eausetProducts } from "@/data/eaucets";
import { ashirvadProducts } from "@/data/aashirwadProducts";

// Combine all product groups
const allProductGroups: BrandProductGroup[] = [
    ...hindwareProducts,
    ...groheProducts,
    ...americanProducts,
    ...spykarceraProducts,
    ...finolexUtkarshProducts,
    ...ashirvadProducts,
    ...eausetProducts,
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeInOut" },
    },
    tap: { scale: 0.98 },
};

const imageVariants = {
    hover: {
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

const BrandCard = ({
    brand,
    imageUrl,
    onSelect,
}: {
    brand: string;
    imageUrl: string;
    onSelect: () => void;
}) => (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        className="w-full"
        onClick={onSelect}
    >
        <Card className="relative overflow-hidden group cursor-pointer bg-gradient-to-b from-background to-muted/10">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={`${brand} brand`}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
            <CardContent className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold">{brand}</CardTitle>
                <div className="h-1 w-16 bg-primary/20 mt-3 group-hover:bg-primary transition-colors duration-300" />
            </CardContent>
        </Card>
    </motion.div>
);

const CategoryCard = ({
    category,
    imageUrl,
    onSelect,
}: {
    category: string;
    imageUrl: string;
    onSelect: () => void;
}) => (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        className="w-full"
        onClick={onSelect}
    >
        <Card className="relative overflow-hidden group cursor-pointer bg-gradient-to-b from-background to-muted/10">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={`${category} brand`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
            <CardContent className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-primary">
                    {category}
                </CardTitle>
                <div className="h-1 w-16 bg-primary/20 mt-3 group-hover:bg-primary transition-colors" />
            </CardContent>
        </Card>
    </motion.div>
);

const ProductCard = ({ product }: { product: Product }) => (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        className="w-full"
    >
        <Card className="relative overflow-hidden group cursor-pointer bg-gradient-to-b from-background to-muted/10">
            <div className="relative h-40 sm:h-48 overflow-hidden">
                <motion.div variants={imageVariants} className="absolute inset-0">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </motion.div>
            </div>
            <CardContent className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary">
                    {product.name}
                </CardTitle>
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Material:</span>
                        <span className="text-muted-foreground">{product.material}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {product.brands.map((brand, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-primary/10 text-primary rounded-full backdrop-blur-sm"
                            >
                                {brand}
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Variants</span>
                        <span className="font-bold text-primary">{product.variants}+</span>
                    </div>
                </div>
                <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-primary/10 border-primary/20 hover:border-primary/30 font-semibold relative overflow-hidden text-sm sm:text-base"
                >
                    <span className="relative z-10">Explore Options</span>
                    <motion.div
                        className="absolute inset-0 bg-primary/10"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                    />
                </Button>
            </CardContent>
        </Card>
    </motion.div>
);

const ProductsPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get parameters from URL
    const brandFromUrl = searchParams.get("brand");
    const categoryFromUrl = searchParams.get("category");
    const searchFromUrl = searchParams.get("search") || "";

    // Local state for search input to allow smooth typing
    const [localSearchQuery, setLocalSearchQuery] = useState(searchFromUrl);

    // Sync local search query if URL changes externally
    useEffect(() => {
        setLocalSearchQuery(searchFromUrl);
    }, [searchFromUrl]);

    // Utility to update URL query parameters
    const updateQuery = (newParams: {
        brand?: string | null;
        category?: string | null;
        search?: string;
    }) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newParams.brand !== undefined) {
            if (newParams.brand) params.set("brand", newParams.brand);
            else params.delete("brand");
        }
        if (newParams.category !== undefined) {
            if (newParams.category) params.set("category", newParams.category);
            else params.delete("category");
        }
        if (newParams.search !== undefined) {
            if (newParams.search) params.set("search", newParams.search);
            else params.delete("search");
        }
        router.push(`?${params.toString()}`);
    };

    // Use URL parameters for state
    const selectedBrand = brandFromUrl || null;
    const selectedCategory = categoryFromUrl || null;

    // Get unique brands
    const uniqueBrands = [
        ...new Set(
            allProductGroups.map((group) => ({ brand: group.brand, image: group.logo }))
        ),
    ];
    const selectedBrandGroup = allProductGroups.find(
        (group) => group.brand === selectedBrand
    );

    const breadcrumbItems = [
        { href: "/", title: "Home" },
        { href: "/products-we-deal", title: "Products" },
        ...(selectedBrand ? [{ href: `/products-we-deal?brand=${selectedBrand}`, title: selectedBrand }] : []),
        ...(selectedCategory
            ? [
                {
                    href: `/products-we-deal?brand=${selectedBrand}&category=${selectedCategory}`,
                    title: selectedCategory,
                },
            ]
            : []),
    ];

    const handleBack = () => {
        if (selectedCategory) {
            updateQuery({ category: null, search: "" });
        } else if (selectedBrand) {
            updateQuery({ brand: null, search: "" });
        }
    };

    return (
        <div className="bg-background min-h-screen">
            <main className="px-4 py-4 sm:py-8 container mx-auto max-w-7xl">
                <div className="hidden sm:block">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    {(selectedBrand || selectedCategory) && (
                        <Button variant="ghost" onClick={handleBack} className="w-fit -ml-3">
                            <ChevronLeft className="w-4 h-4" /> Back
                        </Button>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    >
                        {!selectedBrand
                            ? "Our Brand Partners"
                            : !selectedCategory
                                ? `${selectedBrand} Products`
                                : `${selectedBrand} ${selectedCategory}`}
                    </motion.h1>

                    {selectedCategory && (
                        <div className="relative w-full sm:w-auto">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={localSearchQuery}
                                onChange={(e) => {
                                    setLocalSearchQuery(e.target.value);
                                    updateQuery({ search: e.target.value });
                                }}
                                className="w-full sm:w-auto pl-10 pr-10 py-2 rounded-full bg-muted/50 border border-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            {localSearchQuery && (
                                <button
                                    onClick={() => {
                                        setLocalSearchQuery("");
                                        updateQuery({ search: "" });
                                    }}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                >
                                    <X className="w-4 h-4 text-muted-foreground" />
                                </button>
                            )}
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {!selectedBrand &&
                        uniqueBrands.map((brand, index) => (
                            <BrandCard
                                key={index}
                                brand={brand.brand}
                                imageUrl={brand.image}
                                onSelect={() => updateQuery({ brand: brand.brand, category: null, search: "" })}
                            />
                        ))}

                    {selectedBrand &&
                        !selectedCategory &&
                        selectedBrandGroup?.categories.map((category, index) => (
                            <CategoryCard
                                key={index}
                                category={category.category}
                                imageUrl={
                                    category.categoryImage ||
                                    "https://i.pinimg.com/736x/1c/89/46/1c89461dc4fa24792f88d90573a842c8.jpg"
                                }
                                onSelect={() => updateQuery({ category: category.category })}
                            />
                        ))}

                    {selectedBrand &&
                        selectedCategory &&
                        selectedBrandGroup?.categories
                            .find((c) => c.category === selectedCategory)
                            ?.items.filter((product) =>
                                localSearchQuery
                                    ? product.name.toLowerCase().includes(localSearchQuery.toLowerCase())
                                    : true
                            )
                            .map((product, index) => <ProductCard key={index} product={product} />)}
                </div>

                {selectedBrand && selectedBrandGroup?.supplier && (
                    <div className="mt-8">
                        <SupplierAlert supplier={selectedBrandGroup.supplier} />
                    </div>
                )}

                {selectedCategory && <ContactForm />}
            </main>
        </div>
    );
};

export default ProductsPage;
