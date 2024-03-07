import { cn } from '@/lib/utils'
import type { NextComponentType, NextPageContext } from 'next'

type Props = {
    children: React.ReactNode
    className?: string
}

const Heading2: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    return <h2 className={cn('font-black text-4xl', props.className)}>{props.children}</h2>
}

export default Heading2
