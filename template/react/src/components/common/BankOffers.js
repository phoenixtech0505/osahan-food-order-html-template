import React from 'react';
import {Image,Row,Col,Card} from 'react-bootstrap';
import PropTypes from 'prop-types'; 

class BankOffers extends React.Component {

	render() {
    	return (
    		<Card className="offer-card-horizontal border-0 shadow-sm">
	             <Row className="d-flex align-items-center no-gutters">
	                <Col md={4} xs={4} className="p-4">
                		<Image src={this.props.logoImage} alt={this.props.imageAlt} className={this.props.imageclassName} /> 
	                </Col>
	                <Col md={8} xs={8}>
	                   <div className="card-body">
	                      <h5 className="card-title">{this.props.title}
	                      </h5>
	                      {this.props.subTitle?
			                	<p className="card-text">
			                		{this.props.subTitle}
			                	</p>
			                	:""
			              }
	                      <p className="card-text">
	                      	<small className="text-info">Other T&Cs may apply</small>
	                      </p>
	                   </div>
	                </Col>
	             </Row>
	        </Card>
    	);
    }
}

BankOffers.propTypes = {
  title: PropTypes.string.isRequired,
  logoImage: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  imageAlt: PropTypes.string,
  imageclassName: PropTypes.string
};
BankOffers.defaultProps = {
  subTitle: '',
  imageAlt: '',
  imageclassName: '',
}

export default BankOffers;