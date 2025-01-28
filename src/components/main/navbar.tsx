"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from 'next/link'

const useScrollTrigger = (threshold = 100) => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > threshold)

        const handleScrollThrottled = () => {
            let ticking = false
            return () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        handleScroll()
                        ticking = false
                    })
                    ticking = true
                }
            }
        }

        const scrollHandler = handleScrollThrottled()
        window.addEventListener('scroll', scrollHandler, { passive: true })
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [threshold])

    return isScrolled
}

export const Navbar = () => {
    const isScrolled = useScrollTrigger(50)
    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products-we-deal' },
        { name: 'Brands', href: '/brands-we-deal' },
        { name: 'Clients', href: '/clients' },
        { name: 'Awards', href: '/awards' },
        { name: 'Contact', href: '/contact-anish-enterprises' }
    ]

    return (
        <header className={`fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b transition-all duration-300 ${isScrolled ? 'py-3 shadow-sm' : 'py-6'} ${isScrolled ? 'border-border/50' : 'border-transparent'}`}>
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between gap-4">
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
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground' : 'text-muted-foreground'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-2">
                        <Link href="/login">
                            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                                Customer Login
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button>
                                Sign up
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
                            <div className="grid gap-4 p-6">
                                <div className="absolute top-4 right-4">
                                    <SheetTrigger asChild>
                                        <Button variant="ghost" size="icon" className="text-foreground">
                                            <X className="h-6 w-6" />
                                            <span className="sr-only">Close menu</span>
                                        </Button>
                                    </SheetTrigger>
                                </div>

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
