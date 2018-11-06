import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  dismissError: PropTypes.func.isRequired,
  errorMsg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default class ErrorWrapper extends React.Component {
  dismissError = () => {
    this.props.dismissError();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.errorMsg &&
        <div className="error-notification">
          <p className="error-msg">{this.props.errorMsg}</p>
          <button className="error-button" onClick={this.dismissError}>X</button>
        </div>}
        {this.props.children}
      </React.Fragment>
    );
  }
}

ErrorWrapper.propTypes = propTypes;