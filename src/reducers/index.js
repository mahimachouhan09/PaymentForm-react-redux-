import { combineReducers } from 'redux';
import paymentmode from './paymentmode';
import creditcardreducer from './creditcardreducer';
import netbankingreducer from './netbankingreducer';

export default combineReducers({
  paymentmode,
  creditcardreducer,
  netbankingreducer
});