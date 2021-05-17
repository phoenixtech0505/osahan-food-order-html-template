import React from 'react';
import {Link} from 'react-router-dom';
import {Image,Card,Media} from 'react-bootstrap';
import Icofont from 'react-icofont';
import PropTypes from 'prop-types'; 

class PaymentCard extends React.Component {

	render() {
    	return (
    		<Card className="bg-white payments-item mb-4 shadow-sm">
            	<div className="gold-members p-4">
                  <Media>
            		<Image src={this.props.logoImage} alt={this.props.imageAlt} className={this.props.imageclassName} /> 
                     <Media.Body>
                        <h6 className="mb-1">{this.props.title}</h6>
	                      {this.props.subTitle?
			                	<p>
			                		{this.props.subTitle}
			                	</p>
			                	:""
			              }
                        <p className="mb-0 text-black font-weight-bold">
	                      	<Link className="text-danger" to="#" onClick={this.props.onClick}><Icofont icon="ui-delete" /> DELETE</Link>
	                    </p>
                    </Media.Body>
           		  </Media>
           		</div>
            </Card>
    	);
    }
}

PaymentCard.propTypes = {
  title: PropTypes.string.isRequired,
  logoImage: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  imageAlt: PropTypes.string,
  imageclassName: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
PaymentCard.defaultProps = {
  subTitle: '',
  imageAlt: '',
  imageclassName: '',
}

export default PaymentCard;