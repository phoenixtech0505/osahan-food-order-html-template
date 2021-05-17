import React from 'react';
import PropTypes from 'prop-types'; 

class PageTitle extends React.Component {

	render() {
    	return (
	      <section className="breadcrumb-osahan pt-5 pb-5 bg-dark position-relative text-center">
	         <h1 className="text-white">{this.props.title}</h1>
	         {this.props.subTitle?
	         	<h6 className="text-white-50">{this.props.subTitle}</h6>
	         	:""
	         }
	      </section>
    	);
    }
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};
PageTitle.defaultProps = {
  subTitle: ''
}

export default PageTitle;