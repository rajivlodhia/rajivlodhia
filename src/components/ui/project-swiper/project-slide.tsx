'use client'

import type { NextComponentType, NextPageContext } from 'next'
import Image from 'next/image'

type Props = {
    image_src: string
    image_alt: string
    title: string
    description: string
}

const ProjectSlide: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    return (
        <>
            <Image
                src={props.image_src}
                alt={props.image_alt}
                width="500"
                height="500"
                className="rounded-[32px] border-4 border-slate-800 w-auto h-auto"
            />
            <article className="mt-4 space-y-2">
                <h3
                    className="text-xl font-bold"
                    data-swiper-parallax-duration="500"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-x="-100"
                >
                    {props.title}
                </h3>
                <p data-swiper-parallax-duration="800" data-swiper-parallax-opacity="0" data-swiper-parallax-x="-100">
                    {props.description}
                </p>
            </article>
        </>
    )
}

export default ProjectSlide
