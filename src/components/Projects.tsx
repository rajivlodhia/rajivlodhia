import type { NextComponentType, NextPageContext } from 'next'
import Heading2 from './ui/Heading2'

const Projects: NextComponentType<NextPageContext> = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 my-auto items-center">
            <Heading2>Projects</Heading2>
            <p className="text-lg"></p>
        </div>
    )
}

export default Projects
