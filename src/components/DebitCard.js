import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { debitCard } from '../actions/index';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export class DebitCard extends Component {
  constructor(props){
    super(props);
    this.state = ({
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      focus: '',   
      fullname:'',
      email:'',
      address:'',
      zipcode:'',
    });
  }
  
  handleNumberFocus = (e) => {this.setState({ focus: e.target.number });}
  handleNameFocus = (e) => { this.setState({ focus: e.target.name });}
  handleExpiryFocus = (e) => {this.setState({ focus: e.target.expiry });}
  handleCvcFocus = (e) => { this.setState({ focus: e.target.cvc });}

  handleNumberChange = (e) => this.setState({number: e.target.value})
  handleNameChange = (e) => this.setState({name: e.target.value})
  handleExpiryChange = (e) => this.setState({expiry: e.target.value})
  handleCvcChange = (e) => this.setState({cvc: e.target.value})

  handleFullnameChange = (e) => this.setState({fullname: e.target.value})
  handleEmailChange = (e) => this.setState({email: e.target.value})
  handleAddressChange = (e) => this.setState({address: e.target.value})
  handleZipcodeChange = (e) => this.setState({zipcode: e.target.value})
  
  handleEmailValidate = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.creditCard(
      this.state.number,this.state.name,this.state.expiry,this.state.cvc,this.state.focus,
      this.state.fullname,this.state.email,this.state.address,this.state.zipcode
      )
  }
  render() {
    return (
      <div>
        <Link to="/">Go Back </Link>
        <h1>enter debit card details</h1>
        <Cards
          cvc ={this.state.cvc}
          expiry ={this.state.expiry}
          focused ={this.state.focus}
          name ={this.state.name}
          number ={this.state.number}
        />
        <form onSubmit = {this.handleSubmit}>
          <div className="col-50">
            <h3>Payment</h3>
            <label>Card Number</label>
            <input
              type = "tel"
              name = "number"
              placeholder = "Card Number"
              value = {this.state.number}
              onChange = {this.handleNumberChange}
              onFocus = {this.handleNumberFocus}
            />
          </div>
          <div>
            <label>Card Holder name</label>
            <input
              type = "text"
              name = "name"
              placeholder = "Card holder Name"
              value = {this.state.name}
              onChange = {this.handleNameChange}
              onFocus = {this.handleNameFocus}
            />
          </div>
          <div>
            <label>valid till(expiry)</label>
            <input
              type = "tel"
              name = "expiry"
              placeholder = "MM / YY"
              value= {this.state.expiry}
              onChange={this.handleExpiryChange}
              onFocus={this.handleExpiryFocus}
            />
          </div>
          <div>
            <label>CVC</label>
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              value= {this.state.cvc}
              onChange= {this.handleCvcChange}
              onFocus= {this.handleCvcFocus}
            />
          </div>
          <div className="row">
            <h3>Billing Address</h3>
            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="name" 
              value= {this.state.fullname}
              onChange={this.handleFullnameChange}
              required
            />
            <label type="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="email" id="email" name="email" placeholder="name@example.com"
              value = { this.state.email }
              onChange = { this.handleEmailChange}
              validate={this.handleEmailValidate}
            />
            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"
              value= {this.state.address}
              onChange={this.handleAddressChange}
              required
            /><br/>

            <div className="row">
              <div className="col-50">
                <label htmlFor ="zip">Zip code</label>
                <input type="text" id="zip" name="zip" placeholder="10001"
                  value= {this.state.zipcode}
                  onChange={this.handleZipcodeChange}
                  required
                />
              </div>
            </div>
            <div>
            <h3> order details </h3>
            <div className="col-50">
              <label> order number : </label><span>6754245667</span><br/>
              <label> Product 1 : </label><span>Philips Straightner</span><br/>
              <label> Total ammount :  </label><span>Rs.999</span>
              </div>
            </div>
            <Link to={`/debitcardorderconfirmed`}>
              <button type="submit" value="Continue to checkout" className="btn">pay</button>
            </Link>
          </div>
          {/* <button type ='submit'>pay</button> */}
        </form> 
      </div>
    )
  }
}

export default connect(null, { debitCard })(DebitCard)
