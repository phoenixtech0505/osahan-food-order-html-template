import React from 'react';
import {Form,InputGroup,Modal,ButtonToolbar,Button,ToggleButton,ToggleButtonGroup} from 'react-bootstrap';
import Icofont from 'react-icofont';

class AddAddressModal extends React.Component {

	render() {
    	return (
	        <Modal 
	        	show={this.props.show} 
	        	onHide={this.props.onHide}
		        centered
		   	  >
			  <Modal.Header closeButton={true}>
			    <Modal.Title as='h5' id="add-address">Add Delivery Address</Modal.Title>
			  </Modal.Header>

			  <Modal.Body>
  				<Form>
             <div className="form-row">
                <Form.Group className="col-md-12">
                   <Form.Label>Delivery Area</Form.Label>
                   <InputGroup>
                      <Form.Control type="text" placeholder="Delivery Area" />
                      <InputGroup.Append>
                         <Button variant="outline-secondary" type="button" id="button-addon2"><Icofont icon="ui-pointer"/></Button>
                      </InputGroup.Append>
                   </InputGroup>
                </Form.Group>
                <Form.Group className="col-md-12">
                   <Form.Label>Complete Address</Form.Label>
                   <Form.Control type="text" placeholder="Complete Address e.g. house number, street name, landmark" />
                </Form.Group>
                <Form.Group className="col-md-12">
                   <Form.Label>Delivery Instructions</Form.Label>
                   <Form.Control type="text" placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall" />
                </Form.Group>
                <Form.Group className="mb-0 col-md-12">
                   <Form.Label>Nickname</Form.Label>
                   <ButtonToolbar>
                      <ToggleButtonGroup className="d-flex w-100" type="radio" name="options" defaultValue={1}>
    							    <ToggleButton variant='info' value={1}>
    							      Home
    							    </ToggleButton>
    							    <ToggleButton variant='info' value={2}>
    							      Work
    							    </ToggleButton>
    							    <ToggleButton variant='info' value={3}>
    							      Other
    							    </ToggleButton>
        					    </ToggleButtonGroup>
    						  </ButtonToolbar>
                </Form.Group>
             </div>
          </Form>      
			  </Modal.Body>

			  <Modal.Footer>
			    <Button type='button' onClick={this.props.onHide} variant="outline-primary" className="d-flex w-50 text-center justify-content-center">CANCEL</Button>
			    <Button type='button' variant="primary" className='d-flex w-50 text-center justify-content-center'>SUBMIT</Button>
			  </Modal.Footer>
			</Modal>
    	);
    }
}
export default AddAddressModal;