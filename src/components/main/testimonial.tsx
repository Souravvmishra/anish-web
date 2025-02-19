// TestimonialsSection.tsx
import { Button } from "@/components/ui/button"
import { Quote, User, Building2, Handshake, BadgeCheck } from "lucide-react"
import Link from "next/link"

const testimonials = [
    {
        quote: "Anish Enterprises has been our reliable partner for material handling solutions since 2012. Their technical expertise and timely deliveries have significantly improved our production efficiency.",
        author: "Mr. Rajesh Agarwal",
        role: "Plant Manager, TATA Steel",
        icon: User,
    },
    {
        quote: "The quality of Hindware products through Anish Enterprises consistently exceeds expectations. Their customer-first approach makes them our first choice for sanitary solutions.",
        author: "Suman Constructions",
        role: "Real Estate Developer",
        icon: Building2,
    },
    {
        quote: "For 21+ years, Anish Enterprises has provided us with premium quality pipes and fittings. Their technical support team is always ready with innovative solutions.",
        author: "Omkar Industries",
        role: "Manufacturing Unit",
        icon: BadgeCheck,
    },
]

const trustBadges = [
    { value: "21+", label: "Years Experience" },
    { icon: Building2, label: "500+ Enterprises" },
    { icon: Handshake, label: "50+ Industry Partners" },
]

export const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-muted/50" id="testimonials">
            <div className="container px-4 mx-auto">
                {/* Header */}
                <div className="max-w-xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-full text-muted-foreground bg-background">
                        <Handshake className="w-4 h-4 text-primary" />
                        Trusted by 500+ Enterprises
                    </div>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        What Our Clients Say
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        Discover why leading industries in Eastern India choose Anish Enterprises as their preferred partner
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map(({ quote, author, role, icon: Icon }, index) => (
                        <div key={index} className="p-6 border rounded-xl bg-background">
                            <Quote className="w-6 h-6 rotate-180 text-muted-foreground" />
                            <p className="mt-4 text-muted-foreground">{quote}</p>
                            <div className="flex items-center gap-3 mt-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                                    <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold">{author}</p>
                                    <p className="text-sm text-muted-foreground">{role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-muted-foreground">
                    {trustBadges.map((badge, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                                {'value' in badge ? (
                                    <span className="text-sm font-bold text-primary">{badge.value}</span>
                                ) : (
                                    <badge.icon className="w-4 h-4 text-primary" />
                                )}
                            </div>
                            <span>{badge.label}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link href={'/clients-anish-enterprises'}>
                        <Button size="lg" className="rounded-full gap-2">
                            <User className="w-5 h-5" />
                            Join Our Satisfied Clients
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
