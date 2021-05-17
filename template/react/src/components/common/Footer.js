import React from 'react';
import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form,InputGroup,FormControl,Button,Image} from 'react-bootstrap';
import FontAwesome from './FontAwesome';

class Footer extends React.Component {

	render() {
    	return (
    		<>
			    <section className="section pt-5 pb-5 text-center bg-white">
			         <Container>
			            <Row>
			               <Col sm={12}>
			                  <h5 className="m-0">Operate food store or restaurants? <Link to="login">Work With Us</Link></h5>
			               </Col>
			            </Row>
			         </Container>
			    </section>
			    <section className="footer pt-5 pb-5">
			         <Container>
			            <Row>
			               <Col md={4} sm={12}>
			                  <h6 className="mb-3">Subscribe to our Newsletter</h6>
			                  <Form className="newsletter-form mb-1">
			                     <InputGroup className="mb-3">
								    <FormControl
								       type="text" 
								       placeholder="Please enter your email" 
								    />
								    <InputGroup.Append>
								      <Button type="button" variant="primary">Subscribe</Button>
								    </InputGroup.Append>
								 </InputGroup>
			                  </Form>
			                  <p><Link className="text-info" to="register">Register now</Link> to get updates on <Link to="offers">Offers and Coupons</Link></p>
			                  <div className="app">
			                     <p className="mb-2">DOWNLOAD APP</p>
			                     <Link to="#">
			                     	<Image src="img/google.png" alt='' fluid />
			                     </Link>
			                     <Link to="#">
			                     	<Image src="img/apple.png" alt='' fluid />
			                     </Link>
			                  </div>
			               </Col>
			               <Col md={1} sm={6} className="mobile-none">
			               </Col>
			               <Col md={2} sm={4} xs={6}>
			                  <h6 className="mb-3">About OE</h6>
			                  <ul>
			                     <li><Link to="#">About Us</Link></li>
			                     <li><Link to="#">Culture</Link></li>
			                     <li><Link to="#">Blog</Link></li>
			                     <li><Link to="#">Careers</Link></li>
			                     <li><Link to="#">Contact</Link></li>
			                  </ul>
			               </Col>
			               <Col md={2} sm={4} xs={6}>
			                  <h6 className="mb-3">For Foodies</h6>
			                  <ul>
			                     <li><Link to="#">Community</Link></li>
			                     <li><Link to="#">Developers</Link></li>
			                     <li><Link to="#">Blogger Help</Link></li>
			                     <li><Link to="#">Verified Users</Link></li>
			                     <li><Link to="#">Code of Conduct</Link></li>
			                  </ul>
			               </Col>
			               <Col md={2} sm={4} xs={4} className="m-none">
			                  <h6 className="mb-3">For Restaurants</h6>
			                  <ul>
			                     <li><Link to="#">Advertise</Link></li>
			                     <li><Link to="#">Add a Restaurant</Link></li>
			                     <li><Link to="#">Claim your uling</Link></li>
			                     <li><Link to="#">For Businesses</Link></li>
			                     <li><Link to="#">Owner Guidelines</Link></li>
			                  </ul>
			               </Col>
			            </Row>
			         </Container>
			    </section>
		      <section className={this.props.sectionclassName}>
		         <div className="container">
		            <Row>
		               <Col xs={12}>
		                  <p className={this.props.popularCHclassName}>POPULAR COUNTRIES</p>
		                  <div className="search-links">
		                     <Link to="#">Australia</Link> |  
		                     <Link to="#">Brasil</Link> | 
		                     <Link to="#">Canada</Link> |  
		                     <Link to="#">Chile</Link>  |  
		                     <Link to="#">Czech Republic</Link> |  
		                     <Link to="#">India</Link>  |  
		                     <Link to="#">Indonesia</Link> |  
		                     <Link to="#">Ireland</Link> |  
		                     <Link to="#">New Zealand</Link> | 
		                     <Link to="#">United Kingdom</Link> |  
		                     <Link to="#">Turkey</Link>  |  
		                     <Link to="#">Philippines</Link> |  
		                     <Link to="#">Sri Lanka</Link>  |  
		                     <Link to="#">Australia</Link> |  
		                     <Link to="#">Brasil</Link> | 
		                     <Link to="#">Canada</Link> |  
		                     <Link to="#">Chile</Link>  |  
		                     <Link to="#">Czech Republic</Link> |  
		                     <Link to="#">India</Link>  |  
		                     <Link to="#">Indonesia</Link> |  
		                     <Link to="#">Ireland</Link> |  
		                     <Link to="#">New Zealand</Link> | 
		                     <Link to="#">United Kingdom</Link> |  
		                     <Link to="#">Turkey</Link>  |  
		                     <Link to="#">Philippines</Link> |  
		                     <Link to="#">Sri Lanka</Link> |  
		                     <Link to="#">Australia</Link> |  
		                     <Link to="#">Brasil</Link> | 
		                     <Link to="#">Canada</Link> |  
		                     <Link to="#">Chile</Link>  |  
		                     <Link to="#">Czech Republic</Link> |  
		                     <Link to="#">India</Link>  |  
		                     <Link to="#">Indonesia</Link> |  
		                     <Link to="#">Ireland</Link> |  
		                     <Link to="#">New Zealand</Link> | 
		                     <Link to="#">United Kingdom</Link> |  
		                     <Link to="#">Turkey</Link>  |  
		                     <Link to="#">Philippines</Link> |  
		                     <Link to="#">Sri Lanka</Link>  |  
		                     <Link to="#">Australia</Link> |  
		                     <Link to="#">Brasil</Link> | 
		                     <Link to="#">Canada</Link> |  
		                     <Link to="#">Chile</Link>  |  
		                     <Link to="#">Czech Republic</Link> |  
		                     <Link to="#">India</Link>  |  
		                     <Link to="#">Indonesia</Link> |  
		                     <Link to="#">Ireland</Link> |  
		                     <Link to="#">New Zealand</Link> | 
		                     <Link to="#">United Kingdom</Link> |  
		                     <Link to="#">Turkey</Link>  |  
		                     <Link to="#">Philippines</Link> |  
		                     <Link to="#">Sri Lanka</Link>
		                  </div>
		                  <p className={this.props.popularFHclassName}>POPULAR FOOD</p>
		                  <div className="search-links">
		                     <Link to="#">Fast Food</Link> |  
		                     <Link to="#">Chinese</Link> | 
		                     <Link to="#">Street Food</Link> |  
		                     <Link to="#">Continental</Link>  |  
		                     <Link to="#">Mithai</Link> |  
		                     <Link to="#">Cafe</Link>  |  
		                     <Link to="#">South Indian</Link> |  
		                     <Link to="#">Punjabi Food</Link> |  
		                     <Link to="#">Fast Food</Link> |  
		                     <Link to="#">Chinese</Link> | 
		                     <Link to="#">Street Food</Link> |  
		                     <Link to="#">Continental</Link>  |  
		                     <Link to="#">Mithai</Link> |  
		                     <Link to="#">Cafe</Link>  |  
		                     <Link to="#">South Indian</Link> |  
		                     <Link to="#">Punjabi Food</Link> | 
		                     <Link to="#">Fast Food</Link> |  
		                     <Link to="#">Chinese</Link> | 
		                     <Link to="#">Street Food</Link> |  
		                     <Link to="#">Continental</Link>  |  
		                     <Link to="#">Mithai</Link> |  
		                     <Link to="#">Cafe</Link>  |  
		                     <Link to="#">South Indian</Link> |  
		                     <Link to="#">Punjabi Food</Link> |  
		                     <Link to="#">Fast Food</Link> |  
		                     <Link to="#">Chinese</Link> | 
		                     <Link to="#">Street Food</Link> |  
		                     <Link to="#">Continental</Link>  |  
		                     <Link to="#">Mithai</Link> |  
		                     <Link to="#">Cafe</Link>  |  
		                     <Link to="#">South Indian</Link> |  
		                     <Link to="#">Punjabi Food</Link>
		                  </div>
		               </Col>
		            </Row>
		         </div>
		      </section>
		      <footer className="pt-4 pb-4 text-center">
		         <Container>
		            <p className="mt-0 mb-0">{this.props.copyrightText}</p>
		            <small className="mt-0 mb-0"> Made with <FontAwesome icon={this.props.madewithIconclassName} /> by
		            <Link className="text-danger ml-1" target="_blank" to={`${this.props.firstLink}`}>{this.props.firstLinkText}</Link> - <Link className="text-primary" target="_blank" to={this.props.secondLink}>{this.props.secondLinkText}</Link>
		            </small>
		         </Container>
		      </footer>
		    </>
    	);
    }
}


Footer.propTypes = {
  sectionclassName: PropTypes.string,
  popularCHclassName:PropTypes.string,
  popularCountries: PropTypes.array,
  popularFHclassName:PropTypes.string,
  popularFood: PropTypes.array,
  copyrightText: PropTypes.string,
  madewithIconclassName: PropTypes.string,
  firstLinkText: PropTypes.string,
  firstLink: PropTypes.string,
  secondLinkText: PropTypes.string,
  secondLink: PropTypes.string,
};

Footer.defaultProps = {
    sectionclassName: 'footer-bottom-search pt-5 pb-5 bg-white',
	popularCHclassName:'text-black',
	popularCountries: [],
	popularFHclassName:'mt-4 text-black',
	popularFood: [],
	copyrightText: '© Copyright 2020 Osahan Eat. All Rights Reserved',
	madewithIconclassName: 'heart heart-icon text-danger',
	firstLinkText: 'Gurdeep Osahan',
	firstLink: "//www.instagram.com/iamgurdeeposahan/",
	secondLinkText: 'Askbootstrap',
	secondLink: '//askbootstrap.com/',
}



export default Footer;