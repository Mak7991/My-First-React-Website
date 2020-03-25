import React from 'react';
import '../../style/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import '../../App.css';



function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} className="coverslider">
            <Carousel.Item>
                <img
                    className="cover-img"
                    src={require('../../images/cover/cover4.jpg')} 
                    alt="First slide"
                />
                <Carousel.Caption className="coverTitle">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="cover-img"
                    src={require('../../images/cover/cover3.jpg')} 
                    alt="Second slide"
                />
                <Carousel.Caption className="coverTitle">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="cover-img"
                    src={require('../../images/cover/cover2.jpg')} 
                    alt="Third slide"
                />
                <Carousel.Caption className="coverTitle">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;