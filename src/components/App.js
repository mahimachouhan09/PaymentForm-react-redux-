import React, { Component } from 'react'
import PaymentOptionForm from './PaymentOptionForm';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreditCard from './CreditCard'
import DebitCard from './DebitCard'
import NetBanking from './NetBanking'
import OrderConfirmed from './OrderConfirmed';
import NetBankingContainer from '../containers/NetBankingContainer';
import CreditCardContainer from '../containers/CreditCardContainer';
import DebitCardContainer from '../containers/DebitCardContainer';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className ='App-div'>
          <nav>
            <ul className = 'App-nav-ul'>
              <header className ='App-header'>Payment Form</header>
              <li>
                <Link className = 'nav-ul-links' to="/">Home page</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path ="/" ><PaymentOptionForm /></Route>
            <Route exact path="/creditcard" component = {CreditCard} />
            <Route exact path="/debitcard" component = {DebitCard} />
            <Route exact path="/netbanking" component = {NetBanking} />
            <Route exact path="/cashondelivery" component = {OrderConfirmed} />
            <Route exact path="/netbankingorderconfirmed">
              <NetBankingContainer/>
            </Route>
            <Route exact path="/creditcardorderconfirmed">
              <CreditCardContainer />
            </Route>
            <Route exact path="/debitcardorderconfirmed">
              <DebitCardContainer />
            </Route>
          </Switch>
        </div>
      </Router>    
    )
  }
}

export default App

