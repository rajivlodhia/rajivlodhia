import type { NextComponentType, NextPageContext } from 'next'
import Image from 'next/image'

type Props = {
    src: string
    alt: string
    title: string
}

const ExperienceLogo: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    return (
        <span className="flex flex-col items-center group/experience-logo">
            <Image
                className="grayscale brightness-0 invert object-contain w-auto h-24 max-w-16 sm:max-w-24 sm:h-32"
                src={props.src}
                alt={props.alt}
                width={96}
                height={96}
            />
            <p className="group-hover/experience-logo:text-rose-300 transition-colors">{props.title}</p>
        </span>
    )
}

export default ExperienceLogo
