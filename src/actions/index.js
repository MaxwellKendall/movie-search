import { createAction } from 'redux-actions';
import axios from 'axios';
import { secret } from '../secrets';

/* eslint-disable import/prefer-default-export */
export const updateSearchTerm = createAction('UPDATE_SEARCH_TERM');
export const getMovieRequest = createAction('GET_MOVIE_REQUEST');
export const getMovieSuccess = createAction('GET_MOVIE_SUCCESS');
export const getMovieError = createAction('GET_MOVIE_ERROR');

export const getMovieDetailsRequest = createAction('GET_MOVIE_DETAILS_REQUEST');
export const getMovieDetailsSuccess = createAction('GET_MOVIE_DETAILS_SUCCESS');
export const getMovieDetailsError = createAction('GET_MOVIE_DETAILS_ERROR');
export const closeMovieDetailsScreen = createAction('CLOSE_MOVIE_DETAILS_SCREEN');
export const setError = createAction('SET_ERROR');
export const dismissError = createAction('DISMISS_ERROR');

export const getMovieBySearchTerm = (page = 1) => (
  (dispatch, getState) => {
    dispatch(getMovieRequest());
    return axios.get(`http://www.omdbapi.com/?s=${getState().gallery.searchTerm}&page=${page}&r=json&apikey=${secret}`)
      .then((resp) => {
        if (resp.data.Response === 'True') {
          dispatch(dismissError());
          dispatch(getMovieSuccess(resp.data));
        } else {
          throw resp.data.Error;
        }
      })
      .catch((err) => {
        dispatch(setError(err));
        dispatch(getMovieError(err));
      });
  }
);

export const getMovieDetails = (title, year) => (
  (dispatch) => {
    dispatch(getMovieDetailsRequest());
    return axios.get(`http://www.omdbapi.com/?t=${title}&y=${year}&apikey=${secret}`)
      .then((resp) => {
        dispatch(dismissError());
        dispatch(getMovieDetailsSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(setError(err.data.Error));
        dispatch(getMovieDetailsError(err.data.Error));
      });
  }
);
