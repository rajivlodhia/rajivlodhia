'use client'

import type { NextComponentType, NextPageContext } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Parallax } from 'swiper/modules'
import ProjectSlide from './project-slide'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import 'swiper/css/bundle'

const ProjectSwiper: NextComponentType<NextPageContext> = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Parallax]}
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
                    description="A platform for developers to create, manage and share changelogs for their projects. The idea is to centralise the changelog writing process and remove the need to manually update changelogs in multiple places."
                    url="https://chxngelog.com"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectSlide
                    image_src="/projects/Project-KeepGoing.jpg"
                    image_alt="KeepGoing Project"
                    title="Keep Going"
                    description="A habit tracking web app that aims to help users build and maintain new, good habits. The app is designed to be simple, and encouraging for the user to keep their habits going with satisfying design and animations."
                    url="https://keepgoingapp.com"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectSlide
                    image_src="/projects/Project-PawifyAI.jpg"
                    image_alt="PawifyAI Project"
                    title="Pawify AI"
                    description="An e-commerce platform that sells custom AI-generated art of your pets, with an aim to upsell physical products such as canvases and posters. It allows users to upload sevaral photos of their pets and choose from a variety of art styles to generate their custom art."
                    url="https://pawifyai.com"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectSlide
                    image_src="/projects/Project-ReviewHandout.jpg"
                    image_alt="Review Handout Project"
                    title="Review Handout"
                    description="A web app for businesses to generate and manage handouts to give to their customers explaining how to leave a Google review. It's designed to be as simple as possible for business owners to manage and for customers to understand."
                    url="https://reviewhandout.com"
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
