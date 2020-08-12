import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect} from 'react-redux';
import { netBanking } from '../actions/index'
import NetBankingContainer from '../containers/NetBankingContainer'

export class NetBanking extends Component {
  constructor(props){
    super(props);
    this.state = ({
      fromAccountNo:'',
      beneficiaryAccountNoCpin :'',
      beneficiaryAccountName :'',
      beneficiaryBankName :'',
      beneficiaryBankIfscCode :'',
      remark:'',
      ammount:'',
      paymentType:'',
    });
  }

  onAccountNohandle = (e) => this.setState({ fromAccountNo : e.target.value})
  onCpinhandle = (e) => this.setState({ beneficiaryAccountNoCpin : e.target.value})
  onAccountNamehandle = (e) => this.setState({beneficiaryAccountName: e.target.value})
  onBankNamehandle = (e) => this.setState({beneficiaryBankName: e.target.value})
  onRemarkhandle = (e) => this.setState({remark: e.target.value})
  onAmmounthandle = (e) => this.setState({ammount: e.target.value})
  onPaymentTypehandle = (e) => this.setState({paymentType: e.target.value})

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.netBanking(
    this.state.fromAccountNo,
    this.state.beneficiaryAccountNoCpin,
    this.state.beneficiaryAccountName,
    this.state.beneficiaryBankName,
    this.state.remark,
    this.state.ammount,
    this.state.paymentType,
    )
 }

  render() {
    return (
      <div>
        <Link to="/">Go Back </Link>
        <h1>Net Banking</h1>
        <form onSubmit = {this.onFormSubmit}>
          <label>From Account number</label>
          <input type = 'tel' placeholder = 'account number'
            value = { this.state.fromAccountNo }
            onChange = { this.onAccountNohandle}
            required
          /><br />

            <label>Beneficiary Account No.(CPIN)</label>
            <input type = 'tel' placeholder = 'CPIN'
              value = { this.state.beneficiaryAccountNoCpin }
              onChange = { this.onCpinhandle}
              required
            /><br />

           <label>Beneficiary Account Name</label>
           <input type = 'text' placeholder = 'beneficiary Account Name)'
              value = { this.state.beneficiaryAccountName }
              onChange = { this.onAccountNamehandle}
              required
            /><br />

            <label>Beneficiary Bank Name</label>
           <input type = 'text' placeholder = 'beneficiary bank Name)'
              value = { this.state.beneficiaryBankName }
              onChange = { this.onBankNamehandle}
              required
            /><br />

            <label>Remark</label>
            <input type = 'text' placeholder = 'remark'
              value = { this.state.remark }
              onChange = { this.onRemarkhandle}
            /><br />

            <label>Ammount</label>
            <input type = 'tel' placeholder = 'ammount'
              value = { this.state.ammount }
              onChange = { this.onAmmounthandle}
              required
            /><br />

            <label>Payment Type</label>
            <input type = 'tel' placeholder = 'ammount' value = { this.state.paymentType }
              onChange = { this.onPaymentTypehandle}
              required
            /><br />
          <br/><br/>
          
          <Link to={`/netbankingorderconfirmed`}>
            <button type = 'submit' >submit </button>
          </Link>
          {/* <NetBankingContainer /> */}
        </form>   
      </div>
    )
  }
}

export default connect(null, { netBanking })(NetBanking)