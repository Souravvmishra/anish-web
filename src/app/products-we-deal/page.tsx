"use client"

import { motion } from "framer-motion";
import { ContactForm } from "@/components/main/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, Droplets, Factory, Home, Wrench, Zap, Thermometer, Drill, TestTube2, Gauge, Warehouse, Pipette, GlassWaterIcon } from "lucide-react";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    },
    hover: {
        y: -5,
        scale: 1.02,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    tap: { scale: 0.98 }
};

const iconVariants = {
    hover: {
        rotate: [0, -10, 10, 0],
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};

const ProductsPage = () => {
    const sanitaryProducts = [
        {
            name: "Bath Tubs",
            icon: <Bath className="w-8 h-8" />,
            material: "Acrylic/FRP",
            brands: ["Jaquar", "Cera", "Parryware"],
            variants: 12
        },
        {
            name: "Shower Systems",
            icon: <Droplets className="w-8 h-8" />,
            material: "Stainless Steel/Plastic",
            brands: ["Hindware", "Kohler", "Grohe"],
            variants: 8
        },
        {
            name: "Wash Basins",
            icon: <Home className="w-8 h-8" />,
            material: "Ceramic/Stone",
            brands: ["Roca", "American Standard", "HSIL"],
            variants: 15
        },
        {
            name: "Smart Faucets",
            icon: <Zap className="w-8 h-8" />,
            material: "Brass/Chrome",
            brands: ["Delta", "Moen", "Hansgrohe"],
            variants: 10
        },
        {
            name: "Repair Kits",
            icon: <Wrench className="w-8 h-8" />,
            material: "Metal/Plastic",
            brands: ["Danco", "Korky", "Fluidmaster"],
            variants: 20
        }
    ];

    const industrialProducts = [
        {
            name: "Industrial Valves",
            icon: <Factory className="w-8 h-8" />,
            material: "Stainless Steel/Brass",
            brands: ["L&T", "KITZ", "Emerson"],
            variants: 15
        },
        {
            name: "Pressure Gauges",
            icon: <Gauge className="w-8 h-8" />,
            material: "Brass/Stainless Steel",
            brands: ["WIKA", "Ashcroft", "BD|SENSORS"],
            variants: 18
        },
        {
            name: "Pipe Fittings",
            icon: <Pipette className="w-8 h-8" />,
            material: "PVC/Galvanized Iron",
            brands: ["Finolex", "Astral", "Prince"],
            variants: 25
        },
        {
            name: "Water Pumps",
            icon: <GlassWaterIcon className="w-8 h-8" />,
            material: "Cast Iron/Stainless",
            brands: ["Kirloskar", "Crompton", "Taro"],
            variants: 12
        },
        {
            name: "Welding Equipment",
            icon: <Drill className="w-8 h-8" />,
            material: "Steel/Copper",
            brands: ["Lincoln", "ESAB", "Miller"],
            variants: 9
        },
        {
            name: "Temperature Sensors",
            icon: <Thermometer className="w-8 h-8" />,
            material: "Stainless Steel/PTFE",
            brands: ["Omega", "Honeywell", "Siemens"],
            variants: 14
        },
        {
            name: "Lab Equipment",
            icon: <TestTube2 className="w-8 h-8" />,
            material: "Borosilicate Glass",
            brands: ["Thermo Fisher", "Kimble", "Corning"],
            variants: 11
        },
        {
            name: "Storage Tanks",
            icon: <Warehouse className="w-8 h-8" />,
            material: "Polyethylene/Stainless",
            brands: ["Sintex", "Vishvaraj", "Nova"],
            variants: 7
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            <main className="container max-w-7xl mx-auto px-4 py-8">
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <Home className="w-4 h-4 mr-2" />
                    <span>Home</span>
                    <span className="mx-2">/</span>
                    <span className="text-primary font-medium">Products We Deal</span>
                </div>

                <h1 className="text-4xl font-bold mb-12">
                    Our Product Catalog
                </h1>

                <section className="mb-16">
                    <h2 className="text-xl font-semibold mb-8 text-muted-foreground border-b pb-2">
                        Sanitaryware & Bath Essentials
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {sanitaryProducts.map((product, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <Card className="h-full relative overflow-hidden group cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <CardHeader className="items-center pb-0 px-6 pt-6">
                                        <motion.div
                                            variants={iconVariants}
                                            whileHover="hover"
                                            className="bg-primary/10 p-4 rounded-full"
                                        >
                                            {product.icon}
                                        </motion.div>
                                    </CardHeader>

                                    <CardContent className="p-6 pt-2">
                                        <CardTitle className="text-lg font-semibold text-center mb-2">
                                            {product.name}
                                        </CardTitle>

                                        <div className="text-center space-y-2 mb-4">
                                            <p className="text-sm text-muted-foreground">
                                                Material: {product.material}
                                            </p>
                                            <div className="flex flex-wrap justify-center gap-2">
                                                {product.brands.map((brand, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-1 text-xs bg-muted rounded-full"
                                                    >
                                                        {brand}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-sm text-primary font-medium">
                                                {product.variants}+ Variants
                                            </p>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex justify-center"
                                        >
                                            <Button
                                                variant="default"
                                                size="sm"
                                                className="w-full bg-primary/90 hover:bg-primary shadow-sm relative overflow-hidden"
                                            >
                                                <span className="relative z-10">View Options</span>
                                                <motion.div
                                                    className="absolute inset-0 bg-primary/20"
                                                    initial={{ width: 0 }}
                                                    whileHover={{ width: "100%" }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </Button>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-xl font-semibold mb-8 text-muted-foreground border-b pb-2">
                        Industrial & Plumbing Solutions
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {industrialProducts.map((product, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <Card className="h-full relative overflow-hidden group cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <CardHeader className="items-center pb-0 px-6 pt-6">
                                        <motion.div
                                            variants={iconVariants}
                                            whileHover="hover"
                                            className="bg-primary/10 p-4 rounded-full"
                                        >
                                            {product.icon}
                                        </motion.div>
                                    </CardHeader>

                                    <CardContent className="p-6 pt-2">
                                        <CardTitle className="text-lg font-semibold text-center mb-2">
                                            {product.name}
                                        </CardTitle>

                                        <div className="text-center space-y-2 mb-4">
                                            <p className="text-sm text-muted-foreground">
                                                Material: {product.material}
                                            </p>
                                            <div className="flex flex-wrap justify-center gap-2">
                                                {product.brands.map((brand, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-1 text-xs bg-muted rounded-full"
                                                    >
                                                        {brand}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-sm text-primary font-medium">
                                                {product.variants}+ Variants
                                            </p>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex justify-center"
                                        >
                                            <Button
                                                variant="default"
                                                size="sm"
                                                className="w-full bg-primary/90 hover:bg-primary shadow-sm relative overflow-hidden"
                                            >
                                                <span className="relative z-10">View Options</span>
                                                <motion.div
                                                    className="absolute inset-0 bg-primary/20"
                                                    initial={{ width: 0 }}
                                                    whileHover={{ width: "100%" }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </Button>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <ContactForm />
            </main>
        </div>
    )
}

export default ProductsPage;
