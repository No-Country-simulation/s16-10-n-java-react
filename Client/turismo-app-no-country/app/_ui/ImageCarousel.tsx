'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        image: '/images/carrusel1.jpg',
        title: 'Slide 1',
    },
    {
        id: 2,
        image: '/images/carrusel2.jpg',
        title: 'Slide 2',
    },
    {
        id: 3,
        image: '/images/carrusel3.jpg',
        title: 'Slide 3',
    },

    // {
    //     id: 2,
    //     image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    //     title: 'Slide 2',
    // },
    // {
    //     id: 3,
    //     image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    //     title: 'Slide 3',
    // },
    // {
    //     id: 4,
    //     image: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    //     title: 'Slide 4',
    // },
    // {
    //     id: 5,
    //     image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    //     title: 'Slide 5',
    // },
];

export const ImageCarousel = () => {
    return (
        <>
            <div className="max-w-[1400px] h-full w-full ">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="MySwiper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <Image
                                src={slide.image}
                                alt="image"
                                width={1400}
                                height={600}
                                className="w-full sm:h-60 h-40 object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};
