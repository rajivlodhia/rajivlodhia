import type { NextComponentType, NextPageContext } from 'next'
import Link from 'next/link'

const NameHome: NextComponentType<NextPageContext> = () => {
    return (
        <Link href="/" className="text-rose-300 font-bold tracking-wide animated-underline">
            Rajiv Lodhia
        </Link>
    )
}

export default NameHome
