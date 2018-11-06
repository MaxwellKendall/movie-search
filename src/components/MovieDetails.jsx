import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  closeMovieDetailsScreen: PropTypes.func.isRequired,
  showDetails: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};

export default class MovieDetails extends React.Component {
  renderPlot = () => {
    let rtrn;
    if (this.props.data.Plot) {
      rtrn = <p>{this.props.data.Plot}</p>;
    }
    return rtrn;
  }

  renderRatings = () => {
    let rtrn;
    if (this.props.data.Ratings) {
      rtrn = this.props.data.Ratings.map(rating => (
        <li className="movie-details__rating"><span>Source: {rating.Source}</span><span>Value: {rating.Value}</span></li>
      ));
    }
    return rtrn;
  }

  renderTitle = () => {
    let rtrn;
    if (this.props.data.Title) {
      rtrn = <h2>{this.props.data.Title}</h2>;
    }
    return rtrn;
  }

  renderReleasedDate = () => {
    let rtrn;
    if (this.props.data.Released) {
      rtrn = <span>{this.props.data.Title}</span>;
    }
    return rtrn;
  }

  render() {
    return (
      <React.Fragment>
        {Object.keys(this.props.data).length > 0 &&
        <div className={`movie-details__container ${cx({ hide: !this.props.showDetails })}`}>
          <div className="movie-details__details">
            <button className="movie-details__hide" onClick={this.props.closeMovieDetailsScreen}>x</button>
            {this.renderTitle()}
            {this.renderReleasedDate()}
            <div className="movie-details__details__plot">
              {this.renderPlot()}
            </div>
            <ul className="movie-details__details__ratings">
              {this.renderRatings()}
            </ul>
          </div>
        </div>}
      </React.Fragment>
    );
  }
}

MovieDetails.propTypes = propTypes;
