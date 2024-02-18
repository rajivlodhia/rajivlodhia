import type { NextComponentType, NextPageContext } from 'next'
import Heading1 from './ui/Heading1'
import Image from 'next/image'
import _Link from './ui/_Link'
import Header from './header/Header'

interface Props {}

const Hero: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    return (
        <>
            <Header />
            <div className="flex flex-col sm:flex-row items-center gap-10">
                <div>
                    <Heading1 className="mb-4">Full Stack Developer</Heading1>
                    <p className="text-lg">
                        My name is Rajiv, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                </div>
                <Image
                    src="/ItsMe.jpg"
                    alt="It's Rajiv Lodhia"
                    width={500}
                    height={700}
                    priority
                    className="rounded-[32px] border-4 border-slate-800 w-auto h-auto max-w-[500px]"
                />
            </div>
        </>
    )
}

export default Hero
