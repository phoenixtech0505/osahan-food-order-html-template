import React from 'react';
import {Link} from 'react-router-dom';
import {Image,Badge,Button} from 'react-bootstrap';
import PropTypes from 'prop-types'; 
import Icofont from 'react-icofont';

class BestSeller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.qty || 0,
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
    if(this.state.quantity <= (this.state.min)) {

    }else {
      this.setState({ quantity: this.state.quantity - 1 });
      this.props.getValue({id:this.props.id,quantity: (this.state.quantity - 1 )});
    }
  }

  render() {
      return (
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
               <div className="list-card-image">
                   {this.props.rating ? (
                    <div className="star position-absolute">
                      <Badge variant="success">
                        <Icofont icon='star'/> {this.props.rating}
                      </Badge>
                    </div>
                    )
                    :""
                }
                  <div className={`favourite-heart position-absolute ${this.props.favIcoIconColor}`}>
                    <Link to="#">
                      <Icofont icon='heart'/>
                    </Link>
                  </div>
                  {this.props.showPromoted ? (
                    <div className="member-plan position-absolute">
                      <Badge variant={this.props.promotedVariant}>Promoted</Badge>
                    </div>
                    )
                      :""
                  }
                  <Link to="#">
                    <Image src={this.props.image} className={this.props.imageClass} alt={this.props.imageAlt} />
                  </Link>
               </div>
               <div className="p-3 position-relative">
                  <div className="list-card-body">
                     <h6 className="mb-1"><Link to="#" className="text-black">{this.props.title}</Link></h6>
                     {this.props.subTitle ? (
                       <p className="text-gray mb-3">{this.props.subTitle}</p>
                       )
                       :''
                   }
                   {(this.props.price)? (
                       <p className="text-gray time mb-0">
                         <Link className="btn btn-link btn-sm pl-0 text-black pr-0" to="#">
                           {this.props.priceUnit}{this.props.price} </Link> 
                           {(this.props.isNew)? (<Badge variant="success" className='ml-1'>NEW</Badge>):"" }
                           
                         {this.state.quantity===0?
                            <span className="float-right"> 
                              <Button variant='outline-secondary' onClick={this.IncrementItem} size="sm">ADD</Button>
                            </span>
                            :
                            <span className="count-number float-right">
                               <Button variant="outline-secondary" onClick={this.DecreaseItem} className="btn-sm left dec"> <Icofont icon="minus" /> </Button>
                               <input className="count-number-input" type="text" value={this.state.quantity} readOnly/>
                               <Button variant="outline-secondary" onClick={this.IncrementItem} className="btn-sm right inc"> <Icofont icon="icofont-plus" /> </Button>
                            </span>
                         }
                       </p>
                       ):''
                   }
                  </div>
               </div>
            </div>
    );
  }
}


BestSeller.propTypes = {
  title: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageClass: PropTypes.string,
  isNew: PropTypes.bool,
  subTitle: PropTypes.string,
  price: PropTypes.number.isRequired,
  priceUnit: PropTypes.string.isRequired,
  showPromoted: PropTypes.bool,
  promotedVariant: PropTypes.string,
  favIcoIconColor: PropTypes.string,
  rating: PropTypes.string,
  id: PropTypes.number.isRequired,
  qty: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  getValue: PropTypes.func.isRequired
};
BestSeller.defaultProps = {
  imageAlt:'',
  imageClass:'',
  isNew: false,
  subTitle: '',
  price: '',
  priceUnit:'$',
  showPromoted: false,
  promotedVariant: 'dark',
  favIcoIconColor: '',
  rating: ''
}

export default BestSeller;