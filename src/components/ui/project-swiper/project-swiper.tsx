'use client'

import type { NextComponentType, NextPageContext } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css/bundle'
import ProjectSlide from './project-slide'

const ProjectSwiper: NextComponentType<NextPageContext> = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-auto"
        >
            <SwiperSlide>
                <ProjectSlide
                    image_src="/projects/Project-Chxngelog.jpg"
                    image_alt="Chxngelog Project"
                    title="Chxngelog.com"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectSlide
                    image_src="/projects/Project-KeepGoing.jpg"
                    image_alt="KeepGoing Project"
                    title="Keep Going"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectSlide
                    image_src="/projects/Project-PawifyAI.jpg"
                    image_alt="PawifyAI Project"
                    title="Pawify AI"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectSlide
                    image_src="/projects/Project-ReviewHandout.jpg"
                    image_alt="Review Handout Project"
                    title="Review Handout"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default ProjectSwiper
