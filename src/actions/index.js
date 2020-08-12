import { PAYMENT_MODE ,CREDIT_CARD ,DEBIT_CARD ,NET_BANKING } from './actionType';

export const paymentMode= (paymentmode)=>({
  type :PAYMENT_MODE,
  paymentmode: paymentmode
})

export const creditCard = (number,name,expiry,cvc,focus,fullname,email,address,zipcode) => ({
  type :CREDIT_CARD,
  name: name,
  number: number,
  expiry: expiry,
  cvc: cvc,
  focus :focus,
  fullname:fullname,
  email:email,
  address:address,
  zipcode:zipcode
})

export const debitCard = (name,number,expiry,cvc,focus,fullname,email,address,zipcode) => ({
  type : DEBIT_CARD,
  name : name,
  number : number,
  expiry: expiry,
  cvc: cvc,
  focus :focus,
  fullname:fullname,
  email:email,
  address:address,
  zipcode:zipcode
})

export const netBanking = (fromAccountNo, beneficiaryAccountNoCpin, beneficiaryAccountName,
  beneficiaryBankName,beneficiaryBankIfscCode ,remark,ammount,paymentType)=>({
    type :NET_BANKING,
    fromAccountNo:fromAccountNo,
    beneficiaryAccountNoCpin :beneficiaryAccountNoCpin,
    beneficiaryAccountName :beneficiaryAccountName,
    beneficiaryBankName :beneficiaryBankName,
    beneficiaryBankIfscCode :beneficiaryBankIfscCode,
    remark:remark,
    ammount:ammount,
    paymentType:paymentType,
})