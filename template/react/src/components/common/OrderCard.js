import React from 'react';
import PropTypes from 'prop-types'; 
import {Link } from 'react-router-dom';
import {Image,Media} from 'react-bootstrap';
import Icofont from 'react-icofont';

class OrderCard extends React.Component {

	render() {
    	return (
	      <div className="bg-white card mb-4 order-list shadow-sm">
	          <div className="gold-members p-4">
	                <Media>
	                   <Image className="mr-4" src={this.props.image} alt={this.props.imageAlt} />
	                   <Media.Body>
	                   		{this.props.deliveredDate?
	                   			(
			                      <span className="float-right text-info">Delivered on {this.props.deliveredDate}  
			                      	<Icofont icon="check-circled" className="text-success ml-1" />
			                      </span>
			                    )
			                    :""
	                   		}
	                      <h6 className="mb-2">
	                      	<Link to={this.props.detailLink}  className="text-black">{this.props.orderTitle} </Link>
	                      </h6>
	                      <p className="text-gray mb-1">
	                      	<Icofont icon="location-arrow" /> {this.props.address} 
	                      </p>
	                      <p className="text-gray mb-3">
	                      	<Icofont icon="list" /> ORDER #{this.props.orderNumber} 
	                      	<Icofont icon="clock-time" className="ml-2" /> {this.props.orderDate} 
	                      </p>
	                      <p className="text-dark">
	                      	{this.props.orderProducts} 
	                      </p>
	                      <hr />
	                      <div className="float-right">
		                      <Link className="btn btn-sm btn-outline-primary mr-1" to={this.props.helpLink}><Icofont icon="headphone-alt" /> HELP</Link>
		                      <Link className="btn btn-sm btn-primary" to={this.props.detailLink}><Icofont icon="refresh" /> REORDER</Link>
	                      </div>
	                      <p className="mb-0 text-black text-primary pt-2">
	                      	<span className="text-black font-weight-bold"> Total Paid:</span> {this.props.orderTotal}
	                      </p>
	                   </Media.Body>
	                </Media>
	          </div>
	       </div>
    	);
    }
}

OrderCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  orderNumber: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  deliveredDate: PropTypes.string,
  orderTitle: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  orderProducts: PropTypes.string.isRequired,
  helpLink: PropTypes.string.isRequired,
  detailLink: PropTypes.string.isRequired,
  orderTotal: PropTypes.string.isRequired,
};
export default OrderCard;