import React, { Component } from 'react'

export default class Address extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
  render() {

    const {address, city, state, postalCode } = this.props.addr
    // const { cardExpire, cardNumber, cardType, currency, iban } = this.props.bank


      return (
        <div className='lead'>
            <p><b>Address :</b>{address}</p>
            <p><b>City :</b>{city}</p>
            <p><b>State :</b>{state}</p>
            <p><b>ZipCode :</b>{postalCode}</p>
        </div>
        
      )
  }
}
