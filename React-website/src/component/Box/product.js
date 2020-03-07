import React, { Component } from "react";
import '../../App.css';
import '../../style/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class HoverBox extends Component{
  render(){
    return(
      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
						<div className="product product__style--3">
							<div className="hover-card">
								<a className="first__img" href="wishlist.html"><img src={require('../../images/Watches/7.jpg')} alt="hoverbox"/></a>
								<a className="anim-img" href="wishlist.html"><img src="../../images/logo.png"  alt="hoverbox"/></a>
								<div className="hot__box">
									<span className="hot-label">BEST SALER</span>
								</div>
							</div>
							<div className="product__content content--center content--center">
								<h4><a href="wishlist.html">Ghost</a></h4>
								<ul className="prize d-flex">
									<li>$50.00</li>
									<li className="old_prize">$35.00</li>
								</ul>
								<div className="anim-img">
									<div className="anim-img">
										<ul className="add_to_links">
											<li><a className="cart" href="cart.html"><i className="fa fa-facebook-f fa-lg white-text mr-4"></i></a></li>
											<li><a className="wishlist" href="wishlist.html"><i className="fa fa-facebook-f fa-lg white-text mr-4"></i></a></li>
											<li><a className="compare" href="wishlist.html"><i className="fa fa-facebook-f fa-lg white-text mr-4"></i></a></li>
											<li><a data-toggle="modal" title="Quick View" className="fa fa-facebook-f fa-lg white-text mr-4" href="#productmodal">
                        <i className="bi bi-search"></i></a></li>
										</ul>
									</div>
								</div>
								<div className="product__hover--content">
									<ul className="rating d-flex">
										<li className="on"><i className="fa fa-star-o"></i></li>
										<li className="on"><i className="fa fa-star-o"></i></li>
										<li className="on"><i className="fa fa-star-o"></i></li>
										<li><i className="fa fa-star-o"></i></li>
										<li><i className="fa fa-star-o"></i></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
    )
  }
}
export default HoverBox;


