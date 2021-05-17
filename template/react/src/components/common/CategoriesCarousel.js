import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import ProductBox from '../home/ProductBox';

class CategoriesCarousel extends React.Component {

	render() {
    	return (
	      <OwlCarousel nav loop {...options} className="owl-carousel-category owl-theme">
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='American'
	         		counting='156'
			   		image='img/list/1.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Pizza'
	         		counting='120'
			   		image='img/list/2.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Healthy'
	         		counting='130'
			   		image='img/list/3.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Vegetarian'
	         		counting='120'
			   		image='img/list/4.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Chinese'
	         		counting='111'
			   		image='img/list/5.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Hamburgers'
	         		counting='958'
			   		image='img/list/6.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Dessert'
	         		counting='56'
			   		image='img/list/7.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Chicken'
	         		counting='40'
			   		image='img/list/8.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Indian'
	         		counting='156'
			   		image='img/list/9.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	      </OwlCarousel>
	    );
	}
}

const options={
	responsive: {
        0:{
            items:3,
        },
        600:{
            items:4,
        },
        1000: {
          items: 6,
        },
        1200: {
          items: 8,
        },
      },
      loop: true,
      lazyLoad: true,
      autoplay: true,
      dots: false,
      autoplaySpeed: 1000,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}

export default CategoriesCarousel;