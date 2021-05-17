import React from 'react';
import {Row,Col} from 'react-bootstrap';
import CouponCard from '../common/CouponCard';

class Offers extends React.Component {

	render() {
    	return (
    		<>
    		    <div className='p-4 bg-white shadow-sm'>
	              <Row>
	               <Col md={12}>
	                  <h4 className="font-weight-bold mt-0 mb-3">Offers</h4>
	               </Col>
	               <Col md={6}>
	               	  <CouponCard 
						  title= 'Get 50% OFF on your first osahan eat order'
						  logoImage= 'img/bank/1.png'
						  subTitle= 'Use code OSAHANEAT50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $200'
						  copyBtnText= 'COPY CODE'
						  couponCode= 'OSAHANEAT50'
						  noBorder={false}
	               	  />
	               </Col>
	               <Col md={6}>
	               	  <CouponCard 
						  title= 'Get 50% OFF on your first osahan eat order'
						  logoImage= 'img/bank/2.png'
						  subTitle= 'Use code EAT730 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $600'
						  copyBtnText= 'COPY CODE'
						  couponCode= 'EAT730'
						  noBorder={false}
	               	  />
	               </Col>
	               <Col md={6}>
	               	  <CouponCard 
						  title= 'Get 50% OFF on your first osahan eat order'
						  logoImage= 'img/bank/3.png'
						  subTitle= 'Use code SAHAN50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $200'
						  copyBtnText= 'COPY CODE'
						  couponCode= 'SAHAN50'
						  noBorder={false}
	               	  />
	               </Col>
	               <Col md={6}>
	               	  <CouponCard 
						  title= 'Get 50% OFF on your first osahan eat order'
						  logoImage= 'img/bank/4.png'
						  subTitle= 'Use code GURDEEP50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $600'
						  copyBtnText= 'COPY CODE'
						  couponCode= 'GURDEEP50'
						  noBorder={false}
	               	  />
	               </Col>
	               <Col md={6}>
	               	  <CouponCard 
						  title= 'Get 50% OFF on your first osahan eat order'
						  logoImage= 'img/bank/5.png'
						  subTitle= 'Use code OSAHANEAT50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $200'
						  copyBtnText= 'COPY CODE'
						  couponCode= 'OSAHANEAT50'
						  noBorder={false}
	               	  />
	               </Col>
	               <Col md={6}>
	               	  <CouponCard 
						  title= 'Get 50% OFF on your first osahan eat order'
						  logoImage= 'img/bank/6.png'
						  subTitle= 'Use code OSAHANEAT50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $200'
						  copyBtnText= 'COPY CODE'
						  couponCode= 'OSAHANEAT50'
						  noBorder={false}
	               	  />
	               </Col>
	            </Row>
			    </div>
		    </>
    	);
    }
}
export default Offers;