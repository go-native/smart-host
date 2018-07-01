import { connect } from 'react-redux'
import Form from '../components/form/Form';
import { optimizeGuests } from '../actions';

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (formData) => {
      dispatch(optimizeGuests(formData))
    }
  }
}

const SmartForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default SmartForm