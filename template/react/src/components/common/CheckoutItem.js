import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import {Button} from 'react-bootstrap';
import Icofont from 'react-icofont';

class CheckoutItem extends Component {
 constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.qty || 1,
      show: this.props.show || true,
      max:this.props.maxValue || 5,
      min:this.props.minValue || 0
    };
  }

  IncrementItem = () => {
    if(this.state.quantity >= this.state.max) {

    }else {
        this.setState({
            quantity: this.state.quantity + 1 
        });
    	this.props.getValue({id:this.props.id,quantity: (this.state.quantity + 1 )});
    }
  }
  DecreaseItem = () => {
    if(this.state.quantity <= (this.state.min +1)) {

    }else {
        this.setState({ quantity: this.state.quantity - 1 });
    	this.props.getValue({id:this.props.id,quantity: (this.state.quantity - 1 )});
    }
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {

    return (
    	<div className="gold-members p-2 border-bottom">
           <p className="text-gray mb-0 float-right ml-2">{this.props.priceUnit}{this.props.price * this.state.quantity}</p>
           <span className="count-number float-right">
               <Button variant="outline-secondary" onClick={this.DecreaseItem} className="btn-sm left dec"> <Icofont icon="minus" /> </Button>
               <input className="count-number-input" type="text" value={this.state.quantity} readOnly/>
               <Button variant="outline-secondary" onClick={this.IncrementItem} className="btn-sm right inc"> <Icofont icon="icofont-plus" /> </Button>
           </span>
           <div className="media">
              <div className="mr-2"><Icofont icon="ui-press" className="text-danger food-item" /></div>
              <div className="media-body">
                 <p className="mt-1 mb-0 text-black">{this.props.itemName}</p>
              </div>
           </div>
        </div>
    );
  }
}

CheckoutItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceUnit: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  getValue: PropTypes.func.isRequired
};
CheckoutItem.defaultProps = {
  show: true,
  priceUnit:'$'
}



export default CheckoutItem;