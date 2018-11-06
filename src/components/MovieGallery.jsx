import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
  })),
  getMoviesBySearchTerm: PropTypes.func.isRequired,
  getMovieDetails: PropTypes.func.isRequired,
};

const defaultProps = {
  loading: false,
  movies: [],
};

export default class MovieGallery extends React.Component {
  componentDidMount() {
    this.props.getMoviesBySearchTerm();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movies !== this.props.movies) {
      this.renderGallery();
    }
  }

  renderGallery = () => this.props.movies.map(movie => (
    <li key={movie.imbID}>
      <span>{movie.Title}</span>
      <span>{movie.Year}</span>
      <img src={movie.Poster} alt={movie.Title} />
      <button onClick={() => this.props.getMovieDetails(movie.Title, movie.Year)}>Details</button>
    </li>
  ));

  render() {
    return (
      <React.Fragment>
        {this.props.loading && <h2>Loading...</h2>}
        {this.props.movies.length > 0 && !this.props.loading &&
          <ul className="gallery">{this.renderGallery()}</ul>}
      </React.Fragment>
    );
  }
}

MovieGallery.propTypes = propTypes;
MovieGallery.defaultProps = defaultProps;
