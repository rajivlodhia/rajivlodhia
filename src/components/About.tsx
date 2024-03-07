import type { NextComponentType, NextPageContext } from 'next'
import Heading2 from './ui/heading-2'

const About: NextComponentType<NextPageContext> = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 my-auto items-center">
            <Heading2>About Me</Heading2>
            <p className="text-lg">
                I am a full-stack web developer with a passion for creating beautiful and functional user experiences. I
                have a strong background in design and user experience, and I am always looking for new challenges and
                opportunities to learn and grow.
            </p>
        </div>
    )
}

export default About
