'use client';
import RouteCard from './RouteCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { Pagination, FreeMode, Navigation } from 'swiper/modules';

interface RouteCardContainerProps {
    title: string;
}

export const RouteCardContainer: React.FC<RouteCardContainerProps> = ({
    title,
}) => {
    return (
        <div className="flex items-center justify-center max-w-[1400px] w-full h-full flex-col">
            <div className='flex justify-start w-full mx-4 '>
                <h1 className="font-semibold text-2xl mb-0 text-secondary ">
                    {title}
                </h1>
            </div>

            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                navigation
                modules={[Pagination, FreeMode, Navigation]}
                className="w-full mx-4"
            >
                <SwiperSlide>
                    <div className="mb-9">
                        <RouteCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-9">
                        <RouteCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-9">
                        <RouteCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-9">
                        <RouteCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-9">
                        <RouteCard />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
