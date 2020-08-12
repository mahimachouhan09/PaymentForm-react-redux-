import { connect } from 'react-redux';
import { netBanking } from '../actions';
import NetBankingOrderConfirmed from '../components/NetBankingOrderConfirmed';

const mapStateToProps = state => ({
  netbankingreducer : state.netbankingreducer,
 })

const mapDispatchToProps = dispatch => ({
  onclick: () => dispatch(netBanking()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NetBankingOrderConfirmed)