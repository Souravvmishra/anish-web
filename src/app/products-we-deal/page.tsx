// app/products-we-deal/page.tsx
"use client"

import { motion } from "framer-motion";
import { ContactForm } from "@/components/main/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Product, products } from "@/data/products";
import { Breadcrumbs } from "@/components/breadcrumbs";

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

const imageVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const ProductCard = ({ product }: { product: Product }) => (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: true }}
        className="h-full"
    >
        <Card className="h-full relative overflow-hidden group cursor-pointer bg-gradient-to-b from-background to-muted/10">
            <div className="relative h-48 overflow-hidden">
                <motion.div
                    variants={imageVariants}
                    className="absolute inset-0"
                >
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
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full backdrop-blur-sm"
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
                    className="w-full bg-transparent hover:bg-primary/10 border-primary/20 hover:border-primary/30 font-semibold relative overflow-hidden"
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

                {products.map((brandGroup, index) => (
                    <section key={brandGroup.brand + index} className="mb-16">
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
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {category.items.map((product) => (
                                        <ProductCard
                                            key={`${brandGroup.brand}-${product.name}`}
                                            product={product}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                ))}

                <ContactForm />
            </main>
        </div>
    )
}

export default ProductsPage;
