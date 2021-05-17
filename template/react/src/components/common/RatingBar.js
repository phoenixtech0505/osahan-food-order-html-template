import React, { Component } from 'react';
import {ProgressBar} from 'react-bootstrap';
import PropTypes from 'prop-types'; 


class RatingBar extends Component {

  render() { 
    return (
      <div className="rating-list">
        {this.props.leftText?
        	<div className="rating-list-left text-black">
	           {this.props.leftText}
	        </div>
	        :
	        ""
	    }
        <div className="rating-list-center">
           <ProgressBar now={this.props.barValue} variant={this.props.variant}>
           </ProgressBar>
        </div>
        <div className="rating-list-right text-black">{this.props.barValue} %</div>
     </div>
    );
  }
}

RatingBar.propTypes = {
  leftText: PropTypes.string,
  barValue: PropTypes.number,
  variant: PropTypes.string
};
RatingBar.defaultProps = {
  variant: "info",
}

export default RatingBar;