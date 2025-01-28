import { MapPin, Mail, Phone, ShieldCheck, ClipboardList, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const Footer = () => {
    return (
        <footer className="bg-background border-t">
            <div className="container max-w-7xl px-4 mx-auto py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img
                                className={`transition-all duration-300 h-12`}
                                src="/anish-logo.jpg"
                                alt="Company CEO"
                            />
                            <div>
                                <h2 className="text-xl font-bold">Anish Enterprises</h2>
                                <p className="text-sm text-muted-foreground">Material Handling Specialists</p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Trusted partners in industrial solutions since 2005, serving Maharashtra&apos;s manufacturing sector.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            <span>ISO 9001:2015 Certified</span>
                        </div>
                    </div>

                    {/* Products & Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Our Expertise</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Button variant="link" className="px-0 text-muted-foreground">Industrial Trolleys</Button></li>
                            <li><Button variant="link" className="px-0 text-muted-foreground">Storage Racks</Button></li>
                            <li><Button variant="link" className="px-0 text-muted-foreground">Material Handling</Button></li>
                            <li><Button variant="link" className="px-0 text-muted-foreground">Factory Equipment</Button></li>
                            <li><Button variant="link" className="px-0 text-muted-foreground">Custom Solutions</Button></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Details</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1 text-primary" />
                                <div>
                                    Harit Bhawan, <br /> 
                                    Beside Vishal Mega Mart, <br /> 
                                    Opp. Shakti Petrol Pump, <br /> 
                                    Harmu Road, <br /> 
                                    Ranchi-834001, Jharkhand. 
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" />
                                <Button variant="link" className="px-0 text-muted-foreground">
                                    anishent.ranchi@gmail.com
                                </Button>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary" />
                                <div className="space-y-1">
                                    <Button variant="link" className="px-0 text-muted-foreground">+91 65122 83633</Button>
                                    <Button variant="link" className="px-0 text-muted-foreground">+91 98351 55006</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certification & Social */}
                    <div className="space-y-4">
                        <div className="p-4 border rounded-lg bg-muted/20">
                            <div className="flex items-center gap-2">
                                <ClipboardList className="w-6 h-6 text-primary" />
                                <h3 className="text-lg font-semibold">Certifications</h3>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                MSME Registered<br />
                                GSTIN: 27AAWFA3648J1ZK
                            </p>
                        </div>

                        <Separator className="my-4" />

                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold">Follow Us</h3>
                            <div className="flex gap-4">
                                <Button variant="ghost" size="icon">
                                    <Facebook className="h-2 w-2 text-muted-foreground" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Twitter className="h-2 w-2 text-muted-foreground" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Linkedin className="h-2 w-2 text-muted-foreground" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Legal & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex gap-4">
                        <Button variant="link" className="text-muted-foreground">
                            About Us
                        </Button>
                        <Button variant="link" className="text-muted-foreground">
                            Privacy Policy
                        </Button>
                        <Button variant="link" className="text-muted-foreground">
                            Terms of Use
                        </Button>
                    </div>
                    <p className="text-center">© {new Date().getFullYear()} Anish Enterprises. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
