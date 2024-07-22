'use client';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        title: 'Slide 1',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        title: 'Slide 2',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        title: 'Slide 3',
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        title: 'Slide 4',
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        title: 'Slide 5',
    },
];

export const ImageCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full h-full m-auto relative">
            <div
                style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                }}
                className="w-full h-full rounded-xl bg-cover bg-center duration-500 "
            ></div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <IconButton
                    onClick={prevSlide}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className="text-orange-500 m-0"
                >
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton
                    onClick={nextSlide}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className="text-orange-500 m-0"
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>
        </div>
    );
};
