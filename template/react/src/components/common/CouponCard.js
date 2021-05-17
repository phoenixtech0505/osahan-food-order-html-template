import React from 'react';
import {Link} from 'react-router-dom';
import {Image,Button} from 'react-bootstrap';
import PropTypes from 'prop-types'; 

class CouponCard extends React.Component {

	render() {
    	return (
    		<div className={"card offer-card shadow-sm mb-4" + (this.props.noBorder ? ' border-0' : '')}>
	             <div className="card-body">
	             	{(this.props.logoImage || this.props.couponCode)?
		                (<h5 className="card-title">
		                	{this.props.logoImage?
		                		<Image src={this.props.logoImage} alt={this.props.imageAlt} className={this.props.imageclassName} /> 
		                		:""
		                	}
		                	{this.props.couponCode?
		                		this.props.couponCode
		                		:""
		                	}
		                </h5>)
		                :""
		            }
	                <h6 className="card-subtitle mb-2 text-block">{this.props.title}</h6>
	                {this.props.subTitle?
	                	<p className="card-text">
	                		{this.props.subTitle}
	                	</p>
	                	:""
	                }
	                {this.props.copyBtnText?
	                	<Button variant="link" className="card-btn mr-3 p-0">{this.props.copyBtnText}</Button>
	                	:""
	                }
	                {this.props.moreLinkText?
	                	<Link to={this.props.morelinkUrl} className="card-link">{this.props.moreLinkText}</Link>
	                	:""
	                }
	             </div>
	        </div>
    	);
    }
}

CouponCard.propTypes = {
  title: PropTypes.string.isRequired,
  logoImage: PropTypes.string,
  subTitle: PropTypes.string,
  imageAlt: PropTypes.string,
  imageclassName: PropTypes.string,
  morelinkUrl: PropTypes.string,
  moreLinkText: PropTypes.string,
  copyBtnText: PropTypes.string,
  couponCode: PropTypes.string,
  noBorder: PropTypes.bool,
};
CouponCard.defaultProps = {
  logoImage: '',
  subTitle: '',
  imageAlt: '',
  imageclassName: '',
  morelinkUrl: '#',
  moreLinkText: 'KNOW MORE',
  copyBtnText: '',
  couponCode: '',
  noBorder: true,
}

export default CouponCard;