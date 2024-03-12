'use client'

import type { NextComponentType, NextPageContext } from 'next'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import NavLink from '../ui/nav-link'
import { AnimatePresence, motion } from 'framer-motion'
import NameHome from '../ui/name-home'

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
            <Button size="icon" onClick={toggleMenu} className="rounded-full bg-white text-black w-8 h-8">
                <Menu className="w-4 h-4" />
            </Button>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed w-screen h-screen left-0 top-0 bg-gradient-to-b from-slate-900/85 to-slate-950/85 flex flex-col justify-center items-center gap-14 backdrop-blur-lg"
                    >
                        <Button
                            size="icon"
                            onClick={toggleMenu}
                            className="w-8 h-8 absolute top-0 right-0 m-6 rounded-full bg-white text-black"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            <NameHome />
                        </motion.div>
                        <motion.ol
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ delay: 0.6, duration: 0.4, staggerChildren: 0.5 }}
                            className="flex flex-col gap-10 items-center"
                        >
                            <motion.li key="about">
                                <NavLink href="#about" onClick={toggleMenu}>
                                    About
                                </NavLink>
                            </motion.li>
                            <motion.li key="projects">
                                <NavLink href="#projects" onClick={toggleMenu}>
                                    Projects
                                </NavLink>
                            </motion.li>
                            <motion.li key="experience">
                                <NavLink href="#experience" onClick={toggleMenu}>
                                    Experience
                                </NavLink>
                            </motion.li>
                            <motion.li key="contact">
                                <NavLink href="#contact" onClick={toggleMenu}>
                                    Contact Me
                                </NavLink>
                            </motion.li>
                        </motion.ol>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileMenu
