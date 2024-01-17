import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Rajiv Lodhia',
    description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn(inter.className, 'transition')}>
                <header className="py-6 max-w-7xl mx-auto flex justify-between">
                    <Link href="/">Rajiv Lodhia</Link>
                    <nav className="flex flex-row gap-5">
                        <Link href="#about" className="hover:opacity-80">
                            About
                        </Link>
                        <Link href="#contact" className="hover:opacity-80">
                            Contact Me
                        </Link>
                        <Link href="#projects" className="hover:opacity-80">
                            Projects
                        </Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    )
}
