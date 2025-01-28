"use client"

import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { awards } from "@/data/awards";
import { ContactForm } from "@/components/main/contact-form";

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

const AwardsPage = () => {
    return (
        <div className="bg-background min-h-screen">
            <main className="container max-w-7xl mx-auto px-4 py-8">
                <Breadcrumbs
                    items={[
                        { href: "/", title: "Home" },
                        { href: "/awards-anish-enterprises", title: "Awards & Recognition" },
                    ]}
                />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                    Awards & Recognition
                </motion.h1>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {awards.map((award) => (
                        <motion.div
                            key={award.alt}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            whileTap="tap"
                            viewport={{ once: true }}
                            className="break-inside-avoid relative group cursor-pointer"
                        >
                            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={award.url}
                                    alt={award.alt}
                                    width={400}
                                    height={600}
                                    className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <ContactForm />
            </main>
        </div>
    )
}

export default AwardsPage;
