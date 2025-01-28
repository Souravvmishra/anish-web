// LandingPage.tsx
import { Button } from "@/components/ui/button"
import { Play, Award, ShieldCheck, Factory, PackageCheck, Users } from "lucide-react"

export const LandingPage = () => {
    return (
        <section className="pb-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 text-sm border rounded-full text-muted-foreground bg-muted">
                        <Award className="w-4 h-4 text-primary" />
                        Trusted Industrial Solutions Since 1998
                    </div>

                    <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Premium Material Handling & {" "}
                        <span className="relative inline-block">
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-xl opacity-50" />
                            <span className="relative">Industrial Equipment</span>
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-muted-foreground">
                        Authorized distributors of world-class industrial tools and machinery with 25+ years of technical expertise
                    </p>

                    <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:justify-center">
                        <Button size="lg" className="rounded-full px-8 gap-2">
                            <PackageCheck className="w-5 h-5" />
                            Request Catalog
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-8 gap-2">
                            <Play className="w-5 h-5" />
                            Facility Tour
                        </Button>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <div className="p-4 border rounded-lg bg-muted/20">
                            <div className="text-2xl font-bold text-primary">25+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="p-4 border rounded-lg bg-muted/20">
                            <div className="text-2xl font-bold text-primary">500+</div>
                            <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                        </div>
                        <div className="p-4 border rounded-lg bg-muted/20">
                            <div className="text-2xl font-bold text-primary">ISO</div>
                            <div className="text-sm text-muted-foreground">9001:2015 Certified</div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 border rounded-xl bg-muted/10">
                        <Factory className="w-8 h-8 text-primary" />
                        <h3 className="mt-4 text-lg font-semibold">Material Handling Solutions</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Comprehensive range of industrial trolleys, racks, and storage systems
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl bg-muted/10">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                        <h3 className="mt-4 text-lg font-semibold">Quality Assurance</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Rigorous quality control processes and certified manufacturing standards
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl bg-muted/10">
                        <Users className="w-8 h-8 text-primary" />
                        <h3 className="mt-4 text-lg font-semibold">Client-Centric Service</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Custom solutions and dedicated technical support for enterprise needs
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
