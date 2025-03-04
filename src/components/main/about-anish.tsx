import { Button } from "@/components/ui/button";
import { Droplet, Handshake, BadgeCheck, ShieldCheck, Clock, Wrench, CheckSquare } from "lucide-react";
import Link from "next/link";

export const AboutSection = () => {
    return (
        <section className="py-20 bg-background" id="about">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    {/* Content Column */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-full text-muted-foreground bg-muted">
                            <BadgeCheck className="w-4 h-4 text-primary" />
                            Trusted Sanitary Solutions Since 2001
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            About Anish Enterprises
                        </h2>

                        <p className="text-muted-foreground">
                            As a leading provider of high-quality sanitary ware, faucets, and piping solutions, we have been serving residential, commercial, and industrial clients across Eastern India for over two decades.
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Premium Quality Products</h3>
                                    <p className="text-muted-foreground">
                                        Our faucets, sanitary ware, and piping solutions meet the highest industry standards for durability and efficiency.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <Handshake className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Customer-Centric Service</h3>
                                    <p className="text-muted-foreground">
                                        Serving 500+ businesses, builders, and homeowners with tailored sanitary solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 border rounded-lg bg-muted/20">
                                <div className="text-2xl font-bold text-primary">21+</div>
                                <div className="text-sm text-muted-foreground">Years Experience</div>
                            </div>
                            <div className="p-4 border rounded-lg bg-muted/20">
                                <div className="text-2xl font-bold text-primary">50+</div>
                                <div className="text-sm text-muted-foreground">Trusted Partners</div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Column */}
                    <div className="space-y-8">
                        <div className="p-6 border rounded-xl bg-muted/10">
                            <h3 className="flex items-center gap-2 text-lg font-semibold">
                                <Clock className="w-6 h-6 text-primary" />
                                Our Journey
                            </h3>
                            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="font-medium text-foreground">2001:</span>
                                    Established in Ranchi as a trusted supplier of sanitary ware and piping solutions.
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-medium text-foreground">2010:</span>
                                    Expanded our product range to include premium faucets and fittings.
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-medium text-foreground">2023:</span>
                                    Achieved 500+ satisfied clients across Eastern India.
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 border rounded-xl bg-muted/10">
                            <h3 className="flex items-center gap-2 text-lg font-semibold">
                                <Wrench className="w-6 h-6 text-primary" />
                                Core Values
                            </h3>
                            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                                <p className="flex items-center gap-3"><CheckSquare size={18}/> Superior Product Quality & Durability</p>
                                <p className="flex items-center gap-3"><CheckSquare size={18}/> Tailored Solutions for Every Client</p>
                                <p className="flex items-center gap-3"><CheckSquare size={18}/> Sustainable and Water-Saving Technologies</p>
                                <p className="flex items-center gap-3"><CheckSquare size={18}/> Continuous Innovation & Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link href={'/products-we-deal'}>
                        <Button size="lg" className="rounded-full gap-2">
                            <Droplet className="w-5 h-5" />
                            Explore Our Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
