import React from 'react';
import {Row,Col,Button,Spinner} from 'react-bootstrap';
import CardItem from '../common/CardItem';

class Favourites extends React.Component {

	render() {
    	return (
    		<>
    		    <div className='p-4 bg-white shadow-sm'>
	              <Row>
	                 <Col md={12}>
	                    <h4 className="font-weight-bold mt-0 mb-3">Favourites</h4>
	                 </Col>
	                 <Col md={4} sm={6} className="mb-4 pb-2">
	                    <CardItem 
					   		title='Bite Me Sandwiches'
							subTitle='North Indian • American • Pure veg'
						  	imageAlt='Product'
						    image='img/list/1.png'
						    imageClass='img-fluid item-img'
						    linkUrl='detail'
						    offerText='65% off Coupon OSAHAN50'
						    offerColor='danger'
							time='15–25 min'
							price='$100 FOR TWO'
							showPromoted={true}
							promotedVariant='dark'
							favIcoIconColor='text-danger'
							rating='3.1 (300+)'
					   	/>
	                 </Col>
	                 <Col md={4} sm={6} className="mb-4 pb-2">
	                    <CardItem 
					   		title='Bite Me Sandwiches'
							subTitle='North Indian • American • Pure veg'
						  	imageAlt='Product'
						    image='img/list/2.png'
						    imageClass='img-fluid item-img'
						    linkUrl='detail'
						    offerText='65% off Coupon OSAHAN50'
						    offerColor='danger'
							time='15–25 min'
							price='$100 FOR TWO'
							showPromoted={true}
							promotedVariant='dark'
							favIcoIconColor='text-danger'
							rating='3.1 (300+)'
					   	/>
	                 </Col>
	                 <Col md={4} sm={6} className="mb-4 pb-2">
	                    <CardItem 
					   		title='Bite Me Sandwiches'
							subTitle='North Indian • American • Pure veg'
						  	imageAlt='Product'
						    image='img/list/3.png'
						    imageClass='img-fluid item-img'
						    linkUrl='detail'
						    offerText='65% off Coupon OSAHAN50'
						    offerColor='danger'
							time='15–25 min'
							price='$100 FOR TWO'
							showPromoted={true}
							promotedVariant='dark'
							favIcoIconColor='text-danger'
							rating='3.1 (300+)'
					   	/>
	                 </Col>
	                 <Col md={4} sm={6} className="mb-4 pb-2">
	                    <CardItem 
					   		title='Bite Me Sandwiches'
							subTitle='North Indian • American • Pure veg'
						  	imageAlt='Product'
						    image='img/list/4.png'
						    imageClass='img-fluid item-img'
						    linkUrl='detail'
						    offerText='65% off Coupon OSAHAN50'
						    offerColor='danger'
							time='15–25 min'
							price='$100 FOR TWO'
							showPromoted={true}
							promotedVariant='dark'
							favIcoIconColor='text-danger'
							rating='3.1 (300+)'
					   	/>
	                 </Col>
	                 <Col md={4} sm={6} className="mb-4 pb-2">
	                    <CardItem 
					   		title='Bite Me Sandwiches'
							subTitle='North Indian • American • Pure veg'
						  	imageAlt='Product'
						    image='img/list/5.png'
						    imageClass='img-fluid item-img'
						    linkUrl='detail'
						    offerText='65% off Coupon OSAHAN50'
						    offerColor='danger'
							time='15–25 min'
							price='$100 FOR TWO'
							showPromoted={true}
							promotedVariant='dark'
							favIcoIconColor='text-danger'
							rating='3.1 (300+)'
					   	/>
	                 </Col>
	                 <Col md={4} sm={6} className="mb-4 pb-2">
	                    <CardItem 
					   		title='Bite Me Sandwiches'
							subTitle='North Indian • American • Pure veg'
						  	imageAlt='Product'
						    image='img/list/6.png'
						    imageClass='img-fluid item-img'
						    linkUrl='detail'
						    offerText='65% off Coupon OSAHAN50'
						    offerColor='danger'
							time='15–25 min'
							price='$100 FOR TWO'
							showPromoted={true}
							promotedVariant='dark'
							favIcoIconColor='text-danger'
							rating='3.1 (300+)'
					   	/>
	                 </Col>
	                 <Col md={4} sm={6} className="mb-4 pb-2">
	                    <CardItem 
					   		title='Bite Me Sandwiches'
							subTitle='North Indian • American • Pure veg'
						  	imageAlt='Product'
						    image='img/list/7.png'
						    imageClass='img-fluid item-img'
						    linkUrl='detail'
						    offerText='65% off Coupon OSAHAN50'
						    offerColor='danger'
							time='15–25 min'
							price='$100 FOR TWO'
							showPromoted={true}
							promotedVariant='dark'
							favIcoIconColor='text-danger'
							rating='3.1 (300+)'
					   	/>
	                 </Col>
	                 <Col md={4} sm={6} className="mb-4 pb-2">
	                    <CardItem 
					   		title='Bite Me Sandwiches'
							subTitle='North Indian • American • Pure veg'
						  	imageAlt='Product'
						    image='img/list/8.png'
						    imageClass='img-fluid item-img'
						    linkUrl='detail'
						    offerText='65% off Coupon OSAHAN50'
						    offerColor='danger'
							time='15–25 min'
							price='$100 FOR TWO'
							showPromoted={true}
							promotedVariant='dark'
							favIcoIconColor='text-danger'
							rating='3.1 (300+)'
					   	/>
	                 </Col>
	                 <Col md={4} sm={6} className="mb-4 pb-2">
	                    <CardItem 
					   		title='Bite Me Sandwiches'
							subTitle='North Indian • American • Pure veg'
						  	imageAlt='Product'
						    image='img/list/9.png'
						    imageClass='img-fluid item-img'
						    linkUrl='detail'
						    offerText='65% off Coupon OSAHAN50'
						    offerColor='danger'
							time='15–25 min'
							price='$100 FOR TWO'
							showPromoted={true}
							promotedVariant='dark'
							favIcoIconColor='text-danger'
							rating='3.1 (300+)'
					   	/>
	                 </Col>
	                 <Col md={12} className="text-center load-more">
	                    <Button variant="primary" type="button" disabled="">
	                    	<Spinner animation="grow" size="sm" className='mr-1' />
	                        Loading...
	                    </Button>  
	                 </Col>
	              </Row>
			    </div>
		    </>
    	);
    }
}
export default Favourites;