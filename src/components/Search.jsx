import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  getMovieBySearchTerm: PropTypes.func.isRequired,
};

class Search extends Component {
  onKeyPress = (e) => {
    e.persist();
    if (e.key === 'Enter') {
      this.props.getMovieBySearchTerm();
    }
  }

  updateSearchTerm = (e) => {
    e.persist();
    this.props.updateSearchTerm(e.target.value);
  };

  render() {
    return (
      <div className="search">
        <input type="text" value={this.props.searchTerm} onKeyPress={this.onKeyPress} onChange={e => this.updateSearchTerm(e)} placeholder="Search for a movie" />
        <button onClick={this.props.getMovieBySearchTerm}>Search</button>
      </div>
    );
  }
};

Search.propTypes = propTypes;
export default Search;
