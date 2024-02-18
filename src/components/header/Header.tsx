import type { NextComponentType, NextPageContext } from 'next'
import Link from 'next/link'
import _Link from '../ui/_Link'
import MobileMenu from './MobileMenu'

type Props = {
    children?: React.ReactNode
    className?: string
}

const Header: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    return (
        <header className="p-6 md:px-0 w-full mx-auto flex justify-between text-lg">
            <Link href="/" className="text-rose-300 font-bold tracking-wide hover:tracking-widest">
                Rajiv Lodhia
            </Link>
            <nav className="hidden sm:flex flex-row gap-5">
                <_Link href="#about">About</_Link>
                <_Link href="#projects">Projects</_Link>
                <_Link href="#experience">Experience</_Link>
                <_Link href="#contact">Contact Me</_Link>
            </nav>
            <MobileMenu className="block sm:hidden" />
        </header>
    )
}

export default Header
