import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <div className={cn(
            "fixed bottom-8 right-8 z-50 transition-all duration-500 transform",
            isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-12 opacity-0 pointer-events-none"
        )}>
            <Button
                onClick={scrollToTop}
                size="icon"
                className="h-14 w-14 rounded-2xl bg-navy text-white shadow-premium glass-premium border-white/10 hover:bg-accent-orange hover:shadow-orange-500/20 active:scale-95 transition-all duration-300 edge-highlight group"
                aria-label="Scroll to top"
            >
                <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
        </div>
    )
}
