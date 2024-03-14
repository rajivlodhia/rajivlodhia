'use client'

import { useHandleScrollToAnchor } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'

type Props = {
    children: React.ReactNode
    onClick?: () => void
    className?: string
} & LinkProps

const NavLink = (props: Props) => {
    return (
        <Link
            className={cn('hover:text-rose-300 transition-colors', props.className)}
            onClick={useHandleScrollToAnchor}
            {...props}
        />
    )
}

export default NavLink
