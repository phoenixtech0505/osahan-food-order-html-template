import React from 'react';
import PropTypes from 'prop-types'; 

class FontAwesome extends React.Component {
	render() {
    	return (
	      <i className={`fa fa-${this.props.icon} ${this.props.className}`}></i>
		);
	}
}


FontAwesome.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};
FontAwesome.defaultProps = {
  	icon:'',
  	className:'',
}

export default FontAwesome;