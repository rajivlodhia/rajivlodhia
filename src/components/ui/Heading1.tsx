import { cn } from '@/lib/utils'
import type { NextComponentType, NextPageContext } from 'next'

interface Props {
    className?: string
    children: React.ReactNode
}

const Heading1: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    return <h1 className={cn('text-6xl font-black tracking-wide', props.className)}>{props.children}</h1>
}

export default Heading1
