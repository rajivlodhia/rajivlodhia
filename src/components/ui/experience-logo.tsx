import type { NextComponentType, NextPageContext } from 'next'
import Image from 'next/image'

type Props = {
    src: string
    alt: string
    title: string
}

const ExperienceLogo: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    return (
        <span className="flex flex-col items-center">
            <Image
                className="grayscale brightness-0 invert h-32 object-contain w-auto max-w-24"
                src={props.src}
                alt={props.alt}
                width={96}
                height={96}
            />
            <p>{props.title}</p>
        </span>
    )
}

export default ExperienceLogo
