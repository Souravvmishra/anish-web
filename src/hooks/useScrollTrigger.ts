import { useEffect, useState } from "react"

export const useScrollTrigger = (threshold = 100) => {
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
