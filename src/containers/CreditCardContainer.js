import { connect } from 'react-redux';
import { creditCard } from '../actions/index';
import CreditCardOrderConfirmed  from '../components/CreditCardOrderConfirmed';

const mapStateToProps = state => ({
  creditcardreducer: state.creditcardreducer,
 })

const mapDispatchToProps = dispatch => ({
  onclick: () => dispatch(creditCard()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardOrderConfirmed)