import React from "react";
import Slider from "react-slick";
import './Slider.css';

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        return (

            <Slider {...settings}>
                <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src="assets/images/testimonial.png"  alt="" />
                        <p>"Really good. Since I invested in ppsolver I made over 100,000 dollars profits. Nice work on your paynext. I would be lost without paynext."</p>
                        <h1>Connor M.</h1>
                        <img src="assets/images/user.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src="assets/images/testimonial.png"  alt=""/>
                        <p>"Really good. Since I invested in ppsolver I made over 100,000 dollars profits. Nice work on your paynext. I would be lost without paynext."</p>
                        <h1>Connor M.</h1>
                        <img src="assets/images/user.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src="assets/images/testimonial.png" alt="" />
                        <p>"Really good. Since I invested in ppsolver I made over 100,000 dollars profits. Nice work on your paynext. I would be lost without paynext."</p>
                        <h1>Connor M.</h1>
                        <img src="assets/images/user.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src="assets/images/testimonial.png"  alt=""/>
                        <p>"Really good. Since I invested in ppsolver I made over 100,000 dollars profits. Nice work on your paynext. I would be lost without paynext."</p>
                        <h1>Connor M.</h1>
                        <img src="assets/images/user.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src="assets/images/testimonial.png" alt="" />
                        <p>"Really good. Since I invested in ppsolver I made over 100,000 dollars profits. Nice work on your paynext. I would be lost without paynext."</p>
                        <h1>Connor M.</h1>
                        <img src="assets/images/user.png"alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src="assets/images/testimonial.png" alt="" />
                        <p>"Really good. Since I invested in ppsolver I made over 100,000 dollars profits. Nice work on your paynext. I would be lost without paynext."</p>
                        <h1>Connor M.</h1>
                        <img src="assets/images/user.png" alt=""/>
                    </div>
                </div>


            </Slider>
        );
    }
}

export default SimpleSlider;