import type { NextComponentType, NextPageContext } from 'next'
import Heading2 from './ui/heading-2'

const Contact: NextComponentType<NextPageContext> = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 my-auto items-center">
            <Heading2>Get In Touch</Heading2>
            <article>
                <p className="text-lg mb-8">
                    Got a new opportunity or exciting project?
                    <br />
                    Drop me an email or find me on{' '}
                    <a
                        className="text-rose-300 animated-underline inline after:h-[2px]"
                        href="https://www.linkedin.com/in/rajiv-lodhia"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                    .
                </p>

                <a
                    href="mailto:r_lodhia@hotmail.com"
                    className="text-rose-300 relative font-bold w-fit block animated-underline text-3xl sm:text-4xl"
                >
                    r_lodhia@hotmail.com
                </a>
            </article>
        </div>
    )
}

export default Contact
