import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import {Image,Button} from 'react-bootstrap';

class GalleryCarousel extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      itemscount: 0,
      showing:0
    }; 
    this.Carousel = React.createRef();            
  }

	render() {
    	return (
	      <>
		      <OwlCarousel ref={this.Carousel}  nav loop {...options} className="owl-theme homepage-ad">
		         <div className="item">
		         	<Image fluid src="/img/gallery/1.png" />
		         </div>
		         <div className="item">
		         	<Image fluid src="/img/gallery/2.png" />
		         </div>
		         <div className="item">
		         	<Image fluid src="/img/gallery/3.png" />
		         </div>
		         <div className="item">
		         	<Image fluid src="/img/gallery/1.png" />
		         </div>
		         <div className="item">
		         	<Image fluid src="/img/gallery/2.png" />
		         </div>
		         <div className="item">
		         	<Image fluid src="/img/gallery/3.png" />
		         </div>
		      </OwlCarousel>
	          <div className="position-absolute restaurant-slider-pics bg-dark text-white">2 of 14 Photos</div>
	          <div className="position-absolute restaurant-slider-view-all"><Button variant='light' type="button" className="bg-white">See all Photos</Button></div>
	    	</>
	    );
	}
}

const options={
	responsive: {
        0:{
            items:2,
        },
        764:{
            items:2,
        },
        765: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
      lazyLoad: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      autoplayTimeout: 2000,
      nav: true,
      navText:["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      autoplayHoverPause: true,
}

export default GalleryCarousel;