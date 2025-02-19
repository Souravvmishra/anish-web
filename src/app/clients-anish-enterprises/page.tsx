"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactForm } from "@/components/main/contact-form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Dot, Search, Users2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { clientCategories } from "@/data/clients";

interface ClientCardProps {
    name: string;
    index: number;
    category: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name, index, category }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-full"
        >
            <Card className="relative group cursor-pointer overflow-hidden">
                <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Dot/>
                            <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                                {name}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                                {category}
                            </Badge>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Users2 className="w-4 h-4" />
                        </Button>
                    </div>
                </CardContent>
                <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                />
            </Card>
        </motion.div>
    );
};

interface CategoryHeaderProps {
    category: string;
    icon: React.ElementType;
    description: string;
    clientCount: number;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
    category,
    icon: Icon,
    description,
    clientCount,
}) => (
    <div className="flex items-start gap-4 mb-8">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-1">
            <h2 className="text-xl font-semibold flex items-center gap-3">
                {category}
                <Badge variant="secondary">{clientCount} Clients</Badge>
            </h2>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </div>
);

const ClientsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<"all" | string>("all");
    const [totalClients, setTotalClients] = useState(0);

    useEffect(() => {
        const count = clientCategories.reduce((acc, category) => acc + category.items.length, 0);
        setTotalClients(count);
    }, []);

    const filteredCategories = clientCategories
        .map((category) => ({
            ...category,
            items: category.items.filter((client) =>
                client.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        }))
        .filter(
            (category) => activeCategory === "all" || category.category === activeCategory
        )
        .filter((category) => category.items.length > 0);

    return (
        <div className="bg-background min-h-screen">
            <main className="container max-w-7xl mx-auto px-4 py-8">
                <Breadcrumbs
                    items={[
                        { href: "/", title: "Home" },
                        { href: "/clients-anish-enterprises", title: "Clients" },
                    ]}
                />

                <div className="relative mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Our Valued Clients
                        </h1>
                        <p className="text-muted-foreground mb-4">
                            Trusted by {totalClients}+ industry leaders across sectors
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2 mb-8"
                    >
                        <Button
                            variant={activeCategory === "all" ? "default" : "outline"}
                            onClick={() => setActiveCategory("all")}
                            className="rounded-full"
                        >
                            All Sectors
                        </Button>
                        {clientCategories.map((cat) => (
                            <Button
                                key={cat.category}
                                variant={
                                    activeCategory === cat.category ? "default" : "outline"
                                }
                                onClick={() => setActiveCategory(cat.category)}
                                className="rounded-full flex items-center gap-2"
                            >
                                {React.createElement(cat.icon)}
                                {cat.category}
                                <Badge variant="secondary" className="ml-1">
                                    {cat.items.length}
                                </Badge>
                            </Button>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative max-w-xl mb-16"
                    >
                        <Input
                            type="text"
                            placeholder="Search clients..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-12 bg-background/50 backdrop-blur-sm border-2"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    </motion.div>
                </div>

                <AnimatePresence mode="wait">
                    {filteredCategories.map((category, categoryIndex) => (
                        <motion.section
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="mb-16"
                        >
                            <CategoryHeader
                                category={category.category}
                                icon={category.icon}
                                description={category.description}
                                clientCount={category.items.length}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((client, index) => (
                                    <ClientCard
                                        key={`${client}-${index}`}
                                        name={client}
                                        index={index}
                                        category={category.category}
                                    />
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </AnimatePresence>

                <ContactForm />
            </main>
        </div>
    );
};

export default ClientsPage;
