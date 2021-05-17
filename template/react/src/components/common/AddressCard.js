import React from 'react';
import {Link} from 'react-router-dom';
import {Card,Media} from 'react-bootstrap';
import Icofont from 'react-icofont';
import PropTypes from 'prop-types'; 

class AddressCard extends React.Component {

	render() {
    	return (
        <Card className={"bg-white addresses-item mb-4 " + (this.props.boxClass)}>
            <div className="gold-members p-4">
               <Media>
                  <div className="mr-3"><Icofont icon={this.props.icoIcon} className={this.props.iconclassName} /></div>
                  <div className="media-body">
                     <h6 className="mb-1 text-secondary">{this.props.title}</h6>
                     <p className="text-black">{this.props.address}
                     </p>
                     <p className="mb-0 text-black font-weight-bold">
                        <Link className="text-primary mr-3" to="#" onClick={this.props.onEditClick}><Icofont icon="ui-edit" /> EDIT</Link>
                        <Link className="text-danger" to="#" onClick={this.props.onDeleteClick}><Icofont icon="ui-delete" /> DELETE</Link></p>
                  </div>
               </Media>
            </div>
        </Card>
    	);
    }
}

AddressCard.propTypes = {
  title: PropTypes.string.isRequired,
  icoIcon: PropTypes.string.isRequired,
  iconclassName: PropTypes.string,
  address: PropTypes.string,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default AddressCard;