import { connect } from 'react-redux';
import { paymentMode } from '../actions/index';
import SelectedMode from '../components/SelectedMode'

const mapStateToProps = state => ({
    paymentmode: state.paymentmode,
 } )

const mapDispatchToProps = dispatch => ({
    onclick: () => dispatch(paymentMode()),
})
export default connect( mapStateToProps, mapDispatchToProps)(SelectedMode)