import React, { Component } from "react";
import '../../App.css';
import '../../style/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

class FooterBar extends Component {
    
    render(){

return (
        <footer className="footer">
        <div className="container">
            <div className="row text-center d-flex justify-content-center pt-5 mb-3">
                <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="footer-link">About us</a>
                </h6>
            </div>
                <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="footer-link">Products</a>
                </h6>
            </div>
                <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="footer-link">Awards</a>
                </h6>
            </div>
                <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="footer-link">Help</a>
                </h6>
            </div>
                <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="footer-link">Contact</a>
                </h6>
            </div>
            </div>
            <hr className="rgba-white-light"/>
            <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                <div className="footerText">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                </p>
            </div>
            </div>
            <hr className="clearfix d-md-none rgba-white-light" ></hr>
            <div className="row pb-3">
                <div className="col-md-12">
                    <div className="icon-bar">

                        <a className="icon-link" href="#home">
                            <i className="fa fa-facebook-f fa-lg white-text mr-4"> </i>
                            </a>
                            
                            <a className="icon-link" href="#home">
                                <i className="fa fa-twitter fa-lg white-text mr-4"> </i>
                            </a>
                        
                            <a className="icon-link" href="#home">
                                <i className="fa fa-google-plus-g fa-lg white-text mr-4"> </i>
                            </a>
                        
                            <a className="icon-link" href="#home">
                                <i className="fa fa-linkedin fa-lg white-text mr-4"> </i>
                            </a>
                
                            <a className="icon-link" href="#home">
                                <i className="fa fa-instagram fa-lg white-text mr-4"> </i>
                            </a>

                            <a className="icon-link" href="#home">
                                <i className="fa fa-pinterest fa-lg white-text mr-4"> </i>
                             </a>

                </div>
          </div>
     </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/" className="footer-link"> MDBootstrap.com</a>
                </div>
             </div>
         </footer>
        )
    }
}

export default FooterBar;


