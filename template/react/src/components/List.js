import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Dropdown,Accordion,Button,Form,Spinner} from 'react-bootstrap';
import Icofont from 'react-icofont';
import PageTitle from './common/PageTitle';
import CardItem from './common/CardItem';
import CategoriesCarousel from './common/CategoriesCarousel';

class List extends React.Component {
	render() {
    	return (
    		<>
	    		<PageTitle 
	    			title="Offers Near You"
	    			subTitle="Best deals at your favourite restaurants"
	    		/>
	    		<section className="section pt-5 pb-5 products-listing">
			         <Container>
			            <Row className="d-none-m">
			               <Col md={12}>
			               		<Dropdown className="float-right">
								  <Dropdown.Toggle variant="outline-info">
								    Sort by: <span className="text-theme">Distance</span> &nbsp;&nbsp;
								  </Dropdown.Toggle>
								  <Dropdown.Menu className='dropdown-menu-right shadow-sm border-0'>
								    <Dropdown.Item href="#/distance">Distance</Dropdown.Item>
								    <Dropdown.Item href="#/no-of-coupons">No Of Offers</Dropdown.Item>
								    <Dropdown.Item href="#/rating">Rating</Dropdown.Item>
								  </Dropdown.Menu>
								</Dropdown>
								<h4 className="font-weight-bold mt-0 mb-3">OFFERS <small className="h6 mb-0 ml-2">299 restaurants
								 </small>
								</h4>
			               </Col>
			            </Row>
			            <Row>
			               <Col md={3}>
			                  <div className="filters shadow-sm rounded bg-white mb-4">
			                     <div className="filters-header border-bottom pl-4 pr-4 pt-3 pb-3">
			                        <h5 className="m-0">Filter By</h5>
			                     </div>
			                     <div className="filters-body">
			                     	<Accordion defaultActiveKey="0">
									    <div className="filters-card border-bottom p-4">
											<div className="filters-card-header" id="headingOne">
												<h6 className="mb-0">
													<Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="0">
														Location <Icofont icon='arrow-down' className='ml-auto'/>
													</Accordion.Toggle>
												</h6>
											</div>
										    <Accordion.Collapse eventKey="0">
										      <div className="filters-card-body card-shop-filters">
											      <Form.Check 
											        custom
											        type='checkbox'
											        defaultChecked={true}
											        id='custom-cb1'
											        label={<React.Fragment>Ludhiana Junction <small className="text-black-50">230</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb2'
											        label={<React.Fragment>Model Town <small className="text-black-50">95</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb3'
											        label={<React.Fragment>Civil Lines <small className="text-black-50">35</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb4'
											        label={<React.Fragment>Dugri <small className="text-black-50">46</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb5'
											        label={<React.Fragment>PAU <small className="text-black-50">20</small></React.Fragment>}
											      />
			                                    <div className="mt-2"><Link to="#" className="link">See all</Link></div>
			                                  </div>
										    </Accordion.Collapse>
			                            </div>
			                            <div className="filters-card border-bottom p-4">
										    <div className="filters-card-header" id="headingTwo">
				                                <h6 className="mb-0">
				                                    <Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="1">
														All cuisines <Icofont icon='arrow-down' className='ml-auto'/>
													</Accordion.Toggle>
				                                </h6>
			                                </div>

										    <Accordion.Collapse eventKey="1">
										      <div className="filters-card-body card-shop-filters">
											        <form className="filters-search mb-3">

													  <Form.Group>
													    <Icofont icon='search'/>
													    <Form.Control type="text" placeholder="Start typing to search..." />
													  </Form.Group>
				                                    </form>
											      <Form.Check 
											        custom
											        type='checkbox'
											        defaultChecked={true}
											        id='custom-cb6'
											        label={<React.Fragment>American <small className="text-black-50">156</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb7'
											        label={<React.Fragment>Pizza <small className="text-black-50">120</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb8'
											        label={<React.Fragment>Healthy <small className="text-black-50">130</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb9'
											        label={<React.Fragment>Vegetarian <small className="text-black-50">120</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb10'
											        label={<React.Fragment>Chinese <small className="text-black-50">111</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb11'
											        label={<React.Fragment>Hamburgers <small className="text-black-50">95</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb12'
											        label={<React.Fragment>Dessert <small className="text-black-50">50</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb13'
											        label={<React.Fragment>Chicken <small className="text-black-50">32</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb14'
											        label={<React.Fragment>Indian <small className="text-black-50">156</small></React.Fragment>}
											      />
			                                    <div className="mt-2"><Link to="#" className="link">See all</Link></div>
			                                  </div>
										    </Accordion.Collapse>
									    </div>
									    <div className="filters-card border-bottom p-4">
											<div className="filters-card-header" id="headingOne">
												<h6 className="mb-0">
													<Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="2">
														Feature <Icofont icon='arrow-down' className='ml-auto'/>
													</Accordion.Toggle>
												</h6>
											</div>
										    <Accordion.Collapse eventKey="2">
										      <div className="filters-card-body card-shop-filters">
											      <Form.Check 
											        custom
											        type='checkbox'
											        defaultChecked={true}
											        id='custom-cb15'
											        label={<React.Fragment>Free Delivery <small className="text-black-50">156</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb16'
											        label={<React.Fragment>Coupons <small className="text-black-50">120</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb17'
											        label={<React.Fragment>Open Now [1:31am] <small className="text-black-50">85</small></React.Fragment>}
											      />
			                                  </div>
										    </Accordion.Collapse>
			                            </div>
									    <div className="filters-card border-bottom p-4">
											<div className="filters-card-header" id="headingOne">
												<h6 className="mb-0">
													<Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="3">
														Delivery time <Icofont icon='arrow-down' className='ml-auto'/>
													</Accordion.Toggle>
												</h6>
											</div>
										    <Accordion.Collapse eventKey="3">
										      <div className="filters-card-body card-shop-filters">
											      <Form.Check 
											        custom
											        type='checkbox'
											        defaultChecked={true}
											        id='custom-cb18'
											        label='Any Time'
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb19'
											        label='25 min'
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb20'
											        label='30 min'
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb21'
											        label='40 min'
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb22'
											        label='45 min'
											      />
			                                    <div className="mt-2"><Link to="#" className="link">See all</Link></div>
			                                  </div>
										    </Accordion.Collapse>
			                            </div>
									    <div className="filters-card border-bottom p-4">
											<div className="filters-card-header" id="headingOne">
												<h6 className="mb-0">
													<Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="4">
														Category <Icofont icon='arrow-down' className='ml-auto'/>
													</Accordion.Toggle>
												</h6>
											</div>
										    <Accordion.Collapse eventKey="4">
										      <div className="filters-card-body card-shop-filters">
											      <Form.Check 
											        custom
											        type='checkbox'
											        defaultChecked={true}
											        id='custom-cb23'
											        label={<React.Fragment>Delivery <small className="text-black-50">156</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb24'
											        label={<React.Fragment>Dine-out <small className="text-black-50">120</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb25'
											        label={<React.Fragment>Cafés<small className="text-black-50">85</small></React.Fragment>}
											      />
			                                  </div>
										    </Accordion.Collapse>
			                            </div>
									</Accordion>
			                     </div>
			                  </div>
			                  <div className="filters pt-2">
			                     <div className="filters-body rounded shadow-sm bg-white">
			                        <div className="filters-card p-4">
			                           <div>
			                              <div className="filters-card-body card-shop-filters pt-0">
		                              		<Form.Check 
										        custom
										        type='radio'
										        name='partner'
										        defaultChecked={true}
										        id='custom-cb26'
										        label='Gold Partner'
										      />
		                              		<Form.Check 
										        custom
										        type='radio'
										        name='partner'
										        id='custom-cb27'
										        label='Order Food Online'
										      />
		                              		<Form.Check 
										        custom
										        type='radio'
										        name='partner'
										        id='custom-cb28'
										        label='Osahan Eat'
										      />
			                                 <hr />
			                                 <small className="text-success">Use code OSAHAN50 to get 50% OFF (up to $30) on first 5 orders. T&Cs apply.</small>
			                              </div>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			               </Col>
			               <Col md={9}>
			               	  <CategoriesCarousel />
			                  <Row>
			                     <Col md={4} sm={6} className="mb-4 pb-2">
			                        <CardItem 
								   		title='Bite Me Sandwiches'
										subTitle='North Indian • American • Pure veg'
									  	imageAlt='Product'
									    image='img/list/1.png'
									    imageClass='img-fluid item-img'
									    linkUrl='detail'
									    offerText='65% off | Use Coupon OSAHAN50'
										time='15–25 min'
										price='$100 FOR TWO'
										showPromoted={true}
										promotedVariant='dark'
										favIcoIconColor='text-danger'
										rating='3.1 (300+)'
								   	/>
			                     </Col>
			                     <Col md={4} sm={6} className="mb-4 pb-2">
			                        <CardItem 
								   		title='Bite Me Sandwiches'
										subTitle='North Indian • American • Pure veg'
									  	imageAlt='Product'
									    image='img/list/2.png'
									    imageClass='img-fluid item-img'
									    linkUrl='detail'
									    offerText='65% off | Use Coupon OSAHAN50'
										time='15–25 min'
										price='$100 FOR TWO'
										showPromoted={true}
										promotedVariant='dark'
										favIcoIconColor='text-danger'
										rating='3.1 (300+)'
								   	/>
			                     </Col>
			                     <Col md={4} sm={6} className="mb-4 pb-2">
			                        <CardItem 
								   		title='Bite Me Sandwiches'
										subTitle='North Indian • American • Pure veg'
									  	imageAlt='Product'
									    image='img/list/3.png'
									    imageClass='img-fluid item-img'
									    linkUrl='detail'
									    offerText='65% off | Use Coupon OSAHAN50'
										time='15–25 min'
										price='$100 FOR TWO'
										showPromoted={true}
										promotedVariant='dark'
										favIcoIconColor='text-danger'
										rating='3.1 (300+)'
								   	/>
			                     </Col>
			                     <Col md={4} sm={6} className="mb-4 pb-2">
			                        <CardItem 
								   		title='Bite Me Sandwiches'
										subTitle='North Indian • American • Pure veg'
									  	imageAlt='Product'
									    image='img/list/4.png'
									    imageClass='img-fluid item-img'
									    linkUrl='detail'
									    offerText='65% off | Use Coupon OSAHAN50'
										time='15–25 min'
										price='$100 FOR TWO'
										showPromoted={true}
										promotedVariant='dark'
										favIcoIconColor='text-danger'
										rating='3.1 (300+)'
								   	/>
			                     </Col>
			                     <Col md={4} sm={6} className="mb-4 pb-2">
			                        <CardItem 
								   		title='Bite Me Sandwiches'
										subTitle='North Indian • American • Pure veg'
									  	imageAlt='Product'
									    image='img/list/5.png'
									    imageClass='img-fluid item-img'
									    linkUrl='detail'
									    offerText='65% off | Use Coupon OSAHAN50'
										time='15–25 min'
										price='$100 FOR TWO'
										showPromoted={true}
										promotedVariant='dark'
										favIcoIconColor='text-danger'
										rating='3.1 (300+)'
								   	/>
			                     </Col>
			                     <Col md={4} sm={6} className="mb-4 pb-2">
			                        <CardItem 
								   		title='Bite Me Sandwiches'
										subTitle='North Indian • American • Pure veg'
									  	imageAlt='Product'
									    image='img/list/6.png'
									    imageClass='img-fluid item-img'
									    linkUrl='detail'
									    offerText='65% off | Use Coupon OSAHAN50'
										time='15–25 min'
										price='$100 FOR TWO'
										showPromoted={true}
										promotedVariant='dark'
										favIcoIconColor='text-danger'
										rating='3.1 (300+)'
								   	/>
			                     </Col>
			                     <Col md={4} sm={6} className="mb-4 pb-2">
			                        <CardItem 
								   		title='Bite Me Sandwiches'
										subTitle='North Indian • American • Pure veg'
									  	imageAlt='Product'
									    image='img/list/7.png'
									    imageClass='img-fluid item-img'
									    linkUrl='detail'
									    offerText='65% off | Use Coupon OSAHAN50'
										time='15–25 min'
										price='$100 FOR TWO'
										showPromoted={true}
										promotedVariant='dark'
										favIcoIconColor='text-danger'
										rating='3.1 (300+)'
								   	/>
			                     </Col>
			                     <Col md={4} sm={6} className="mb-4 pb-2">
			                        <CardItem 
								   		title='Bite Me Sandwiches'
										subTitle='North Indian • American • Pure veg'
									  	imageAlt='Product'
									    image='img/list/8.png'
									    imageClass='img-fluid item-img'
									    linkUrl='detail'
									    offerText='65% off | Use Coupon OSAHAN50'
										time='15–25 min'
										price='$100 FOR TWO'
										showPromoted={true}
										promotedVariant='dark'
										favIcoIconColor='text-danger'
										rating='3.1 (300+)'
								   	/>
			                     </Col>
			                     <Col md={4} sm={6} className="mb-4 pb-2">
			                        <CardItem 
								   		title='Bite Me Sandwiches'
										subTitle='North Indian • American • Pure veg'
									  	imageAlt='Product'
									    image='img/list/9.png'
									    imageClass='img-fluid item-img'
									    linkUrl='detail'
									    offerText='65% off | Use Coupon OSAHAN50'
										time='15–25 min'
										price='$100 FOR TWO'
										showPromoted={true}
										promotedVariant='dark'
										favIcoIconColor='text-danger'
										rating='3.1 (300+)'
								   	/>
			                     </Col>
			                     <Col md={12} className="text-center load-more">
			                        <Button variant="primary" type="button" disabled="">
			                        	<Spinner animation="grow" size="sm" className='mr-1' />
				                        Loading...
			                        </Button>  
			                     </Col>
			                  </Row>
			               </Col>
			            </Row>
			         </Container>
			         
			    </section>
	    	</>
    	);
    }
}


export default List;