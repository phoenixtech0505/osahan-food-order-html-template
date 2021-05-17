import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'; 
import {Image} from 'react-bootstrap';

class ProductBox extends React.Component {
	render() {
    	return (
	      <div className={this.props.boxClass}>
	         <Link to={this.props.linkUrl}>
             <Image src={this.props.image} className={this.props.imageClass} alt={this.props.imageAlt} />
             {this.props.title?
               <h6>{this.props.title}</h6>
               :""
             }
             {this.props.counting?
              <p>{this.props.counting}</p>
               :""
             }
           </Link>

	      </div>
		);
	}
}


ProductBox.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageClass: PropTypes.string,
  imageAlt: PropTypes.string,
  boxClass: PropTypes.string,
  title: PropTypes.string,
  counting: PropTypes.string,
};
ProductBox.defaultProps = {
  	imageAlt:'',
    image:'',
    imageClass:'',
    linkUrl: '',
    boxClass:'products-box',
    title:'',
    counting:'',
}

export default ProductBox;