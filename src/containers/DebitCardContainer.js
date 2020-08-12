import { connect } from 'react-redux';
import { debitCard } from '../actions/index';
import DebitCardOrderConfirmed  from '../components/DebitCardOrderConfirmed';

const mapStateToProps = state => ({
  debitcardreducer: state.debitcardreducer,
 })

const mapDispatchToProps = dispatch => ({
  onclick: () => dispatch(debitCard()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DebitCardOrderConfirmed)