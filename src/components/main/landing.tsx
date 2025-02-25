"use client"

// LandingPage.tsx
import sendEmail from "@/actions/send-email"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Award, Building2, Leaf, Loader2, MailCheck, PackageCheck, Play, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const EmailForm = () => {
    const [email, setEmail] = useState('')
    const { toast } = useToast()

    const SubmitButton = () => {
        const { pending } = useFormStatus()
        return (
            <Button
                type="submit"
                disabled={pending}
                className="w-full gap-2"
            >
                {pending ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <PackageCheck className="w-4 h-4" />
                        Get Catalog Now
                    </>
                )}
            </Button>
        )
    }

    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                    <MailCheck className="w-4 h-4" />
                    Get Product Catalog
                </DialogTitle>
                <DialogDescription>
                    Enter your work email and we&apos;ll send the full catalog instantly.
                </DialogDescription>
            </DialogHeader>

            <form
                action={async (formData) => {
                    const res = await sendEmail(
                        formData.get('email') as string,
                        'Anish Enterprises Product Catalog',
                        `Please find attached the latest product catalog.\n\nDownload link: [Catalog PDF]`,
                        `<p>Please find attached the latest product catalog.</p>
             <p><a href="#">Download Catalog PDF</a></p>`
                    )

                    if (res.error) {
                        toast({
                            title: "Delivery Failed",
                            description: "Couldn't send catalog. Please try again.",
                            variant: "destructive",
                        })
                    } else {
                        toast({
                            title: "Catalog Sent!",
                            description: "Check your email for the download link",
                        })
                        setEmail('')
                    }
                }}
                className="space-y-4"
            >
                <div className="grid gap-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <SubmitButton />
            </form>
        </DialogContent>
    )
}

export const LandingPage = () => {
    return (
        <section className="pb-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 text-sm border rounded-full text-muted-foreground bg-muted">
                        <Award className="w-4 h-4 text-primary" />
                        Trusted Industrial Solutions Since 2001
                    </div>

                    <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Premium Material Handling & {" "}
                        <span className="relative inline-block">
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-xl opacity-50" />
                            <span className="relative">Industrial Equipment</span>
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-muted-foreground">
                        Authorized distributors of world-class industrial tools and machinery with 21+ years of technical expertise
                    </p>

                    <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:justify-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="rounded-full px-8 gap-2">
                                    <PackageCheck className="w-5 h-5" />
                                    Request Catalog
                                </Button>
                            </DialogTrigger>
                            <EmailForm />
                        </Dialog>
                        <Link href={'/products-we-deal'}>
                            <Button variant="outline" size="lg" className="rounded-full px-8 gap-2">
                                <Play className="w-5 h-5" />
                                Facility Tour
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <div className="p-4 border rounded-lg bg-muted/20">
                            <div className="text-2xl font-bold text-primary">21+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="p-4 border rounded-lg bg-muted/20">
                            <div className="text-2xl font-bold text-primary">500+</div>
                            <div className="text-sm text-muted-foreground">Enterprises</div>
                        </div>
                        <div className="p-4 border rounded-lg bg-muted/20">
                            <div className="text-2xl font-bold text-primary">100+</div>
                            <div className="text-sm text-muted-foreground">Cities Presence</div>
                        </div>
                    </div>
                </div>

                {/* Updated Video Section with Two Videos */}
                <div className="mt-16 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Video */}
                        <div className="video-container">
                            <div className="rounded-xl overflow-hidden border shadow-lg aspect-video relative group">
                                <video
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="https://videos.pexels.com/video-files/7963177/7963177-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="secondary" size="sm" className="gap-2">
                                        <Play className="w-4 h-4" />
                                        Manufacturing Facility
                                    </Button>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-center text-muted-foreground">
                                Our state-of-the-art manufacturing facility
                            </p>
                        </div>

                        {/* Second Video */}
                        <div className="video-container">
                            <div className="rounded-xl overflow-hidden border shadow-lg aspect-video relative group">
                                <video
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="https://videos.pexels.com/video-files/7963177/7963177-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="secondary" size="sm" className="gap-2">
                                        <Play className="w-4 h-4" />
                                        Equipment Showcase
                                    </Button>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-center text-muted-foreground">
                                Explore our premium industrial equipment in action
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 border rounded-xl bg-muted/10">
                        <Building2 className="w-8 h-8 text-primary" />
                        <h3 className="mt-4 text-lg font-semibold">Real Estate Development</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Expert architectural design and development solutions for major real estate projects
                        </p>
                    </div>
                    <div className="p-6 border rounded-xl bg-muted/10">
                        <Leaf className="w-8 h-8 text-primary" />
                        <h3 className="mt-4 text-lg font-semibold">Sustainable Design</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Environmentally conscious development practices and sustainable enterprise solutions
                        </p>
                    </div>
                    <div className="p-6 border rounded-xl bg-muted/10">
                        <Users className="w-8 h-8 text-primary" />
                        <h3 className="mt-4 text-lg font-semibold">Client-Focused Architecture</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Collaborative architectural services tailored to client vision and requirements
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
