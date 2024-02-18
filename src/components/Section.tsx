import { cn } from '@/lib/utils'
import type { NextComponentType, NextPageContext } from 'next'

type Props = {
    id: string
    children: React.ReactNode
    className?: string
}

const Section: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    return (
        <section
            id={props.id}
            className={cn('min-h-screen py-10', props.className)}
            style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
        >
            {props.children}
        </section>
    )
}

export default Section
