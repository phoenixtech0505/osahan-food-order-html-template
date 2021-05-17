import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'; 

class CartDropdownHeader extends React.Component {
	render() {
		return (

			<div className={this.props.className}>
				{
					this.props.image?
					<img alt="" src={this.props.image} className={this.props.imageClass} />:''
				}
	             <h6 className="mb-0">{this.props.title}</h6>
				{
					this.props.subTitle?
	             	<p className="text-secondary mb-0">{this.props.subTitle}</p>:''
	            }
	            {
					this.props.linkUrl?
		             <small>
		             	<Link className="text-primary font-weight-bold" to={this.props.linkUrl}>{this.props.linkText}</Link>
	             	</small>:''
	            }
	        </div>
		);
	}
}

CartDropdownHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string,
  imageClass: PropTypes.string,
  imageAlt: PropTypes.string,
  badgeClass: PropTypes.string,
  badgeValue: PropTypes.number,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
};

CartDropdownHeader.defaultProps = {
    subTitle: '',
    className:'',
  	imageAlt:'',
    image:'',
    imageClass:'',
    badgeClass:'',
    badgeValue:0,
    linkUrl: '',
    linkText: '',
}

export default CartDropdownHeader;