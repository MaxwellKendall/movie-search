import { connect } from 'react-redux';
import ErrorWrapper from '../components/ErrorWrapper';
import { dismissError } from '../actions';

const mapStateToProps = state => ({
  errorMsg: state.error.msg,
});

const mapDispatchToProps = dispatch => ({
  dismissError: () => dispatch(dismissError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorWrapper);
