"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ContactForm } from "@/components/main/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brand, BrandCategory, brands } from "@/data/brands";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GlobeIcon, Instagram, ChevronRight } from "lucide-react";
import { Badge } from '@/components/ui/badge';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    }),
    hover: {
        y: -8,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    tap: { scale: 0.98 }
};

const logoVariants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.1,
        rotate: 5,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const BrandCard = ({ brand, index }: { brand: Brand; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            variants={cardVariants}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            viewport={{ once: true }}
            className="h-full"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Card className="h-full relative overflow-hidden group cursor-pointer bg-gradient-to-br from-background via-background to-primary/5 border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <motion.div
                            variants={logoVariants}
                            whileHover="hover"
                            className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl bg-white shadow-lg p-4"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="object-contain w-full h-full"
                            />
                            <div className="absolute inset-0 bg-primary/5 rounded-xl" />
                        </motion.div>

                        <div className="space-y-4 flex-1">
                            <div className="flex items-start justify-between">
                                <h3 className="text-2xl md:text-3xl font-bold ">
                                    {brand.name}
                                </h3>
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                        >
                                            <ChevronRight className="w-6 h-6 text-primary" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <div className="flex items-center gap-2 ">
                                    <span className="font-medium">Products</span>
                                    <Badge>
                                        {brand.productCount}+
                                    </Badge>
                                </div>
                                <div className="hidden md:block w-px h-4 bg-border" />
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">Since</span>
                                    <Badge>
                                        {brand.established}
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {brand.categories.map((category, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Badge variant={'outline'}>
                                            {category}
                                        </Badge>
                                    </motion.span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-border">
                                {brand.socials.instagram && (
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        href={brand.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </motion.a>
                                )}
                                {brand.socials.website && (
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        href={brand.socials.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <GlobeIcon className="w-5 h-5" />
                                    </motion.a>
                                )}
                                <Button
                                    variant="outline"
                                    className="ml-auto bg-transparent hover:bg-primary/10 border-primary/20 hover:border-primary/30 font-semibold relative overflow-hidden"
                                >
                                    <span className="relative z-10">View Products</span>
                                    <motion.div
                                        className="absolute inset-0 bg-primary/10"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Button>

                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const BrandsPage = () => {
    return (
        <div className="bg-background min-h-screen">
            <main className="container max-w-7xl mx-auto px-4 py-8">
                <Breadcrumbs
                    items={[
                        { href: "/", title: "Home" },
                        { href: "/brands-we-deal", title: "Brands" },
                    ]}
                />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                    Trusted Luxury Brands
                </motion.h1>

                {brands.map((section: BrandCategory, index: number) => (
                    <motion.section
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 }}
                        className="mb-16"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xl mb-8 text-foreground border-l-2 border-primary pl-2"
                        >
                            {section.category}
                        </motion.h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {section.items
                                .map((brand: Brand, idx: number) => (
                                    <BrandCard
                                        key={`${brand.name}-${idx}`}
                                        brand={brand}
                                        index={idx}
                                    />
                                ))}
                        </div>
                    </motion.section>
                ))}

                <ContactForm />
            </main>
        </div>
    );
};

export default BrandsPage;
