import React, { Component } from 'react'

export class CreditCardOrderConfirmed extends Component {
  render() {
    return (
      <div>
        <h2>Order Confirmed via credit Card</h2>
        <ul>
          <li>Order Number : 6754245667</li>
          <li>Product Name :Philips Straighter</li>
          <li>Ammount(in Rs.) : Rs.999</li>
        </ul>
        <p>product maybe deliverd within 4 to 5 days.</p>
      </div>
    )
  }
}

export default CreditCardOrderConfirmed
