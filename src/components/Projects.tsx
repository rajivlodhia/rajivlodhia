import type { NextComponentType, NextPageContext } from 'next'
import Heading2 from './ui/heading-2'
import ProjectSwiper from './ui/project-swiper/project-swiper'

const Projects: NextComponentType<NextPageContext> = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 my-auto items-center">
            <Heading2>Recent Projects</Heading2>
            <ProjectSwiper />
        </div>
    )
}

export default Projects
