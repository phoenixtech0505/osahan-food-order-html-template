import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container} from 'react-bootstrap';
import Icofont from 'react-icofont';
import CartDropdownItem from './cart/CartDropdownItem';

class TrackOrder extends React.Component {

	render() {
    	return (
    		<section className="section bg-white osahan-track-order-page position-relative">
	         <iframe title="Address" className="position-absolute" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13696.650704896498!2d75.82434255!3d30.8821099!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1555184720550!5m2!1sen!2sin" width="100%" height="676" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
	         <Container className="pt-5 pb-5">
	            <Row className="d-flex align-items-center">
	               <Col md={6} className="text-center pb-4">
	                  <div className="osahan-point mx-auto"></div>
	               </Col>
	               <Col md={6}>
	                  <div className="bg-white p-4 shadow-lg mb-2">
	                     <div className="mb-2"><small>Order #25102589748<Link className="float-right font-weight-bold" to="#"><Icofont icon="headphone-alt"/> HELP</Link></small></div>
	                     <h6 className="mb-1 mt-1">
	                     	<Link to="/detail" className="text-black">Spice Hut Restaurant
	                        </Link>
	                     </h6>
	                     <p className="text-gray mb-0"><Icofont icon="clock-time"/> 04:19 PM | 8 Items | $314</p>
	                  </div>
	                  <div className="bg-white p-4 shadow-lg">
	                     <div className="osahan-track-order-detail po">
	                        <h5 className="mt-0 mb-3">Order Details</h5>
	                        <Row>
	                           <Col md={5}>
	                              <small>FROM</small>
	                              <h6 className="mb-1 mt-1"><Link to="/detail" className="text-black"><Icofont icon="food-cart"/> Spice Hut Restaurant
	                                 </Link>
	                              </h6>
	                              <p className="text-gray mb-5">2036, NEW YORK</p>
	                              <small>DELIVER TO</small>
	                              <h6 className="mb-1 mt-1"><span className="text-black"><Icofont icon="map-pins"/> Other
	                                 </span>
	                              </h6>
	                              <p className="text-gray mb-0">291, Jawaddi Kalan, Ludhiana, Punjab 141002, India
	                              </p>
	                           </Col>
	                           <Col md={7}>
	                                <div className="mb-2"><small><Icofont icon="list"/> 4 ITEMS</small></div>

				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Chicken Tikka Sub 12" (30 cm) x 1'
				                     	price='$314'
				                    />
				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Corn &amp; Peas Salad x 1'
				                     	price='$209'
				                    />
				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Veg Seekh Sub 6" (15 cm) x 1'
				                     	price='$133'
				                    />
				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Chicken Tikka Sub 12" (30 cm) x 1'
				                     	price='$314'
				                    />
				                  <hr />
	                              <p className="mb-0 font-weight-bold text-black">TOTAL BILL  <span className="float-right text-secondary">$209</span></p>
	                              <p className="mb-0 text-info"><small>Paid via Credit/Debit card
	                                 <span className="float-right text-danger">$620 OFF</span></small>
	                              </p>
	                           </Col>
	                        </Row>
	                     </div>
	                  </div>
	                  <div className="bg-white p-4 shadow-lg mt-2">
	                     <Row className="text-center">
	                        <Col>
	                        	<Icofont icon="tasks" className="icofont-3x text-info"/>
	                           <p className="mt-1 font-weight-bold text-dark mb-0">Order Received</p>
	                           <small className="text-info mb-0">NOW</small>
	                        </Col>
	                        <Col>
	                        	<Icofont icon="check-circled" className="icofont-3x text-success"/>
	                           <p className="mt-1 font-weight-bold text-dark mb-0">Order Confirmed</p>
	                           <small className="text-success mb-0">NEXT</small>
	                        </Col>
	                        <Col>
	                        	<Icofont icon="delivery-time" className="icofont-3x text-primary"/>
	                           <p className="mt-1 font-weight-bold text-dark mb-0">Order Picked Up</p>
	                           <small className="text-primary mb-0">LATER (ET : 30min)</small>
	                        </Col>
	                     </Row>
	                  </div>
	               </Col>
	            </Row>
	         </Container>
	      </section>
    	);
    }
}


export default TrackOrder;