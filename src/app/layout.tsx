import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'

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
                <BackgroundGradientAnimation
                    containerClassName="fixed -z-50"
                    gradientBackgroundStart="rgb(2, 6, 23)"
                    gradientBackgroundEnd="rgb(15, 23, 42)"
                    firstColor="8, 15, 31"
                    secondColor="18, 32, 64"
                    thirdColor="17, 52, 94"
                    fourthColor="51, 65, 85"
                    fifthColor="31, 53, 84"
                    pointerColor="24, 48, 82"
                />
            </body>
        </html>
    )
}
