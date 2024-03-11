import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'

type Props = {
    children: React.ReactNode
    className?: string
} & LinkProps

const _Link = (props: Props) => {
    return <Link className={cn('hover:text-rose-300 transition-colors', props.className)} {...props} />
}

export default _Link
