"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Menu, Phone } from "lucide-react"
import Link from 'next/link'
import { usePathname } from "next/navigation"

export const Navbar = () => {
    const isScrolled = useScrollTrigger(50)
    const currentPath = usePathname();
    const navItems = [
        { name: 'About', href: '/about-anish-enterprises' },
        { name: 'Products', href: '/products-we-deal' },
        { name: 'Brands', href: '/brands-we-deal' },
        { name: 'Clients', href: '/clients-anish-enterprises' },
        { name: 'Awards', href: '/awards-anish-enterprises' },
        { name: 'Contact', href: '/contact-anish-enterprises' }
    ]

    return (
        <header className={`fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b transition-all duration-300 ${isScrolled ? 'py-3 shadow-sm' : 'py-6'} ${isScrolled ? 'border-border/50' : 'border-transparent'}`}>
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between gap-4 ">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <img
                            className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`}
                            src="/anish-logo.jpg"
                            alt="Company CEO"
                        />
                        <span className={`${isScrolled ? 'text-xs' : 'text-sm'} font-semibold transition-all duration-300 text-foreground`}>
                            Anish <br /> Enterprises
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={`hidden lg:flex items-center transition-all gap-8`}>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-primary 
                                    ${isScrolled ? 'text-foreground' : 'text-muted-foreground'}
                                     ${currentPath === item.href ? 'text-primary' : ''}
                                `}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-2">
                        <Link href="tel:+919835155006">
                            <Button
                                variant={!isScrolled ? 'outline' : 'default'}
                            >
                                <Phone />
                                Call Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon" className="text-foreground">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[90vw] max-w-sm">
                            <SheetTitle className='sr-only'>
                                Anish
                            </SheetTitle>
                            <div className="grid gap-4">
                                <nav className="grid gap-2">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="px-4 py-2 rounded-md hover:bg-accent transition-colors text-foreground"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="flex flex-col gap-2 mt-4">
                                    <Link href="/login">
                                        <Button variant="outline" className="w-full">
                                            Customer Login
                                        </Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button className="w-full">
                                            Sign up
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
