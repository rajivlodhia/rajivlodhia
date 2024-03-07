'use client'

import type { NextComponentType, NextPageContext } from 'next'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import _Link from '../ui/link'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

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
            <Button size="icon" onClick={toggleMenu} className="rounded-full bg-white text-black">
                <Menu />
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
                            className="absolute top-0 right-0 m-6 rounded-full bg-white text-black"
                        >
                            <X />
                        </Button>
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            <Link href="/" className="text-rose-300 font-bold tracking-wide hover:tracking-widest">
                                Rajiv Lodhia
                            </Link>
                        </motion.div>
                        <motion.ol
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ delay: 0.6, duration: 0.4, staggerChildren: 0.5 }}
                            className="flex flex-col gap-10 items-center"
                        >
                            <motion.li key="about">
                                <_Link href="#about" onClick={toggleMenu}>
                                    About
                                </_Link>
                            </motion.li>
                            <motion.li key="projects">
                                <_Link href="#projects" onClick={toggleMenu}>
                                    Projects
                                </_Link>
                            </motion.li>
                            <motion.li key="experience">
                                <_Link href="#experience" onClick={toggleMenu}>
                                    Experience
                                </_Link>
                            </motion.li>
                            <motion.li key="contact">
                                <_Link href="#contact" onClick={toggleMenu}>
                                    Contact Me
                                </_Link>
                            </motion.li>
                        </motion.ol>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileMenu
