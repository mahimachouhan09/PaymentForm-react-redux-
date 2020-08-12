import React, { Component } from 'react'
import { connect } from 'react-redux'
import {paymentMode} from '../actions/index'

class PaymentOptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      paymentmode: ''
    });
  }

  onRadioChange = (e) => {
    if (e.target.checked && e.target.value === "credit card") {
      window.location.href = "./creditcard"; 
    }

    if (e.target.checked && e.target.value === "debit card") {
      window.location.href = "./debitcard"; 
    }
    
    if (e.target.checked && e.target.value === "netbanking") {
      window.location.href = "./netbanking"; 
    }

    if (e.target.checked && e.target.value === "cashondelivery") {
      window.location.href = "./cashondelivery"; 
    }

    this.setState({
      paymentmode: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.paymentMode(this.state.paymentmode)
  }
  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit} align ='center'>
          <h3>Select payment method</h3>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="credit card"
                  checked={this.state.paymentmode === "credit card"}
                  onChange={this.onRadioChange}
                />
                <span>credit card</span>
              </label><br/>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="debit card"
                  checked={this.state.paymentmode === "debit card"}
                  onChange={this.onRadioChange}
                />
                <span>debit card</span>
              </label><br/>

            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="netbanking"
                  checked={this.state.paymentmode === "netbanking"}
                  onChange={this.onRadioChange}
                />
                <span>netbanking</span>
                </label><br/>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="cashondelivery"
                  checked={this.state.paymentmode === "cashondelivery"}
                  onChange={this.onRadioChange}
                />
                <span>cash on delivery(COD)</span>
              </label>
            </li>
          </ul>
          <button 
          hidden= {true}
          type="submit">Choose one payment mode</button>
        </form>
      </div>
    )
  }
}

export default connect(null ,{paymentMode})(PaymentOptionForm)
