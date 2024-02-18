import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import _Link from '@/components/ui/_Link'

const font = League_Spartan({
    subsets: ['latin'],
    // weight: '400',
})

export const metadata: Metadata = {
    title: 'Rajiv Lodhia',
    description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn(font.className, 'min-h-screen bg-slate-900')} style={{ scrollSnapType: 'y mandatory' }}>
                {children}
            </body>
        </html>
    )
}
