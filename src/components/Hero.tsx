import type { NextComponentType, NextPageContext } from 'next'
import Heading1 from './ui/header-1'
import Image from 'next/image'
import NavLink from './ui/nav-link'
import Header from './header/Header'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Props {}

const Hero: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    return (
        <>
            <Header />
            <div className="flex flex-col md:flex-row items-center gap-10 md:my-auto mt-10">
                <div>
                    <Heading1 className="mb-4">Full Stack Developer</Heading1>
                    <p className="text-lg mb-8">
                        My name is Rajiv. I love writing code, building software and solving problems with a modern
                        touch. Learning and applying new tech to old problems has got to be one my favourite parts of
                        this industry.
                    </p>
                    <Link href="#about" className="group/link flex flex-row items-center text-rose-300 w-fit">
                        About Me
                        <ChevronRight className="h-4 w-4 ml-2 mb-1 group-hover/link:rotate-90 transition-transform" />
                    </Link>
                </div>
                <Image
                    src="/ItsMe.jpg"
                    alt="It's Rajiv Lodhia"
                    width={500}
                    height={700}
                    priority
                    className="rounded-[32px] border-4 border-slate-800 w-auto h-auto lg:max-w-[500px]"
                />
            </div>
        </>
    )
}

export default Hero
