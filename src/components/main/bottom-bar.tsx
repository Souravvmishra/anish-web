// BottomBar.tsx
import { Button } from "@/components/ui/button"
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export const BottomBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border">
            <div className="container px-2 mx-auto sm:px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-2 sm:gap-4">
                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                        <div className="flex items-center gap-1 text-foreground">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            <a
                                href="tel:+916512283633"
                                className="transition-colors hover:text-muted-foreground"
                            >
                                +91 65122 83633
                            </a>
                        </div>

                        <div className="flex items-center gap-1 text-foreground">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            <a
                                href="tel:+919835155006"
                                className="transition-colors hover:text-muted-foreground"
                            >
                                +91 98351 55006
                            </a>
                        </div>

                        <div className="h-4 border-l border-border hidden xs:block" />

                        <div className="flex items-center gap-1 text-foreground">
                            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
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
                            className="rounded-full hover:bg-accent h-8 w-8 sm:h-10 sm:w-10"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-4 w-4 text-muted-foreground" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-accent h-8 w-8 sm:h-10 sm:w-10"
                            aria-label="Twitter"
                        >
                            <Twitter className="h-4 w-4 text-muted-foreground" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-accent h-8 w-8 sm:h-10 sm:w-10"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-4 w-4 text-muted-foreground" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-accent h-8 w-8 sm:h-10 sm:w-10"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-4 w-4 text-muted-foreground" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
