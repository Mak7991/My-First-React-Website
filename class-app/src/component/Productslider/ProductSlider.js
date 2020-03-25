import React, { Component } from "react";
import Slider from "react-slick";
import './slider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "100%" }}
        onClick={onClick}
      />
    );
  }
  
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "100%"  }}
        onClick={onClick}
      />
    );
  }

export default class ProductSlider extends Component {
    render() {
        var settings = {
          nextArrow: <NextArrow/>,
          prevArrow: <PrevArrow/>,
          dots: true ,
          infinite: true,
          speed:800,
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 0,
          
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
                
              }
          ]
        };
    return (
    <div className="products">
        <div className="product">
          <h1 className="product-title">NEW <span>PRODUCTS</span></h1>
          <p className="discribe">There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>

        </div>
            <Slider {...settings} className="sliderbtn">
                    <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src={require('../../images/Watches/1.jpg')} alt="products"  />
                        <p>"Quarts"</p>
                        <h1>$40</h1>
                    </div>
                </div>
                    <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src={require('../../images/Watches/7.jpg')}  alt=""/>
                        <p>"Seiko"</p>
                        <h1>$40</h1>
                    </div>
                </div>
                    <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src={require('../../images/Watches/4.jpg')} alt="" />
                        <p>"Rolex"</p>
                        <h1>$35</h1>
                    </div>
                </div>
                <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src={require('../../images/Watches/2.jpg')}  alt=""/>
                        <p>"Hablot"</p>
                        <h1>$45</h1>
                    </div>
                </div>
                <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src={require('../../images/Watches/7.jpg')}  alt="" />
                        <p>"Tissot"</p>
                        <h1>$55</h1>
                    </div>
                </div>
                <div className="col-md-6 col-lg-12">
                    <div className="slider-card">
                        <img className="testimonial-img" src={require('../../images/Watches/4.jpg')}  alt="" />
                        <p>"Rolex"</p>
                        <h1>$50</h1>
                    </div>
                </div>


            </Slider>

            </div>
        );
    }
}

