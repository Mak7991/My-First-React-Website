import React, { Component } from 'react';
import './Landing.css';
import Header from '../../uiComponent/header/Header';
import { Accordion, Card } from 'react-bootstrap'
import { Container } from "react-bootstrap";
import SimpleSlider from '../../uiComponent/Slider/Slider';
import { whyUsPsolver, dayProcessContent } from "../../../content/Content"
import UiSection from '../../uiComponent/uiSection/uiSection';


// const renderContent = (array, className) => {
//   if (array) {
//     return array.map((obj, index) => {
//       return (
//         <div key={index} className="repeated-section">
//           <img src={obj.icon} alt='icon' />
//           <h1>{obj.title}</h1>
//           <p>{obj.description}</p>
//         </div>
//       )
//     })
//   } else {
//     return null;
//   }
// }

function HeaderSection() {
  return (
    <Container>
      <div className="header-content">
        <p>The future of worldwide entrepreneurial payment processing is here</p>
        <button>Join Now</button>
      </div>
    </Container>
  )
}

function HowItWorks() {
  return (
    <div className="how-it-works">
      <Container>
        <div className="section-head">
          <h1>How It <span>Works</span></h1>
        </div>
        <div className="video-section">
          <iframe title=" video" width="100%" height="590" src="https://www.youtube.com/embed/F3Bar3rty_4" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </Container>
    </div>
  )

}

function OurPartners() {
  return (
    <div className="our-partners">
      <Container>
        <div className="partners-section">
          <div className="section-head">
            <h1>Our <span>Partners</span></h1>
          </div>
          <div className="partner-section">
            <div className="card">
              <img src="assets/images/logo-1-1.png" alt='icon' />
            </div>
            <div className="card">
              <img src="assets/images/logo-2.png" alt='icon' />
            </div>
            <div className="card">
              <img src="assets/images/logo-3.png" alt='icon' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WhyUse() {
  return (
    <div className="why-use">
      <Container>
        <UiSection
          title={whyUsPsolver.title}
          paragraph={whyUsPsolver.paragraph}
          data={whyUsPsolver.data} />
      </Container>
    </div>
  )
}

function PricingSection() {
  return (
    <div className="pricing-section">
      <Container>
        <div className="pricing-box">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="left-section">
                <h1>We’re Here Every Step of The Way</h1>
                <p>Our team provides a wide variety of services designed to help you get your business off the ground. When
            you work with us, you’ll experience the following benefits: </p>
                <div className="list-point">
                  <ul>
                    <li><a href="/">Education on various payment processing platforms, including Stripe, Payoneer, Paypal and Tide</a></li>
                    <li><a href="/">Recommendations of payment processing platform(s) that are right for your business</a></li>
                    <li><a href="/">Education and plans for setting up your company in the UK</a></li>
                    <li><a href="/">Education and plans for setting up a payment processing platform account</a></li>
                    <li><a href="/">Explanation of the relationship between your site or store and payment platform</a></li>
                    <li><a href="/">Recommendations and tips to avoid having your business flagged</a></li>
                    <li><a href="/">Recommendations for managing and maintaining your company and its banking systems</a></li>
                    <li><a href="/">Introductions to professionals like accountants and lawyers</a></li>
                    <li><a href="/">Professional advice</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-11 col-lg-5 col-md-offset-1">
              <div className="right-section">
                <div className="what-we-provide">
                  <iframe title="Campus Tour" width="450" height="228" src="https://www.youtube.com/embed/F3Bar3rty_4" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <h1>What we provide</h1>
                  <p>Are you ready to take the next step in your career? Are you ready to start your eCommerce adventure?
              Let’s take that next step today.</p>

                  <p>Fill out the form below to get started on the biggest journey of your life. After we receive your
                    application, we’ll carefully review it to see if we’d be a good working fit. Fill out the form today and
              take the next step in your career!</p>
                  <h1><del>$997</del> $697</h1>
                  <button>Get Started Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function DayProcessSection() {
  return (
    <div className="day-process-section">
      <Container>
        <UiSection
          className="day-process-content"
          title={dayProcessContent.title}
          paragraph={dayProcessContent.paragraph}
          data={dayProcessContent.data} />
      </Container>
    </div>

  )
}

function ProvideSection() {
  return (
    <div className="provide-section">
      <Container>
        <div className="provide-cards row">
          {/* <div className="row"> */}
            <div className="col-sm-12 col-md-12 col-lg-6 card">
              <img src="assets/images/psolver-small-logo.png" alt='icon' />
              <ul>
                <li>LTD certification in London</li>
                <li>Stripe, Paypal, Payoneer, Tide and Shopify payment account creation</li>
                <li>Access to legal and financial experts</li>
                <li>Custom-tailored business solutions</li>
                <li>Round-the-clock support</li>
                <li>Certified mail handling</li>
                <li>Personalised touches</li>
                <li>Access to ecommerce experts for advice</li>
                <li>VALUE: $2,000</li>
                <li>PRICE: $697</li>
              </ul>
              <h3>Winner !</h3>
              <button>Get Started Now</button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 card">
              <h1>Others</h1>
              <ul>
                <li>LLC or C-corp certification in USA</li>
                <li>USA payment account creation</li>
                <li>Access to accountants</li>
                <li>Access to generalized tech solutions</li>
                <li>Support</li>
                <li>Mail handling</li>
                <li>Personalised touches</li>
                <li>Access to ecommerce experts</li>
                <li>VALUE: $2,000</li>
                <li>PRICE: $697</li>
              </ul>
            </div>
          </div>
        {/* </div> */}
      </Container>
    </div>
  );
};

function GroupCommunitySection() {
  return (
    <div className="group-section">
      <Container>
        <div className="group-content">
          <h1>Group <span>Community</span></h1>
          <p>When you work with us, you’ll be put in touch with a group community. This provides you with the following benefits:</p>
        </div>
        <div className="group-list">
          <ul>
            <li>
              <p>
                <span className="li-title">Access to eCommerce entrepreneurs</span><br />
                <span className="li-body">Join the network that consistently continues attempting to illuminate the payment excursions issues</span></p>
            </li>
            <li>
              <p>
                <span className="li-title">Ability to ask questions</span><br />
                <span className="li-body">option: You can keep asking for some information about updates news with respect to stripe PayPal Payoneer moves tide and all other payment procedures.</span></p>
            </li>
            <li>
              <p>
                <span className="li-title">Opportunity to celebrate successes</span><br />
                <span className="li-body">Opportunity to profit by huge system intrigued by one point.</span></p>
            </li>
          </ul>
          <button>Join Community</button>
        </div>
      </Container>
    </div>
  )
}

function FaqSection() {
  // const decoratedOnClick = useAccordionToggle(eventKey, onClick);
  return (
    <div className="faq-section">
      <Container>
        <div className="faq-list">
          <div className="col-md-12 col-lg-12">
            <div className="row">
              <div className="faq-title">
              <h1>Your Questions Answered by <span>our team</span></h1>
              </div>
              <div className="col-md-12">
                <Accordion defaultActiveKey="0">
                  <div className="faq-card">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0">How will your services help me?</Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>We charge a fee of $500 USD for our services, but they’re valued at over $2,000. You can add additional services for a nominal fee. </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </div>
                  <div className="faq-card">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="1">How much are your services?</Accordion.Toggle>
                      <Accordion.Collapse className="body" eventKey="1">
                        <Card.Body>We charge a fee of $500 USD for our services, but they’re valued at over $2,000. You can add additional services for a nominal fee. </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </div>
                  <div className="faq-card">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="2">Do I need to worry about taxes?</Accordion.Toggle>
                      <Accordion.Collapse className="body" eventKey="2">
                        <Card.Body>Yes. The corporation tax in the UK for limited companies is 19%. We will put you in touch with accountants and lawyers to ensure that you’re able to pay these taxes.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </div>
                  <div className="faq-card">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="3">Can I have a bank account in the UK?</Accordion.Toggle>
                      <Accordion.Collapse className="body" eventKey="3">
                        <Card.Body>If you are not a resident, it will be hard to open a business account for non-residents in UK. If you have UK or EU residency you can but otherwise, it is an expensive process. Most of my customers using Stripe to Payoneer or TIDE  account (comes with a debit card) perfectly with no problem. But if you really would like to get proper UK Business Account we have a partner does that and fees is 1500 GBP (Super expensive).</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </div>
                  <div className="faq-card">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="4">Do I have to register for VAT?</Accordion.Toggle>
                      <Accordion.Collapse className="body" eventKey="4">
                        <Card.Body>You won’t be required to register for VAT because you’re just going to be drop shipping. If you would like to or are one of the few customers that will be required to register for VAT, we can help you secure such registration for a nominal fee. We’ll also introduce you to the right legal or financial professionals to help get it done.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

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

function Contact() {
  return (
    <div className="contact-section">
      <Container>
        <div className="contact-content">
          <h1>The great aim of education is not knowledge but action</h1>
          <button>Take Action Now</button>
        </div>
      </Container>
    </div>
  );
}

function Question() {
  return(
    <div className="question-section">
      <Container>
        <div className="question-content">
          <h1>Got more questions?</h1>
          <p>Contact us here or Message us on Facebook</p>
          <p>We speak English  French  Turkish </p>
          <button>Let's Meet</button>
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
