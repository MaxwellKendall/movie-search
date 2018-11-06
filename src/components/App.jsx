import React from 'react';
// import { Route } from 'react-router-dom';
import SearchContainer from '../containers/SearchContainer';
import MovieGallery from '../containers/MovieGalleryContainer';
import MovieDetails from '../containers/MovieDetailsContainer';
import ErrorWrapperContainer from '../containers/ErrorWrapperContainer';

const App = () => (
  <div className="main">
    <ErrorWrapperContainer>
      <SearchContainer />
      <MovieGallery />
      <MovieDetails />
    </ErrorWrapperContainer>
  </div>
);

export default App;
