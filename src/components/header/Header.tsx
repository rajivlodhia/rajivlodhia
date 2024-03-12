import type { NextComponentType, NextPageContext } from 'next'
import NavLink from '../ui/nav-link'
import MobileMenu from './MobileMenu'
import NameHome from '../ui/name-home'

type Props = {
    children?: React.ReactNode
    className?: string
}

const Header: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    return (
        <header className="py-6 md:px-0 w-full mx-auto flex justify-between text-lg items-center sm:items-start">
            <NameHome />
            <nav className="hidden sm:flex flex-row gap-5">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#contact">Contact Me</NavLink>
            </nav>
            <MobileMenu className="block sm:hidden" />
        </header>
    )
}

export default Header
