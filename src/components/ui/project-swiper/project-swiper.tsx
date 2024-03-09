'use client'

import type { NextComponentType, NextPageContext } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css/bundle'
import ProjectSlide from './project-slide'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ProjectSwiper: NextComponentType<NextPageContext> = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            speed={850}
            loop={true}
            navigation={{ enabled: true, nextEl: '.next', prevEl: '.prev' }}
            pagination={{
                clickable: true,
                el: '.swiper-pagination-custom',
                bulletClass: 'swiper-pagination-bullet !bg-slate-100',
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            parallax={true}
            className="w-full h-auto"
        >
            <SwiperSlide>
                <ProjectSlide
                    image_src="/projects/Project-Chxngelog.jpg"
                    image_alt="Chxngelog Project"
                    title="Chxngelog.com"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                {/* <Image
                    src="/projects/Project-Chxngelog.jpg"
                    alt="Chxngelog Project"
                    width="500"
                    height="500"
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
            <div className="flex justify-between items-center mt-2">
                <span className="swiper-pagination-custom relative mt-4 flex flex-row gap-1"></span>
                <span className="flex flex-row">
                    <div className="prev">
                        <ChevronLeft
                            size={30}
                            className="hover:scale-125 transition-all text-slate-400 hover:text-slate-300"
                        />
                    </div>
                    <div className="next">
                        <ChevronRight
                            size={30}
                            className="hover:scale-125 transition-all text-slate-400 hover:text-slate-300"
                        />
                    </div>
                </span>
            </div>
        </Swiper>
    )
}

export default ProjectSwiper
