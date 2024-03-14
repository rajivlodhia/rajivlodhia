'use client'

import { useScrollToTop } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import type { NextComponentType, NextPageContext } from 'next'
import Link from 'next/link'

type Props = {
    className?: string
}

const NameHome: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    return (
        <Link
            href="#"
            className={cn('text-rose-300 font-bold tracking-wide animated-underline', props.className)}
            onClick={useScrollToTop}
        >
            Rajiv Lodhia
        </Link>
    )
}

export default NameHome
