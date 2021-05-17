import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form,InputGroup,Button,Tab,Nav,ButtonToolbar,ToggleButton,ToggleButtonGroup,Image,OverlayTrigger,Tooltip} from 'react-bootstrap';
import ItemsCarousel from './common/ItemsCarousel';
import ChooseAddressCard from './common/ChooseAddressCard';
import CheckoutItem from './common/CheckoutItem';
import AddAddressModal from './modals/AddAddressModal';
import Icofont from 'react-icofont';

class Checkout extends React.Component {
	constructor(props, context) {
	    super(props, context);

	    this.state = {
      	  showAddressModal: false,
	    };
	}

    hideAddressModal = () => this.setState({ showAddressModal: false });
    getQty = ({id,quantity}) => {
    	//console.log(id);
    	//console.log(quantity);
	}

	render() {
    	return (
    		<section className="offer-dedicated-body mt-4 mb-4 pt-2 pb-2">
    		 <AddAddressModal show={this.state.showAddressModal} onHide={this.hideAddressModal}/>
	         <Container>
	            <Row>
	               <Col md={8}>
	                  <div className="offer-dedicated-body-left">
	                     <div className="bg-white rounded shadow-sm p-4 mb-4">
	                        <h6 className="mb-3">You may also like</h6>
	                        <ItemsCarousel />
	                     </div>
						 <div className="pt-2"></div>
						 <div className="bg-white rounded shadow-sm p-4 mb-4">
	                        <h4 className="mb-1">Choose a delivery address</h4>
	                        <h6 className="mb-3 text-black-50">Multiple addresses in this location</h6>
	                        <Row>
	                           <Col md={6}>
				               	  <ChooseAddressCard 
				               	  	  boxclassName="border border-success"
									  title= 'Work'
									  icoIcon= 'briefcase'
									  iconclassName= 'icofont-3x'
									  address= 'NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana, Punjab 141002, India'
				               	  />
	                           </Col>
	                           <Col md={6}>
				               	  <ChooseAddressCard 
									  title= 'Work'
									  icoIcon= 'briefcase'
									  iconclassName= 'icofont-3x'
									  address= 'NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana, Punjab 141002, India'
				               	  />
	                           </Col>
	                           <Col md={6}>
				               	  <ChooseAddressCard 
									  title= 'Work'
									  icoIcon= 'briefcase'
									  iconclassName= 'icofont-3x'
									  address= 'NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana, Punjab 141002, India'
				               	  />
	                           </Col>
	                           <Col md={6}>
				               	  <ChooseAddressCard 
									  title= 'Work'
									  icoIcon= 'briefcase'
									  iconclassName= 'icofont-3x'
									  type="newAddress"
									  address= 'NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana, Punjab 141002, India'
									  onAddNewClick={() => this.setState({ showAddressModal: true })}
				               	  />
	                           </Col>
	                        </Row>
	                     </div>
						 <div className="pt-2"></div>
	                     <div className="bg-white rounded shadow-sm p-4 osahan-payment">
	                        <h4 className="mb-1">Choose payment method</h4>
	                        <h6 className="mb-3 text-black-50">Credit/Debit Cards</h6>
	                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
	                          <Row>
	                            <Col sm={4} className="pr-0">
	                              <Nav variant="pills" className="flex-column">
	                                  <Nav.Link eventKey="first"><Icofont icon="credit-card" /> Credit/Debit Cards</Nav.Link>
	                                  <Nav.Link eventKey="second"><Icofont icon="id-card" /> Food Cards</Nav.Link>
	                                  <Nav.Link eventKey="third"><Icofont icon="card" /> Credit</Nav.Link>
	                                  <Nav.Link eventKey="fourth"><Icofont icon="bank-alt" /> Netbanking</Nav.Link>
	                                  <Nav.Link eventKey="fifth"><Icofont icon="money" /> Pay on Delivery</Nav.Link>
	                              </Nav>
	                            </Col>
	                            <Col sm={8} className="pl-0">
	                              <Tab.Content className='h-100'>
	                                <Tab.Pane eventKey="first">
	                                  <h6 className="mb-3 mt-0 mb-3">Add new card</h6>
	                                    <p>WE ACCEPT <span className="osahan-card">
	                                       <Icofont icon="visa-alt" /> <Icofont icon="mastercard-alt" /> <Icofont icon="american-express-alt" /> <Icofont icon="payoneer-alt" /> <Icofont icon="apple-pay-alt" /> <Icofont icon="bank-transfer-alt" /> <Icofont icon="discover-alt" /> <Icofont icon="jcb-alt" />
	                                       </span>
	                                    </p>
	                                    <Form>
	                                       <div className="form-row">
	                                          <Form.Group className="col-md-12">
	                                             <Form.Label>Card number</Form.Label>
	                                             <InputGroup>
	                                                <Form.Control type="number" placeholder="Card number" />
	                                                <InputGroup.Append>
	                                                   <Button variant="outline-secondary" type="button" id="button-addon2"><Icofont icon="card" /></Button>
	                                                </InputGroup.Append>
	                                             </InputGroup>
	                                          </Form.Group>
	                                          <Form.Group className="col-md-8">
	                                             <Form.Label>Valid through(MM/YY)
	                                             </Form.Label>
	                                             <Form.Control type="number" placeholder="Enter Valid through(MM/YY)" />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-4">
	                                             <Form.Label>CVV
	                                             </Form.Label>
	                                             <Form.Control type="number" placeholder="Enter CVV Number" />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-12">
	                                             <Form.Label>Name on card
	                                             </Form.Label>
	                                             <Form.Control type="text" placeholder="Enter Card number" />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-12">
	                                          	<Form.Check 
											        custom
											        type="checkbox"
											        id="custom-checkbox1"
											        label="Securely save this card for a faster checkout next time."
											      />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-12 mb-0">
	                                             <Link to="/thanks" className="btn btn-success btn-block btn-lg">PAY $1329
	                                             	<Icofont icon="long-arrow-right" />
	                                             </Link>
	                                          </Form.Group>
	                                       </div>
	                                    </Form>
	                                </Tab.Pane>
	                                <Tab.Pane eventKey="second">
	                                    <h6 className="mb-3 mt-0 mb-3">Add new food card</h6>
	                                    <p>WE ACCEPT  <span className="osahan-card">
	                                       <i className="icofont-sage-alt"></i> <i className="icofont-stripe-alt"></i> <i className="icofont-google-wallet-alt-1"></i>
	                                       </span>
	                                    </p>
	                                    <Form>
	                                       <div className="form-row">
	                                          <Form.Group className="col-md-12">
	                                             <Form.Label>Card number</Form.Label>
	                                             <InputGroup>
	                                                <Form.Control type="number" placeholder="Card number" />
	                                                <InputGroup.Append>
	                                                   <Button variant="outline-secondary" type="button" id="button-addon2"><Icofont icon="card" /></Button>
	                                                </InputGroup.Append>
	                                             </InputGroup>
	                                          </Form.Group>
	                                          <Form.Group className="col-md-8">
	                                             <Form.Label>Valid through(MM/YY)
	                                             </Form.Label>
	                                             <Form.Control type="number" placeholder="Enter Valid through(MM/YY)" />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-4">
	                                             <Form.Label>CVV
	                                             </Form.Label>
	                                             <Form.Control type="number" placeholder="Enter CVV Number" />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-12">
	                                             <Form.Label>Name on card
	                                             </Form.Label>
	                                             <Form.Control type="text" placeholder="Enter Card number" />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-12">
	                                          	<Form.Check 
											        custom
											        type="checkbox"
											        id="custom-checkbox"
											        label="Securely save this card for a faster checkout next time."
											      />
	                                          </Form.Group>
	                                          <Form.Group className="col-md-12 mb-0">
	                                             <Link to="/thanks" className="btn btn-success btn-block btn-lg">PAY $1329
	                                             	<Icofont icon="long-arrow-right" />
	                                             </Link>
	                                          </Form.Group>
	                                       </div>
	                                    </Form>
	                                </Tab.Pane>
	                                <Tab.Pane eventKey="third">
	                                    <div className="border shadow-sm-sm p-4 d-flex align-items-center bg-white mb-3">
	                                       <Icofont icon="apple-pay-alt" className="mr-3 icofont-3x" />
	                                       <div className="d-flex flex-column">
	                                          <h5 className="card-title">Apple Pay</h5>
	                                          <p className="card-text">Apple Pay lets you order now & pay later at no extra cost.</p>
	                                          <Link to="#" className="card-link font-weight-bold">LINK ACCOUNT <Icofont icon="link-alt" /></Link>
	                                       </div>
	                                    </div>
	                                    <div className="border shadow-sm-sm p-4 d-flex bg-white align-items-center mb-3">
	                                       <Icofont icon="paypal-alt" className="mr-3 icofont-3x" />
	                                       <div className="d-flex flex-column">
	                                          <h5 className="card-title">Paypal</h5>
	                                          <p className="card-text">Paypal lets you order now & pay later at no extra cost.</p>
	                                          <Link to="#" className="card-link font-weight-bold">LINK ACCOUNT <Icofont icon="link-alt" /></Link>
	                                       </div>
	                                    </div>
	                                    <div className="border shadow-sm-sm p-4 d-flex bg-white align-items-center">
	                                       <Icofont icon="diners-club" className="mr-3 icofont-3x" />
	                                       <div className="d-flex flex-column">
	                                          <h5 className="card-title">Diners Club</h5>
	                                          <p className="card-text">Diners Club lets you order now & pay later at no extra cost.</p>
	                                          <Link to="#" className="card-link font-weight-bold">LINK ACCOUNT <Icofont icon="link-alt" /></Link>
	                                       </div>
	                                    </div>
	                                </Tab.Pane>
	                                <Tab.Pane eventKey="fourth">
	                                    <h6 className="mb-3 mt-0 mb-3">Netbanking</h6>
	                                    <Form>
		                                    <ButtonToolbar>
						                        <ToggleButtonGroup className="d-flex w-100" type="checkbox" name="options" defaultValue={1}>
				    							    <ToggleButton variant='info' value={1}>
				    							      HDFC <Icofont icon="check-circled" />
				    							    </ToggleButton>
				    							    <ToggleButton variant='info' value={2}>
				    							      ICICI <Icofont icon="check-circled" />
				    							    </ToggleButton>
				    							    <ToggleButton variant='info' value={3}>
				    							      AXIS <Icofont icon="check-circled" />
				    							    </ToggleButton>
				        					    </ToggleButtonGroup>
				    						</ButtonToolbar>
	                                        <hr />
	                                        <div className="form-row">
	                                          <Form.Group className="col-md-12">
	                                             <Form.Label>Select Bank
	                                             </Form.Label>
	                                             <br />
	                                             <Form.Control as="select" className="custom-select">
											      <option>Bank</option>
											      <option>One</option>
											      <option>Two</option>
											      <option>Three</option>
											     </Form.Control>
	                                          </Form.Group>
	                                          <Form.Group className="col-md-12 mb-0">
	                                             <Link to="/thanks" className="btn btn-success btn-block btn-lg">PAY $1329
	                                             <Icofont icon="long-arrow-right" /></Link>
	                                          </Form.Group>
	                                        </div>
	                                    </Form>
	                                </Tab.Pane>
	                                <Tab.Pane eventKey="fifth">
	                                    <h6 className="mb-3 mt-0 mb-3">Cash</h6>
	                                    <p>Please keep exact change handy to help us serve you better</p>
	                                    <hr />
	                                    <Form>
	                                       <Link to="/thanks" className="btn btn-success btn-block btn-lg">PAY $1329
	                                       <Icofont icon="long-arrow-right" /></Link>
	                                    </Form>
	                                </Tab.Pane>
	                              </Tab.Content>
	                            </Col>
	                          </Row>
	                        </Tab.Container>
	                      </div>
	                  </div>
	               </Col>
	               <Col md={4}>
	               	<div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
                     <div className="d-flex mb-4 osahan-cart-item-profile">
                        <Image fluid className="mr-3 rounded-pill" alt="osahan" src="/img/2.jpg" />
                        <div className="d-flex flex-column">
                           <h6 className="mb-1 text-white">Spice Hut Indian Restaurant
                           </h6>
                           <p className="mb-0 text-white"><Icofont icon="location-pin" /> 2036 2ND AVE, NEW YORK, NY 10029</p>
                        </div>
                     </div>
                     <div className="bg-white rounded shadow-sm mb-2">
                     	<CheckoutItem 
                     		itemName="Chicken Tikka Sub"
							price={314}
							priceUnit="$"
							id={1}
							qty={2}
							show={true}
							minValue={0}
							maxValue={7}
							getValue={this.getQty}
                     	 />
                     	<CheckoutItem 
                     		itemName="Cheese corn Roll"
							price={260}
							priceUnit="$"
							id={1}
							qty={1}
							show={true}
							minValue={0}
							maxValue={7}
							getValue={this.getQty}
                     	 />
                     	<CheckoutItem 
                     		itemName="Mixed Veg"
							price={122}
							priceUnit="$"
							id={1}
							qty={1}
							show={true}
							minValue={0}
							maxValue={7}
							getValue={this.getQty}
                     	 />
                     	<CheckoutItem 
                     		itemName="Black Dal Makhani"
							price={652}
							priceUnit="$"
							id={1}
							qty={1}
							show={true}
							minValue={0}
							maxValue={7}
							getValue={this.getQty}
                     	 />
                     	<CheckoutItem 
                     		itemName="Mixed Veg"
							price={122}
							priceUnit="$"
							id={1}
							qty={1}
							show={true}
							minValue={0}
							maxValue={7}
							getValue={this.getQty}
                     	 />
              		 </div>
              		 <div className="mb-2 bg-white rounded p-2 clearfix">
                        <InputGroup className="input-group-sm mb-2">
                           <Form.Control type="text" placeholder="Enter promo code" />
                           <InputGroup.Append>
                              <Button variant="primary" type="button" id="button-addon2"><Icofont icon="sale-discount" /> APPLY</Button>
                           </InputGroup.Append>
                        </InputGroup>
                        <InputGroup className="mb-0">
                           <InputGroup.Prepend>
                              <InputGroup.Text><Icofont icon="comment" /></InputGroup.Text>
                           </InputGroup.Prepend>
                           <Form.Control as="textarea" placeholder="Any suggestions? We will pass it on..." aria-label="With textarea" />
                        </InputGroup>
                     </div>
                     <div className="mb-2 bg-white rounded p-2 clearfix">
                        <p className="mb-1">Item Total <span className="float-right text-dark">$3140</span></p>
                        <p className="mb-1">Restaurant Charges <span className="float-right text-dark">$62.8</span></p>
                        <p className="mb-1">Delivery Fee
                    		<OverlayTrigger
						      key="top"
						      placement="top"
						      overlay={
						        <Tooltip id="tooltip-top">
						          Total discount breakup
						        </Tooltip>
						      }
						    >
						      <span className="text-info ml-1">
							      <Icofont icon="info-circle" />
	                           </span> 
						    </OverlayTrigger>
                           <span className="float-right text-dark">$10</span>
                           
                        </p>
                        <p className="mb-1 text-success">Total Discount 
                           <span className="float-right text-success">$1884</span>
                        </p>
                        <hr />
                        <h6 className="font-weight-bold mb-0">TO PAY  <span className="float-right">$1329</span></h6>
                     </div>
                 	<Link to="/thanks" className="btn btn-success btn-block btn-lg">PAY $1329
                 	<Icofont icon="long-arrow-right" /></Link>
	   				</div>
				      <div className="pt-2"></div>
	                  <div className="alert alert-success" role="alert">
	                     You have saved <strong>$1,884</strong> on the bill
	                  </div>
	   				  <div className="pt-2"></div>
	   				  <div className="text-center pt-2">
	   				  	<Image fluid src="https://dummyimage.com/352x504/ccc/ffffff.png&text=Google+ads" />
	   				  </div>
	               </Col>
	            </Row>
	         </Container>
	      </section>
    	);
    }
}


export default Checkout;