'use client'

import type { NextComponentType, NextPageContext } from 'next'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type Props = {
    className?: string
}

const MobileMenu: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={cn('', props.className)}>
            <Button size="icon" onClick={toggleMenu}>
                <Menu />
            </Button>
            {isMenuOpen && <div className="fixed w-screen h-screen bg-black"></div>}
        </div>
    )
}

export default MobileMenu
