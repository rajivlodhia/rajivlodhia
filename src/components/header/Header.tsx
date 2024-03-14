'use client'

import type { NextComponentType, NextPageContext } from 'next'
import NavLink from '../ui/nav-link'
import MobileMenu from './MobileMenu'
import NameHome from '../ui/name-home'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Props = {
    children?: React.ReactNode
    className?: string
}

const Header: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    // get the scroll position to only show the <NameHome /> when the user has scrolled past the hero section
    const [scrollPosition, setScrollPosition] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        // Get the current scroll position on page load.
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={cn('text-lg fixed left-0 w-full z-50 bg-slate-950/40', !isMenuOpen && 'backdrop-blur-lg')}>
            <div className="flex p-6 max-w-7xl mx-auto items-center">
                {scrollPosition > 280 && <NameHome className="mt-1 sm:mt-0" />}
                <nav className="hidden sm:flex flex-row gap-5 ml-auto">
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#contact">Contact Me</NavLink>
                </nav>
                <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
        </header>
    )
}

export default Header
