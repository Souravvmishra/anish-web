"use client"


import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ContactForm } from "@/components/main/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Product, hindwareProducts } from "@/data/products";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { groheProducts } from "@/data/grohe_faucets";
import { americanProducts } from "@/data/american_standard";
import { spykarceraProducts } from "@/data/spykar_cera";
import { Search, X } from 'lucide-react';

const ProductCard = ({ product }: { product: Product }) => (
    <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full"
    >
        <Card className="h-full relative overflow-hidden group cursor-pointer bg-gradient-to-b from-background to-muted/10">
            <div className="relative h-48 overflow-hidden">
                <motion.div className="absolute inset-0">
                    <img
                        src={`${product.imageUrl}`}
                        alt={product.name}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </motion.div>
            </div>

            <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-3 text-primary">
                    {product.name}
                </CardTitle>

                <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Material:</span>
                        <span className="text-muted-foreground">{product.material}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {product.brands.map((brand, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            >
                                {brand}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Variants</span>
                        <span className="font-bold text-primary">{product.variants}+</span>
                    </div>
                </div>

                <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-primary/10 border-primary/20 hover:border-primary/30 font-semibold"
                >
                    Explore Options
                </Button>
            </CardContent>
        </Card>
    </motion.div>
);

const ProductsPage = () => {
    const allProducts = [...hindwareProducts, ...groheProducts, ...americanProducts, ...spykarceraProducts];
    const [selectedBrand, setSelectedBrand] = useState<string>('all');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Get unique brands and categories
    const brands = useMemo(() => ['all', ...new Set(allProducts.map(p => p.brand))], []);
    const categories = useMemo(() => {
        const cats = new Set<string>();
        allProducts.forEach(brand => {
            brand.categories.forEach(cat => cats.add(cat.category));
        });
        return ['all', ...Array.from(cats)];
    }, []);

    // Filter products based on selection
    const filteredProducts = useMemo(() => {
        let filtered = allProducts;

        if (selectedBrand !== 'all') {
            filtered = filtered.filter(p => p.brand === selectedBrand);
        }

        return filtered.map(brandGroup => ({
            ...brandGroup,
            categories: brandGroup.categories
                .filter(cat => selectedCategory === 'all' || cat.category === selectedCategory)
                .map(cat => ({
                    ...cat,
                    items: cat.items.filter(item =>
                        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.brands.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))
                    )
                }))
                .filter(cat => cat.items.length > 0)
        })).filter(brand => brand.categories.length > 0);
    }, [selectedBrand, selectedCategory, searchQuery]);

    return (
        <div className="bg-background min-h-screen">
            <main className="container max-w-7xl mx-auto px-4 py-8">
                <Breadcrumbs
                    items={[
                        { href: "/", title: "Home" },
                        { href: "/products-we-deal", title: "Products" },
                    ]}
                />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                    Our Brand Partners & Products
                </motion.h1>

                <div className="sticky top-16 z-10 bg-background/80 backdrop-blur p-4 rounded-lg mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 bg-background"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                    >
                                        <X className="h-4 w-4 text-muted-foreground" />
                                    </button>
                                )}
                            </div>
                        </div>
                        <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Select Brand" />
                            </SelectTrigger>
                            <SelectContent>
                                {brands.map(brand => (
                                    <SelectItem key={brand} value={brand}>
                                        {brand === 'all' ? 'All Brands' : brand}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map(category => (
                                    <SelectItem key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {filteredProducts.map((brandGroup) => (
                        <section key={brandGroup.brand} className="mb-16">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mb-8"
                            >
                                <h2 className="text-3xl font-bold text-foreground mb-6">
                                    {brandGroup.brand}
                                </h2>
                                <div className="h-1 w-24 bg-primary rounded-full" />
                            </motion.div>

                            {brandGroup.categories.map((category) => (
                                <div key={category.category} className="mb-12">
                                    <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                                        {category.category}
                                    </h3>
                                    <motion.div
                                        layout
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                    >
                                        <AnimatePresence>
                                            {category.items.map((product) => (
                                                <ProductCard
                                                    key={`${brandGroup.brand}-${product.name}`}
                                                    product={product}
                                                />
                                            ))}
                                        </AnimatePresence>
                                    </motion.div>
                                </div>
                            ))}
                        </section>
                    ))}
                </AnimatePresence>

                <ContactForm />
            </main>
        </div>
    );
};

export default ProductsPage;
