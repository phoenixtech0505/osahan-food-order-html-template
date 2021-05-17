import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Image} from 'react-bootstrap';

class NotFound extends React.Component {

	render() {
    	return (
    		<section className="section pt-5 pb-5 osahan-not-found-page">
		         <Container>
		            <Row>
		               <Col md={12} className="text-center pt-5 pb-5">
		                  <Image className="img-fluid" src="/img/404.png" alt="404" />
		                  <h1 className="mt-2 mb-2">Page not found</h1>
		                  <p>Uh-oh! Looks like the page you are trying to access, doesn't <br />exist. Please start afresh.</p>
		                  <Link className="btn btn-primary btn-lg" to="/">GO HOME</Link>
		               </Col>
		            </Row>
		         </Container>
		    </section>
    	);
    }
}


export default NotFound;