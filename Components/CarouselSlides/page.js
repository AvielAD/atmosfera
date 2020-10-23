import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
} from 'reactstrap';
import Styles from './styles.module.css';

const Page = (props) => {
    const slidesRes = props.slides;

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slidesRes.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slidesRes.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = slidesRes.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.CarouselImages.url}
            >
                <div className={Styles.carouselImage}>
                        <img src={`https://api.atmosfera.la/${item.CarouselImages.url}`} 
                        alt={item.Title} width="100%" height="100%" />
                        <div className="container card-img-overlay d-flex flex-column justify-content-center align-items-center col-6" >
                        <p className="text-light h1">{item.Title}</p>
                        <p className="text-light text-center">{item.Subtitle}</p>
                        </div>
                </div>

            </CarouselItem>
        );
    });


    return (

        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="carousel-fade"
        >
                {slides}
        
        </Carousel>
    );

}

export default Page;