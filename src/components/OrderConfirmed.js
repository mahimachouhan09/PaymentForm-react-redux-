import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class OrderConfirmed extends Component {
  render() {
    return (
      <div>
         <Link to="/">Go Back </Link>
        <h2>order confirmed</h2>
        <ul>
          <li>Order Number    : 6754245667</li>
          <li>Order By        : Mr. ABC </li>
          <li>Product Name    : Philips Straighter</li>
          <li>Ammount(in Rs.) : Rs.999</li>
        </ul>
        <p>Product maybe deliverd within 4 to 5 days.</p>
      </div>
    )
  }
}

export default OrderConfirmed
