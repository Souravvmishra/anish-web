// BottomBar.tsx
import { Button } from "@/components/ui/button"
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export const BottomBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-2">
                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 text-foreground">
                            <Phone className="w-4 h-4 text-primary" />
                            <a
                                href="tel:+916512283633"
                                className="transition-colors hover:text-muted-foreground"
                            >
                                +91 65122 83633
                            </a>
                        </div>

                        <div className="flex items-center gap-2 text-foreground">
                            <Phone className="w-4 h-4 text-primary" />
                            <a
                                href="tel:+919835155006"
                                className="transition-colors hover:text-muted-foreground"
                            >
                                +91 98351 55006
                            </a>
                        </div>

                        <div className="h-4 border-l border-border" />

                        <div className="flex items-center gap-2 text-foreground">
                            <Mail className="w-4 h-4 text-primary" />
                            <a
                                href="mailto:anishent.ranchi@gmail.com"
                                className="transition-colors hover:text-muted-foreground"
                            >
                                anishent.ranchi@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-accent"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-2 w-2 text-muted-foreground" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-accent"
                            aria-label="Twitter"
                        >
                            <Twitter className="h-2 w-2 text-muted-foreground" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-accent"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-2 w-2 text-muted-foreground" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-accent"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-2 w-2 text-muted-foreground" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
