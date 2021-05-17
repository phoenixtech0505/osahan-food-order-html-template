import React from 'react';
import OrderCard from '../common/OrderCard';

class Orders extends React.Component {

	render() {
    	return (
    		<>
    		    <div className='p-4 bg-white shadow-sm'>
	              <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
			      <OrderCard
			      	image='/img/3.jpg'
			      	imageAlt=''
			      	orderNumber='25102589748'
			      	orderDate='Mon, Nov 12, 6:26 PM'
			      	deliveredDate='Mon, Nov 12, 7:18 PM'
			      	orderTitle="Gus's World Famous Fried Chicken"
			      	address='730 S Mendenhall Rd, Memphis, TN 38117, USA'
			      	orderProducts='Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta in Red Sauce x 1'
			      	orderTotal='$300' 
			      	helpLink='#'
			      	detailLink='/detail' 
			      />
			      <OrderCard
			      	image='/img/4.jpg'
			      	imageAlt=''
			      	orderNumber='25102589748'
			      	orderDate='Mon, Nov 12, 6:26 PM'
			      	deliveredDate='Mon, Nov 12, 7:18 PM'
			      	orderTitle="Jimmy's Famous American Tavern"
			      	address='730 S Mendenhall Rd, Memphis, TN 38117, USA'
			      	orderProducts='Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta in Red Sauce x 1'
			      	orderTotal='$300' 
			      	helpLink='#'
			      	detailLink='/detail' 
			      />
			      <OrderCard
			      	image='/img/5.jpg'
			      	imageAlt=''
			      	orderNumber='25102589748'
			      	orderDate='Mon, Nov 12, 6:26 PM'
			      	deliveredDate='Mon, Nov 12, 7:18 PM'
			      	orderTitle="The Famous Restaurant"
			      	address='730 S Mendenhall Rd, Memphis, TN 38117, USA'
			      	orderProducts='Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta in Red Sauce x 1'
			      	orderTotal='$300' 
			      	helpLink='#'
			      	detailLink='/detail' 
			      />
			    </div>
		    </>
    	);
    }
}
export default Orders;