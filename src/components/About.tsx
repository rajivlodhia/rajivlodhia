import type { NextComponentType, NextPageContext } from 'next'
import Heading2 from './ui/heading-2'

const About: NextComponentType<NextPageContext> = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 my-auto items-center">
            <Heading2>About Me</Heading2>
            <article className="text-lg space-y-4">
                <p>
                    I am a software engineer with a strong background in web development. My passion for software
                    started way back in school when decided to try modding games, and I&apos;ve loved it ever since.
                    Fast forward to today and I still try my best to keep myself informed on modern software-related
                    trends and self-teach in my spare time.
                </p>
                <p>
                    I&apos;m always seeking new opportunities and challenges - eager to contribute to ambitious projects
                    alongside innovative, creative minds. In doing so, I hope use my unique skillset to make the world a
                    better place.
                </p>
            </article>
        </div>
    )
}

export default About
