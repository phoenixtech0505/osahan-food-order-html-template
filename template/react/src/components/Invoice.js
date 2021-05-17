import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Image,Table} from 'react-bootstrap';
import Icofont from 'react-icofont';
import HeadingValue from './common/HeadingValue';
import PageTitle from './common/PageTitle';

class Invoice extends React.Component {

	render() {
    	return (
    		<>
    			<PageTitle 
	    			title="Invoice"
	    			subTitle="Order #25102589748"
	    		/>
		      <section className="section pt-5 pb-5">
		         <Container>
		            <Row>
		               <Col md={8} className="mx-auto">
		                  <div className="p-5 osahan-invoice bg-white shadow-sm">
		                     <Row className="mb-5 pb-3">
		                        <Col md={8} xs={10}>
		                           <h3 className="mt-0">Thanks for choosing <strong className="text-secondary">Osahan Eat</strong>, Gurdeep ! Here are your order details: </h3>
		                        </Col>
		                        <Col md={4} xs={2} className="pl-0 text-right">
		                           <p className="mb-4 mt-2">
		                              <Link className="text-primary font-weight-bold" to="#"><Icofont icon="clock-print"/> PRINT</Link>
		                           </p>
		                           <Image alt="logo" src="/img/favicon.png" />
		                        </Col>
		                     </Row>
		                     <Row>
		                        <Col md={6}>
		                           <HeadingValue 
		                           		heading='Order No:'
		                           		value='#25102589748'
		                           		className="text-black"
		                           />
		                           <HeadingValue 
		                           		heading='Order placed at:'
		                           		value='12/11/2018, 06:26 PM'
		                           />
		                           <HeadingValue 
		                           		heading='Order delivered at:'
		                           		value='12/11/2018, 07:18 PM'
		                           />
		                           <HeadingValue 
		                           		heading='Order Status:'
		                           		value='Delivered'
		                           		valueClassName='text-success'
		                           />
		                        </Col>
		                        <Col md={6}>
		                           <HeadingValue 
		                           		heading='Delivery To:'
		                           		className="text-black"
		                           />
		                           <HeadingValue 
		                           		className="text-primary"
		                           		value='Gurdeep Singh Osahan'
		                           />
		                           <HeadingValue 
		                           		heading='291/d/1, 291, Jawaddi Kalan, Ludhiana, Punjab
		                              141002, India'
		                           />
		                        </Col>
		                     </Row>
		                     <Row className="mt-5">
		                        <Col md={12}>
		                           <HeadingValue 
		                           		heading='Ordered from:'
		                           />
		                           <h6 className="mb-1 text-black"><strong>Shahi Khansama</strong></h6>
		                           <HeadingValue 
		                           		heading='Shop 3, Model Town Extension, Model Town, Ludhiana'
		                           />
		                           <Table className="mt-3 mb-0">
		                              <thead className="thead-light">
		                                 <tr>
		                                    <th className="text-black font-weight-bold" scope="col">Item Name</th>
		                                    <th className="text-right text-black font-weight-bold" scope="col">Quantity</th>
		                                    <th className="text-right text-black font-weight-bold" scope="col">Price</th>
		                                 </tr>
		                              </thead>
		                              <tbody>
		                                 <tr>
		                                    <td>Veg Masala Roll</td>
		                                    <td className="text-right">01</td>
		                                    <td className="text-right">$49</td>
		                                 </tr>
		                                 <tr>
		                                    <td>Veg Burger</td>
		                                    <td className="text-right">01</td>
		                                    <td className="text-right">$45</td>
		                                 </tr>
		                                 <tr>
		                                    <td>Veg Penne Pasta in Red Sauce</td>
		                                    <td className="text-right">01</td>
		                                    <td className="text-right">$135</td>
		                                 </tr>
		                                 <tr>
		                                    <td className="text-right" colSpan="2">Item Total:</td>
		                                    <td className="text-right"> $229</td>
		                                 </tr>
		                                 <tr>
		                                    <td className="text-right" colSpan="2">GST:</td>
		                                    <td className="text-right"> $9.6</td>
		                                 </tr>
		                                 <tr>
		                                    <td className="text-right" colSpan="2">Delivery Charges:</td>
		                                    <td className="text-right"> $00</td>
		                                 </tr>
		                                 <tr>
		                                    <td className="text-right" colSpan="2">Discount Applied (GURDEEP50):</td>
		                                    <td className="text-right"> $141.97</td>
		                                 </tr>
		                                 <tr>
		                                    <td className="text-right" colSpan="2">
		                                       <h6 className="text-success">Grand Total:</h6>
		                                    </td>
		                                    <td className="text-right">
		                                       <h6 className="text-success"> $96</h6>
		                                    </td>
		                                 </tr>
		                              </tbody>
		                           </Table>
		                        </Col>
		                     </Row>
		                  </div>
		               </Col>
		            </Row>
		         </Container>
		      </section>
		    </>
    	);
    }
}


export default Invoice;