import React, { Component } from 'react';
import './Landing.css';
import Header from '../../uiComponent/header/Header';

import { Container } from "react-bootstrap";
import SimpleSlider from '../../uiComponent/Slider/Slider';





function Testimonial() {
    return (
      <div className="testimonial-section">
        <Container>
          <div className="testimonial-title">
            <h1>Testimonial</h1>
          </div>
          <div className="slider-section">
            <SimpleSlider />
          </div>
        </Container>
      </div>
  
    )
  }






export default class Landing extends Component {
    render() {
      return (
        <div>
          <div className='header-section'>
            <Header />
            <HeaderSection />
          </div>
          <HowItWorks />
          <OurPartners />
          <WhyUse />
          <PricingSection />
          <DayProcessSection />
          <ProvideSection />
          <GroupCommunitySection />
          <FaqSection />
          <Testimonial />
          <Contact />
          <Question />
        </div>
      )
    }
  }
  