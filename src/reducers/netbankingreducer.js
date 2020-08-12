import { NET_BANKING } from '../actions/actionType';

const netbankingreducer = (state = [], action) => {
  switch(action.type) {
    case NET_BANKING:
      return [
        ...state,{
          fromAccountNo : action.fromAccountNo,
          beneficiaryAccountNoCpin :action.beneficiaryAccountNoCpin,
          beneficiaryAccountName : action.beneficiaryAccountName,
          beneficiaryBankName : action.beneficiaryBankName,
          beneficiaryBankIfscCode :action.beneficiaryBankIfscCode,
          remark : action.remark,
          ammount : action.ammount,
          paymentType : action.paymentType,
        }
      ]
    default: return state
  }
}
  
export default netbankingreducer;