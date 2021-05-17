import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {Row,Col,Container,Badge,Button,Breadcrumb,Alert} from 'react-bootstrap';

class Extra extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  show: true,
		};
	}

    handleDismiss = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

	render() {
    	return (
    		
	      <section className="section pt-5 pb-5">
	         <Container>
	            <Row>
	               <Col md={8} className="mx-auto bg-white p-5 rounded">
	                  <h1>Example heading <Badge variant="secondary">New</Badge></h1>
	                  <h2>Example heading <Badge variant="secondary">New</Badge></h2>
	                  <h3>Example heading <Badge variant="secondary">New</Badge></h3>
	                  <h4>Example heading <Badge variant="secondary">New</Badge></h4>
	                  <h5>Example heading <Badge variant="secondary">New</Badge></h5>
	                  <h6>Example heading <Badge variant="secondary">New</Badge></h6>
	                  <hr />
	                  <Button type="button" variant="primary">
	                  	Notifications <Badge variant="light">4</Badge>
	                  </Button>
	                  <hr />
	                  <Badge variant="primary" className='mr-1'>Primary</Badge>
	                  <Badge variant="secondary" className='mr-1'>Secondary</Badge>
	                  <Badge variant="success" className='mr-1'>Success</Badge>
	                  <Badge variant="danger" className='mr-1'>Danger</Badge>
	                  <Badge variant="warning" className='mr-1'>Warning</Badge>
	                  <Badge variant="info" className='mr-1'>Info</Badge>
	                  <Badge variant="light" className='mr-1'>Light</Badge>
	                  <Badge variant="dark" className='mr-1'>Dark</Badge>
	                  <hr />
	                  <Badge pill variant="primary" className='mr-1'>Primary</Badge>
	                  <Badge pill variant="secondary" className='mr-1'>Secondary</Badge>
	                  <Badge pill variant="success" className='mr-1'>Success</Badge>
	                  <Badge pill variant="danger" className='mr-1'>Danger</Badge>
	                  <Badge pill variant="warning" className='mr-1'>Warning</Badge>
	                  <Badge pill variant="info" className='mr-1'>Info</Badge>
	                  <Badge pill variant="light" className='mr-1'>Light</Badge>
	                  <Badge pill variant="dark" className='mr-1'>Dark</Badge>
	                  <hr />
	                  <Breadcrumb>
						  <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
						  <Breadcrumb.Item href='/myaccount'>Library</Breadcrumb.Item>
						  <Breadcrumb.Item active>Data</Breadcrumb.Item>
					  </Breadcrumb>
	                  <Breadcrumb>
						  <li className="breadcrumb-item">
						  	<NavLink to="/">Home</NavLink>
						  </li>
						  <li className="breadcrumb-item active">
						  	Library
						  </li>
					  </Breadcrumb>
	                  <hr />
	                  <Button type="button" variant="primary" className='mr-1'>Primary</Button>
	                  <Button type="button" variant="secondary" className='mr-1'>Secondary</Button>
	                  <Button type="button" variant="success" className='mr-1'>Success</Button>
	                  <Button type="button" variant="danger" className='mr-1'>Danger</Button>
	                  <Button type="button" variant="warning" className='mr-1'>Warning</Button>
	                  <Button type="button" variant="info" className='mr-1'>Info</Button>
	                  <Button type="button" variant="light" className='mr-1'>Light</Button>
	                  <Button type="button" variant="dark" className='mr-1'>Dark</Button>
	                  <Button type="button" variant="link" className='mr-1'>Link</Button>
	                  <hr />
	                  <Button type="button" variant="outline-primary" className='mr-1'>Primary</Button>
	                  <Button type="button" variant="outline-secondary" className='mr-1'>Secondary</Button>
	                  <Button type="button" variant="outline-success" className='mr-1'>Success</Button>
	                  <Button type="button" variant="outline-danger" className='mr-1'>Danger</Button>
	                  <Button type="button" variant="outline-warning" className='mr-1'>Warning</Button>
	                  <Button type="button" variant="outline-info" className='mr-1'>Info</Button>
	                  <Button type="button" variant="outline-light" className='mr-1'>Light</Button>
	                  <Button type="button" variant="outline-dark" className='mr-1'>Dark</Button>
	                  <hr />
	                  <Alert className="alert alert-primary" role="alert">
	                     A simple primary alert—check it out!
	                  </Alert>
	                  <Alert className="alert alert-secondary" role="alert">
	                     A simple secondary alert—check it out!
	                  </Alert>
	                  <Alert className="alert alert-success" role="alert">
	                     A simple success alert—check it out!
	                  </Alert>
	                  <Alert variant="danger" role="alert">
	                     A simple danger alert—check it out!
	                  </Alert>
	                  <Alert variant="warning" role="alert">
	                     A simple warning alert—check it out!
	                  </Alert>
	                  <Alert variant="info" role="alert">
	                     A simple info alert—check it out!
	                  </Alert>
	                  <Alert variant="light" role="alert">
	                     A simple light alert—check it out!
	                  </Alert>
	                  <Alert variant="dark" role="alert">
	                     A simple dark alert—check it out!
	                  </Alert>
	                  <hr />
	                  <Alert variant="primary" role="alert">
	                     A simple primary alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
	                  </Alert>
	                  <Alert variant="secondary" role="alert">
	                     A simple secondary alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
	                  </Alert>
	                  <Alert variant="success" role="alert">
	                     A simple success alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
	                  </Alert>
	                  <Alert variant="danger" role="alert">
	                     A simple danger alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
	                  </Alert>
	                  <Alert variant="warning" role="alert">
	                     A simple warning alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
	                  </Alert>
	                  <Alert variant="info" role="alert">
	                     A simple info alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
	                  </Alert>
	                  <Alert variant="light" role="alert">
	                     A simple light alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
	                  </Alert>
	                  <Alert variant="dark" role="alert">
	                     A simple dark alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
	                  </Alert>
	                  <Alert variant="success" role="alert">
	                     <h4 className="alert-heading">Well done!</h4>
	                     <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
	                     <hr />
	                     <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
	                  </Alert>
	                  {this.state.show?(
		                  <Alert variant="warning" dismissible role="alert" onClose={this.handleDismiss}>
		                     <strong>Holy guacamole!</strong> You should check in on some of those fields below.
		                  </Alert>
		                  ):""
		              }

	               </Col>
	            </Row>
	         </Container>
	      </section>
    	);
    }
}


export default Extra;