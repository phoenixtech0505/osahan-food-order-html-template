import React from 'react';
import PropTypes from 'prop-types'; 

class HeadingValue extends React.Component {

	render() {
    	return (
    		<p className={"mb-1 " + this.props.className}>{this.props.heading} 
    			{this.props.value?
    				<strong className={this.props.valueClassName}>#25102589748</strong>
    				:""
	            }
    		</p>
    	);
    }
}

HeadingValue.propTypes = {
  heading: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  valueClassName: PropTypes.string
};
HeadingValue.defaultProps = {
  value: '',
  className:'',
  valueClassName:''
}

export default HeadingValue;