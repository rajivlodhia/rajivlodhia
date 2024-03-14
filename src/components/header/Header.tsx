'use client'

import type { NextComponentType, NextPageContext } from 'next'
import NavLink from '../ui/nav-link'
import MobileMenu from './MobileMenu'
import NameHome from '../ui/name-home'
import { useEffect, useState } from 'react'

type Props = {
    children?: React.ReactNode
    className?: string
}

const Header: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    // get the scroll position to only show the <NameHome /> when the user has scrolled past the hero section
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className="text-lg fixed left-0 w-full backdrop-blur-lg z-50 bg-slate-950/40">
            <div className="flex p-6 max-w-7xl mx-auto">
                {scrollPosition > 280 && <NameHome className="" />}
                <nav className="hidden sm:flex flex-row gap-5 ml-auto">
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#contact">Contact Me</NavLink>
                </nav>
                <MobileMenu className="block sm:hidden" />
            </div>
        </header>
    )
}

export default Header
