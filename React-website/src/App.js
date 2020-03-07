import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './style/bootstrap.min.css';
import ProductSlider from './component/Productslider/ProductSlider';
import Header from './component/header/Header';
import ControlledCarousel from './component/MainSlider/Coverslider';
import FooterBar from './component/Footer/footer';
import SlidingBox from './component/Box/slidingbox'




export default class App extends Component{
  render(){
    return(
      <div className="mainpage">
      <Header/>
      <ControlledCarousel/>
      <ProductSlider />
      <SlidingBox/>
      <FooterBar/>
      </div>
    )
  }
}
      
     
    

