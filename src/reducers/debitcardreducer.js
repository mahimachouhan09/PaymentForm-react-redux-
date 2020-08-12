import { DEBIT_CARD} from '../actions/actionType';

const debitcardreducer = (state = [], action) => {
  switch(action.type) {
    case DEBIT_CARD:
      return [
        ...state,{
          number: action.number,
          name: action.name,
          expiry: action.expiry,
          cvc : action.cvc,
          focus: action.focus,
          fullname:action.fullname,
          email:action.email,
          address:action.address,
          zipcode:action.zipcode
        }
      ]
    default: return state
  }
}
  
export default debitcardreducer;