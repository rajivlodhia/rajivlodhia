'use client'

import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'

type Props = {
    children: React.ReactNode
    onClick?: () => void
    className?: string
} & LinkProps

const NavLink = (props: Props) => {
    const handleScrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        props.onClick?.()

        const href = e.currentTarget.getAttribute('href')
        if (!href) return
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Link
            className={cn('hover:text-rose-300 transition-colors', props.className)}
            onClick={handleScrollToAnchor}
            {...props}
        />
    )
}

export default NavLink
