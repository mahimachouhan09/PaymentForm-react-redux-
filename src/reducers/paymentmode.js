import {PAYMENT_MODE} from '../actions/actionType';

const paymentmode = (state = [], action) => {
  switch(action.type) {
    case PAYMENT_MODE:
      return [
        ...state,{
        paymentmode: action.paymentmode,
        }
      ]
    default: return state
  }
}
  
export default paymentmode;