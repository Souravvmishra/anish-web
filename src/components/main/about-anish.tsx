// AboutSection.tsx
import { Button } from "@/components/ui/button"
import { Factory, Trophy, Users, ShieldCheck, Clock, TowerControl } from "lucide-react"

export const AboutSection = () => {
    return (
        <section className="py-20 bg-background" id="about">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    {/* Content Column */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-full text-muted-foreground bg-muted">
                            <Trophy className="w-4 h-4 text-primary" />
                            Industry Leaders Since 1998
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            About Anish Enterprises
                        </h2>

                        <p className="text-muted-foreground">
                            As Jharkhand&apos;s premier industrial solutions provider, we specialize in delivering high-quality material handling equipment and industrial components to manufacturing units across Eastern India.
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Certified Quality</h3>
                                    <p className="text-muted-foreground">
                                        ISO 9001:2015 certified suppliers of industrial trolleys, racks, and material handling systems
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Client-Centric Approach</h3>
                                    <p className="text-muted-foreground">
                                        Serving 500+ enterprises including major steel plants and automotive manufacturers
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 border rounded-lg bg-muted/20">
                                <div className="text-2xl font-bold text-primary">25+</div>
                                <div className="text-sm text-muted-foreground">Years Operation</div>
                            </div>
                            <div className="p-4 border rounded-lg bg-muted/20">
                                <div className="text-2xl font-bold text-primary">50+</div>
                                <div className="text-sm text-muted-foreground">Industry Partners</div>
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
                                    <span className="font-medium text-foreground">1998:</span>
                                    Founded in Ranchi as industrial equipment suppliers
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-medium text-foreground">2005:</span>
                                    Expanded to full-scale material handling solutions
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-medium text-foreground">2015:</span>
                                    Achieved ISO 9001:2015 certification
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-medium text-foreground">2023:</span>
                                    Reached 500+ enterprise client milestone
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 border rounded-xl bg-muted/10">
                            <h3 className="flex items-center gap-2 text-lg font-semibold">
                                <TowerControl className="w-6 h-6 text-primary" />
                                Core Values
                            </h3>
                            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                                <p>✓ Quality Assurance & Technical Excellence</p>
                                <p>✓ Client-Specific Custom Solutions</p>
                                <p>✓ Sustainable Industrial Practices</p>
                                <p>✓ Continuous Process Improvement</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Button size="lg" className="rounded-full gap-2">
                        <Factory className="w-5 h-5" />
                        Explore Our Solutions
                    </Button>
                </div>
            </div>
        </section>
    )
}
